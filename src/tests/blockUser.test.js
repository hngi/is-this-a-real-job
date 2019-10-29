import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index'; import {
  SEED_USER_ID_2,
} from '../config/constants';

const { expect } = chai;
chai.use(chaiHttp);

const signinUrl = '/api/v1/auth/signin';
const blockUserbaseUrl = '/api/v1/users/block';
let currentToken;

describe('BLOCK USER', () => {
  describe('ADMIN BLOCK USER', () => {
    before((done) => {
      chai.request(app)
        .post(signinUrl)
        .send({
          email: 'admin@mail.com', // valid login details
          password: '123456',
        })
        .end((error, res) => {
          currentToken = res.body.payload.token;
          done();
        });
    });
    it('it should block a user by an admin', (done) => {
      chai.request(app)
        .patch(`${blockUserbaseUrl}/${SEED_USER_ID_2}`)
        .set('Authorization', currentToken)
        .end((error, res) => {
          expect(res).to.have.status(200);
          expect(res.body.payload).to.have.property('isBlocked');
          done();
        });
    });

    it('it should return 404 on resource not found', (done) => {
      chai.request(app)
        .patch(`${blockUserbaseUrl}/b3cd468a-5466-4f2f-8fe0-ae12dd8d5677`)
        .set('Authorization', currentToken)
        .end((error, res) => {
          expect(res).to.have.status(404);
          expect(res.body.message).to.equal('User not found');
          done();
        });
    });

    it('it should return 400 if UUID missing', (done) => {
      chai.request(app)
        .patch(`${blockUserbaseUrl}/MaLf90rMeD_iD`)
        .set('Authorization', currentToken)
        .end((error, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal('Bad Request');
          done();
        });
    });
  });

  describe('USER BLOCK ANOTHER USER', () => {
    before((done) => {
      chai.request(app)
        .post(signinUrl)
        .send({
          email: 'johndoe@mail.com', // valid login details
          password: '123456',
        })
        .end((error, res) => {
          currentToken = res.body.payload.token;
          done();
        });
    });
    it('it should not block a user if not admin', (done) => {
      chai.request(app)
        .patch(`${blockUserbaseUrl}/${SEED_USER_ID_2}`)
        .set('Authorization', currentToken)
        .end((error, res) => {
          expect(res).to.have.status(403);
          expect(res.body.message).to.equal('Forbidden access');
          done();
        });
    });
  });
});
