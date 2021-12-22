import { request } from 'supertest'
import { StatusCodes } from 'http-status-codes'
import BackendApp from '../BackendApp'

describe('Index endpoint', () => {
  it('should return template text', async (done) => {
    const res = await request(BackendApp).get('/api')
    expect(res.statusCode).toEqual(StatusCodes.OK)
    expect(res.body).toHaveProperty('info')
    done()
  })

  it('should return all users', async (done) => {
    const res = await request(BackendApp).get('/api/users')
    expect(res.statusCode).toEqual(StatusCodes.OK)
    done()
  })
})
