# Descrição dos requisitos solicitados

### Criar arquitetura baseada em microfrontends
- Foi utilizada uma arquitetura modulariza (modular) semelhante ao microfrontends, que permite:
  - Separar responsabilidade entre os módulos
  - Escalar o sistema
  - Isolamento de falhas

### Conceitos offline First
- Permitir que o usuário mesmo desconectado da rede continuei utilizando as funcionalidades que condizem ao uso sem conexão
  - Ex.: persistência de dados, tela inicial visto uma vez as saudações não será mostrado novamente assim que acessar o app

### Fazer login com Google, Facebook ou Microsoft
- Login utilizando o firebase
  - Configuração da aplicação com o firebase
  - Uso da autenticação com o firebase

### Aplicar princípios SOLID
#### S > Princípio de responsabilidade única
__Descrição:__ Uma classe deve ter apenas uma razão para mudar, ou seja, deve ter apenas uma responsabilidade.

__Utilizado no app:__
  - validadores, formatters ex.: email > context > utils
  - chamadas http (abstrações)
    - HttpServise > Classe abstrata que tem como objetivo receber o adapter dos principais verbos (GET/POST/PUT/DELETE)
  - context api
  - store
  - componentes do style-guide
#### O > Princípio do aberto / fechado
__Descrição:__ Entidades de software, como classes, módulos e funções, devem ser abertas para extensão, mas fechadas para modificação. Isso significa que você pode adicionar novos recursos sem alterar o código existente.

__Utilizado no app:__
  - validadores, formatters ex.: email > context > utils
  - chamadas http (abstrações)
  - context api
  - store
  - componentes do style-guide
#### L > Princípio da substituição de liskov
__Descrição:__ Objetos de uma classe derivada devem ser capazes de substituir objetos da classe base sem afetar a corretude do programa. Em outras palavras, uma classe derivada deve ser utilizável no lugar de sua classe base sem alterar o comportamento esperado.

__Utilizado no app:__
  - componentes do style-guide, permite modificar o seu padrão original, a partir de parâmetros passados o que permite alterar sua base a partir de fluxos de outros módulos
#### I > Princípio da Segregação de Interfaces
__Descrição:__ Uma classe não deve ser forçada a implementar interfaces que ela não utiliza. Em vez disso, as interfaces devem ser segregadas, ou seja, divididas em interfaces menores e mais específicas.

__Utilizado no app:__
  - os tipos definidos para uso nos fluxos nas requisições permitem a segregação das interfaces, ou seja separa-la de forma que fique mais claro sua utilidade, além de permitir seu uso de forma independente
#### D > Princípio da Inversão de Dependência
__Descrição:__ Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações. Além disso, abstrações não devem depender de detalhes, mas detalhes devem depender de abstrações.

__Utilizado no app:__
  - componentes do style-guide
  - configurações e abstrações do context 

### Utilizar uma arquitetura que faça com que o código seja independente de framework (reutilização do código)
- Tudo que tem base em node (funções java script, serviços com chamadas, adapters e abstrações das classes)
- Estrutura de testes unitários e de integração, mocks
- Utilitários, validadores, helpers
- Regra de negócio da aplicação (como deve funcionar)
- Providers de gerenciamento de estados entre a aplicação, context api e store
- Design token (temas de cores, espancamentos, tipografia, imagens e ícones, etc)
- Se for para react js, dá para reutilizar boa parte do código
- Possibilidade de usar o módulo com diferentes linguagens
- Abstrações das chamadas de api, para isolar a request dos componentes
- Fabric do ciclo de vida do app, useDidMount, useAsync, useKeyBoard
- Configurações do jest, babel, eslint e typescript
