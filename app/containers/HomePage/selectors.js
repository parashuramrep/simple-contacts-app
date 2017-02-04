import { createSelector } from 'reselect';

export const clientsSelector = (state) => state.getIn(['clients', 'data']);

export const loadingSelector = (state) => state.getIn(['clients', 'isLoading']);

export const detailSelector = createSelector(
  (state) => state.get('clients'),
  (clients) => clients.get('data').find((item) => {
    return item.getIn(['contact', 'email']) === clients.get('activeDetail');
  }),
);
