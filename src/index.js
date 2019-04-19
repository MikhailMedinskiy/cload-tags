import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './Base/store/configureStore';
import { Provider } from 'react-redux';
import AppRouter from './Base/routers/AppRouters';
import { startSetTags } from './action';
import LoadingPage from './pages/LoadingPage';
import './Base/styles/main.scss';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

(async () => {
  await store.dispatch(startSetTags());
  renderApp()
})();
