import {
  GET_POST,
  POST_LOADING,
  ADD_POST,
  DELETE_POST,
  OPEN_EDIT_MODAL,
} from './types';
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

export const deletePost = (id) => (dispatch) => {
  axios.delete(`api/posts/${id}`).then((res) =>
    dispatch({
      type: DELETE_POST,
      payload: id,
    })
  );
};

export const openEditModal = (post) => {
  return {
    type: OPEN_EDIT_MODAL,
    payload: post,
  };
};
