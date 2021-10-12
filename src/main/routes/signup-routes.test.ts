import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  it('should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Ebert',
        email: 'ebert@mail.com',
        password: '123123123',
        password_confirmation: '123123123'
      })
      .expect(200)
  })
})
