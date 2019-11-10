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

let testCommentId;
let currentToken;

const deleteCommentUrl = `/api/v1/comments/${SEED_INVITE_ID}`;

const authDetails = {
  email: 'admin@mail.com', // valid login details
  password: '123456',
};

describe('COMMENT CONTROLLER', () => {
  describe('POST CREATE COMMENT', () => {
    it('it should create a comment on an existing post', (done) => {
      chai.request(app)
        .post(signinUrl)
        .send(authDetails)
        .end((error, res) => {
          chai.request(app)
            .post(commentUrl)
            .set('Authorization', `${res.body.payload.token}`) // add jwt header
            .send({
              body: 'A test comment on a nice post?'
            })
            .end((err, res) => {
              expect(res).to.have.status(200);
              expect(res.body.success).to.equal(true);
              expect(res.body.payload).to.have.property('commentId');
              // Save comment Id
              testCommentId = res.body.payload.commentId;
              expect(res.body.payload).to.have.property('body');
              expect(res.body.payload).to.have.property('inviteId');
              expect(res.body.payload).to.have.property('userId');
              done();
            });
        });
    });

    it('it should respond with status 400 for invalid or missing params', (done) => {
      chai.request(app)
        .post(signinUrl)
        .send(authDetails)
        .end((error, res) => {
          chai.request(app)
            .post(commentUrl)
            .set('Authorization', `${res.body.payload.token}`) // add jwt header
            .send({}) // omitted body
            .end((err, res) => {
              expect(res).to.have.status(400);
              expect(res.body.success).to.equal(false);
              done();
            });
        });
    });

    it('it should respond with status 404 when invite is not found', (done) => {
      chai.request(app)
        .post(signinUrl)
        .send(authDetails)
        .end((error, res) => {
          chai.request(app)
            .post('/api/v1/comments/fdbd468a-2976-4f2f-8fe0-ae12dd8d5123')
            .set('Authorization', `${res.body.payload.token}`) // add jwt header
            .send({
              body: 'A test comment on a nice post?'
            })
            .end((err, res) => {
              expect(res).to.have.status(404);
              expect(res.body.success).to.equal(false);
              done();
            });
        });
    });

    it('it should respond 401 session expired for missing/expired token', (done) => {
      chai.request(app)
        .post(commentUrl) // omit token
        .send({
          body: 'A test comment on a nice post?'
        })
        .end((err, res) => {
          expect(res).to.have.status(401);
          expect(res.body.success).to.equal(false);
          done();
        });
    });
  });

  describe('GET LIST COMMENTS', () => {
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

  // Delete Comment bro
  describe('> DELETE COMMENT', () => {
    describe('>> Delete Comment', () => {
      before((done) => {
        chai.request(app)
          .post(signinUrl)
          .send(authDetails)
          .end((error, res) => {
            currentToken = res.body.payload.token;
            done();
          });
      });

      // Then delete specific comment

      it('should delete comment and return 200 code', (done) => {
        chai.request(app)
          .post(commentUrl)
          .set('Authorization', `${currentToken}`) // add jwt header
          .send({
            body: 'A test comment on a nice post?'
          })
          .end((err, res) => {
            chai.request(app)
              .delete(`${deleteCommentUrl}/${res.body.payload.commentId}`)
              .set('Authorization', `${currentToken}`)
              .end((error, res) => {
                expect(res).to.have.status(200);
                expect(res.body.success).to.equal(true);
                done();
              });
          });
      });

      // It should return error if comment does not exist
      it('should return 404 if comment does not exist', (done) => {
        chai.request(app)
          .post(commentUrl)
          .set('Authorization', `${currentToken}`) // add jwt header
          .send({
            body: 'A test comment on a nice post?'
          })
          .end((err, res) => {
            chai.request(app)
              .delete(`${deleteCommentUrl}/randomfakeid=yooo`)
              .set('Authorization', `${currentToken}`)
              .end((error, res) => {
                expect(res).to.have.status(404);
                expect(res.body.success).to.equal(false);
                done();
              });
          });
      });

      it('should return authorization error if comment is being deleted by non authorized user', (done) => {
        chai.request(app)
          .post(commentUrl)
          .set('Authorization', `${currentToken}`) // add jwt header
          .send({
            body: 'A test comment on a nice post?'
          })
          .end((err, res) => {
            chai.request(app)
              .delete(`${deleteCommentUrl}/${res.body.payload.commentId}`)
              .set('Authorization', 'fakenonsense=token')
              .end((error, res) => {
                expect(res).to.have.status(401);
                expect(res.body.success).to.equal(false);
                done();
              });
          });
      });
    });
  });
});
