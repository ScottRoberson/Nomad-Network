import { combineReducers } from 'redux';
import post from '../reducers/postReducers';

export default combineReducers({
  post: post,
});
