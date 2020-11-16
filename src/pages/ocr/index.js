/** @format */
import React, { useEffect, useState } from 'react';
import './index.css';

const videoWidth = 400;
const videoHeight = 720;
const canvasWidth = 320;
const canvasHeight = 180;

const Ocr = () => {
  const [video, setVideo] = useState();
  const setupCamera = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error('Browser API navigator.mediaDevices.getUserMedia not available');
    }

    const videoObj = document.getElementById('video');
    setVideo(videoObj);
    videoObj.width = videoWidth;
    videoObj.height = videoHeight;

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: 'user',
        width: videoWidth,
        height: videoHeight,
      },
    });
    videoObj.srcObject = stream;
    return new Promise((resolve) => {
      videoObj.onloadedmetadata = () => {
        resolve(videoObj);
      };
    });
  };

  const loadVideo = async () => {
    const videoObj = await setupCamera();
    videoObj.play();
  };
  const getGestureRes = (video) => {
    const canvas = document.getElementById('video-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    const drawImgByFrame = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.save();
      ctx.drawImage(video, 0, 0, canvasWidth, canvasHeight);
      ctx.restore();
      requestAnimationFrame(drawImgByFrame);
    };
    drawImgByFrame();
  };

  useEffect(() => {
    loadVideo();
    return () => {
      // const videoObj = document.getElementById('video');
      if (video) {
        console.log(video, 'hsf leave');
        video.pause();
      }
    };
  }, [video]);
  return (
    <div className="ocr">
      <header className="App-header">
        start ai h5 coding
        <video id="video">
          <track />
        </video>
        {/* <canvas id="video-canvas" /> */}
      </header>
    </div>
  );
};

export default Ocr;
