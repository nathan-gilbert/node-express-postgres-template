# node-express-postgres-template

A simple template for building APIs using Typescript, Node, Express and
Postgres. This template includes linting with eslint and prettier. Tests are ran
with `jest`.

## Usage

- Install postgres: for macOS: `brew install postgresql`
- Create the app db: `createdb node-demo`
- Run migrations (in fish shell): `env DATABASE_URL=postgres://localhost:5432/node-demo npm run migrate up`
- Run the server: `npm run start:dev`
- Hit the users endpoint: `curl -X GET http://localhost:8080/api/users`
- Create the test db: `createdb node-demo-test`
- Run the unit tests: `npm run test`
- Get the test coverage stats: `npm run coverage`
- Lint: `npm run lint`
- Upgrade npm packages: `ncu`

## TODO

- Need to create a class for the database layer, something that will facilitate
  automatically closing the connections upon exit instead of directly calling
  the `shutdown` method in the tests.
