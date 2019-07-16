import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/appContainer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import campaignReducer from './reducers/campaignReducer';
import messageReducer from './reducers/messageReducer';

const initialState = {
  campaigns: {
    campaignList: [],
    error: false,
    loading: false
  },
  message: ''
};

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
};

const middlewares = [thunk, logger];

const store = createStore(
  combineReducers({
    campaigns: campaignReducer,
    message: messageReducer
  }),
  initialState,
  applyMiddleware(...middlewares)
);

const Index = ({ store }) => (
  <Provider store={store}>
      <App />
  </Provider>
);

ReactDOM.render(<Index store={store} />, document.getElementById('root'));