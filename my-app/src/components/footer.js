import React from 'react';
import Home from './img/homeIcon.png';
import './style.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="App-footer">
        <Link to="/" className="link">
            <img
            className="app-Logo"
            src={Home}
            alt={''} />
        </Link>
        </footer>
    );
  }

  export default Footer;