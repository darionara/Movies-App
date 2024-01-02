# Movies app

This is an app where you can see most popular movies.
The app is fetching data from [TMDB](https://www.themoviedb.org/) using it's v3 API (stable).

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `client`: a [Next.js](https://nextjs.org/) app
- `server`: a [NestJS](https://nestjs.com/) app
- `api-client`: auto generated `axios-typescript` client to fetch data from `server` app to `client`
- `common-types`: package with types shared between `server` and `client` apps.
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
npm build
```

### Develop

To develop all apps and packages, follow the steps:

- Make sure your local `server` app connects to `TMDB` with your API key.
  - Create account on [TMDB](https://www.themoviedb.org/)
  - create `.env` file inside `./apps/server` - you can just run the command `cp ./apps/server/.example.env ./apps/server/.env` in the terminal.
  - Go to [your account's settings](https://www.themoviedb.org/settings/api), copy your API key and pass it to `TMDB_API_KEY` variable.
- Make sure `.env.local` file exists in your `app/client` and has every necessary variables declared - run `cp ./apps/client/.example.env ./apps/client/.env.local`.
- Run the following command:

```sh
npm run dev
# or - to run only client app (make sure your local client app is connected to some working server app)
npm run dev:client
# or - to run only server app
npm run dec:server
```

### Swagger - API documentation

To open API documentation run:
```sh
npm run dev
# or
npm run dev:server
```

and go to `http://localhost:3001/api` in the browser.

### Api client internal package

Api client package is auto generated [typescript-axios](https://openapi-generator.tech/docs/generators/typescript-axios/) api client from OpenAPI to consume data from `server` app inside `client` app. It's fully typed, configured and ready to use.

Example of usage in `client` app:

```ts
import { apiClient } from '@/api';

const response = await apiClient.topRatedControllerFindAll({ genres: [1, 2, 3], sort: 'exampleAsc' });
```

To generate/update `api-client` package you need to have Docker installed. then:
```sh
# Run at least server:
npm run dev
# or
npm run dev:server

# Run generation command:
npm run generate-and-update-api-client

# Install packages:
npm install
```

In case VSC cannot see the changes restart TS server.

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
