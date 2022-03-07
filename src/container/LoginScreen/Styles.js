import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  main: {
    // backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
  },
  mainContainer: {
    alignItems: 'flex-start',
    margin: 20,
  },
  emailAndPasswordView: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  textInputText: {
    marginTop: 10,
  },
  textInputStyles: {
    borderBottomWidth: 1,
    flex: 1,
    height: 30,
    marginLeft: 30,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center',
  },
});
