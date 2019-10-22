import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

const { expect } = chai;
chai.use(chaiHttp);

const signinUrl = '/api/v1/auth/signin';

describe('AUTH CONTROLLER', () => {
  describe('POST SIGN IN', () => {
    it('it should login a user with valid email and password', (done) => {
      chai.request(app)
        .post(signinUrl)
        .send({
          email: 'admin@mail.com', // valid login details
          password: '123456',
        })
        .end((error, res) => {
          expect(res).to.have.status(200);
          expect(res.body.success).to.equal(true);
          expect(res.body.payload).to.have.property('_id');
          expect(res.body.payload).to.have.property('email');
          done();
        });
    });
  });
});
