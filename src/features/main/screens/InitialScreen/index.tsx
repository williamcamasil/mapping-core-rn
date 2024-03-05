import React from 'react';
import {
  Platform,
  Settings,
  StatusBar,
} from 'react-native';

import {
  useDidMount,
  useNavigationHolder,
} from 'mapping-context-rn';
import { Container, Text } from 'mapping-style-guide-rn';

const InitialScreen = () => {
  const navigationHolder = useNavigationHolder();

  const nextScreen = async () => {
    navigationHolder.replace('LOGIN');
  };

  const setHasRunBefore = () => {
    if (Platform.OS === 'ios' && !Settings.get('hasRunBefore')) {
      Settings.set({ hasRunBefore: true });
    }
  };

  const initApp = async () => {
    setHasRunBefore();
    // const isStorageInitialized = await startStorage();
    // if (isStorageInitialized) {
    //   const time = setTimeout(() => {
    //     nextScreen();
    //     clearTimeout(time);
    //   }, 1500);
    //   return;
    // }

    navigationHolder.replace('LOGIN');
  };

  const addZerosAfterDot = (version: string): number => {
    const [minor, patch] = version.split('.');
    const formattedPatch = patch.padStart(3, '0');
    const formattedVersion = `${minor}.${formattedPatch}`;
    return Number(formattedVersion);
  };

  const handleVersions = (appVersion: string, storeAppVersion: string) => {
    const formattedAppVersion = addZerosAfterDot(appVersion);
    const formattedStoreVersion = addZerosAfterDot(storeAppVersion);

    if (formattedAppVersion < formattedStoreVersion) {
      navigationHolder.replace('AppUpdateScreen');
      return;
    }

    initApp();
  };

  // const checkApplicationVersion = async () => {
  //   if (isResponseError(superAppVersionResponse)) {
  //     initApp();
  //     return;
  //   }

  //   const storeVersion = phoneModel === 'iOS' ? superAppVersionResponse.data.Ios : superAppVersionResponse.data.Android;
  //   handleVersions(appVersionNumber, storeVersion);
  // };

  useDidMount(() => {
    // checkApplicationVersion();
    navigationHolder.replace('LOGIN');
  });

  return (
    <Container alignItems="center" justifyContent="center">
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      {/* <CompanyIcon /> */}
      <Text>Ola mundo</Text>
    </Container>
  );
};

export default InitialScreen;
