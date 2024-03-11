import React from 'react';

import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import InitialScreen from '../screens/InitialScreen';

const Stack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

const Navigation = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name="InitialScreen" component={InitialScreen} />
  </Stack.Navigator>
);

export default Navigation;
