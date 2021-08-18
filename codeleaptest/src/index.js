import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux'
import { store, persistor } from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

import Signup from './Pages/Signup/Signup';
import MainScreen from './Pages/Home/MainScreen';
import NewRedux from './Pages/Home/MainScreen';


const routing = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} NewRedux/>
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