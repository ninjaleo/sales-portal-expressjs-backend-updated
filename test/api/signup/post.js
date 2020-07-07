//process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../../app.js');
const conn = require('../../../db/index.js');
const { User } = require('../../../db/models/user.js');





describe('POST /signup', () => {
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

  it('OK, Status Failed - User Already Registered ', (done) => {
    request(app).post('/signup')
      .send({
        "email": "velandhi@gmail.com",
        "password": "Dummy@123",
        "confirmPassword": "Dummy@123",
        "username": "Velandhi",
        "address": 0,
        "addresses": [
          {
            "addressLine1": "FLAT 6",
            "addressLine2": "2 CHURCH STREET",
            "city": "HALIFAX",
            "region": "West Yorkshire",
            "zip": "HX1 1QY",
            "country": "Andorra"
          }]
      })
      .then((res) => {
        const body = res.body;

        const { status, code } = res.body;

        console.log("Some details __ DEBUG " + status + code);
        expect(body).to.contain.property('status').to.equal('failed');
        expect(status).to.equal('failed');
        done();
      })
      .catch((err) => done(err));
  });


/*   it('OK, New User - Registered Successfully ', (done) => {
    request(app).post('/signup')
      .send({
        "email": "Test2@gmail.com",
        "password": "Dummy@123",
        "confirmPassword": "Dummy@123",
        "username": "Test_ID1",
        "address": 0,
        "addresses": [
          {
            "addressLine1": "FLAT 6",
            "addressLine2": "2 CHURCH STREET",
            "city": "HALIFAX",
            "region": "West Yorkshire",
            "zip": "HX1 1QY",
            "country": "Andorra"
          }]
      })
      .then((res) => {
        const body = res.body;

        const { status, code } = res.body;

        console.log("Some details __ DEBUG " + status + code);
        expect(status).to.equal('success');
        
        done();
      })
      .catch((err) => done(err));
  }); */




  it('Fail, return status code as "11000"', (done) => {
    request(app).post('/signup')
      .send({
        "email": "velandhi@gmail.com",
        "password": "Dummy@123",
        "confirmPassword": "Dummy@123",
        "username": "Velandhi",
        "address": 0,
        "addresses": [
          {
            "addressLine1": "FLAT 6",
            "addressLine2": "2 CHURCH STREET",
            "city": "HALIFAX",
            "region": "West Yorkshire",
            "zip": "HX1 1QY",
            "country": "Andorra"
          }]
      })
      .then((res) => {
        const responseStatus = res.unauthorized;
        const { status, code } = res.body;


        console.log("Response Body" + res.unauthorized)
        expect(responseStatus)
          .to.equal(false)
        done();
      })
      .catch((err) => done(err));
  });
})


