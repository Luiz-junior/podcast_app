import React from 'react';
import { Provider } from 'react-redux';
import './src/config/StatusBarConfig';

import store from './src/store';
import Routes from './src/routes';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
