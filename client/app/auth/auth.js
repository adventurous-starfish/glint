angular.module('glint.auth', [])

.controller('AuthCtrl', function(Auth){
  var self = this;
  self.user = {};

  self.login = function() {
    self.user.username = _.escape(self.user.username);
    self.user.password = _.escape(self.user.password);
    var user = JSON.stringify(self.user);

    Auth.login(user)
      .then(function (response){})
      .catch(function (error){
        console.error('login error', error);
      });
  };

  self.signup = function() {
    self.user.username = _.escape(self.user.username);
    self.user.password = _.escape(self.user.password);
    var user = JSON.stringify(self.user);

    Auth.signup(user)
      .then(function (response){})
      .catch(function (error){
        console.error('signup error', error);
      });
  };
});
