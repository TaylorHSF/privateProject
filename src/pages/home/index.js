/** @format */
import React, { useEffect } from 'react';
import './index.css';

const Home = ({ history }) => {
  const navs = [
    { name: '文字识别', icon: 'ocr-icon', route: '/ocr' },
    { name: '身份证扫码', icon: 'idScan-icon', route: '/idScan' },
  ];
  const handleNav = (route) => {
      history.push({
        pathname: route,
      });
  };
  return (
    <div className="Home">
      {navs.map((nav) => (
        <div
          key={nav.name}
          onClick={() => {
            handleNav(nav.route);
          }}
        >
          <div>{nav.name}</div>
          <img src={nav.icon}></img>
        </div>
      ))}
    </div>
  );
};

export default Home;
