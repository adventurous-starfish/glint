var app = angular.module('glint', [
  'glint.services',
  'glint.ideas',
  'glint.votes',
  'glint.auth',
  'glint.comments',
  'ngAnimate',
  'ngRoute'
  ])

.config(function($routeProvider){
	$routeProvider
		.when('/', {
        templateUrl: '../index.html',
        controller: 'IdeasCtrl'
      })
    .when('/login', {
        templateUrl: 'auth/login.html',
        controller: 'AuthCtrl'
      })
    .when('/signup', {
        templateUrl: 'auth/signup.html',
        controller: 'AuthCtrl'
      })
    .otherwise({
        redirectTo: '../index.html'
      });
})

.filter('moment', function () {
  return function (dateString) {
      return moment(dateString).fromNow();
  };
});
