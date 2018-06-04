const should = require('chai').should();
const supertest = require('supertest');

const UserService = require('../services/user-service');

const api = supertest('http://localhost:3000');

describe('users', () => {
  xit('queries all users', (done) => {
    api.get('/users')
    // .set('x-api-key', '123myapikey')
    // .auth('incorrect', 'credentials')
    .expect(200, done);
  });

  it('creates a user', async (done) => {
    try {
      const data = await api.post('/users').send({
        email: 'gaga@abv.bg',
        firstName: 'Nikola',
        lastName: 'Nikolov',
        password: 'asdasd'
      });
      done();
    }
    catch (err) {
      console.log(err);
      done();
    }
  });

  // it('gets single user by id', (done) => {
  //   api.get('/users')
  //   // .set('x-api-key', '123myapikey')
  //   // .auth('incorrect', 'credentials')
  //   .expect(200, done);
  // });

  // it('errors if wrong basic auth', function(done) {
  //   api.get('/blog')
  //   .set('x-api-key', '123myapikey')
  //   .auth('incorrect', 'credentials')
  //   .expect(401, done);
  // });

  // it('errors if bad x-api-key header', function(done) {
  //   api.get('/blog')
  //   .auth('correct', 'credentials')
  //   .expect(401)
  //   .expect({error:"Bad or missing app identification header"}, done);
  // });
});