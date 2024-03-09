import React from 'react';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import { createNavigationMock } from 'mapping-context-rn';

import InitialScreen from '.';
import { setInitialAccessWelcomeScreen } from '../../stores';
import { deleteInitialAccessWelcomeScreen } from '../../stores/initialAccess';

const Stack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

const renderScreen = () => render(
  <NavigationContainer>
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="InitialScreen" component={InitialScreen} />
    </Stack.Navigator>
  </NavigationContainer>,
);

describe('InitialScreen', () => {
  it('Should show initial screen and navigate to login', async () => {
    const navigationHolder = createNavigationMock();
    const screen = renderScreen();
    await screen.findByText('Bem vindo ao organo mapping');
    screen.getByText('O aplicativo que ajuda a entender a hierarquia do seu time e informações de seus colegas de trabalho');
    fireEvent.press(screen.getByText('Iniciar'));
    await waitFor(() => { expect(navigationHolder.dispatch).toBeCalledWith(StackActions.replace('LOGIN')); });
  });

  it('Should not show initial screen and navigate to login', async () => {
    await setInitialAccessWelcomeScreen({ hasSeenWelcomeScreen: true });
    const navigationHolder = createNavigationMock();
    const screen = renderScreen();
    screen.queryByTestId('Bem vindo ao organo mapping');
    await waitFor(() => { expect(navigationHolder.dispatch).toBeCalledWith(StackActions.replace('LOGIN')); });
    await deleteInitialAccessWelcomeScreen();
  });
});
