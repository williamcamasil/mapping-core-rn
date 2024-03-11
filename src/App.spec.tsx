import React from 'react';
import { View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { render } from '@testing-library/react-native';
import { createNavigationMock } from 'mapping-context-rn';

import AppWithTheme from './App';

const MainApp = () => <View testID="main-app" />;
const LegacyApp = () => <View testID="legacy-app" />;

const MockStack = createStackNavigator();

jest.mock('./navigation', () => {
  const NavigationMock = () => (
    <MockStack.Navigator>
      <MockStack.Screen name="MAIN_APP" component={MainApp} />
      <MockStack.Screen name="LEGACY_APP" component={LegacyApp} />
    </MockStack.Navigator>
  );

  return NavigationMock;
});

let log: jest.SpyInstance;

afterEach(() => {
  log.mockRestore();
});

beforeEach(() => {
  jest.clearAllMocks();
  log = jest.spyOn(console, 'log').mockImplementation(() => {});
});

describe('App', () => {
  it('Should render the main app', async () => {
    const screen = render(<AppWithTheme />);

    await screen.findByTestId('main-app');
  });

  it('Should not reset navigation to LOGIN on logout when origin is loan', async () => {
    const navigation = createNavigationMock();
    const screen = render(<AppWithTheme />);

    expect(navigation.reset).not.toHaveBeenCalled();

    screen.unmount();
  });
});
