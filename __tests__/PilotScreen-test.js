import 'react-native';
import React from 'react';
import PilotScreen from '../src/container/PilotScreen/PilotScreen';

import renderer from 'react-test-renderer';


it('renders correctly', () => {
  renderer.create(<PilotScreen />);
});