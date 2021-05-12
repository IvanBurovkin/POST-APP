import React from 'react';

import PostListItem from '../post-list-item/post-list-item';
import styled from 'styled-components';

const ListGroupBlock = styled.ul`
  margin-top: 50px;
  padding-inline-start: 0;
  .list-group-item {
    padding: 10px 35px 10px 35px;
    margin-top: 10px;
  }
`;

const PostList = ({posts}) => {

  const elements = posts.map((item) => {
    const {id, ...itemProps} = item;
    return(
      <li key={id} className='list-group-item'>
        <PostListItem {...itemProps} />
      </li>
    )
  })

  return (
    <ListGroupBlock>
      {elements}
    </ListGroupBlock>
  )
}

export default PostList;