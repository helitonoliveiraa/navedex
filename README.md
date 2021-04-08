<h1 align="center">
  Navedex
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/helitonoliveiraa/navedex.svg?color=%23212121">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/helitonoliveiraa/navedex.svg?color=%23212121">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/helitonoliveiraa/navedex?color=%23212121">

  <a href="https://www.linkedin.com/in/helitonoliveira/">
    <img alt="Made by Héliton Oliveira" src="https://img.shields.io/badge/made%20by-Héliton Oliveira-%23212121">
  </a>

  <a href="https://github.com/helitonoliveiraa/navedex?/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/helitonoliveiraa/navedex??color=%23212121">
  </a>

  <a href="https://github.com/helitonoliveiraa/navedex/stargazers" >
    <img alt="Stargazers" src="https://img.shields.io/github/stars/helitonoliveiraa/navedex?style=social">
  </a>
</p>

<p align="center">
  <a href="#memo-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-tecnologias-utilizadas">Tecnologias utlizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#arrowdown-como-baixar-o-projeto">Baixe o projeto</a>
</p>
<p align="center">
  <img src="https://res.cloudinary.com/dzn5ixmhq/image/upload/v1617888723/navedex/Screenshot_20210408_102142_xdygeg.png" alt="Navedex"> -->

  <img src="https://res.cloudinary.com/dzn5ixmhq/image/upload/v1617888720/navedex/Screenshot_20210408_102419_ynnfsm.png" alt="Navedex">

  <img src="https://res.cloudinary.com/dzn5ixmhq/image/upload/v1617888712/navedex/Screenshot_20210408_102312_dj0een.png" alt="Navedex">
</p>

# :memo: Sobre

O Navedex é um web app que consome um `API` onde se pode cadastrar novos navers com informações como: idade, cargo, tempo de empresa e projetos que participou.

## Funcionalidades

- o admin do sistema pode efetuar login
- cadastrar naver
- visualizar todos os navers já cadastrados
- visualizar detalhes de um naver específico
- editar um naver específico
- deletar um naver específico

### Extras

funcionalidades adicional

- validação em todo os inputs da aplicação, caso o usuário não informe algum campo, ele será notificado via feedback visual com `input highlight` e `tooltip`.

- caso o usuário informe dados não válidos ao efetuar login, o mesmo será notificado via `custom toast` ou `input highlight` e `tooltip`.

- caso ocorra falha em algumas das chamada à `API` o usuário nofiticado via `custom toast`.

- responsividade.

- transições suáveis entre páginas.

- animações.

# :wrench: Tecnologias utilizadas

- [ReactJS](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [unform](https://unform.dev/)
- [React-modal](https://github.com/reactjs/react-modal)
- [styled-components](https://styled-components.com/)
- [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner)
- [react-spring](https://www.react-spring.io/)
- [react-icons](https://react-icons.github.io/react-icons/icons?name=ai)
- [polished](https://polished.js.org/docs/)
- [yup](https://github.com/jquense/yup)
- [uuid](https://www.npmjs.com/package/uuid)
- [axios](https://www.npmjs.com/package/axios)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [editorConfig](https://editorconfig.org/)

# :arrow_down: Como baixar o projeto

⚠ é necessário possuir as seguintes ferramentas instaladas em seu computador: [nodejs](https://nodejs.org/en/).

⚠ você usar tanto o [yarn](https://yarnpkg.com/) quanto o [npm]() para instalar as dependências.


<br />

Clone o projeto para sua maquina local:
```bash
# Clone o projeto para sua maquina local
$ git clone https://github.com/helitonoliveiraa/navedex.git

# acesse a pasta do projeto
$ cd navedex

# Instale todas as dependências do projeto
$ yarn / npm install

# crie um arquivo .env na raiz do projeto e popule a variável ambiente `REACT_APP_API_URL` com a URL da API.

# roda o projeto
$ yarn / npm run
```

<br />

<p align="center">Feito com 💙 by <a href="https://www.linkedin.com/in/helitonoliveira/" target="_blank">Héliton Oliveira</a></p>
