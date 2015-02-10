'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');

chai.use(chaihttp);

var expect = chai.expect;

describe('our http server', function() {
  var server = 'localhost:8888';
  it('should respond to /greet/name request', function(done) {
    chai.request(server)
      .get('/greet/name')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('Single Word String: name');
        done();
      });
  });

});
