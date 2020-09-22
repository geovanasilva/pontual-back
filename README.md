# Pontual-Back

## PT-BR

### Sobre

A aplicação Pontual-Back é responsável por ser a fonte do processamento de servimento de recursos que serão enviados para a aplicação [Pontual-Front](https://github.com/geovanasilva/pontual-front).

Essa aplicação está sob desenvolvimento, mas à priori, tem como objetivos:
- Realizar e processar batimento de pontos;
- Informar sobre as informações relacionadas aos batimentos de pontos através de dados que possam ser melhor visualizados em dashboards.

### Tecnologias envolvidas

O Pontual-Back está sendo desenvolvido utilizando [Node](https://nodejs.org/en/), [PostgreSQL](https://www.postgresql.org/). Para facilitar o desenvolvvimento da aplicação, é utilizado o framework [Nest.js](https://nestjs.com/).

### Como executar a aplicação

#### Requisitos

Para que você possa executar a aplicação na sua máquina, você deve garantir primeiro que você tenha instalado o Node. Com o Node instalado, você já terá acesso ao NPM (gerenciador de pacotes do Node).
Também, é necessário que você tenha instalado na sua máquina o PostgreSQL.

#### Instalando dependências

Após clonar a aplicação, você deve, através de algum terminal de linha de comando, entrar no diretório da aplicação e executar o seguinte comando:

```bash
$ npm install
```

Esse comando poderá levar alguns segundos ou até minutos (vai variar de acordo com a velocidade de download de sua internet) para terminar de ser executado.

#### Definindo variáveis de ambiente

É importante que você defina as variáveis de ambiente que são essenciais para que a aplicação seja executada com sucesso. Para isso, você deve criar um arquivo `.env` na raiz do projeto e, com base nas variáveis já descritas no arquivo `.env.example`, você deve definir os valores para cada variável.

#### Executando aplicação

Após ter realizado os passos anteriores, basta executar o seguinte comando no seu terminal de linha de comando:

```bash
$ npm start
```

Se caso você desejar executar a aplicação de forma que ao alterar o código o servidor seja reiniciado e reflita a sua alteração (*watch mode*), execute o seguinte comando:

```bash
$ npm start:dev
```

**É importante ressaltar que as mudanças que você fizer nas variáveis de ambiente não serão refletidas se você estiver executando a aplicação no modo *watch*. Ou seja, se você mudar algo no valor de alguma das variáveis de ambiente, você precisará reiniciar o servidor manualmente.**

### Como testar a aplicação

Após ter clonado o projeto, instalado as dependências de deinido os valores das variáveis de ambiente no arquivo `.env`, para você realizar os testes da aplicação você deve executar os seguintes comandos:

```bash
# Para testes unitários
$ npm run test

# Para testes e2e
$ npm run test:e2e

# Para cobertura de testes
$ npm run test:cov
```

### Mantenedores

Os mantenedores dessa aplicação são:
- [Geovana Silva](https://github.com/geovanasilva)
- [Leonardo Santos](https://github.com/leonardossev)

### Licença

O Pontual-Back está sob a licença [MIT](LICENSE).