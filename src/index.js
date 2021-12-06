import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
//this createStore is a function imported from redux which allows us to create that global store
import reducer from './reducer/Reducer';
import { Provider } from 'react-redux';
//this provider is gives access to the redux store

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

