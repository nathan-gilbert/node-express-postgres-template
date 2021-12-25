import request from 'supertest'
import { StatusCodes } from 'http-status-codes'
import app from '..'

describe('Index endpoint', () => {
  it('should return template text', async () => {
    const res = await request(app).get('/api')
    expect(res.statusCode).toEqual(StatusCodes.OK)
    expect(res.body).toHaveProperty('info')
  })

  it('should return all users', async () => {
    const res = await request(app).get('/api/users')
    expect(res.statusCode).toEqual(StatusCodes.OK)
  })
})
