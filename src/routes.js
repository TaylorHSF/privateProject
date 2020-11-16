/** @format */

import Home from './pages/home';
import Ocr from './pages/ocr';
import IdScan from './pages/idScan';

const routes = [
  {
    path: '/',
    exact:true,
    component: Home,
  },
  {
    path: '/ocr',
    component: Ocr,
  },
  {
    path: '/idScan',
    component: IdScan,
  },
];

export default routes;
