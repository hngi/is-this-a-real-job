import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import { SEED_INVITE_ID_2 } from '../config/constants';

const { expect } = chai;
chai.use(chaiHttp);

const deleteUrl = '/api/v1/invites';
const signinUrl = '/api/v1/auth/signin';
let currentToken;

describe('DELETE INVITE', () => {
    describe('Delete Invite', () => {
        before(done => {
            chai.request(app)
                .post(signinUrl)
                .send({
                    email: 'johndoe@mail.com', // valid login details
                    password: '123456',
                })
                .end((error, res) => {
                    currentToken = res.body.payload.token;
                    done();
                });
        });
        it('it should not  delete a post if not admin', done => {
            chai.request(app)
                .delete(`${deleteUrl}/${SEED_INVITE_ID_2}`)
                .set('Authorization', currentToken)
                .end((error, res) => {
                    expect(res).to.have.status(403);
                    expect(res.body.message).to.equal('Forbidden access');
                    done();
                });
        });
    });

    describe('Delete Invite', () => {
        before(done => {
            chai.request(app)
                .post(signinUrl)
                .send({
                    email: 'admin@mail.com', // valid login details
                    password: '123456',
                })
                .end((error, res) => {
                    currentToken = res.body.payload.token;
                    done();
                });
        });
        it('it should delete a post if request is sent by an admin', done => {
            chai.request(app)
                .delete(`${deleteUrl}/${SEED_INVITE_ID_2}`)
                .set('Authorization', currentToken)
                .end((error, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message');
                    done();
                });
        });
        it('it should return 400 on invalid inviteId', done => {
            chai.request(app)
                .delete(`${deleteUrl}/akljskljlin`)
                .set('Authorization', currentToken)
                .end((error, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.equal('Bad Request');
                    done();
                });
        });
        it('it should return 404 on resource not found', done => {
            chai.request(app)
                .delete(`${deleteUrl}/${SEED_INVITE_ID_2}`) // confirmation that post is deleted above
                .set('Authorization', currentToken)
                .end((error, res) => {
                    expect(res).to.have.status(404);
                    expect(res.body.message).to.equal('Job Invite not found');
                    done();
                });
        });
    });
});
