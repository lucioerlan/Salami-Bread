<!-- PROJECT SHIELDS -->

[![PRETTIER](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://gitter.im/jlongster/prettie)
[![LICENSE](https://img.shields.io/github/license/arshadkazmi42/awesome-github-init.svg)](https://github.com/arshadkazmi42/awesome-github-init/LICENSE)
[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/erlanlucio/)

<!-- PROJECT -->

<br /><br />

<p align="center">
  <h3 align="center">

Salami Bread 🍞

  </h3> 
  <p align="center">
    <img width="30%" src="https://user-images.githubusercontent.com/67064886/196109913-d6702a1c-3b84-49c6-b2ca-43122788abcd.png" alt="FullCycle Logo" >
    <br />
    <br />
    <a href="https://github.com/lucioerlan/Salami-Bread/issues">Report Bug</a>
    ·
    <a href="https://github.com/lucioerlan/Salami-Bread/issues">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## 🤔 About The Project

System to sell trinkets online
<br /><br />

---

<!-- INSTALLATION -->

## 🔨 Installation Default

You'll need Node.js installed on your computer in order to build this app.

```bash
git clone https://github.com/lucioerlan/Salami-Bread.git

$ cd Salami-Bread/client
$ cd Salami-Bread/server

$ npm install
```

<br />

---

<!-- SETUP -->

## 🔥 Local Configuration

#### Copy or rename the file

```
$ cp client/.env-examples client/.env
```

```
$ cp server/.env-examples server/.env
```

**-** Both located in the root of the client and server.

<br />

---

<!-- RUNNING TESTS -->

## 🧪 Running tests

<br />

- ### To run the tests, frontend related 🤑

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

- ### To run the tests, related to the backend 🤑

```
$ npm run test
```

**-** Jest - Units

<br />

---

<!-- DOCUMENTATION -->

## 📚 Documentação API

<br />

- To Access Swagger Documentation
- http://localhost:5000/api/v1/docs/swagger

<br />

---

<!-- OTHER SETTINGS -->

## 👻 Other Configurations

- Populate the database quickly, with various information ↓

```
$ npm run typeorm:migration
```

```
$ npm run typeorm:seed
```

**-** Migrations - Creating Tables

**-** Seeds - Table Population

<br />

---

<!-- RUNNING -->

## 🎲 Running the Backend Locally

```bash

# Run the application
$ npm run start

# The server will start on port:5000 - go to http://localhost:5000

```

<br />

## 🎲 Rodando o Frontend Localmente

```bash

# Run the application
$ npm run start

# The server will start on port:3000 - go to http://localhost:3000

```

<br />

---

<!-- DOCKER -->

## 🐳 Running with Docker

- To create all the containers and run the whole application. - (nginx, nodejs, reactjs, elasticsearch, kibana, apm-server, mysql and sonnarqube)

```
$ docker network create node-net
```

```
$ docker-compose up --build
```

<br />

---

<!-- OBSERVABILITY -->

## 👀 Observability

<br />

- To Access Kibana and view metrics and logs.
- http://localhost:5601

<br />

---

<!-- LICENSE -->

## 🔓 Licença

This project lives under MIT License. See LICENSE for more details. © - [Erlan Lucio](https://www.linkedin.com/in/erlanlucio/)

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
