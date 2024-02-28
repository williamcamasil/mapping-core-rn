import { SubmoduleMiniAppRegisterType } from 'mapping-context-rn';
import RegisterMappinLoginApp from 'mapping-login-rn-app';
import RegisterMappingDashboardApp from 'mapping-dashboard-rn-app';

const submodules: SubmoduleMiniAppRegisterType[] = [
  RegisterMappinLoginApp,
  RegisterMappingDashboardApp
];
export default submodules;
