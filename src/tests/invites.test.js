/* eslint-disable no-unused-expressions */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import { SEED_USER_ID, SEED_INVITE_ID } from '../config/constants';

const { expect } = chai;
chai.use(chaiHttp);

const invitesUrl = '/api/v1/invites';
const singleInviteUrl = `/api/v1/invites/${SEED_INVITE_ID}`;
const invalidSingleInviteUrl = '/api/v1/invites/invalidUUID';
const unknownSingleInviteUrl = `/api/v1/invites/${SEED_INVITE_ID.replace(
  /\w/,
  1
)}`; // Create an unknown invite id.
const signinUrl = '/api/v1/auth/signin';
const authDetails = {
  email: 'johndoe@mail.com', // valid login details
  password: '123456'
};

describe('INVITES CONTROLLER', () => {
  describe('POST /api/v1/invites', () => {
    it('it should save a new job invite to the database.', done => {
      chai
        .request(app)
        .post(signinUrl)
        .send(authDetails)
        .end((error, res) => {
          chai
            .request(app)
            .post(invitesUrl)
            .set('Authorization', `Bearer ${res.body.payload.token}`) // add jwt header
            .send({
              title: 'A test title',
              body: 'A test bost sit amet.',
              location: 'Lagos',
              company: 'MTN',
            })
            .end((err, res) => {
              expect(res).to.have.status(201);
              expect(res.body.success).to.equal(true);
              expect(res.body.payload).to.have.property('inviteId');
              expect(res.body.payload).to.have.property('userId');
              expect(res.body.payload).to.have.property('title');
              expect(res.body.payload).to.have.property('body');
              expect(res.body.payload).to.have.property('upVotes');
              expect(res.body.payload).to.have.property('updatedAt');
              expect(res.body.payload).to.have.property('createdAt');
              done();
            });
        });
    });

    it('it should respond with status 400 for invalid or missing params', done => {
      chai
        .request(app)
        .post(signinUrl)
        .send(authDetails)
        .end((error, res) => {
          chai
            .request(app)
            .post(invitesUrl)
            .set('Authorization', `Bearer ${res.body.payload.token}`) // add jwt header
            .send({
              body: 'A test invite' // omitted other fields
            })
            .end((err, res) => {
              expect(res).to.have.status(400);
              expect(res.body.success).to.equal(false);
              done();
            });
        });
    });

    it('it should respond 401 session expired for missing/expired token', done => {
      chai
        .request(app)
        .post(invitesUrl) // omit token
        .send({
          title: 'A test title',
          body: 'A test bost sit amet.',
          location: 'Lagos',
          company: 'MTN',
        })
        .end((err, res) => {
          expect(res).to.have.status(401);
          expect(res.body.success).to.equal(false);
          done();
        });
    });
  });

  describe('GET /api/v1/invites', () => {
    it('it should return all invites in the database.', done => {
      chai
        .request(app)
        .get(invitesUrl)
        .end((error, res) => {
          expect(res).to.have.status(200);
          expect(res.body.success).to.equal(true);
          expect(res.body.payload).to.be.an.instanceof(Array);
          expect(res.body.payload).to.have.length.that.is.at.least(0);
          done();
        });
    });
  });

  describe('GET /api/v1/invites/:inviteId', () => {
    it('it should return the single job invite identified by "inviteId" parameter.', done => {
      chai
        .request(app)
        .get(singleInviteUrl)
        .end((error, res) => {
          expect(res).to.have.status(200);
          expect(res.body.success).to.equal(true);
          expect(res.body.payload).to.have.property('inviteId');
          expect(res.body.payload).to.have.property('userId');
          expect(res.body.payload).to.have.property('title');
          expect(res.body.payload).to.have.property('body');
          expect(res.body.payload).to.have.property('upVotes');
          expect(res.body.payload).to.have.property('updatedAt');
          expect(res.body.payload).to.have.property('createdAt');
          done();
        });
    });

    it('it should respond with status 400 for an invalid UUID in "inviteId" parameter.', done => {
      chai
        .request(app)
        .get(invalidSingleInviteUrl)
        .end((error, res) => {
          expect(res).to.have.status(400);
          expect(res.body.success).to.equal(false);
          done();
        });
    });

    it('it should respond with status 404 if no invite is found with the given inviteId', done => {
      chai
        .request(app)
        .get(unknownSingleInviteUrl)
        .end((error, res) => {
          expect(res).to.have.status(404);
          expect(res.body.success).to.equal(false);
          done();
        });
    });
  });

  describe('> Search Invites', () => {
    describe('GET /api/v1/invites/search/json?q=test', () => {
      it('it should return all invites in the database that match the qiven query', done => {
        chai
          .request(app)
          .get(`${invitesUrl}/search/json?q=test`)
          .end((error, res) => {
            expect(res).to.have.status(200);
            expect(res.body.success).to.equal(true);
            expect(res.body.payload).to.be.an.instanceof(Array);
            expect(res.body.payload).to.have.length.that.is.at.least(0);
            expect(res.body.payload[0])
              .property('title')
              .to.equal('A test title');
            done();
          });
      });
    });

    describe('GET /api/v1/invites/search/json?q=goat', () => {
      it('it should return empty array for no matching invite found', done => {
        chai
          .request(app)
          .get(`${invitesUrl}/search/json?q=goat`)
          .end((error, res) => {
            expect(res).to.have.status(200);
            expect(res.body.success).to.equal(true);
            expect(res.body.payload).to.be.an.instanceof(Array);
            expect(res.body.payload).to.be.empty;
            done();
          });
      });
    });
  });
});
