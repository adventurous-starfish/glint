var expect = require('chai').expect;
var request = require('supertest');
var app = require('../server.js');

describe('GET /', function() {
  it('should return 200', function (done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res){
          if (err) {
            return done(err);
          }
          done();
      });
  });    
});