import React, {Component} from 'react';

import styled from 'styled-components';

const PostListItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  button {
    width: 35px;
    height: 35px;
    margin: 3px;
    font-size: 17px;
    border: none;
    cursor: pointer;
    :focus {
      box-shadow: none;
      outline: none;
    }
  }
  .btn-star {
    color: ${props => props.important ? '#aeaeae' : '#FFD700'} ;
  }
  .btn-trash {
    color: red;
  }
  .fa-heart {
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-size: 16px;
    color: red;
    transition: 0.3s all;
    transform: ${props => props.like ? 'translateX(0px)' : 'translateX(30px)'};
    opacity: ${props => props.like ? 1 : 0};
  }
`;

const PostListItemLabel = styled.span`
  display: block;
  line-height: 35px;
  cursor: pointer;
  user-select: none;
  transition: 0.5s all;
  color: ${props => props.important ? '#FFD700' : '#212529'};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class PostListItem extends Component {
  /* constructor(props) {
    super(props);
    this.state = {
      important: false,
      like: false
    };
    this.onImportant = this.onImportant.bind(this);
    this.onLike = this.onLike.bind(this);
  }

  onImportant() {
    this.setState(({important}) => ({
      important: !important
    }))
  }

  onLike() {
    this.setState(({like}) => ({
      like: !like
    }))
  } */

  //Class Field

  state = {
    important: false,
    like: false
  };

  onImportant = () => {
    this.setState(({important}) => ({
      important: !important
    }))
  }

  onLike = () => {
    this.setState(({like}) => ({
      like: !like
    }))
  }

  render() {
    const {label} = this.props;
    
    return (
      <PostListItemBlock 
      important={this.state.important}
      like={this.state.like}>
        <PostListItemLabel
        important={this.state.important} 
        onClick={this.onLike}>
          {label}
        </PostListItemLabel>
        <ButtonGroup>
          <button
          type="button"
          className="btn-star btn-sm"
          onClick={this.onImportant}>
            <i className="fa fa-star"></i>
          </button>
          <button
          type="button"
          className="btn-trash btn-sm">
            <i className="fa fa-trash"></i>
          </button>
          <i className="fa fa-heart"></i>
        </ButtonGroup>
      </PostListItemBlock>
    )
  }
}
