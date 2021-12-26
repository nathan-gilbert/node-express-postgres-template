import request from 'supertest'
import { StatusCodes } from 'http-status-codes'
import app from '../BackendApp'
import { shutdown } from '../../database'

describe('Index endpoint', () => {
  afterAll(() => {
    // TODO -- this should be cleaned up automatically when the BackendApp shuts
    // down
    shutdown()
  })

  it('should return template text', async () => {
    const response = await request(app).get('/api')
    expect(response.statusCode).toEqual(StatusCodes.OK)
    expect(response.body).toHaveProperty('info')
  })

  it('should return all users', async () => {
    await request(app)
      .get('/api/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(StatusCodes.OK)
  })
})
