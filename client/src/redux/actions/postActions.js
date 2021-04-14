import {
  GET_POST,
  POST_LOADING,
  ADD_POST,
  DELETE_POST,
  OPEN_EDIT_MODAL,
  UPDATE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
} from './types';

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

export const addComment = (postId, comment) => (dispatch) => {
  fetch(`api/posts/comment/${postId}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ text: comment }),
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: ADD_COMMENT,
        payload: data,
      })
    );
};

export const deleteComment = (id) => (dispatch) => {
  fetch(`api/posts/comment/${id}`, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then((id) =>
      dispatch({
        type: DELETE_COMMENT,
        payload: id,
      })
    );
};

export const deletePost = (id) => (dispatch) => {
  fetch(`api/posts/${id}`, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then((id) =>
      dispatch({
        type: DELETE_POST,
        payload: id,
      })
    );
};

export const updatePost = (id, updatedPost) => (dispatch) => {
  fetch(`api/posts/${id}`, {
    method: 'PATCH',
    body: updatedPost,
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: UPDATE_POST,
        payload: data,
      })
    );
};

export const openEditModal = (post) => {
  return {
    type: OPEN_EDIT_MODAL,
    payload: post,
  };
};
