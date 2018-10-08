export const ajaxCreateUser = user => (
  $.ajax({ method: 'POST', url: '/api/users', data: { user } })
);

export const ajaxLogIn = user => (
  $.ajax({ method: 'POST', url: '/api/session', data: { user } })
);

export const ajaxLogOut = user => (
  $.ajax({ method: 'DELETE', url: '/api/session' })
);
