import React, { useCallback, useRef } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
  AppConfigType, AppProvider, AuthType, getNavigationHolder,
} from 'mapping-context-rn';
import { ModalProvider, ThemeProvider } from 'mapping-style-guide-rn';

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

  return (
    <AppProvider
      config={appConfig}
      onAppWillMount={handleAppWillMount}
      onAppMount={handleAppMount}
      onAppDidMount={handleAppDidMount}
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
