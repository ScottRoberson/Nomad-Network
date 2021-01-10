import React, { useState, useEffect, Component } from 'react';
import { connect } from 'react-redux';
import './Mainfeed.css';
import { getPosts } from '../redux/actions/postActions';
import Post from './Post';
class MainFeed extends Component {
  componentDidMount() {
    this.props.getPostItems();
  }
  render() {
    return <Post posts={this.props.post} />;
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.post.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPostItems: () => dispatch(getPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainFeed);
