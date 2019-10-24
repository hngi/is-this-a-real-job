import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

const { expect } = chai;
chai.use(chaiHttp);

describe('Home page', () => {
    it('it should take users to the landing page', done => {
        chai.request(app)
            .get('/')
            .end((error, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });
});
