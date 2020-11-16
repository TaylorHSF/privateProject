/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { renderRoutes } from 'react-router-config';
import { HashRouter as Router } from 'react-router-dom';
import routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Router>{renderRoutes(routes)}</Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
