angular.module('glint.comments', [])

.controller('CommentsCtrl', function (Comments){
  var self = this;
  self.comment = {};

  self.submitComment = function (idea_id){

    // set self.comment.idea_id
    // set self.comment.user_id
    // escape and stringify
    comment = JSON.stringify(self.comment);

    Comments.createComment(comment)
      .then(function (response){
        //
      })
      .catch(function (error){
        console.error('comment error', error);
      });
  };

  self.displayComments = function (idea_id){
    Comments.getComments(idea_id)
      .then(function (response){
        //
      })
      .catch(function (error){
        console.error('displayComments error', error);
      });
  };

});
