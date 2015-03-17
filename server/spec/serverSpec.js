var expect = require('chai').expect;
var request = require('supertest');
var app = require('../server.js').app;
var db = require('../server.js').db;
var Idea = require('../ideas/ideaModel');

describe('', function() {
  
  beforeEach(function(done) {
  
    // Delete ideas from database, so that they can be recreated during the tests
    Idea.remove({title: 'Test Idea 1'}).exec();

    done();
  });

  describe('Basic Test', function() {
    it('should return 200', function (done) {
      request(app)
        .get('/')
        .expect(200)
        .end(done);
    });
  });

  describe('Idea creation: ', function() {
    it('Responds with the created idea', function(done) {
      request(app)
        .post('/api/ideas')
        .send({
          'title': 'Test Idea 1',
          'text': 'This is a test.'
        })
        .expect(200)
        .expect(function(res) {
          expect(res.body.title).to.equal('Test Idea 1');
          expect(res.body.text).to.equal('This is a test.');
        })
        .end(done);
    });

    it('A new idea creates a database entry', function(done) {
      request(app)
        .post('/api/ideas')
        .send({
          'title': 'Test Idea 1',
          'text': 'This is a test.'
        })
        .expect(200)
        .expect(function(res) {
          Idea.findOne({'title' : 'Test Idea 1'})
            .exec(function(err, idea) {
              if (err) {
                console.log(err);
              }
              expect(idea.title).to.equal('Test Idea 1');
            });
        })
        .end(done);
    });
  });

  describe('Idea retrieval: ', function() {

    beforeEach(function(done) {
      idea = new Idea({
        title: 'Test Idea 1',
        text: 'This is a test.'
      });

      idea.save(function() {
        done();
      });
    });

    afterEach(function(done) {
        Idea.remove({}, function() {
          done();
        });
    });

    it('Responds with the stored idea', function(done) {
      request(app)
        .get('/api/ideas')
        .expect(200)
        .expect(function(res) {
          expect(res.body[0].title).to.equal('Test Idea 1');
          expect(res.body[0].text).to.equal('This is a test.');
        })
        .end(done);
    });
  });

});
