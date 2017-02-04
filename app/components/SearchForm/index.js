import React from 'react';
import SearchInput from './elements/SearchInput';

export default class SearchForm extends React.PureComponent {
  handleChange = (e) => {
    this.props.setClientSearch(e.target.value);
  };

  render() {
    return (
      <form>
        <SearchInput type="search" onChange={this.handleChange} placeholder="Search Clients..." />
      </form>
    );
  }
}

SearchForm.propTypes = {
  setClientSearch: React.PropTypes.func,
};
