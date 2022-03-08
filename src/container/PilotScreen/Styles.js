import {StyleSheet, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  },
  nameView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemView: {
    borderWidth: 1,
    width: width - 30,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  appButtonContainer: {
    backgroundColor: 'green',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  appButtonText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'center',
  },
  genderView: {
    paddingVertical: 5,
  }
});
