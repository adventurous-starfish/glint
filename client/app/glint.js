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
        templateUrl: 'app/ideas/ideas.html'
      })
    .when('/login', {
        templateUrl: 'app/auth/login.html'
      })
    .when('/signup', {
        templateUrl: 'app/auth/signup.html'
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
