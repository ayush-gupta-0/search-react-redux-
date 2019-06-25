import { combineReducers } from 'redux'; 
import cityReducer from './cityReducer';
import dataReducer from './dataReducer';
import pageReducer from './pageReducer';

export default combineReducers({
  cities: cityReducer,
  data: dataReducer,
  size: pageReducer
});