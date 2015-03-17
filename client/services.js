var glintServices = angular.module('glint.services', [])

glintServices.factory('Votes', function($http){

  // POST
  var updateVotes = function(newVoteCount){
    return $http({
      method: 'POST',
      url: '', // db POST path here
      data: newVoteCount
    })
    .then(function(data){return data })
    .catch(function(err) {
      console.err("updateVotes error", err);
    });

  };
});

