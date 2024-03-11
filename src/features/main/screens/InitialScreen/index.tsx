import React, { useCallback, useState } from 'react';

import {
  useDidMount,
  useNavigationHolder,
  withPropsInjection,
} from 'mapping-context-rn';
import { InformationContent } from 'mapping-style-guide-rn';
import { Images } from '../../assets';
import { getInitialAccessWelcomeScreen, setInitialAccessWelcomeScreen } from '../../stores';

const InitialScreen = () => {
  const navigationHolder = useNavigationHolder();
  const [isShowScreen, setIsShowScreen] = useState<boolean>(false);

  const handleCheckInitialAccess = useCallback(async () => {
    const initialAccessWelcomeScreen = await getInitialAccessWelcomeScreen();
    setIsShowScreen(!initialAccessWelcomeScreen?.hasSeenWelcomeScreen);
    if (initialAccessWelcomeScreen?.hasSeenWelcomeScreen) {
      navigationHolder.replace('LOGIN');
    }
  }, []);

  useDidMount(() => { handleCheckInitialAccess(); });

  const navigateToMainApp = () => {
    setInitialAccessWelcomeScreen({ hasSeenWelcomeScreen: true });
    navigationHolder.replace('LOGIN');
  }

  const renderContent = () => {
    if (!isShowScreen) return null;
    return (
      <InformationContent
        header={<Images.MappingApp />}
        title={'Bem vindo ao organo mapping'}
        description={'O aplicativo que ajuda a entender a hierarquia do seu time e informações de seus colegas de trabalho'}
        primaryButtonName="Iniciar"
        onPressPrimary={navigateToMainApp}
      />
    );
  }

  return (
    renderContent()
  );
};

export default withPropsInjection(InitialScreen, {});
