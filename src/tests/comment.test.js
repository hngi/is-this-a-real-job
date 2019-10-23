import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import {
  SEED_USER_ID,
  SEED_INVITE_ID
} from '../config/constants';

const {
  expect
} = chai;
chai.use(chaiHttp);

const commentUrl = `/api/v1/comments/${SEED_INVITE_ID}`;
const signinUrl = '/api/v1/auth/signin';

const authDetails = {
  email: 'admin@mail.com', // valid login details
  password: '123456',
};

describe('COMMENT CONTROLLER', () => {
  describe('CREATE COMMENT', () => {
    it('it should create a comment on an existing post', (done) => {
      chai.request(app)
        .post(signinUrl)
        .send(authDetails)
        .end((error, res) => {
          chai.request(app)
            .post(commentUrl)
            .set('Authorization', `${res.body.payload.token}`) // add jwt header
            .send({
              body: 'A test comment on a nice post?',
              userId: SEED_USER_ID, // test user
            })
            .end((err, res) => {
              expect(res).to.have.status(200);
              expect(res.body.success).to.equal(true);
              expect(res.body.payload).to.have.property('commentId');
              expect(res.body.payload).to.have.property('body');
              expect(res.body.payload).to.have.property('inviteId');
              expect(res.body.payload).to.have.property('userId');
              done();
            });
        });
    });

    describe('Bad input/Missing parameters', () => {
      it('it should respond with status 400 for invalid or missing params', (done) => {
        chai.request(app)
          .post(signinUrl)
          .send(authDetails)
          .end((error, res) => {
            chai.request(app)
              .post(commentUrl)
              .set('Authorization', `${res.body.payload.token}`) // add jwt header
              .send({
                body: 'A test comment on a nice post?' // omitted userId
              })
              .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body.success).to.equal(false);
                done();
              });
          });
      });
    });

    describe('Not logged in/Session expired', () => {
      it('it should respond 401 session expired for missing/expired token', (done) => {
        chai.request(app)
          .post(commentUrl) // omit token
          .send({
            body: 'A test comment on a nice post?',
            userId: SEED_USER_ID, // test user
          })
          .end((err, res) => {
            expect(res).to.have.status(401);
            expect(res.body.success).to.equal(false);
            done();
          });
      });
    });
  });

  describe('LIST COMMENTS', () => {
    it('it should return all comments or an empty array on an existing post', (done) => {
      chai.request(app)
        .get(commentUrl)
        .end((error, res) => {
          expect(res).to.have.status(200);
          expect(res.body.success).to.equal(true);
          expect(res.body.payload).to.be.an.instanceof(Array);
          expect(res.body.payload).to.have.length.that.is.at.least(0);
          done();
        });
    });
  });
});
