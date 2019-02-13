import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../Reducers/reducers';


/* export const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); */


// Note: this API requires redux@>=3.1.0
export const store = createStore(
  reducers,
  applyMiddleware(thunk)
);
