import React, { Component } from 'react';

import { Input } from 'reactstrap';

export default class SearchPanel extends Component {
  state = {
    term: ''
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onUpdateSearch(term);
  }
  
  render() {
    return (
      <Input
        type="text"
        placeholder="Поиск по записям"
        onChange={this.onUpdateSearch}
      />
    )
  }
}
