# Pontual-Back

## PT-BR

### Sobre

A aplicação Pontual-Back é responsável por ser a fonte do processamento e servimento de recursos que serão enviados para a aplicação [Pontual-Front](https://github.com/geovanasilva/pontual-front).

Essa aplicação está sob desenvolvimento. Mas à priori, tem como objetivos:
- Processar batimento de pontos;
- Informar sobre as informações relacionadas aos batimentos de pontos através de dados que possam ser melhor visualizados em dashboards.

### Tecnologias

O Pontual-Back está sendo desenvolvido utilizando [Node](https://nodejs.org/en/), [PostgreSQL](https://www.postgresql.org/). Para facilitar o desenvolvimento da aplicação, é utilizado o framework [Nest.js](https://nestjs.com/).

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

# Pontual-Back

## EN-US

### About

Pontual-Back application is responsible for being the sourcing of processing and serving the resources that will sent to the [Pontual-Front](https://github.com/geovanasilva/pontual-front) application.

This application is under development, but at first, it has the following goals:
- To clock in;
- To inform about the information related to the many clocked in through data that can be better visualized in dashboards.

### Technologies

Pontual-Back is being develvopment with [Node](https://nodejs.org/en/), [PostgreSQL](https://www.postgresql.org/). In order to facilitate the application's development, the [Nest.js](https://nestjs.com/) framework is being used.

### How to run the application

#### Requirements

In order to execute the application in your machine, you must be sure that you have Node installed. With Node installed, you already have access to NPM (the Node's package manager).

Also, it is necessary that you have PostgreSQL installed in your machine.

#### Installing the dependencies

After cloning the application, you must, through a command line terminal, change to the application's directory and run the following command:

```bash
$ npm install
```

This command can take seconds or minutes (it depends on your internet download's rate) to finish its execution.

#### Setting up the environment variables

It is important that you have the environment variables that are essential for the successful application running set up. For that, you must create a file called `.env` in the application's root directory and, based on the environment variables described in the `.env.example` file, you must define their respective values.

#### Running the application

Having the previous steps being made, you just have to run the following command in your command line terminal:

```bash
$ npm start
```

If you wish to execute the application in the *watch mode*, rune the following command:

```bash
$ npm start:dev
```

**It is important to emphasize that changes that you made in the environment variables will not be reflected during the watch mode. That is, if you changed any environment variables' value, you must to restart the server manually.**

### How to test the application

After cloning the project, installed its dependencies and set the environment variables up in the `.env` file, you must run the following commands in order to test the application:

```bash
# For unit tests
$ npm run test

# Fort e2e tests
$ npm run test:e2e

# For tests coverage
$ npm run test:cov
```

### Maintainers

The application's maintainers are:
- [Geovana Silva](https://github.com/geovanasilva)
- [Leonardo Santos](https://github.com/leonardossev)

### License

Pontual-Back is under [MIT](LICENSE).