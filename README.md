<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# Gerenciamento de Cursos (NestJS + Prisma)

API simples para gerenciar cursos usando NestJS e Prisma com PostgreSQL.

--

## Resumo

Este repositório implementa CRUD de cursos com validação DTO (`class-validator`), conversão de tipos (`class-transformer`) e persistência via Prisma.

## Pré-requisitos

- Node.js 18+ e npm
- Docker & Docker Compose (opcional, recomendado para Postgres)

## Variáveis de ambiente

Crie um arquivo `.env` na raiz com a URL do banco:

```
DATABASE_URL=postgresql://postgres:docker@localhost:5433/gerenciamento_de_cursos?schema=public
```

Se preferir usar o banco criado pelo `docker-compose.yml` (nome `nest-clean`) altere para:

```
DATABASE_URL=postgresql://postgres:docker@localhost:5433/nest-clean?schema=public
```

## Instruções rápidas

1. Instale dependências:

```bash
npm install
```

2. Suba o Postgres (opcional, recomendado):

```bash
docker compose up -d
```

3. (Se necessário) crie a database esperada no container:

```bash
docker compose exec postgres psql -U postgres -c "CREATE DATABASE gerenciamento_de_cursos;"
```

4. Aplique o schema Prisma:

```bash
npx prisma migrate deploy --schema=prisma/schema.prisma
# ou em dev:
# npx prisma migrate dev --schema=prisma/schema.prisma
# alternativa rápida:
# npx prisma db push --schema=prisma/schema.prisma
```

5. Rode a aplicação:

```bash
npm run dev
```

A aplicação escuta por padrão na porta `5555` (variável `PORT` em `process.env`).

## Endpoints principais

Base: `http://localhost:5555/api/cursos`

- POST /api/cursos
  - Body:
    ```json
    {
      "name": "string",
      "description": "string",
      "duration": 40,
      "date_init": "2025-01-15"
    }
    ```

- GET /api/cursos

- GET /api/cursos?data_init=YYYY-MM-DD&duration=N

- GET /api/cursos/:id

- PATCH /api/cursos/:id
  - Body parcial: `{ "name": "...", "duration": 50 }`

- DELETE /api/cursos/:id

Exemplos prontos estão no arquivo `api.http`.

## Validação e transformação

- `ValidationPipe({ transform: true })` está ativado em `main.ts`: strings que representam datas são convertidas automaticamente em `Date`.
- DTO `UserDto` aceita `date_init` como `Date` e `id` é opcional.

## Troubleshooting

- SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string
  - Verifique se `DATABASE_URL` está acessível em runtime. Garanta `import 'dotenv/config'` ou carregue as variáveis antes de instanciar Prisma.

- FATAL: database "gerenciamento_de_cursos" does not exist
  - O `docker-compose.yml` define `POSTGRES_DB=nest-clean`. Ou crie a DB (`CREATE DATABASE`) ou ajuste `.env` para `nest-clean`.

- Invalid Date / campos undefined
  - Verifique nomes dos campos no JSON (`description`, `date_init`) e Content-Type: `application/json`.

- EADDRINUSE: address already in use :::5555
  - Libere a porta: `lsof -i :5555 -sTCP:LISTEN -Pn` e `kill <PID>`.

## Próximos passos sugeridos

- Adicionar Swagger (decorators para documentação automática)
- Adicionar testes unitários/e2e
- Configurar CI para aplicar migrations no deploy

---

Se quiser, eu posso: aplicar Swagger, rodar testes locais ou ajustar o README com instruções mais detalhadas para desenvolvimento/produção.
