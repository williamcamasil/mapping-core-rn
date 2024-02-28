jest.mock('react-native/Libraries/Utilities/Platform', () => {
  const Platform = jest.requireActual(
    'react-native/Libraries/Utilities/Platform',
  );
  Platform.OS = 'android';
  return Platform;
});

jest.mock('react-native-device-info', () => {
  const DeviceInfoActual = jest.requireActual('react-native-device-info/jest/react-native-device-info-mock');
  const MockedDeviceInfo = {
    ...DeviceInfoActual,
    getVersion: jest.fn().mockReturnValue('8.8'),
    getUniqueId: jest.fn().mockReturnValue('123'),
    getSystemName: jest.fn().mockReturnValue('Android'),
    getSystemVersion: jest.fn().mockReturnValue('12'),
  };
  return {
    ...MockedDeviceInfo,
    default: MockedDeviceInfo,
  };
});

jest.useFakeTimers();

describe('InitialScreen (Android)', () => {
  // it('Should go to AppUpdateScreen when api version is greater than device', async () => {
  //   jest.spyOn(deviceInfoModule, 'getVersion').mockReturnValueOnce('8.4');

  //   const navigation = createNavigationMock();

  //   renderScreen();

  //   await waitFor(() => expect(navigation.dispatch).toHaveBeenCalledWith(StackActions.replace('AppUpdateScreen')));
  // });
});
