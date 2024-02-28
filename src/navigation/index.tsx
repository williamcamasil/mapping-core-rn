import React, { useState } from 'react';

import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { AppHolder, SubmoduleMiniAppRegisterType } from 'mapping-context-rn';

import appConfig from '../config';
import { Main } from '../features';
import submodules from '../submodules';
import NavigatorParamList from './types';

const Stack = createStackNavigator<NavigatorParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

const Navigation = () => {
  const [registeredSubmodules] = useState(() => {
    const appState = AppHolder.getState();

    function renderSubmodule(registerSubmodule: SubmoduleMiniAppRegisterType) {
      const submodule = registerSubmodule(appConfig, appState);
      return <Stack.Screen key={submodule.name} name={submodule.name} component={submodule.navigator} />;
    }

    return submodules.map(renderSubmodule);
  });

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="MAIN_APP" component={Main.Navigator} />
      {registeredSubmodules}
    </Stack.Navigator>
  );
};

export default Navigation;
