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
        templateUrl: 'app/ideas/ideas.html',
        controller: 'IdeasCtrl'
      })
    .when('/login', {
        templateUrl: 'app/auth/login.html',
        controller: 'AuthCtrl'
      })
    .when('/signup', {
        templateUrl: 'app/auth/signup.html',
        controller: 'AuthCtrl'
      })
    .otherwise({
        redirectTo: '/'
      });
})

.filter('moment', function () {
  return function (dateString) {
      return moment(dateString).fromNow();
  };
});
