<!-- PROJECT SHIELDS -->

[![PRETTIER](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://gitter.im/jlongster/prettie)
[![LICENSE](https://img.shields.io/github/license/arshadkazmi42/awesome-github-init.svg)](https://github.com/arshadkazmi42/awesome-github-init/LICENSE)
[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/erlanlucio/)

<!-- PROJECT -->

<br /><br />

<p align="center">
  <h3 align="center">

Desafio FullCycle 💛

  </h3> 
  <p align="center">
    <img width="30%" src="https://user-images.githubusercontent.com/67064886/190645119-48a97dcd-7fd9-4506-bf5a-440ae86752dc.svg" alt="FullCycle Logo" >
    <br />
    <br />
    <a href="https://github.com/lucioerlan/jobChallenge-FullCycle/issues">Report Bug</a>
    ·
    <a href="https://github.com/lucioerlan/jobChallenge-FullCycle/issues">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## 🤔 Sobre o projeto

Esse Readme é para auxiliar no processo de instalação, execução, testes, deploy do projeto e monitoramento.

Para os detalhes técnicos do que foi implementado, tecnologias e sobre os desafios propostos <details> <summary><b>🎷Clique Aqui<sup>ver+</sup></b></summary>

  <ul>
    <li><a target="_blank" rel="noopener noreferrer" href='https://github.com/lucioerlan/jobChallenge-FullCycle/blob/develop/DESAFIOS.md'> README COM OS DESAFIOS </a></li>
  </ul> 
</details>

<br /><br />

---

<!-- INSTALLATION -->

## 🔨 Instalação Local

Você precisará do [Node.js](https://nodejs.org) versão 10 ou superior, instalado no seu computador para continuar.

```bash
git clone https://github.com/lucioerlan/jobChallenge-FullCycle.git

$ cd jobChallenge-FullCycle/frontend
$ cd jobChallenge-FullCycle/backend

$ npm install
```

<br />

---

<!-- SETUP -->

## 🔥 Configuração Local

#### Copie ou renomeie os arquivos de configuração

```
$ cp frontend/.env-examples frontend/.env
```

```
$ cp backend/.env-examples backend/.env
```

**-** Ambos localizados na raiz do frontend e backend.

<br />

---

<!-- RUNNING TESTS -->

## 🧪 Rodando testes

<br />

- ### Para rodar os testes, relacionados ao frontend 🤑

```
$ npm run test
```

```
$ npm run cypress:all
```
**-** React Testing Library - Units

**-** Cypress - E2E

---

<br />

- ### Para rodar os testes, relacionados ao backend 🤑

```
$ npm run test
```

**-** Jest - Units

<br />

---

<!-- DOCUMENTATION -->

## 📚 Documentação API

<br />

- Para Accessar a documentação do Swagger
- http://localhost:5000/api/v1/docs/swagger

<br />

---

<!-- OTHER SETTINGS -->

## 👻 Outras Configurações

- Popule rapidamente o banco de dados, com várias informações ↓

```
$ npm run typeorm:migration
```

```
$ npm run typeorm:seed
```

**-** Migrations - Criação de tabelas

**-** Seeds - População de tabelas

<br />

---

<!-- RUNNING -->

## 🎲 Rodando o Backend Localmente

```bash

# Execute a aplicação
$ npm run start

# O servidor inciará na porta:5000 - acesse http://localhost:5000

```

<br />

## 🎲 Rodando o Frontend Localmente

```bash

# Execute a aplicação
$ npm run start

# O servidor inciará na porta:3000 - acesse http://localhost:3000

```

<br />

---

<!-- DOCKER -->

## 🐳 Executando com o Docker

- Para criar todos os containers e rodar toda a aplicação. - (nginx, nodejs, reactjs, elasticsearch, kibana, apm-server, mysql e sonnarqube)

```
$ docker network create node-net
```

```
$ docker-compose up --build
```

<br />

---

<!-- OBSERVABILITY -->

## 👀 Observabilidade 

<br />

- Para Accessar o Kibana e visualizar métricas e logs.
- http://localhost:5601

<br />

---

<!-- LICENSE -->

## 🔓 Licença

Este projeto está sob licença do MIT. Consulte a LICENÇA para obter mais detalhes. © - [Erlan Lucio](https://www.linkedin.com/in/erlanlucio/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
