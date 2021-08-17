import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import Signup from './Pages/Signup/Signup';
import MainScreen from './Pages/Home/MainScreen';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route path="/MainScreen" component={MainScreen} />
    </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

reportWebVitals();