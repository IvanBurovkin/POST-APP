import React, { Component } from 'react';
import nextId from "react-id-generator";

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

export default class App extends Component {
  state = {
    data : [
      {label: 'I need coffee to teach React', important: true, like:false, id: nextId()},
      {label: 'Coffee helps you stay awake', important: false, like:false, id: nextId()},
      {label: 'I can teach React without a break', important: false, like:false, id: nextId()}
    ],
    term: '',
    filter: 'all'
  }

  deleteItem = id => this.setState(state => ({data: state.data.filter(item => item.id !== id)}));

  addItem = value => {
    this.setState(state => ({
      data: [
        ...state.data,
        {
          label: value,
          important: false,
          id: nextId()
        }
      ]
    }))
  }

  commonToggle = ({id, isImportant = false, isLike = false}) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);

      const old = data[index];
      const newItem = {...old};

      if (isImportant) {
        newItem.important = !old.important;
      }
      if (isLike) {
        newItem.like = !old.like;
      }

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      
      return {
        data: newArr
      }
    });
  }

  onToggleImportant = id => {
  this.commonToggle({id: id, isImportant: true});
  }

  onToggleLiked = id => {
  this.commonToggle({id: id, isLike: true})
  }

  searchPost = (items, term) => {
    if (term.length === 0) {
      return items
    }

    return items.filter((item) => {
      return item.label.indexOf(term) > -1
    })
  }

  filterPost = (items, filter) => {
    if (filter === 'like') {
      return items.filter(item => item.like)
    } else {
      return items
    }
  }

  onUpdateSearch = (term) => {
    this.setState({term})
  }

  onFilterSelect = (filter) => {
    this.setState({filter})
  }
  
  render() {
    const {data, term, filter} = this.state;

    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

    return (
      <AppBlock>
        <AppHeader
          liked={liked}
          allPosts={allPosts} />
        <SearchStatusBlock>
          <SearchPanel 
            onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect} />
        </SearchStatusBlock>
        <PostList 
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked} />
        <PostAddForm 
          onAdd={this.addItem} />
      </AppBlock>
    )
  }
}
