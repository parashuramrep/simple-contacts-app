/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { ClientsList } from '../../components';
import { getClients as getClientsSelector } from './selectors';
import { getClients } from './constants';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    console.log('Calling api');
    this.props.getClients();
  }

  render() {
    return (
      <h1>
        <ClientsList clients={['hello']} />
      </h1>
    );
  }
}

HomePage.propTypes = {
  getClients: React.PropTypes.func,
};

export default connect((state) => ({
  clients: getClientsSelector(state),
}), {
  getClients,
})(HomePage);
