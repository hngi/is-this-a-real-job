import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

const { expect } = chai;
chai.use(chaiHttp);

const upvoteUrl = '/api/v1/invites/upvote';

describe('UPVOTE CONTROLLER', () => {
  describe('PATCH UPVOTE INVITE', () => {
    it('it should upvote a post and increment upvote count', (done) => {
      chai.request(app)
        .patch(`${upvoteUrl}/90`)
        .end((error, res) => {
          expect(res).to.have.status(200);
          expect(res.body.payload).to.have.property('upVotes');
          done();
        });
    });
  });
});
