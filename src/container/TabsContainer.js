import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import PilotScreen from '../container/PilotScreen/PilotScreen';
import Favorite from '../container/Favourites/Favourites';
import LogoutScreen from '../container/Logout/LogoutScreen';
import AddNewFavourite from '../container/AddNewFavourite/AddNewFavourite';

const Tabs = createBottomTabNavigator();

const TabsNav = props => {
  const {navigation} = props;

  const HomeWithParams = () => <PilotScreen navigation={navigation} />;

  const FavouritesScreen = () => <Favorite />;

  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeWithParams} />
      <Tabs.Screen name="Favorite" component={FavouritesScreen} />
      <Tabs.Screen name="New" component={AddNewFavourite} />
      <Tabs.Screen name="Logout" component={LogoutScreen} />
    </Tabs.Navigator>
  );
};

export default TabsNav;
