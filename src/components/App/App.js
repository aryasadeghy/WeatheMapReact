import React from 'react';
import './App.css';
import Navigation from './../Nav/index'

const App = (props) => {
  
    return (
    <div  className='About'>
      <Navigation />
      {props.children}
     </div>
    );
  
}

export default App;
