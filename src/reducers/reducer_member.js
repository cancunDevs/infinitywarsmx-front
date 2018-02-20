import { FETCH_MEMBER } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_MEMBER:
      return {
        member: action.payload.data,
      };
    default:
      return state;
  }
}
