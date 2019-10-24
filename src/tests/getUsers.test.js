import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

const { expect } = chai;
chai.use(chaiHttp);


describe('Return Users', () => {
  it('it should return all the users in the database', (done) => {
    chai.request(app)
      .get('/api/v1/users')
      .end((error, res) => {
        expect(res).to.have.status(200);
        expect(res.body.payload).to.have.property('users');
        done();
      });
  });
});
