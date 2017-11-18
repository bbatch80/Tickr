// The models need to be brought in order to use Mongoose operations (database
// operations)
const db = require("../models");
const yahooFinance = require("yahoo-finance");
const stock = "SNE";

module.exports = {
  findAll: function(req, res) {
    db.Portfolio
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .then(yahoo())
      .catch(err => res.status(422).json(err));
  },
  findByName: function(req, res) {
    db.Portfolio
      .find({"username": req.params.name})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Portfolio
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Portfolio
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Portfolio
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

function yahoo(){ 

  yahooFinance.quote({
  symbol: stock,
  modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
}, function (err, quotes) {
  console.log(quotes)
});
}