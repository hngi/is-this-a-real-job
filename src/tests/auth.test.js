import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

const { expect } = chai;
chai.use(chaiHttp);

const signinUrl = '/api/v1/auth/signin';
const signupUrl = '/api/v1/auth/signup';
const regularUser = {
  name: 'Regualar E. User',
  username: 'on_a_regs_ting',
  email: 'regular@regular.com',
  password: 'password1234'
};

describe('AUTH CONTROLLER', () => {
  describe('POST SIGN IN', () => {
    it('it should login a user with valid email and password', done => {
      chai
        .request(app)
        .post(signinUrl)
        .send({
          email: 'admin@mail.com', // valid login details
          password: '123456'
        })
        .end((error, res) => {
          expect(res).to.have.status(200);
          expect(res.body.success).to.equal(true);
          expect(res.body.payload).to.have.property('userId');
          expect(res.body.payload).to.have.property('email');
          done();
        });
    });
  });

  describe('POST REGULAR USER SIGN UP', () => {
    it('should create a new user using username, name, email and password', done => {
      chai
        .request(app)
        .post(signupUrl)
        .send({
          name: 'Regualar E. User',
          username: 'on_a_regs_ting',
          email: 'regular@regular.com',
          password: 'password1234'
        })
        .end((error, res) => {
          expect(res).to.have.status(200);
          expect(res.body.success).to.equal(true);
          expect(res.body.payload).to.have.property('userId');
          expect(res.body.payload).to.have.property('email');
          expect(res.body.payload).to.have.property('isAdmin');
          expect(res.body.payload).to.have.property('isBlocked');
          expect(res.body.payload).to.have.property('username');
          expect(res.body.payload).to.have.property('name');
          expect(res.body.payload).to.have.property('updatedAt');
          expect(res.body.payload).to.have.property('createdAt');
          expect(res.body.payload).to.not.have.property('password');
          done();
        });
    });
    it('should respond with 400 error from missing parameter', done => {
      chai
        .request(app)
        .post(signupUrl)
        .send({
          name: 'Bad User',
          email: 'email@email.com',
          password: '1234%'
        })
        .end((error, res) => {
          expect(res).to.have.status(400);
          expect(res.body.success).to.equal(false);
          expect(res.body.message).to.equal('Bad Sign up Input');
          done();
        });
    });
    it('should respond with validation errors for bad inputs', done => {
      chai
        .request(app)
        .post(signupUrl)
        .send({
          name: 'Bad User',
          username: 'bad_username',
          email: 'bad email :-p',
          password: 1234
        })
        .end((error, res) => {
          expect(res).to.have.status(400);
          expect(res.body.success).to.equal(false);
          expect(res.body.payload).to.have.members([
            'password must be a string',
            'email must be a valid email'
          ]);
          expect(res.body.message).to.equal('Bad Sign up Input');
          done();
        });
    });
    it('should respond with 409 error if user is a duplicate', done => {
      chai
        .request(app)
        .post(signupUrl)
        .send(regularUser)
        .end((error, res) => {
          chai
            .request(app)
            .post(signupUrl)
            .send(regularUser)
            .end((e, res) => {
              expect(res).to.have.status(409);
              expect(res.body.success).to.be.equal(false);
              expect(res.body.message).to.be.equal(
                'User Already exists: Duplicate User'
              );
              done();
            });
        });
    });
  });
});
