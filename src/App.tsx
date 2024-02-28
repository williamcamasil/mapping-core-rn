import React, { useCallback, useRef } from 'react';
import { Platform, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {
  AppConfigType, AppHolder, AppProvider, AuthTokenVariantType, AuthType, getNavigationHolder, useDidMount,
} from 'mapping-context-rn';
import { ModalProvider, ThemeProvider, useTheme } from 'mapping-style-guide-rn';

import appConfig from './config';
import Navigation from './navigation';

const App = () => {
  const routeNameRef = useRef<string | undefined>();
  const navigationHolder = getNavigationHolder();

  const handleAppWillMount = useCallback(async (config: AppConfigType) => {
    // eslint-disable-next-line no-console
    console.log('handleAppWillMount', config);
  }, []);

  const handleAppMount = useCallback(async (config: AppConfigType) => {
    // eslint-disable-next-line no-console
    console.log('handleAppMount', config);
  }, []);

  const handleAppDidMount = useCallback(async (config: AppConfigType, auth?: AuthType) => {
    // eslint-disable-next-line no-console
    console.log('handleAppDidMount', config, auth);
  }, []);

  const handleNavigationReady = useCallback(() => {
    routeNameRef.current = navigationHolder.getRef()?.getCurrentRoute()?.name;
  }, [navigationHolder]);

  const handleLogout = useCallback((origin?: AuthTokenVariantType) => {
    getNavigationHolder().reset({
      index: 0,
      routes: [{ name: 'LOGIN' }],
    });
  }, []);

  return (
    <AppProvider
      config={appConfig}
      onAppWillMount={handleAppWillMount}
      onAppMount={handleAppMount}
      onAppDidMount={handleAppDidMount}
      onAppLogout={handleLogout}
    >
      <NavigationContainer
        ref={navigationHolder.getRef()}
        onReady={handleNavigationReady}
      >
        <ModalProvider>
          <Navigation />
        </ModalProvider>
      </NavigationContainer>
    </AppProvider>
  );
};

const AppWithTheme = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWithTheme;
