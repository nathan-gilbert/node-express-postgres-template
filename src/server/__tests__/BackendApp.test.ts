import request from 'supertest'
import { StatusCodes } from 'http-status-codes'
import app from '../BackendApp'

describe('Index endpoint', () => {
  it('should return template text', async () => {
    const response = await request(app).get('/api')
    expect(response.statusCode).toEqual(StatusCodes.OK)
    expect(response.body).toHaveProperty('info')
  })

  it('should return all users', async () => {
    const response = await request(app).get('/api/users')
    expect(response.statusCode).toEqual(StatusCodes.OK)
    expect(response.body.length).toBe(0)
  })
})
