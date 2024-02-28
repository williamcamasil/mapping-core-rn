import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack';
import { render, waitFor } from '@testing-library/react-native';
import { createNavigationMock } from 'mapping-context-rn';

import SplashScreen from '.';

const Stack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

const renderScreen = () => render(
  <NavigationContainer>
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
  </NavigationContainer>,
);

describe('SplashScreen', () => {
  it('Should show Splash Screen and navigate to InitialScreen', async () => {
    const navigation = createNavigationMock();
    const screen = renderScreen();

    await screen.findByText('Splash');

    await waitFor(() => {
      expect(navigation.reset).toBeCalledWith({
        index: 0,
        routes: [{ name: 'MAIN_APP', params: { screen: 'InitialScreen' } }],
      });
    });
  });
});
