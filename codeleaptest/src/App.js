import React from 'react'

import { Provider } from 'react-redux'
import store from './store';
import Idlist from './components/Idlist';

function App() {
  return (
    <Provider store={store}>
      <Idlist/>
    </Provider>
  );
}

export default App;
