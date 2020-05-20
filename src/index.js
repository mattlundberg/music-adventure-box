import React from 'react';
import ReactDOM, { Router, Route, Switch } from 'react-dom';
//import { createBrowserHistory } from 'history';
import './index.css';

//Pages
import HomePage from './views/Home/Home.jsx';
import ContactPage from './views/Contact/Contact.jsx';
import AboutPage from './views/About/About.jsx';

//var hist = createBrowserHistory();

ReactDOM.render(
  <Router history="">
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  </Router>, 
  document.getElementById("root")
);