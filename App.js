import React from 'react';
import LoginScreen from './src/container/LoginScreen';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';

const store = configureStore();


const RNRedux = () => {

  return (
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
};

export default RNRedux;