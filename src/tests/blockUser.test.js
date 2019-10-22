import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import uuid from 'uuid';

const { expect } = chai;
chai.use(chaiHttp);

const blockUserbaseUrl = '/api/v1/users';

describe('ISADMIN', () => {
  describe('PATCH  BLOCKUSER', () => {
    it('it should block a user by an admin', (done) => {
      chai.request(app)
        .patch(`${blockUserbaseUrl}/${uuid}`)
        .end((error, res) => {
          expect(res).to.have.status(200);
          expect(res.body.payload).to.have.property('message');
          done();
        });
    });

    it('it should return 404 on resource not found', (done) => {
      chai.request(app)
        .patch(`${blockUserbaseUrl}/MaLf90rMeD_iD`)
        .end((error, res) => {
          expect(res).to.have.status(404);
          expect(res.body.message).to.equal('User not found');
          done();
        });
    });

    it('it should return 400 if UUID missing', (done) => {
      chai.request(app)
        .patch(`${blockUserbaseUrl}`)
        .end((error, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal('Bad Request');
          done();
        });
    });
  });
});
