import { combineReducers } from 'redux';
import ClanReducer from './reducer_clan';

const rootReducer = combineReducers({
  clan: ClanReducer,
});

export default rootReducer;
