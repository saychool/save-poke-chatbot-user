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

Pokemon Chatbot User API built with [Nest](https://github.com/nestjs/nest) framework and PostgreSQL.

## Local Development Setup

1. **Prerequisites:**
   - Node.js 22+
   - PostgreSQL 17+

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Setup environment:**

   ```bash
   cp .env.example .env
   # Edit .env with your local database credentials
   ```

4. **Run database migrations:**

   ```bash
   npx prisma migrate deploy
   ```

5. **Start development server:**

   ```bash
   # development
   npm run start

   # watch mode
   npm run start:dev

   # production mode
   npm run start:prod
   ```

## Quick Deploy with Docker

1. **Clone and setup environment:**

   ```bash
   git clone <repository-url>
   cd save-poke-chatbot-user
   ```

2. **Start services with Docker Compose:**

   ```bash
   docker-compose up -d
   ```

3. **Access the application:**
   - API: http://localhost:3000
   - PostgreSQL: localhost:5432

4. **View logs:**

   ```bash
   docker-compose logs -f app
   ```

5. **Stop services:**
   ```bash
   docker-compose down
   ```

## Port Configuration

By default, the application uses these ports:

- **App**: 3000 (external) → 3000 (internal)
- **PostgreSQL**: 5432 (external) → 5432 (internal)

**To change ports** (if ports are already in use):

1. **Edit docker-compose.yaml** to change external ports:

   ```yaml
   services:
     app:
       ports:
         - '8080:3000' # Change 8080 to your preferred port
     postgres:
       ports:
         - '5433:5432' # Change 5433 to your preferred port
   ```

2. **Update environment variables** if changing app port:

   ```yaml
   environment:
     - PORT=3000 # Keep this as 3000 (internal port)
   ```

3. **Access your app** on the new port:
   - API: http://localhost:8080 (or your chosen port)

**Common port alternatives:**

- App: 8080, 8000, 3001, 4000
- PostgreSQL: 5433, 5434, 15432

## Diagram

```
+----------------+          +---------------------+          +------------------+
|    User        | <----->  | Telegram Platform  | <------> |  Kata Platform   |
| (Telegram App) |          | (Messaging Layer)  |          | (Flows, NLU, etc)|
+----------------+          +---------------------+          +---------+--------+
                                                                      |
                -------------------------------------------------------
                |                                                     |
                v                                                     v
+----------------------------+                            +----------------------+
|       API Service          |                            |      PokéAPI         |
|         (NestJS)           |                            |  (Pokemon details)   |
+------------+---------------+                            +----------------------+
             |
             v
+---------------------------+
| PostgreSQL Database       |
| (users: name, etc.)       |
+---------------------------+
```

