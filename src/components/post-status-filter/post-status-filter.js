import React from 'react';
import { Button } from 'reactstrap';

import styled from 'styled-components';

const PostStatusFilterBlock = styled.div`
  display: flex;
  margin-left: 3px;
`;

const PostStatusFilter = () => {
  return (
    <PostStatusFilterBlock>
      <Button color='info'>Все</Button>
      <Button outline color='secondary'>Понравилось</Button>
    </PostStatusFilterBlock>
  )
}
export default PostStatusFilter;