//process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../../app.js');
const conn = require('../../../db/index.js');

describe('GET /getQuotes', () => {
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

  it('OK, GET quotes details works ', (done) => {
    request(app).get('/getQuotes')
      .query({ userEmail: 'sureshspartacus@gmail.com'})
      .then((res) => {
        const body = res.body;
        console.log("Some details " + res.body);
        expect(body.length).is.greaterThan(0);
        
        done();
      })
      .catch((err) => done(err));
  });

  it('OK, No Quotes Available ', (done) => {
    request(app).get('/getQuotes')
      .query({ userEmail: 'sureshspart@gmail.com'})
      .then((res) => {
        const body = res.body;
        console.log("Some details " + res.body);
        expect(body.length).to.equal(0);
        
        done();
      })
      .catch((err) => done(err));
  });

  it('Fail, "UNAUTHORIZED" - No EmailID', (done) => {
    request(app).get('/getQuotes')
      .send({  })
      .then((res) => {
        const responseStatus = res.unauthorized;

        console.log("Response Body" + res.unauthorized)
        expect(responseStatus)
          .to.equal(true)
        done();
      })
      .catch((err) => done(err));
  });
})


