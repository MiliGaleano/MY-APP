import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import City from './city'
import SignUp from './SignUp'
import LogIn from './LogIn'
import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
      <div>
      <ul>
        <li>
          <Link to="/">App</Link>
        </li>
        <li>
          <Link to="/city">City</Link>
        </li>
        <li>
          <Link to="/SignUp">Sign up</Link>
        </li>
        <li>
          <Link to="/LogIn">Log in</Link>
        </li>
      </ul>
        <Route exact path="/" component={App} />
        <Route path="/City" component={City} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/LogIn" component={LogIn} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
