import { GET_POST, POST_LOADING, ADD_POST } from '../actions/types';

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
    case ADD_POST:
      return {
        posts: [action.payload, ...state.posts],
      };

    default:
      return state;
  }
};

export default post;
