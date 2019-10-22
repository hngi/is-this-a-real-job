import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

const { expect } = chai;
chai.use(chaiHttp);

const blockUserbaseUrl = '/api/v1/users;

describe('BLOCK USER', () => {
  describe('PATCH  ISADMIN', () => {
    it('it should block a user by an admin', (done) => {
      chai.request(app)
        .patch(`${blockUserbaseUrl}/90`)
        .end((error, res) => {
          expect(res).to.have.status(201);
          expect(res.body.payload).to.have.property('message');
          done();
        });
    });

    it('it should return 400 on resource not found', (done) => {
      chai.request(app)
        .patch(`${blockUserbaseUrl}/MaLf90rMeD_iD`)
        .end((error, res) => {
          expect(res).to.have.status(404);
          expect(res.body.message).to.equal('User not found');
          done();
        });
    });

    it('it should return 400 if userId missing', (done) => {
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
