import { GET_POST, POST_LOADING } from '../actions/types';

const initialState = {
  posts: [],
  loading: false,
};

const post = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case POST_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default post;
