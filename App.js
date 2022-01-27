import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
	<NavigationContainer>
		<DrawerNavigator />
	</NavigationContainer>
);}
