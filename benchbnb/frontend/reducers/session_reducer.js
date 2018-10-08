import {RECEIVE_CURRENT_USER, LOGOUT} from '../actions/session_actions.js';

const _nullSession = {id: null};

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        id: action.user.id
      };
    case LOGOUT:
      return _nullSession;
    default:
      return state;
  }
};

export default sessionReducer;
