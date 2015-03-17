var glintServices = angular.module('glint.services', []);

glintServices.factory('Votes', function($http){

  // POST
  var updateVotes = function(newVoteCount){
    return $http({
      method: 'POST',
      url: '', // db POST path here
      data: newVoteCount
    })
    .then(function(data){return data; })
    .catch(function(err) {
      console.error('updateVotes error', error);
    });

  };
});

glintServices.factory('Ideas', function($http){
  var getIdeas = function(){
    return $http({
      method: 'GET',
      url: '' // db GET path here
    }).then(function(resp){
      return resp.data;
    }).catch(function(error) {
      console.error('getIdeas error', error);
    });
  };
});

