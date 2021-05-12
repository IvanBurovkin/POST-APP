import React from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../pos-add-form/pos-add-form";
import styled from 'styled-components';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const SearchStatusBlock = styled.div`
  display: flex;
  margin: 1rem 0;
`;

const App = () =>  {

  const data = [
    {label: 'I need coffee to teach React', important: true, id: 'asdf'},
    {label: 'Coffee helps you stay awake', important: false, id: 'qwer'},
    {label: 'I can teach React without a break', important: false, id:'zxcv'}
  ]

  return (
    <AppBlock>
      <AppHeader/>
      <SearchStatusBlock>
        <SearchPanel/>
        <PostStatusFilter/>
      </SearchStatusBlock>
      <PostList posts={data} />
      <PostAddForm/>
    </AppBlock>
  )
}

export default App;
