var glintServices = angular.module('glint.services', []);

glintServices.factory('Ideas', function ($http){
  var getIdeas = function (){
    return $http({
      method: 'GET',
      url: '/api/ideas'
    }).then(function (response){
      return response.data;
    }).catch(function (error) {
      console.error('getIdeas error', error);
    });
  };

  var createIdea = function(idea){
    return $http({
      method: 'POST',
      url: '/api/ideas',
      data: idea
    }).then(function (response){
      return response.data;
    }).catch(function (error) {
      console.error('createIdeas error', error);
    });
  };

  return {
    getIdeas: getIdeas,
    createIdea: createIdea
  };
});

glintServices.factory('Votes', function($http){

  // POST
  var updateVotes = function(voteCount, idea_id){
    return $http({
      method: 'PUT',
      url: '/api/votes/:' + idea_id,
      data: VoteCount
    })
    .then(function (response){
      return response.data;
    })
    .catch(function (error) {
      console.error('updateVotes error', error);
    });
  };
  return {
    updateVotes: updateVotes
  };
});
