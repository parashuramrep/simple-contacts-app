import React from 'react';
import List from './elements/List';
import ClientsListItem from './ClientsListItem';

export default function ClientsList(props) {
  const { clients } = props;

  return (
    <List>
      {clients && clients.map((item) => (
        <ClientsListItem key={item.getIn(['contact', 'email'])} item={item} />)
      )}
    </List>
  );
}

ClientsList.propTypes = {
  clients: React.PropTypes.object,
};
