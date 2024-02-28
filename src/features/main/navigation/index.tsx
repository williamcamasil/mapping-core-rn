import React from 'react';

import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import InitialScreen from '../screens/InitialScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

const Navigation = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
    <Stack.Screen name="InitialScreen" component={InitialScreen} />
  </Stack.Navigator>
);

export default Navigation;
