process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../bin/www');
let expect = chai.expect;

chai.use(chaiHttp);

describe('Hacker', () => {
    // beforeEach((done) => {
    //     Book.remove({}, (err) => { 
    //        done();         
    //     });     
    // });
  describe('/GET hacker', () => {
      it('it should GET all the hacker news', (done) => {
            chai.request(server)
            .get('/api/v1/hacker')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).body.should.be.a('array');
                // res.body.length.should.not.be.eql(0);
              done();
            });
      });
  });
});


