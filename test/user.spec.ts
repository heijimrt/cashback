import App from './../src/app';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;
const app = App.bootstrap();

describe('Hello API Request', () => {
  it('should return response on call', (done) => {

    chai
      .request('http://localhost:3000')
      .get('/api/users')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  })
})