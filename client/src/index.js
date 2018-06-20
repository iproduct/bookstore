import 'bootstrap/dist/css/bootstrap.css';
// TODO: find a way to not use cdn and load icons locally
// import 'font-awesome/css/font-awesome.css';

import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// set default url
// TODO: use env variables (for now this)
axios.defaults.baseUrl = 'http://localhost:4000/';
axios.interceptors.response.use(res => res.data, err => Promise.reject(err));


ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
