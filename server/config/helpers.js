module.exports = {

  logErrors: function(err, req, res, next) {
    console.error(err.stack);
    next(err);
  },

  handleErrors: function(err, req, res, next) {
    // send client the error message
    res.send(500, {error: err.message});
  }

};