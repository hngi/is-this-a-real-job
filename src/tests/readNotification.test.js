import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import { SEED_NOTIFICATION_ID } from '../config/constants';

const { expect } = chai;
chai.use(chaiHttp);

const BaseUrl = '/api/v1/notifications';

describe('READ NOTIFICATION CONTROLLER', () => {
  describe('PATCH READ NOTIFICATION', () => {
    it('it should mark notification as seen', (done) => {
      chai.request(app)
        .patch(`${BaseUrl}/${SEED_NOTIFICATION_ID}/true`)
        .end((error, res) => {
          expect(res).to.have.status(200);
          expect(res.body.payload).to.have.property('isSeen');
          done();
        });
    });

    it('it should return 400 on invalid UUID', (done) => {
      chai.request(app)
        .patch(`${BaseUrl}/MaLf90rMeD_iD/true`)
        .end((error, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal('Bad Request');
          done();
        });
    });

    it('it should return 404 if notificationId missing', (done) => {
      chai.request(app)
        .patch(`${BaseUrl}/a23d468a-2976-4f2f-8fe0-ae12dd8d5102/true`)
        .end((error, res) => {
          expect(res).to.have.status(404);
          expect(res.body.message).to.equal('notification not found');
          done();
        });
    });
  });
});
