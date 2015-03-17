var glintServices = angular.module('glint.services', []);

glintServices.factory('Votes', function($http){

  // POST
  var updateVotes = function(newVoteCount){
    return $http({
      method: 'POST',
      url: '/api/ideas', // db POST path here
      data: newVoteCount
    })
    .then(function(data){return data; })
    .catch(function(err) {
      console.error('updateVotes error', error);
    });

  };
  return {
    updateVotes : updateVotes
  };
});

glintServices.factory('Ideas', function($http){
  var getIdeas = function(){
    return $http({
      method: 'GET',
      url: '/api/ideas' // db GET path here
    }).then(function(resp){
      return resp.data;
    }).catch(function(error) {
      console.error('getIdeas error', error);
    });
  };
  return {
    getIdeas : getIdeas
  };
});



