/** @format */
import React, { useEffect } from 'react';
import './index.css';

const videoWidth = 400;
const videoHeight = 720;
const canvasWidth = 320;
const canvasHeight = 180;

const IdScan = () => {
  const setupCamera = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error('Browser API navigator.mediaDevices.getUserMedia not available');
    }

    const video = document.getElementById('video');
    video.width = videoWidth;
    video.height = videoHeight;

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: 'user',
        width: videoWidth,
        height: videoHeight,
      },
    });
    video.srcObject = stream;

    return new Promise((resolve) => {
      video.onloadedmetadata = () => {
        resolve(video);
      };
    });
  };

  const loadVideo = async () => {
    const video = await setupCamera();
    video.play();
    return video;
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
  }, []);
  return (
    <div className="idScan">
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

export default IdScan;
