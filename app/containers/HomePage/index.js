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
import { ClientsList, ClientsDetail } from '../../components';
import { clientsSelector, detailSelector, loadingSelector } from './selectors';
import { getClients, setClientDetail } from './constants';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getClients();
  }

  render() {
    const { clients, setClientDetail, detail } = this.props;

    return (
      <main>
        {detail && <ClientsList
          clients={clients}
          activeId={detail.getIn(['contact', 'email'])}
          setClientDetail={setClientDetail}
        />}
        {detail && <ClientsDetail
          client={detail}
        />}
      </main>
    );
  }
}

HomePage.propTypes = {
  clients: React.PropTypes.object,
  getClients: React.PropTypes.func,
  setClientDetail: React.PropTypes.func,
  detail: React.PropTypes.object,
  isLoading: React.PropTypes.bool,
};

export default connect((state) => ({
  clients: clientsSelector(state),
  detail: detailSelector(state),
  isLoading: loadingSelector(state),
}), {
  getClients,
  setClientDetail,
})(HomePage);
