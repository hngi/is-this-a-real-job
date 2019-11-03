import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import { SEED_INVITE_ID } from '../config/constants';

const { expect } = chai;
chai.use(chaiHttp);

const upvoteBaseUrl = '/api/v1/invites/upvote';

describe('UPVOTE CONTROLLER', () => {
  describe('PATCH UPVOTE INVITE', () => {
    it('it should upvote a post and increment upvote count', (done) => {
      chai.request(app)
        .patch(`${upvoteBaseUrl}/${SEED_INVITE_ID}/true`)
        .end((error, res) => {
          expect(res).to.have.status(200);
          expect(res.body.payload).to.have.property('upVotes');
          done();
        });
    });

    it('it should return 400 on invalid UUID', (done) => {
      chai.request(app)
        .patch(`${upvoteBaseUrl}/MaLf90rMeD_iD/true`)
        .end((error, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal('Bad Request');
          done();
        });
    });

    it('it should return 404 if inviteId missing', (done) => {
      chai.request(app)
        .patch(`${upvoteBaseUrl}/a23d468a-2976-4f2f-8fe0-ae12dd8d5102/true`)
        .end((error, res) => {
          expect(res).to.have.status(404);
          expect(res.body.message).to.equal('Job Invite not found');
          done();
        });
    });
  });
});
