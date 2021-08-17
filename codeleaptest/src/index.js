import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import store from './store';
import Idlist from './components/Idlist';

import 'bootstrap/dist/css/bootstrap.min.css';

import Signup from './Pages/Signup/Signup';
import MainScreen from './Pages/Home/MainScreen';


const routing = (
  <Provider store={store}>
    <Idlist />

    <Router>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/MainScreen" component={MainScreen} />
      </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

reportWebVitals();