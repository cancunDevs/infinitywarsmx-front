// import clanInformation from '../data/clanInformation';
import { FETCH_CLAN } from '../actions/index';

const INITIAL_STATE = {
  clan: {},
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CLAN:
      return {
        data: action.payload.data,
      };
    default:
      return state;
  }
}
