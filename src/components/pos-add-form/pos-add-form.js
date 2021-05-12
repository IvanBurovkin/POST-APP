import React, {Component} from 'react';

import { Button, Input } from 'reactstrap';
import styled from 'styled-components';

const PostForm = styled.form`
  display: flex;
  margin-top: 20px;
  Input {
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
  }
`;

export default class PostAddForm extends Component {
  state = {
    text: ''
  }
  
  onValueChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <PostForm onSubmit={this.onSubmit}>
        <Input
          type="text"
          placeholder="О чём вы думаете сейчас?"
          onChange={this.onValueChange}
          value={this.state.text}
        />
        <Button
          type="submit"
          outline color='secondary'>
          Добавить
        </Button>
      </PostForm>
    )
  }
}

