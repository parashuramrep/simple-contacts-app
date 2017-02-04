import { createSelector } from 'reselect';

export const loadingSelector = (state) => state.getIn(['clients', 'isLoading']);

export const detailSelector = createSelector(
  (state) => state.get('clients'),
  (clients) => clients.get('data').find((item) =>
    item.getIn(['contact', 'email']) === clients.get('activeDetail')
  ),
);

export const filteredClientsSelector = createSelector(
  (state) => state.get('clients'),
  (state) => {
    const clients = state.get('data');

    if (clients) {
      const search = state.get('searchQuery').toLowerCase();
      // Loop through array and the 1st level of objects - like general, job etc.
      return clients.filter((item) => item.keySeq().some((subItem) =>
        // Loop through subObjects like obj["general"] and then through obj["general"]["phone"] and
        // return true if there's a match with the search query
        item.get(subItem).keySeq().some((value) => item.getIn([subItem, value]).toLowerCase().includes(search))
      ));
    }


    // Return default empty Map
    return clients;
  },
);
