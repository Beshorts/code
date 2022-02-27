// use inline file-loader instead of install html-webpack-plugin
require('file-loader?name=[name].[ext]!./index.html');

import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

// main scss style files
import './styles/_index.scss';


ReactDom.render(
  <App />, 
  document.getElementById('app')
)
