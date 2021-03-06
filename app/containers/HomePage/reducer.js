import { Map, List } from 'immutable';
import * as actions from './constants';

const initialState = Map({
  activeDetail: null,
  data: List(),
  isLoading: false,
  searchQuery: '',
});

function clientsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_CLIENTS_START:
      return state.set('isLoading', true);

    case actions.GET_CLIENTS_FAIL:
      return state.set('isLoading', false);

    case actions.GET_CLIENTS_SUCCESS:
      return state.merge({
        data: action.result,
        isLoading: false,
        activeDetail: action.result[0].contact.email,
      });

    case actions.SET_CLIENT_DETAIL:
      return state.set('activeDetail', action.id);

    case actions.SET_CLIENT_SEARCH:
      return state.set('searchQuery', action.value);

    default:
      return state;
  }
}

export default clientsReducer;
