angular.module('glint.auth', [])

.controller('AuthCtrl', function(Auth){
  var self = this;
  self.user = {};

  self.login = function() {
    Auth.login()
      .then(function (response){})
      .catch(function (error){
        console.error('login error', error);
      });
  };

  self.signup = function() {};
    Auth.signup()
      .then(function (response){})
      .catch(function (error){
        console.error('signup error', error);
      });
});
