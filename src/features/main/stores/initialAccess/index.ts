import * as SecureStore from 'expo-secure-store';

export const initialAccessStatus = 'initialAccessStatus';

export const optionsValue: SecureStore.SecureStoreOptions = {
  keychainService: 'initialAccessStatus_keychain',
  keychainAccessible: SecureStore.AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY,
};

export type InitialAccessWelcomeScreenStoreType = {
  hasSeenWelcomeScreen: boolean;
};

export async function setInitialAccessWelcomeScreen(
  credentialData: InitialAccessWelcomeScreenStoreType,
): Promise<void> {
  await SecureStore.setItemAsync(
    initialAccessStatus,
    JSON.stringify(credentialData),

    optionsValue,
  );
}

export async function getInitialAccessWelcomeScreen():
Promise<InitialAccessWelcomeScreenStoreType | null> {
  try {
    const result = await SecureStore.getItemAsync(initialAccessStatus, optionsValue);
    if (!result) return null;
    return JSON.parse(result);
  } catch (err) {
    return null;
  }
}

export async function deleteInitialAccessWelcomeScreen(): Promise<void> {
  await SecureStore.deleteItemAsync(initialAccessStatus, optionsValue);
}

