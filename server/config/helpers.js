module.exports = {

  logErrors: function(err, req, res, next) {
    console.error(error.stack);
    next(error);
  },

  handleErrors: function(err, req, res, next) {
    // send client the error message
    res.send(500, {error: error.message});
  }

};