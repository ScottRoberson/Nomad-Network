import {
  GET_POST,
  POST_LOADING,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  OPEN_EDIT_MODAL,
} from '../actions/types';

const initialState = {
  posts: [],
  loading: false,
  openEditForm: false,
  postToEdit: {},
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
    case DELETE_POST:
      return {
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id !== action.payload.id) {
            return post;
          } else {
            return {
              posts: [action.payload, ...state.posts],
            };
          }
        }),
      };
    case OPEN_EDIT_MODAL:
      return {
        ...state,
        openEditForm: true,
        postToEdit: action.payload,
      };

    default:
      return state;
  }
};

export default post;
