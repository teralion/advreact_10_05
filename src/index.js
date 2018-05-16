import './config';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {ConnectedRouter} from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import history from './history';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
    <Provider store = {store}>
        <ConnectedRouter history = {history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();