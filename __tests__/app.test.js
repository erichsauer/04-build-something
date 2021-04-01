const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('04-build-something routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  let testProfile;
  beforeEach(async () => {
    testProfile = await request(app)
      .post('/api/v1/profiles')
      .send({ name: 'abel', word: 'wizard' });
  });

  afterAll(() => pool.end());

  it('should create a user profile when route is hit', async () => {
    const res = await request(app)
      .post(`/api/v1/profiles`)
      .send({ name: 'maple', word: 'goopy' });

    expect(res.body).toEqual({
      gif: expect.any(String),
      id: '2',
      name: 'maple',
      word: 'goopy',
    });
  });

  it('should retrieve one user profile when route is hit', async () => {
    const res = await request(app).get(
      `/api/v1/profiles/${testProfile.body.id}`
    );

    expect(res.body).toEqual(testProfile.body);
  });

  it('should retrieve all user profiles when route is hit', async () => {
    const res = await request(app).get(`/api/v1/profiles/`);

    expect(res.body[0]).toEqual(testProfile.body);
  });

  it('should update a user profile when route is hit', async () => {
    const res = await request(app)
      .put('/api/v1/profiles/1')
      .send({ name: 'maple', word: 'burger' });

    expect(res.body).toEqual({
      gif: expect.any(String),
      id: '1',
      name: 'maple',
      word: 'burger',
    });
  });

  it('should delete a user profile when route is hit', async () => {
    const res = await request(app).delete('/api/v1/profiles/1');

    expect(res.body).toEqual({
      gif: expect.any(String),
      id: '1',
      name: 'abel',
      word: 'wizard',
    });
  });
});
