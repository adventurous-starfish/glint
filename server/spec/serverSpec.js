var expect = require('chai').expect;
var request = require('supertest');
var app = require('../serverSetup.js').app;
var db = require('../serverSetup.js').db;
var Idea = require('../ideas/ideaModel');
var Comment = require('../comments/commentModel');

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

  describe('Change Vote Count: ', function() {

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

    it('Upvote updates the vote count on the idea', function(done) {
      request(app)
        .post('/api/vote/upvote')
        .send({
          title: 'Test Idea 1',
          text: 'This is a test.',
        })
        .expect(function(res) {
          expect(res.body.title).to.equal('Test Idea 1');
          expect(res.body.votes).to.equal(1);
        })
        .end(done);
    });

    it('Downvote updates the vote count on the idea', function(done) {
      request(app)
        .post('/api/vote/downvote')
        .send({
          title: 'Test Idea 1',
          text: 'This is a test.',
        })
        .expect(function(res) {
          expect(res.body.title).to.equal('Test Idea 1');
          expect(res.body.votes).to.equal(-1);
        })
        .end(done);
    });

  });

  describe('Comments on Ideas: ', function() { 

    afterEach(function(done) {
        Idea.remove({}, function() {
          done();
        });
    });

    it('Adds a comment to an existing idea', function(done) {

        idea = new Idea({
        title: 'Test Idea 1',
        text: 'This is a test.'
        });

        idea.save(function() {
          Idea.findOne({'title': 'Test Idea 1'})
          .exec(function(err, idea) {
            if (err) {
              console.log(err);
            }
      
            request(app)
            .post('/api/comments')
            .send({
              text: 'This is a test comment.',
              idea_id: idea._id
            })
            .expect(200)
            .expect(function(res) {
              expect(res.body.text).to.equal('This is a test comment.');
              expect(res.body.idea_id).to.equal(idea._id + '');
            })
            .end(done);
          });
        });
    });

    it('A new comment creates a database entry', function(done) {

        idea = new Idea({
        title: 'Test Idea 1',
        text: 'This is a test.'
        });

        idea.save(function() {
          Idea.findOne({'title': 'Test Idea 1'})
          .exec(function(err, idea) {
            if (err) {
              console.log(err);
            }
      
            request(app)
            .post('/api/comments')
            .send({
              text: 'This is a test comment.',
              idea_id: idea._id
            })
            .expect(200)
            .expect(function(res) {
              Comment.findOne({'text' : 'This is a test comment.'})
              .exec(function(err, comment) {
                if (err) {
                  console.log(err);
                }
                expect(comment.text).to.equal('This is a test comment.');
              })
            })
            .end(done);
          });
        });
    });

    it('Gets all of the comments for a specific idea', function(done) {

      idea = new Idea({
        title: 'Test Idea 1',
        text: 'This is a test.'
        });

        idea.save(function() {
          Idea.findOne({'title': 'Test Idea 1'})
          .exec(function(err, idea) {
            if (err) {
              console.log(err);
            }
      
            request(app)
            .post('/api/comments')
            .send({
              text: 'This is a test comment.',
              idea_id: idea._id
            })
            .expect(200)
            .expect(function(res) {
            
              request(app)
              .post('/api/comments')
              .send({
                text: 'This is a another test comment.',
                idea_id: idea._id
              })
              .expect(200)
              .expect(function(res) {

                Comment.find()
                .exec(function(err, comments) {
                  if (err) {
                    console.log(err);
                  }

                  expect(comments[0].text).to.equal('This is a test comment.');
                  expect(comments[1].text).to.equal('This is another test comment.');
                })
              })
            })
            .end(done);
          });
        });
      });
      
  });

});
