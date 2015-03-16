var app = angular.module('glint', []);

app.controller('MainCtrl', function(){
  var self = this;

  /*
  title: String,
  text: String,
  views: { type: Number, default: 0 },
  created_by: { type: String, default: 'anonymous' },
  created_at: { type: Date, default: Date.now },
  category: { type: String, default: '' },
  roles: [String],
  comments: [String],
  delete_flag: { type: Boolean, default: false }
  */

  self.ideas = [
    {
      title: 'Uber for cats',
      text: 'Imagine a world where cats can roam free and never have to walk again! Introducting Uber for cats.',
      created_by: 'Super Tom',
      created_at: 'Mon Mar 16 2015 14:46:59 GMT-0700 (PDT)',
    },
    {
      title: 'Uber for dogs',
      text: 'Imagine a world where dogs can roam free and never have to walk again! Introducting Uber for cats.',
      created_by: 'Super Fido',
      created_at: 'Sun Mar 15 2015 15:06:59 GMT-0700 (PDT)',
    }
  ];

  self.addIdea = function(){};
});

app.controller('SubmitIdea', function(){
  // ideaEntry is the text inside of .form-control input box
  this.ideaEntry;

  // submitIdea is called when submit button is clicked
	this.submitIdea = function(){
    window.alert(this.ideaEntry);
  }

})

/*
  - 1: upvote
  - 1: downvote
  - 1: get idea vote count
  - 1: get ideas (from db)
  - 1: submit idea

  - 1: input escaping
  - 4: get comment count
*/