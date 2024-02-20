/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// AO PUXAR O CÓDIGO PARA ESSE ARQUIVO DO PROJETO BASE DEU ERRO NA EXECUÇÃO DO PROJETO
// TODO: Verificar como resolver o erro

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
