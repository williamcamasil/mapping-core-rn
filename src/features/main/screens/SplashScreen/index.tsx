import React from 'react';

import { useDidMount, useNavigationHolder } from 'mapping-context-rn';
import { Container, Text } from 'mapping-style-guide-rn';

const SplashScreen = () => {
  const navigationHolder = useNavigationHolder();

  useDidMount(() => {
    setTimeout(() => {
      navigationHolder.reset({
        index: 0,
        routes: [
          { name: 'MAIN_APP', params: { screen: 'InitialScreen' } },
        ],
      });
    });
  });

  /* istanbul ignore next */
  if (!__DEV__) return null;

  return (
    <Container justifyContent="center" alignItems="center">
      <Text variant="headingSmall">Splash</Text>
    </Container>
  );
};

export default SplashScreen;
