import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
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
