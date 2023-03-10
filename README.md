![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)


# Cadastro de clientes e consumo de APIs externas

Este projeto foi um desafio para um vaga backend. Decidi fazer este projeto para aplicar o que aprendi sobre construção de um sistema backend em ExpressJS. Esse projeto ainda não foi terminado, porém me ensinou bastante sobre conceitos de SOLID e clean code, utilização de docker para conteinerizar o banco de dados e aplicação, autenticação de clientes através do JWT, swagger para documentação da API e comunicação com banco de dados através do TypeORM. Foi uma ótima oportunidade para aprender conectar o TypeORM a um banco não-relacional, como o MongoDB e consumir APIs externas no meu backend, manipular elas e enviar para o frontend. Além disso, esse projeto me ensinou o quanto uma aplicação real precisa de diversos fatores para ser performática, ser de fácil manutenção e escalável.


# Conteúdos

- [Arquitetura](#arquitetura) 
- [Instruções de execução](#instruções-de-execução)
- [Funcionalidades](#funcionalidades)


# Arquitetura 

**SOLID**

*Utilizei essa arquitetura, porque ela é muito fácil de dar manutenção no código por separar sempre as responsabilidades de cada pasta e arquivo no projeto. Dessa forma, por exemplo, se eu quiser mudar do TypeORM para um Prisma, faço isso sem afetar meu Services e Controllers, porque é tudo independente.*

**Express**

*É o backend principal da minha aplicação feita em TypeScript, e foi escolhido porque tenho mais afinidade com JavaScript e queria aprender a construir utilizando TypeScript, para me dar mais confiança na hora de enviar os dados dos endpoints da API.*

**MongoDB**

*Esse banco de dados não-relacional é um dos mais conhecidos, por isso foi utilizado no projeto.*

**Docker**

*O docker foi utilizado para conteinerizar a minha aplicação e o banco de dados MongoDB. Dessa forma, eu consigo subir e descer o banco e a aplicação apenas utilizando os comandos no docker, além dele universalizar as versões, o que torna mais fácil alguém contribuir com o meu projeto, posteriormente.*

**TypeORM**

*Um dos ORMs mais conhecidos e versáteis. Utilizei ele pela ferramenta ter facilidade em utilizar a maioria dos bancos relacionais e suporte básico ao MongoDB também.*

**Eslint**

*É muito bom para dar produtividade na construção dos códigos, pois essa ferramenta pode padronizar todos os arquivos do meu projeto.*

**Jest**

*Este framework me possibilita construir testes unitários e de integração, aumentando assim a confiabilidade e redução de erros e bugs no projeto.*

**JWT**

*Esse é um dos tokens mais utilizados para autenticação de rotas. Neste projeto, utilizei para autenticar as rotas de criação, edição, listagem e deleção de clientes, ou seja, as rotas só funcionariam com o usuário autenticado.*


# Funcionalidades

1. Criar, Listar todos, Listar apenas um, Editar e Deletar um cliente. Essas rotas respectivamente, criam um cliente, listam todos os clientes, cadastrados no sistema, lista apenas um através do id no route params, edita um cliente através do id no route params e também deleta um cliente através do id no route params.

2. HttpCat é uma rota onde o usuário insere o status code e a requisição envia uma imagem de um gato correspondente ao status. Se não tiver a imagem, ele retorna o status code 404, junto com uma imagem fixa de erro, que é um gato também.

3. Random Dog é uma rota onde cada vez que o usuário atualizar a requisição é mudada a imagem de um cachorro.

4. Random User é uma rota que consome uma API externa com dados de usuários fakes e lista cada um deles. Também é possível filtra o usuário pelo nome, username e email através do query params.

5. Rota User serve pra logar o usuário admin no sistema. Esse usuário ao iniciar uma sessão gera um token que é passado para as de mais rotas, tornando essas rotas exclusivas desse usuário.


# Instruções de execução

**Rode o comando para instalar as dependências**

```bash
    yarn 
```

**A aplicação está no docker, então basta subir ou derrubar os containeres usando:**

```bash
    docker-compose up -d
```

```bash
    docker-compose down
```

**Caso queira parar e iniciar novamente os containeres use:**

```bash
    docker stop desafio-sharenergy
```

```bash
    docker stop db-mongo
```

```bash
    docker start desafio-sharenergy
```

```bash
    docker start db-mongo
```
