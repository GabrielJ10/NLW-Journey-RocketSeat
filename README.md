# NLW Journey - RocketSeat
-----------------

Este repositório contém o código-fonte da API do planner de viagens desenvolvido durante a NLW Journey, um evento de programação organizado pela RocketSeat.

## Sobre o projeto
-----------------

O objetivo do projeto é criar uma API para um planner de viagens, permitindo que os usuários criem, editem e gerenciem suas viagens de forma eficiente.

## Tecnologias utilizadas
-------------------------

* **Fastify**: Framework Node.js para criar aplicações web rápidas e escaláveis.
* **TypeScript**: Linguagem de programação utilizada para desenvolver a API.
* **Zod**: Biblioteca utilizada para validar e serializar dados.
* **CORS**: Middleware utilizado para habilitar o acesso à API de origens diferentes.

## Rotas
---------

A API do planner de viagens oferece as seguintes rotas:

### Viagens

* **POST /create-trip**: Cria uma nova viagem.
* **POST /confirm-trip**: Confirma uma viagem.
* **PUT /update-trip**: Atualiza uma viagem.
* **GET /get-trip-details**: Retorna detalhes de uma viagem.

### Atividades

* **POST /create-activity**: Cria uma nova atividade.
* **GET /get-activities**: Retorna uma lista de atividades.

### Links

* **POST /create-link**: Cria um novo link.
* **GET /get-links**: Retorna uma lista de links.

### Participantes

* **POST /create-participant**: Cria um novo participante.
* **GET /get-participants**: Retorna uma lista de participantes.

### Convites

* **POST /create-invite**: Cria um novo convite.

### Erros

* **Error Handler**: Manipula erros e exceptions na API.

## Inicializando o projeto
-------------------------

Para inicializar o projeto, siga os passos abaixo:

1. Clone o repositório: `git clone https://github.com/seu-usuario/nlw-journey-rocketseat.git`
2. Instale as dependências: `npm install` ou `yarn install`
3. Inicie a API: `npm run dev`
A API estará disponível em `http://localhost:3333`.


## Créditos
---------

* RocketSeat: Organizadora do evento NLW Journey
