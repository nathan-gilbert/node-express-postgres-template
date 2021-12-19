const request = require('supertest')
const app = require('../index')

describe('Index endpoint', () => {
  /*
  afterAll( () => {
    var connectionString =
      "User ID=;Password=;Host=localhost;Port=5432;Database=node-demo-test;";
    pg.connect(connectionString, function (err, client) {
      client.end();
    });
  });
  */

  it('should return template text', async (done) => {
    const res = await request(app).get('/api')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('info')
    done()
  })

  it('should return all users', async (done) => {
    const res = await request(app).get('/api/users')
    expect(res.statusCode).toEqual(200)
    done()
  })
})
