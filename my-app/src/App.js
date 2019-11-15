import React from 'react';
import Header from './components/header.js';
import Container from './components/container.js';
import Footer from './components/footer.js';
import City from './city';
import SignUp from './SignUp';
import LogIn from './LogIn';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
    <div>
    <Header></Header>
    <Router>
      <Switch>
      <Route path="/City" component={City} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/LogIn" component={LogIn} />
      <Container></Container>
      <Footer></Footer>
      </Switch>
    </Router>
    </div>
    </Provider>
  );
}

export default App;