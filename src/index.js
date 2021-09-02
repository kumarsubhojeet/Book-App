import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './Css/Home.css'
import './bootstrap.min.css'
import 'antd/dist/antd.css';

import './Css/NewBooks.css'
import './Css/Search.css'
import './Css/BookById.css'

import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


