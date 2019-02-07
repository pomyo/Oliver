const oliverDB = require('../models/Index.js');

module.exports = function (app) {
  app.get('/api/getDataOfMonth/:month/:year', function (req, res) {
    oliverDB.Transaction.find(
      {
        monthName: req.params.month, 
        year: req.params.year
      })
    .then(function(data) {
      // console.log(data);
      res.json(data);
    })
    .catch(function(err) {
      console.log(err);
    })
  });


  app.post('/api/addTransaction', function (req, res) {
    console.log("Hitting the /api/addTransaction api route");
    console.log("Adding a transaction to database\n Incoming data:\n", req.body);
    oliverDB.Transaction.create(req.body)
    .then(function(data) {
      console.log("This was successful\n", data);
      res.json(data);
    }); 
  });

}