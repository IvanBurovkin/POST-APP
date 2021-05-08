import React from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../pos-add-form/pos-add-form";
import './app.css';

const App = () =>  {

  const data = [
    {label: 'I need coffee to teach React', important: true, id: 'asdf'},
    {label: 'Coffee helps you stay awake', important: false, id: 'qwer'},
    {label: 'I can teach React without a break', important: false, id:'zxcv'}
  ]

  return (
    <div className="app">
      <AppHeader/>
      <div className="search-panel d-flex">
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList posts={data} />
      <PostAddForm/>
    </div>
  )
}

export default App;
