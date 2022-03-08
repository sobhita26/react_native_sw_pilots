import 'react-native';
import React from 'react';
import LoginScreen from '../src/container/LoginScreen/LoginScreen';

import renderer from 'react-test-renderer';

export const mockNavigationLib = {
  setOptions: jest.fn(),
  dispatch: jest.fn(),
  navigate: jest.fn(),
  reset: jest.fn(),
  goBack: jest.fn(),
  isFocused: jest.fn(),
  dangerouslyGetParent: jest.fn(),
  dangerouslyGetState: jest.fn(),
  canGoBack: jest.fn(),
  setParams: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
  replace: jest.fn(),
  push: jest.fn(),
  pop: jest.fn(),
  popToTop: jest.fn(),
};


const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: jest.fn(),
}));


jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: () => Promise.resolve(),
  getItem: () => Promise.resolve(),
}));

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => mockNavigationLib,
  };
});

it('renders correctly', () => {
  renderer.create(<LoginScreen />);
});
