import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';


import styles from './Styles';

const LogoutScreen = () => {
  const navigation = useNavigation();

  const onLogoutPress = async () => {
    try {
      await AsyncStorage.removeItem('loginStatus');
      navigation.navigate('login');
    } catch (e) {
      // saving error
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={onLogoutPress}
          style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LogoutScreen;
