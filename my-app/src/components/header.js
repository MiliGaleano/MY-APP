import React from 'react';
import MYtineraryLogo from './img/MYtineraryLogo.png';
import './style.css'

function Header() {
    return (
        <header className="App-header">
            <img 
            className="app-Logo"
            src={MYtineraryLogo}
            alt={''}
        />
        </header>
    );
  }

  export default Header;