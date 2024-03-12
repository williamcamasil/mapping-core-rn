# Melhorias necessárias

## Falha ao fazer o login com google no iOS

## Erro de persistência de dados no ios

### Log do erro:
```
Sending `onAnimatedValueUpdate` with no listeners registered.
Error: Unable to resolve module ./Libraries/Components/DatePicker/DatePickerIOS from /Users/william.camargo/Desktop/developments/github/challenge/mapping-core-rn/node_modules/react-native/index.js:

None of these files exist:
  * node_modules/react-native/Libraries/Components/DatePicker/DatePickerIOS(.native|.native.js|.js|.native.jsx|.jsx|.native.json|.json|.native.ts|.ts|.native.tsx|.tsx|.native.svg|.svg)
  * node_modules/react-native/Libraries/Components/DatePicker/DatePickerIOS/index(.native|.native.js|.js|.native.jsx|.jsx|.native.json|.json|.native.ts|.ts|.native.tsx|.tsx|.native.svg|.svg)
  15 | import typeof ActivityIndicator from './Libraries/Components/ActivityIndicator/ActivityIndicator';
  16 | import typeof Button from './Libraries/Components/Button';
> 17 | import typeof DatePickerIOS from './Libraries/Components/DatePicker/DatePickerIOS';
     |                                   ^
  18 | import typeof DrawerLayoutAndroid from './Libraries/Components/DrawerAndroid/DrawerLayoutAndroid';
  19 | import typeof FlatList from './Libraries/Lists/FlatList';
  20 | import typeof Image from './Libraries/Image/Image';
    at ModuleResolver.resolveDependency (/Users/william.camargo/Desktop/developments/github/challenge/mapping-core-rn/node_modules/metro/src/node-haste/DependencyGraph/ModuleResolution.js:137:15)
    at DependencyGraph.resolveDependency (/Users/william.camargo/Desktop/developments/github/challenge/mapping-core-rn/node_modules/metro/src/node-haste/DependencyGraph.js:260:43)
    at Object.resolve (/Users/william.camargo/Desktop/developments/github/challenge/mapping-core-rn/node_modules/metro/src/lib/transformHelpers.js:177:21)
    at Graph._resolveDependencies (/Users/william.camargo/Desktop/developments/github/challenge/mapping-core-rn/node_modules/metro/src/DeltaBundler/Graph.js:432:35)
    at Graph._processModule (/Users/william.camargo/Desktop/developments/github/challenge/mapping-core-rn/node_modules/metro/src/DeltaBundler/Graph.js:218:38)
    at async Graph._addDependency (/Users/william.camargo/Desktop/developments/github/challenge/mapping-core-rn/node_modules/metro/src/DeltaBundler/Graph.js:314:20)
    at async Promise.all (index 0)
    at async Graph._processModule (/Users/william.camargo/Desktop/developments/github/challenge/mapping-core-rn/node_modules/metro/src/DeltaBundler/Graph.js:263:5)
    at async Graph._traverseDependenciesForSingleFile (/Users/william.camargo/Desktop/developments/github/challenge/mapping-core-rn/node_modules/metro/src/DeltaBundler/Graph.js:207:5)
    at async Promise.all (index 0)
```

### Tentativas para a solução
- Pesquisa sobre o warn e sua relação com a persistência de dados onAnimatedValueUpdate
- Instalar dependência do DatePickerIOS
- Tentativas de equalização de versões entre os módulos
- Limpar cache, remover e adicionar novamente node modules, e atualizar Podfile
