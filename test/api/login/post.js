//process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../../app.js');
const conn = require('../../../db/index.js');

describe('POST /login', () => {
  before((done) => {
    conn.connect()
      .then(() => done())
      .catch((err) => done(err));
  })

  after((done) => {
    conn.close()
      .then(() => done())
      .catch((err) => done(err));
  })

  it('OK, user login works ', (done) => {
    request(app).post('/login')
     .send({ email: 'sureshspartacus@gmail.com', password: "Dummy@123" })
     //.query({ email: 'sureshspartacus@gmail.com', password: "Dummy@123" })
      .then((res) => {
        const body = res.body;
        console.log("Some details "+res.body);
        expect(body).to.contain.property('status');
        expect(body).to.contain.property('username');
        done();
      })
      .catch((err) => done(err));
  });

  it('Fail, returns status "UNAUTHORIZED"', (done) => {
    request(app).post('/login')
      .send({ email: 'sureshspartacus@gmail.com' })
      .then((res) => {
        const responseStatus = res.unauthorized;
        
        console.log( "Response Body"+ res.unauthorized)
        expect(responseStatus)
          .to.equal(true)
        done();
      })
      .catch((err) => done(err));
  });
})
