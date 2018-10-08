import { ajaxCreateUser, ajaxLogIn, ajaxLogOut } from '../utils/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOG_OUT = 'LOG_OUT';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const actionLogOut = () => ({ type: LOG_OUT });

export const createUser = formUser => dispatch => (
  ajaxCreateUser(formUser).then(user => dispatch(receiveCurrentUser(user)))
);

export const logIn = formUser => dispatch => (
  ajaxLogIn(formUser).then(user => dispatch(receiveCurrentUser(user)))
);

export const logOut = () => dispatch => (
  ajaxLogOut().then(() => dispatch(actionLogOut()))
);
