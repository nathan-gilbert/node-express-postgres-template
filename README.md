# node-express-postgres-template

A simple template for building APIs using Node, Express and Postgres

## Usage

- install postgres: `brew install postgresql`
- create db: `createdb node-demo`
- run migrations (in fish shell): `env DATABASE_URL=postgres://localhost:5432/node-demo npm run migrate up`
- run the server `npm run start:dev`
- hit the users endpoint `curl -X GET http://localhost:8080/api/users`
- create test db: `createdb node-demo-test`
- run the unit tests `npm run test`
- get the test coverage stats: `npm run coverage`
- compile TypeScript: `tsc`
- lint TypeScript: `tsc --pretty`
- upgrade npm packages: `ncu`

## Resources

- <https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/>
- <https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize>
- <https://github.com/nedssoft/sequelize-with-postgres-tutorial>
- <https://www.rapiddg.com/article/calling-rest-api-nodejs-script>
- <https://www.cuelogic.com/blog/microservices-with-node-js>
- <https://attacomsian.com/blog/http-requests-in-nodejs/>

Long running tasks:

- <https://riptutorial.com/node-js/example/21833/processing-long-running-queries-with-node>
- <https://itnext.io/handling-long-running-api-requests-in-nodejs-403bd566d47>
- <https://medium.com/better-programming/how-to-build-a-job-queue-with-node-js-ffadf7e66daf>

## TODO

- Convert to Typescript
- Need to mock and/or create / reset a database for testing
- Add tests for endpoints
