 
/* eslint-disable react/prop-types */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import BrowserHistory from './browserHistory';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import App from './App';
import store from './store.js';



ReactDOM.render(
  <Provider store={store}>
    <Router history={BrowserHistory}>
       <App />
    </ Router>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
