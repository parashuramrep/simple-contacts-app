export const GET_CLIENTS_START = 'GET_CLIENTS_START';
export const GET_CLIENTS_FAIL = 'GET_CLIENTS_FAIL';
export const GET_CLIENTS_SUCCESS = 'GET_CLIENTS_SUCCESS';

export const SET_CLIENT_DETAIL = 'SET_CLIENT_DETAIL';

export const SET_CLIENT_SEARCH = 'SET_CLIENT_SEARCH';

export const getClients = () => ({
  type: GET_CLIENTS_START,
});

export const receiveClients = (result) => ({
  type: GET_CLIENTS_SUCCESS,
  result,
});

export const getClientsFail = () => ({
  type: GET_CLIENTS_FAIL,
});

export const setClientDetail = (id) => ({
  type: SET_CLIENT_DETAIL,
  id,
});

export const setClientSearch = (value) => ({
  type: SET_CLIENT_SEARCH,
  value,
});
