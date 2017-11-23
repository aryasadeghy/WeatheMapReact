import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
    <Routes/>
  , document.getElementById('root'));
registerServiceWorker();
