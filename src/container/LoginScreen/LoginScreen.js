import React from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import styles from './Styles';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onLoginPress = async () => {
    try {
      await AsyncStorage.setItem('loginStatus', 'true');
      navigation.navigate('TabsView');
      dispatch({ type: 'SET_USER_DETAILS', user: 'true' });
    } catch (e) {
      console.log('Error in saving to storage', e);
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.mainContainer}>
        <View style={styles.emailAndPasswordView}>
          <TextInput
            editable
            autoComplete="email"
            placeholder="Email"
            style={styles.textInputStyles}
          />
        </View>
        <View style={styles.emailAndPasswordView}>
          <TextInput
            editable
            placeholder="Password"
            secureTextEntry={true}
            style={styles.textInputStyles}
          />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={onLoginPress}
            style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
