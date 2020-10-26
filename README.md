# Gardenbuilder

GraphQL API and database interface for Gardenbuilder

## About

Made with Typescript, TypeORM, Postgres and GraphQL

## Getting Started

### Setup

You'll need to also set up a postgresql database named gardenbuilder. I would follow the directions [here](https://tutorial-extensions.djangogirls.org/en/optional_postgresql_installation/).

Alternatively, you could run postgresql locally using docker: `docker run -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -e POSTGRES_DB=gardenbuilder -p 127.0.0.1:5432:5432/tcp library/postgres`

Finally, you'll need to add the following into the `.env` file at the root of the project:

```
TYPEORM_CONNECTION = postgres
TYPEORM_HOST = localhost
TYPEORM_USERNAME = yourUserName
TYPEORM_PASSWORD = yourPassword
TYPEORM_DATABASE = yourDatabaseName
TYPEORM_PORT = 5432
TYPEORM_SYNCHRONIZE = true
TYPEORM_LOGGING = true
TYPEORM_ENTITIES = entities/*.[jt]s,modules/**/entities/*.[jt]
```

### To Run

1. If you haven't install the depencies run `npm install`

2. Start the server with `npm start`

3. Then navigate to [localhost:8000/graphql](http://localhost:8000/graphql).
You should see the graphiQL editor and be able to write queries like

```graphql
query {
  hello
}
```

### To Run Tests

TODO: Add test instructions

## Contributing

For Contributing, Read our [Contribution Guidelines](https://github.com/gardenbuilder/gardenbuilder-backend-typescript/blob/master/CONTRIBUTING.md#contributing)


## Contact

Questions? Feel free to contact Dave at `capndavet@gmail.com`.