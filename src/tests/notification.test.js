import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import { SEED_USER_ID,
  SEED_INVITE_ID } from '../config/constants';

const { expect } = chai;
chai.use(chaiHttp);

const commentUrl = `/api/v1/comments/${SEED_INVITE_ID}`;
const signinUrl = '/api/v1/auth/signin';
const notificationUrl = '/api/v1/notifications';

const authDetails = {
  email: 'admin@mail.com', // valid login details
  password: '123456',
};

describe('NOTIFICATION CONTROLLER', () => {
  describe('POST CREATE NOTIFICATION', () => {
    it('it should create a notification when an existing post is commented on', (done) => {
      chai.request(app)
        .post(signinUrl) // login
        .send(authDetails)
        .end((error, res) => {
          chai.request(app)
            .post(commentUrl) // comment on post
            .set('Authorization', `${res.body.payload.token}`) // add jwt header
            .send({ body: 'A test comment on a nice post?' })
            .end((err, res) => {
              expect(res).to.have.status(200);
              expect(res.body.success).to.equal(true);
              expect(res.body.payload).to.have.property('userId');
              expect(res.body.payload).to.have.property('user');
              expect(res.body.payload).to.have.property('commentId');
              expect(res.body.payload).to.have.property('notification');
              done();
            });
        });
    });

    it('it should create a notification when an existing post is upvoted', (done) => {
      chai.request(app)
        .post(`${notificationUrl}?type=upvote`)
        .send({
          target: SEED_USER_ID, // test user
          inviteId: SEED_INVITE_ID
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.success).to.equal(true);
          expect(res.body.payload).to.have.property('notificationId');
          expect(res.body.payload).to.have.property('notification');
          expect(res.body.payload).to.have.property('isSeen').to.equal(false);
          expect(res.body.payload).not.to.have.property('target');
          expect(res.body.payload).to.have.property('userId');
          done();
        });
    });

    it('it should send the new notification via email', (done) => {
      chai.request(app)
        .post(signinUrl) // login
        .send(authDetails)
        .end((error, res) => {
          chai.request(app)
            .post(commentUrl) // comment on post
            .set('Authorization', `${res.body.payload.token}`) // add jwt header
            .send({
              body: 'A test comment on a nice post?',
              userId: SEED_USER_ID, // test user
            })
            .end((err, res) => {
              chai.request(app)
                .post(`${notificationUrl}?type=comment`)
                .send({
                  target: SEED_USER_ID, // test user
                  commentId: res.body.payload.commentId,
                  inviteId: res.body.payload.inviteId
                })
                .end((err, res) => {
                  expect(res).to.have.status(200);
                  expect(res.body.payload).to.have.property('mailSent');
                  expect(res.body.payload.mailSent).to.equal(true);
                  done();
                });
            });
        });
    });

    it('it should respond with status 400 for invalid or missing body params', (done) => {
      chai.request(app)
        .post(`${notificationUrl}?type=upvote`)
        .send({}) // omitted target
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.success).to.equal(false);
          done();
        });
    });

    it('it should respond with status 404 for invalid user', (done) => {
      chai.request(app)
        .post(`${notificationUrl}?type=upvote`)
        .send({
          target: 'ff7a2a37-530d-4961-a9ec-fda2ddd2c279', // invalid user
          inviteId: SEED_INVITE_ID
        }) // omitted target
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body.success).to.equal(false);
          done();
        });
    });

    it('it should respond with status 400 for invalid or missing query params', (done) => {
      chai.request(app)
        .post(notificationUrl) // omitted `type`
        .send({ target: SEED_USER_ID, // test user
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.success).to.equal(false);
          done();
        });
    });
  });

  describe('GET LIST NOTIFICATIONS', () => {
    it('it should return all notifications or an empty array for a user', (done) => {
      chai.request(app)
        .post(signinUrl) // login
        .send(authDetails)
        .end((error, res) => {
          chai.request(app)
            .get(`${notificationUrl}`)
            .set('Authorization', `${res.body.payload.token}`) // add jwt header
            .end((err, res) => {
              expect(res).to.have.status(200);
              expect(res.body.success).to.equal(true);
              expect(res.body.payload).to.be.an.instanceof(Array);
              expect(res.body.payload).to.have.length.that.is.at.least(0);
              done();
            });
        });
    });
  });

  describe('PATCH MARK NOTIFICATION AS SEEN', () => {
    it('it should mark a specified notification as seen', (done) => {
      chai.request(app)
        .patch(`${notificationUrl}/${SEED_USER_ID}`)
        .end((error, res) => {
          expect(res).to.have.status(200);
          expect(res.body.success).to.equal(true);
          expect(res.body.payload).to.have.property('notificationId');
          expect(res.body.payload).to.have.property('isSeen').to.equal(true);
          done();
        });
    });
  });
});
