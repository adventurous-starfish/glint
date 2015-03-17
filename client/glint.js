var app = angular.module('glint', ['glint.services']);

app.controller('MainCtrl', function(){
  var self = this;

  // mocked up data for now
  self.ideas = [
    {
      title: 'Uber for cats',
      text: 'Imagine a world where cats can roam free and never have to walk again! Introducting Uber for cats.',
      votes: 134,
      created_by: 'Super Tom',
      created_at: moment('Mon Mar 16 2015 14:46:59 GMT-0700 (PDT)').fromNow(),
    },
    {
      title: 'Uber for dogs',
      text: 'Imagine a world where dogs can roam free and never have to walk again! Introducting Uber for dogs. The doggiest uber ever. Seriously, we\'re talking pickups for pooches. Cabs for canines. Man\'s best friend will be able to follow him around anywhere. How amazing would that be? You go out for a jog, and then BOOM there\'s little Kibbler, head hanging out the back of a yellow cab, tongue lolling and spittle drooling down the door. Just watching you.',
      votes: 654,
      created_by: 'Fidoman',
      created_at: moment('Sun Mar 15 2015 15:06:59 GMT-0700 (PDT)').fromNow(),
    },

    {
      title: 'Uber for meerkats',
      text: 'Imagine a world where meerkats can roam free and never have to walk again! Introducting Uber for meerkats. The doggiest uber ever. Seriously, we\'re talking pickups for pooches. Cabs for canines. Man\'s best friend will be able to follow him around anywhere. How amazing would that be? You go out for a jog, and then BOOM there\'s little Kibbler, head hanging out the back of a yellow cab, tongue lolling and spittle drooling down the door. Just watching you.',
      votes: 512,
      created_by: 'Fidoman',
      created_at: moment('Sun Mar 15 2015 15:06:59 GMT-0700 (PDT)').fromNow(),
    },

    {
      title: 'Uber for ferrets',
      text: 'Imagine a world where ferrets can roam free and never have to walk again! Introducting Uber for ferrets. The doggiest uber ever. Seriously, we\'re talking pickups for pooches. Cabs for canines. Man\'s best friend will be able to follow him around anywhere. How amazing would that be? You go out for a jog, and then BOOM there\'s little Kibbler, head hanging out the back of a yellow cab, tongue lolling and spittle drooling down the door. Just watching you.',
      votes: 123,
      created_by: 'Fidoman',
      created_at: moment('Sun Mar 15 2015 15:06:59 GMT-0700 (PDT)').fromNow(),
    },

    {
      title: 'Uber for babies',
      text: 'Imagine a world where babies can roam free and never have to walk again! Introducting Uber for babies. The doggiest uber ever. Seriously, we\'re talking pickups for pooches. Cabs for canines. Man\'s best friend will be able to follow him around anywhere. How amazing would that be? You go out for a jog, and then BOOM there\'s little Kibbler, head hanging out the back of a yellow cab, tongue lolling and spittle drooling down the door. Just watching you.',
      votes: 4423,
      created_by: 'Fidoman',
      created_at: moment('Sun Mar 15 2015 15:06:59 GMT-0700 (PDT)').fromNow(),
    }
  ];

  // db GET request moves to factory
  self.getIdeas = function(){
    self.ideas.push(Ideas.getIdeas());
  };

});

app.controller('SubmitIdeaCtrl', function(){
  var self = this;
  var list = [];
  })

  // db POST request
  // remember to escape input
  // submitIdea is called when submit button is clicked
	self.submitIdea = function(){
    // escape to handle XSS injection
    var escapedIdea = _.escape(self.ideaEntry);
    window.alert(escapedIdea);
    // list.push(self.ideaEntry);
  };

});

app.controller('VotesCtrl', function(){
  var self = this;

  // call factory db POST function, and handle results
  // options: 
  //   1) doing this updates the number to reflect latest db count
  //      this may be confusing for user who sees the # go up/down lots
  //   2) doing this simply increments only by user added vote, keeping
  //      the results more like what user expects
  self.upvote = function(){
    console.log('upvote');
    // Votes.updateVote()
    //   .then(function(response){

    //   })
    //   .catch(function(error){
    //     console.error('upvote error', error);
    //   });
  };

  // if results handling here is different from upvote, then
  // specify difference here. Otherwise, remove.
  self.downvote = function(){
    console.log('downvote');
  };

});
