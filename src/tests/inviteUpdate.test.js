import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import { SEED_USER_ID, SEED_INVITE_ID, SEED_INVITE_ID_2, SEED_USER_ID_2 } from '../config/constants';

const { expect } = chai;
chai.use(chaiHttp);

const invitesUrl = '/api/v1/invites';
let ownedInviteUrl = '/api/v1/invites/';
let unownedInviteUrl = '/api/v1/invites/';
const signinUrl = '/api/v1/auth/signin';
const authDetails = {
  email: 'johndoe@mail.com', // valid login details
  password: '123456',
};
const authDetails2 = {
  email: 'messi@mail.com', // valid login details
  password: '123456',
};
const adminAuthDetails = {
  email: 'admin@mail.com', // valid admin details
  password: '123456',
};

describe('UPDATE INVITES', () => {
  // Invites
  let ownedInvite = null;
  let unownedInvite = null;

  // Create an owned invite before all tests
  before((done) => {
    chai.request(app)
      .post(signinUrl)
      .send(authDetails)
      .end((err, res) => {
        chai.request(app)
          .post(invitesUrl)
          .set('Authorization', `Bearer ${res.body.payload.token}`)
          .send({
            title: 'A test title',
            body: 'A test bost sit amet.',
            media: 'https://google.com/favicon.png',
            userId: SEED_USER_ID // test user
          })
          .end((err, res) => {
            ownedInviteUrl += res.body.payload.inviteId;
            done();
          });
      });
  });

  // Create an unowned invite before all tests
  before((done) => {
    chai.request(app)
      .post(signinUrl)
      .send(authDetails2)
      .end((err, res) => {
        chai.request(app)
          .post(invitesUrl)
          .set('Authorization', `Bearer ${res.body.payload.token}`)
          .send({
            title: 'A test title',
            body: 'A test bost sit amet.',
            media: 'https://google.com/favicon.png',
            userId: SEED_USER_ID_2 // test user
          })
          .end((err, res) => {
            unownedInviteUrl += res.body.payload.inviteId;
            done();
          });
      });
  });

  // Get the owned invite before every test
  beforeEach((done) => {
    chai.request(app)
      .get(ownedInviteUrl)
      .end((err, res) => {
        ownedInvite = res.body.payload;
        done();
      });
  });

  // Get the unowned invite before every test
  beforeEach((done) => {
    chai.request(app)
      .get(unownedInviteUrl)
      .end((err, res) => {
        unownedInvite = res.body.payload;
        done();
      });
  });

  describe('USER LOGGED IN', () => {
    it('it should update a valid invite they own', (done) => {
      chai.request(app)
        .post(signinUrl)
        .send(adminAuthDetails)
        .end((err, res) => {
          chai.request(app)
            .put(`${invitesUrl}/${SEED_INVITE_ID}`)
            .set('Authorization', `Bearer ${res.body.payload.token}`)
            .send({
              title: 'New Title',
              body: 'Some body test',
              media: 'https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d',
              location: 'Lagos',
              company: 'MTN',
            })
            .end((err, res) => {
              // Assert Valid response
              expect(res).to.have.status(200);
              expect(res.body.success).to.equal(true);
              expect(res.body.payload).to.have.property('inviteId');
              expect(res.body.payload).to.have.property('userId');
              expect(res.body.payload).to.have.property('title');
              expect(res.body.payload).to.have.property('body');
              expect(res.body.payload).to.have.property('upVotes');
              expect(res.body.payload).to.have.property('updatedAt');
              expect(res.body.payload).to.have.property('createdAt');

              // Assert Invite updated properly
              expect(res.body.payload.title).to.equal('New Title');
              expect(res.body.payload.body).to.equal('Some body test');
              expect(res.body.payload.media).to.equal('https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d');
              done();
            });
        });
    });

    it('it should not update the userId or inviteId', (done) => {
      chai.request(app)
        .post(signinUrl)
        .send(authDetails)
        .end((err, res) => {
          chai.request(app)
            .put(`${invitesUrl}/${SEED_INVITE_ID}`)
            .set('Authorization', `Bearer ${res.body.payload.token}`)
            .send({
              title: 'What a day?',
              body: 'No. I refuse vehemently to participate :(',
              media: 'https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d',
              location: 'Lagos',
              company: 'MTN',
              userId: SEED_USER_ID_2,
              inviteId: SEED_INVITE_ID_2,
            })
            .end((err, res) => {
              // Assert valid response
              expect(res).to.have.status(400);
              expect(res.body.success).to.equal(false);

              // Assert invite is unchanged
              chai.request(app)
                .get(ownedInviteUrl)
                .end((err, res) => {
                  expect(res.body.payload).to.eql(ownedInvite);
                });
              done();
            });
        });
    });

    it('it should not update a valid invite they do not own', (done) => {
      chai.request(app)
        .post(signinUrl)
        .send(authDetails)
        .end((err, res) => {
          chai.request(app)
            .put(`${invitesUrl}/${SEED_INVITE_ID}`)
            .send({
              title: 'New Title',
              body: 'Some body test',
              media: 'https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d',
              location: 'Lagos',
              company: 'MTN',
            })
            .end((err, res) => {
              // Assert valid response
              expect(res).to.have.status(401);
              expect(res.body.success).to.equal(false);

              // Assert invite is unchanged
              chai.request(app)
                .get(unownedInviteUrl)
                .end((err, res) => {
                  expect(res.body.payload).to.eql(unownedInvite);
                });
              done();
            });
        });
    });

    it('it should respond with status 404 if no invite is found with the given inviteId', (done) => {
      chai.request(app)
        .post(signinUrl)
        .send(authDetails)
        .end((err, res) => {
          chai.request(app)
            .put(`${invitesUrl}/fdbd468a-2976-4f2f-8fe0-ae12dd8d5134`) // invite id does not exist
            .set('Authorization', `Bearer ${res.body.payload.token}`)
            .send({
              title: 'New Title',
              body: 'Some body test',
              media: 'https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d',
              location: 'Lagos',
              company: 'MTN',
            })
            .end((err, res) => {
              expect(res).to.have.status(404);
              expect(res.body.success).to.equal(false);
              done();
            });
        });
    });

    it('it should respond with status 400 if inviteId is invalid', (done) => {
      chai.request(app)
        .post(signinUrl)
        .send(authDetails)
        .end((err, res) => {
          chai.request(app)
            .put(`${invitesUrl}/fdbd468a-2976-4f2f-8fe0`) // invalid invite id
            .set('Authorization', `Bearer ${res.body.payload.token}`)
            .send({
              title: 'New Title',
              body: 'Some body test',
              media: 'https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d',
              location: 'Lagos',
              company: 'MTN',
            })
            .end((err, res) => {
              expect(res).to.have.status(400);
              expect(res.body.success).to.equal(false);
              done();
            });
        });
    });
  });

  describe('NO USER', () => {
    it('it should respond with status 401', (done) => {
      chai.request(app)
        .put(`${invitesUrl}/${SEED_INVITE_ID}`)
        .send({
          title: 'New Title',
          body: 'Some body test',
          media: 'https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d',
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
});
