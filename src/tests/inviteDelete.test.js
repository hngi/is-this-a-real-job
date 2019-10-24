import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

const { expect } = chai;
chai.use(chaiHttp);

const deleteUrl = '/api/v1/invite/inviteId';

describe('DELETE INVITE', () => {
  it('it should delete a post from the database if request is sent by an admin', (done) => {
    chai.request(app)
      .delete(`${deleteUrl}/1ca46a2e-61bc-4c51-8355-660ba808cae5`)
      .end((error, res) => {
        expect(res).to.have.status(200);
        expect(res).to.have.property('message');
        done();
      });
  });
  it('it should return 404 on resource not found', (done) => {
    chai.request(app)
      .patch(`${deleteUrl}/MaLf90rMeD_iD`)
      .end((error, res) => {
        expect(res).to.have.status(404);
        expect(res.body.message).to.equal('Not Found');
        done();
      });
  });
});
