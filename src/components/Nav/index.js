
import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom'

const Nav = (props) => (

<nav className="navbar navbar-dark bg-primary navbar-expand-md py-md-2">
    <a className="navbar-brand" href="#">Bootstrap 4</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item py-md-2">
            <Link to="/">Home</Link>
            </li>
            <li className="nav-item py-md-2">
            <Link to="/about">About</Link>
                        </li>
            
            <li className="nav-item py-md-2">
            <Link to="/notfound">NotFound</Link>
                        </li>
            
        </ul>
    </div>
</nav>
    );


export default Nav;
