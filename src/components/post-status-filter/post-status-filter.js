import React, {Component} from 'react';
import { Button } from 'reactstrap';

import styled from 'styled-components';

const PostStatusFilterBlock = styled.div`
  display: flex;
  margin-left: 3px;
`;

export default class PostStatusFilter extends Component {
  state = {
    buttons: [
      {name: 'all', label: 'Все'},
      {name: 'like', label: 'Понравилось'}
    ]
  }
  
  render() {
    const buttons = this.state.buttons.map(({name, label}) => {
      const {filter, onFilterSelect} = this.props;
      const active = filter === name;
      const clazz = active ? 'info' : 'outline-secondary';
      return (
        <Button 
          key={name} 
          color={clazz}
          onClick={() => onFilterSelect(name)} >
          {label}
        </Button>
      )
    });

    return (
      <PostStatusFilterBlock>
        {buttons}
      </PostStatusFilterBlock>
    )
  }
}
