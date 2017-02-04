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
import { detailSelector, loadingSelector, filteredClientsSelector } from './selectors';
import { getClients, setClientDetail, setClientSearch } from './constants';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getClients();
  }

  render() {
    const {
      filteredClients,
      detail,
      setClientDetail,
      setClientSearch,
    } = this.props;

    return (
      <main>
        {detail && <ClientsList
          clients={filteredClients}
          activeId={detail.getIn(['contact', 'email'])}
          setClientDetail={setClientDetail}
          setClientSearch={setClientSearch}
        />}
        {detail && <ClientsDetail
          client={detail}
        />}
      </main>
    );
  }
}

HomePage.propTypes = {
  getClients: React.PropTypes.func,
  setClientDetail: React.PropTypes.func,
  setClientSearch: React.PropTypes.func,
  detail: React.PropTypes.object,
  isLoading: React.PropTypes.bool,
  filteredClients: React.PropTypes.object,
};

export default connect((state) => ({
  detail: detailSelector(state),
  filteredClients: filteredClientsSelector(state),
  isLoading: loadingSelector(state),
}), {
  getClients,
  setClientDetail,
  setClientSearch,
})(HomePage);
