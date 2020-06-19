# node-express-postgres-template

A simple template for building APIs using Node, Express and Postgres

## Usage

- create db: `createdb node-demo`
- run migrations (in fish shell): `env DATABASE_URL=postgres://localhost:5432/node-demo npm run migrate up`
- run the server `npm run start:dev`
- run the unit tests `npm test`

## Resources

- <https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/>
- <https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize>

## TODO

- Need to mock and/or create / reset a testing database
