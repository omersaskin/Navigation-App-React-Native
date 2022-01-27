import * as React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Notifications from './Notifications';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
	  <Drawer.Navigator initialRouteName="Home">
	      <Drawer.Screen name="Home" component={StackNavigator} options={{drawerLabel: 'Home'}} />
	      <Drawer.Screen name="Notifications" component={Notifications} options={{drawerLabel: 'Notifications'}} />
	  </Drawer.Navigator>
  );
}