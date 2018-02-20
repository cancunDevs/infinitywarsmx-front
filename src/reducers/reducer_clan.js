// import clanInformation from '../data/clanInformation';
import { FETCH_CLAN } from '../actions/types';

export default function (state = { clan: {} }, action) {
  switch (action.type) {
    case FETCH_CLAN:
      return {
        clan: action.payload.data,
      };
    default:
      return state;
  }
}
