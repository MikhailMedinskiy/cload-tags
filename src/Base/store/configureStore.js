import {
    createStore, combineReducers, applyMiddleware, compose,
  } from 'redux';
  import thunk from 'redux-thunk';
  import allTagsReducers from '../../reduces/tagsReducer'

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */
  export default () => {
    const store = createStore(
      combineReducers({
       tagsInfo: allTagsReducers
      }),
      composeEnhancers(applyMiddleware(thunk)),
    );
  
    return store;
  };
  