var bodyParser  = require('body-parser');
// add error logging middleware e.g. morgan

module.exports = function (app, express) {
  // add more routes later 
  var ideaRouter = express.Router();

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));


  app.use('/', ideaRouter); // use ideas router for all user request

  // inject our router into its route files
  require('../ideas/ideaRoutes.js')(ideaRouter);
};