import React from 'react';
import circled from './img/circled-right-2.png';
import './style.css'
import { Link } from 'react-router-dom';

function Container() {
    return (
        <div className="App-container">
        <div className="Start">
            <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
            <h1>Start browsing</h1>
            <Link to="/City" className="link">
              <img     
                    className="circled-right"
                    src={circled}
                    alt={''} />
            </Link>
        </div>
          <div className="Registro">
            <p>Want to build your own MYtinerary?</p>
            <div className="Links">
                <div className="Log-in">
                <Link to="/LogIn" className="link">Log in
                </Link>
                </div>
                <div className="Create">
                <Link to="/SignUp" className="link">Create Account
                </Link>
                </div>
            </div>
          </div>
        </div>
    );
  }

  export default Container;