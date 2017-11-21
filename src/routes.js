// src/routes.js
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
// components
import App from './components/App/App';
import About from './components/About';
import NotFound from './components/NotFound';
import Weather from './components/Weather/index';


const Routes = (props) => (
<Router>
  <div>
    <App/>
    <Route exact path="/" component={Weather}/> 
    <Route path="/about" component={About}/>
    <Route path="/notfound" component={NotFound}/>
  </div>
</Router>
);

export default Routes;