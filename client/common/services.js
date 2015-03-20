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

  var createIdea = function (idea){
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

  var upvote = function (idea){
    return $http({
      method: 'POST',
      url: '/api/vote/upvote',
      data: idea
    })
    .then(function (response){
      return response.data;
    })
    .catch(function (error) {
      console.error('upvote error', error);
    });
  };

  var downvote = function (idea){
    return $http({
      method: 'POST',
      url: '/api/vote/downvote',
      data: idea
    })
    .then(function (response){
      return response.data;
    })
    .catch(function (error) {
      console.error('downvote error', error);
    });
  };

  return {
    upvote: upvote,
    downvote: downvote
  };
});

glintServices.factory('Auth', function($http){
  
  var login = function (user){
    return $http({
      method: 'POST',
      url: '/api/signin',
      data: user
    })
    .then(function (response){
      return response.data;
    })
    .catch(function (error) {
      console.error('login error', error);
    });  };

  var signup = function (user){
    return $http({
      method: 'POST',
      url: '/api/signup',
      data: user
    })
    .then(function (response){
      return response.data;
    })
    .catch(function (error) {
      console.error('signup error', error);
    });
  };

  return {
    login: login,
    signup: signup
  };
});
