import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import configureStore from './store/configureStore';
import LoginScreen from './src/container/LoginScreen';


const store = configureStore();

const RNRedux = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default RNRedux;