import { GET_POST, POST_LOADING, ADD_POST } from './types';
import axios from 'axios';

export const getPosts = () => (dispatch) => {
  dispatch(setPostLoading());

  fetch('/api/posts')
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: GET_POST,
        payload: data,
      })
    );
};

export const setPostLoading = () => {
  return {
    type: POST_LOADING,
  };
};

export const addPost = (post) => (dispatch) => {
  fetch('/api/posts', {
    method: 'POST',
    body: post,
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: ADD_POST,
        payload: data,
      })
    );
};
