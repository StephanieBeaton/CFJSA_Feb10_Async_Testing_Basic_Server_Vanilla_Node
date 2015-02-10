'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');

chai.use(chaihttp);

var expect = chai.expect;

describe('our http server', function() {
  var server = 'localhost:8888';
  it('should respond to /time request', function(done) {
    chai.request(server)
      .get('/time')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        var currServerTime = new Date().toTimeString();

        //expect(res.text.slice(0,10)).to
        //  .eql('Current Server Time = 03:59:18 GMT-0800 (PST)');
        var curSrvrTmLen = 'Current Server Time = '.length;
        curSrvrTmLen += 'hh:mm'.length;
        expect(res.text.slice(0,curSrvrTmLen)).to.eql('Current Server Time = ' +
          currServerTime.slice(0,5));
        done();
      });
  });

});
