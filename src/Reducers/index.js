import { combineReducers } from 'redux';

import spaceship from './spaceship';
import films from './films';
import character from './characters';

const rootReducer = combineReducers({
    spaceship,
    films,
    character
  });
  
  export default rootReducer;