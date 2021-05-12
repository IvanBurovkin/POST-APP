import React from 'react';

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

const PostAddForm = () => {
  return (
    <PostForm>
      <Input
        type="text"
        placeholder="О чём вы думаете сейчас?"
      />
      <Button
        type="submit"
        outline color='secondary'>
        Добавить
      </Button>
    </PostForm>
  )
}

export default PostAddForm;