import { GET_POST, POST_LOADING } from './types';

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
