import React from 'react';
import { render } from 'react-dom'
import './index.css';

import { Provider } from 'react-redux';
//import { store } from './Store/index';
import configureStore from './Store/configureStore';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const store = configureStore()

/* ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
  ), document.getElementById('root')); */

  const renderApp = () =>
     render(
        <Provider store={store}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./routes', renderApp)
}

renderApp()