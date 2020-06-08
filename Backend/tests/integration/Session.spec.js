const request = require('supertest');
const app = require('../../src/app');
const database = require('../../src/config/database');

describe('Session', () => {
  beforeAll(async () => {
    await database.model('User').create({
      nome: 'Marcos Cesar',
      login: 'marcos',
      password: '123',
      papel: 'Tutor'
    });

    await database.model('User').create({
      nome: 'Usuário 2',
      login: 'usuario',
      password: '123',
      papel: 'Médico'
    });
  });

  afterAll(async () => {
    database.model('User').collection.drop();
    database.model('Action').collection.drop();
  });

  it('should be able to make login as Tutor', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        login: 'marcos',
        password: '123'
      });

    expect(response.body).toHaveProperty('token');
  });

  it('should reject incorrect username/password', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        login: 'wrong',
        password: 'password'
      });

    expect(response.body).toMatchObject({
      message: 'Login/senha incorretos!'
    })
  })

  it("shouldn't be able to make login without action", async () => {
    const response = await request(app)
      .post('/login')
      .send({
        login: 'usuario',
        password: '123'
      })

    expect(response.body).toMatchObject({
      message: 'Não é permitido acessar o sistema no período atual'
    })
  })

  it("shouldn't be able to make login with an action created two days from now", async () => {
    let response = await request(app).post('/login').send({ login: 'marcos', password: '123' })
    const token = response.body.token

    const initial = new Date()
    initial.setDate(initial.getDate() + 2)
    const final = new Date()
    final.setDate(initial.getDate() + 1)

    await request(app).post('/action').auth(token, { type: 'bearer' }).send({ titulo: 'Acao nova', dataInicio: initial.toISOString(), dataFinal: final.toISOString() })

    response = await request(app)
      .post('/login')
      .send({ login: 'usuario', password: '123' });

    expect(response.body).toMatchObject({
      message: 'Não é permitido acessar o sistema no período atual'
    })

  })

  it('should be able to make login with an action previously created', async () => {
    let response = await request(app).post('/login').send({ login: 'marcos', password: '123' })
    const token = response.body.token

    const now = new Date()
    const tomorow = new Date()
    tomorow.setDate(now.getDate() + 1)

    await request(app).post('/action').auth(token, { type: 'bearer' }).send({ titulo: 'Acao nova', dataInicio: now.toISOString(), dataFinal: tomorow.toISOString() })

    response = await request(app)
      .post('/login')
      .send({ login: 'usuario', password: '123' })

    expect(response.body).toHaveProperty('token')
  })
})