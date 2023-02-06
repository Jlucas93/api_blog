# Sobre o projeto(Em desenvolvimento... )

Esta é um API Rest de blog,que realiza um CRUD(Create, Read, Update, Delete) de usuário e posts do blog juntamente com uma validação de login utilizadno JWT(jsonwebtoken).A craição das tabelas e manipulação dos dados no banco de dados utiliza do Ssequelize e o aplicativo usa do framework express.

Rotas implementadas até o momento 

```Bash

[GET] 	 /user  --> Retorna todos usuários
[GET] 	 /user/:id 	--> Retorna 1 usuário 
[POST] 	 /user --> Criação de usuário 
[PATCH]  /user/:id 	--> Aualiza 1 usuário
[DELETE] /categorias/:id	--> Deleta 1 usuário

```

<p align="center">
<a href="https://www.linkedin.com/in/jo%C3%A3o-lucas-nascimento-andrade-34574398/">
    <img alt="Made by J. Lucas" src="https://img.shields.io/badge/made%20by-Jo%C3%A3o%20Lucas-blue">
</a>

<img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?color=blue">
</p>

## Tecnologias:

<a href="https://nodejs.org/en/about/">
  <img alt="NodeJs" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
</a>

<a href="https://expressjs.com/pt-br/">
  <img alt="ExpressJs" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
</a>

<a href="https://sequelize.org/">
  <img alt="Sequelize" src="https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue">
</a>

<a href="https://www.mysql.com/">
  <img alt="MySQL" src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white">
</a>

### Como Rodar a aplicação

Será necessário configurar as variáveis de ambiente seu arquivo .env na pasta raiz, de acordo com o arquivo .env.example encontrado na pasta raiz, insira as informações do seu banco de dados.

```bash
#Faça um clone da aplicação
$ git clone https://github.com/Jlucas93/apiJest.git

# Instale as dependências
$ npm install 

## Criando o schema
$npx sequelize db:create

#Criando as tabelas do banco com as migrations
$npm run migration

#Populando o banco com alguns dados de exemplo
$npm run seed

# Para rodar em modo de desenvolvimento com o nodemon execute 
$ npm run dev ou npm run start 

```
## 📝 Licença
Este projeto esta sobe a licença MIT. Veja a <a href="https://opensource.org/licenses/MIT">licença MIT</a> para saber mais.
