import React from 'react';
import circled from './img/circled-right-2.png';
import './style.css'

function Flecha() {
    return (
        <div className="App-container">
        <div className="Start">
            <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
            <h1>Start browsing</h1>
            <img     
                    className="circled-right"
                    src={circled}
                    alt={''} />
        </div>
        </div>
    );
  }

  export default Flecha;