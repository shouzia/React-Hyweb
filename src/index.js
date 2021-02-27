import React from 'react';
import ReactDOM from 'react-dom';

// 组件
import Header from './pages/nav/nav'
import Donwload from './pages/main/Donwload/index'
import Features from './pages/main/Features/index'
import Docs from './pages/main/Docs/index'
import Technical from './pages/main/Technical/index'
import Footer from './pages/footer/index'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// css

import './index.css'

ReactDOM.render(
  <div>
    <Header />
    <Donwload />
    <Features />
    <Docs />
    <Technical />
    <Footer />
  </div>,
  document.getElementById('root')
);
