
import 'react-native';
import * as SecureStore from 'expo-secure-store';

import {
  InitialAccessWelcomeScreenStoreType,
  deleteInitialAccessWelcomeScreen,
  getInitialAccessWelcomeScreen,
  initialAccessStatus,
  optionsValue,
  setInitialAccessWelcomeScreen,
} from '.';

const fakeInitialAccessWelcomeScreen: InitialAccessWelcomeScreenStoreType = {
  hasSeenWelcomeScreen: true,
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('initial access', () => {
  it('Should use method setInitialAccessWelcomeScreen', async () => {
    await setInitialAccessWelcomeScreen(fakeInitialAccessWelcomeScreen);
    expect(SecureStore.setItemAsync).toBeCalledWith(
      initialAccessStatus,
      JSON.stringify(fakeInitialAccessWelcomeScreen),
      optionsValue,
    );
    await deleteInitialAccessWelcomeScreen();
  });

  it('Should use method getInitialAccessWelcomeScreen', async () => {
    await SecureStore.setItemAsync(initialAccessStatus, JSON.stringify(fakeInitialAccessWelcomeScreen), optionsValue);
    const result = await getInitialAccessWelcomeScreen();
    expect(SecureStore.getItemAsync).toBeCalledWith(initialAccessStatus, optionsValue);
    expect(result).toEqual(fakeInitialAccessWelcomeScreen);
    await deleteInitialAccessWelcomeScreen();
  });

  it('getInitialAccessWelcomeScreen empty object', async () => {
    const fakeInitialAccessWelcomeScreenObjectError = '';
    await SecureStore.setItemAsync(initialAccessStatus, fakeInitialAccessWelcomeScreenObjectError, optionsValue);
    const result = await getInitialAccessWelcomeScreen();
    expect(SecureStore.getItemAsync).toBeCalledWith(initialAccessStatus, optionsValue);
    expect(result).toEqual(null);
    await deleteInitialAccessWelcomeScreen();
  });

  it('getInitialAccessWelcomeScreen incomplete object', async () => {
    const fakeInitialAccessWelcomeScreenObjectError = '{id:';
    await SecureStore.setItemAsync(initialAccessStatus, fakeInitialAccessWelcomeScreenObjectError, optionsValue);
    const result = await getInitialAccessWelcomeScreen();
    expect(SecureStore.getItemAsync).toBeCalledWith(initialAccessStatus, optionsValue);
    expect(result).toEqual(null);
    await deleteInitialAccessWelcomeScreen();
  });

  it('deleteInitialAccessWelcomeScreen', async () => {
    await deleteInitialAccessWelcomeScreen();
    expect(SecureStore.deleteItemAsync).toBeCalledWith(initialAccessStatus, optionsValue);
  });
});
