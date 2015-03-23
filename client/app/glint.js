// Glint
// -----
//
// This is our app's main Angular module.

// Our dependencies are by shared services, feature controllers, and third-party modules.
var app = angular.module('glint', [
  'glint.services',
  'glint.ideas',
  'glint.votes',
  'glint.auth',
  'glint.comments',
  'ngAnimate',
  'ngRoute'
  ])

// Routing configuration. Eventually, this is where the controllers for the specific views will be declared, so they don't have to be referred to in our HTML. (Eg. <varname> instead of AuthCtrl.<varname>)
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

// Custom filter for applying moment.js to our timestamps.
.filter('moment', function () {
  return function (dateString) {
      return moment(dateString).fromNow();
  };
});
