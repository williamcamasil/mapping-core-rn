import React from 'react';

import { render } from '@testing-library/react-native';

import InitialScreen from '.';

jest.mock('react-native-device-info', () => {
  const DeviceInfoActual = jest.requireActual('react-native-device-info/jest/react-native-device-info-mock');
  const MockedDeviceInfo = {
    ...DeviceInfoActual,
    getVersion: jest.fn().mockReturnValue('8.8'),
    getUniqueId: jest.fn().mockReturnValue('123'),
    getSystemName: jest.fn().mockReturnValue('iOS'),
  };
  return {
    ...MockedDeviceInfo,
    default: MockedDeviceInfo,
  };
});

const mockLogAppOpen = jest.fn();
const mockRequestPermission = jest.fn().mockResolvedValue(1);

jest.mock('@react-native-firebase/analytics', () => () => ({
  logAppOpen: mockLogAppOpen,
}));

jest.mock('@react-native-firebase/messaging', () => jest.fn(() => ({
  requestPermission: mockRequestPermission,
})));

const renderScreen = () => {
  const screen = render(<InitialScreen />);
  jest.runAllTimers();
  return screen;
};

jest.useFakeTimers();

describe('InitialScreen (Omni)', () => {
  it('Should match snapshot', () => {
    const screen = renderScreen();
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
