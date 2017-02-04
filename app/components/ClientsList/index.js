import React from 'react';
import List from './elements/List';
import ClientsListItem from './ClientsListItem';

export default class ClientsList extends React.PureComponent {
  render() {
    const { activeId, clients } = this.props;

    return (
      <List>
        {clients && clients.map((item) => {
          const email = item.getIn(['contact', 'email']);

          return (
            <ClientsListItem
              key={email}
              active={email === activeId}
              onClick={() => this.props.setClientDetail(email)}
              item={item}
            />
          );
        })}
      </List>
    );
  }
}

ClientsList.propTypes = {
  clients: React.PropTypes.object,
  setClientDetail: React.PropTypes.func,
  activeId: React.PropTypes.string,
};
