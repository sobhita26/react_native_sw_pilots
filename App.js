import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import configureStore from './store/configureStore';
import LoginScreen from './src/container/LoginScreen/LoginScreen';
import TabsNav from './src/container/TabsContainer';

const store = configureStore();
const Stack = createNativeStackNavigator();

const RNRedux = () => {
  const TabsNavWithParams = props => <TabsNav {...props} />;

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'TabsView'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen component={TabsNavWithParams} name="TabsView" />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default RNRedux;