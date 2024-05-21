# Seed database

After connecting Prisma to your database, run `node seed.tsx` in the terminal

# Quick Development

The `docker-compose-dev.yaml` includes a local postgres database and a local hasura engine for quick development. In your terminal, type `docker-compose up --build` to create a new container with Hasura and Postgres. 

**Note**

By default, the docker-compose creates a new container with a Postgres instance. In this project, the Hasura engine is configured to connect to your local database (hosted on your local machine), outside of the Hasura container. This choice was made so it was easier to connect other tools like PgAdmin. This is the connection string responsible for that:

```bash
HASURA_GRAPHQL_METADATA_DATABASE_URL: postgres://postgres:postgres@host.docker.internal:5432/postgres
```

[Referenced doc](https://github.com/hasura/graphql-engine/blob/master/install-manifests/docker-compose/docker-compose.yaml)


After the containers are running, visit http://localhost:8080/console . Follow the steps in [this guide](https://hasura.io/docs/latest/getting-started/docker-simple/) to connect the local database.

# Content

For this boilerplate, I am following [this guide](https://hasura.io/learn/graphql/react/introduction/), but instead of using a cloud database, or Hasura cloud, I am developing with local resources.

# Dependencies

The app was created with `npx create-react-app my-app --template typescript`
Other dependencies are: `npm install @apollo/client graphql @auth0/auth0-react react-bootstrap react-router-dom history`

# Security

https://hasura.io/docs/latest/auth/quickstart/

There only security feature added is the API endpoint protection with `HASURA_GRAPHQL_ADMIN_SECRET: myadminsecretkey`. To make a call, target `http://localhost:8080/v1/graphql` and in the headers pass as a key `X-Hasura-Admin-Secret`. As a value `myadminsecretkey`

@clerk/clerk-react