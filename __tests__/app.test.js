const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { getGif } = require('../lib/utils/giphy');

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

  it('should retrieve one user profile when route is hit', async () => {
    const res = await request(app).get('/api/v1/profiles/1');
    expect(res.body).toEqual({
      gif:
        'https://media3.giphy.com/media/Qs75BqLW44RrP0x6qL/giphy.gif?cid=f3311ef94yjyrcpzw486ei914a9t03x5u1djz1z0lpksr6v6&rid=giphy.gif',
      id: '1',
      name: 'abel',
      word: 'wizard',
    });
  });
});
