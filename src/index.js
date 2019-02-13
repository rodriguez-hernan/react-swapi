import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { store } from './Store/index';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
  ), document.getElementById('root'));