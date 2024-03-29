const request = require('supertest');
const app = require('../../src/app');
const database = require('../../src/config/database');

let token;

describe('Form', () => {
  beforeAll(async () => {
    await database.model('User').create({
      nome: 'Marcos Cesar',
      login: 'marcos',
      password: '123',
      papel: 'Tutor'
    });

    const response = await request(app).post('/login').send({
      login: 'marcos',
      password: '123'
    });

    token = response.body.token;
  });

  afterAll(async () => {
    database.model('AssistedUser').collection.drop();
    database.model('Anamnese').collection.drop();
    database.model('Return').collection.drop();
    database.model('User').collection.drop();
  });

  it('should be able to create a new anamnese form', async () => {
    const response = await request(app)
      .post('/form/anamnese')
      .set({
        authorization: `Bearer ${token}`
      })
      .send({
        paciente: {
          nome: 'Marcos',
          cpf: '000.000.000-72',
          dataNascimento: '07/03/1997',
          etnia: 'Pardo',
          cidadeNascimento: 'Patos',
          estadoNascimento: 'PB'
        },
        perfilSocioeconomico: {
          tempoNaRua: '>5 anos',
          costumaDormir: 'rua',
          comoGanhaDinheiro: 'Reciclagem'
        }
      });

    expect(response.body).toHaveProperty('_id');

  });

  it('should store the user after create a anamnese form', async () => {
    const user = await database.model('AssistedUser').findOne({ cpf: '000.000.000-72' });

    expect(user).toMatchObject({
      nome: 'Marcos',
      cpf: '000.000.000-72',
      dataNascimento: '07/03/1997'
    });
  });

  it('should be able to fetch forms for an user', async () => {
    const user = await database.model('AssistedUser').findOne({ cpf: '000.000.000-72' });
    const response = await request(app)
      .get(`/form/${user._id}`)
      .set({
        authorization: `Bearer ${token}`
      })
      .send();

    expect(response.body).toHaveLength(1);
  });
})