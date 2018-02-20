import { combineReducers } from 'redux';
import ClanReducer from './reducer_clan';
import MemberReducer from './reducer_member';

const rootReducer = combineReducers({
  clan: ClanReducer,
  member: MemberReducer,
});

export default rootReducer;
