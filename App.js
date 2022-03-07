import React, {useState, useEffect} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import configureStore from './store/configureStore';
import LoginScreen from './src/container/LoginScreen/LoginScreen';
import TabsNav from './src/container/TabsContainer';

const store = configureStore();
const Stack = createNativeStackNavigator();

const RNRedux = () => {
  const TabsNavWithParams = props => <TabsNav {...props} />;

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

useEffect(() => {
  async function fetchUserLoginStatus() {
    const value = await AsyncStorage.getItem('loginStatus');
    if  (value) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }
  fetchUserLoginStatus();
}, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
             {!isUserLoggedIn ? (
                <Stack.Screen name="login" component={LoginScreen} />
                  ) : (
                <Stack.Screen name="TabsView" component={TabsNavWithParams} />
              )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default RNRedux;