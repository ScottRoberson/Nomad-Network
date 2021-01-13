import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';

export default function configureStore(preloadedState) {
  const middlewares = [thunk];
  const middlewareEnhancers = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancers];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
