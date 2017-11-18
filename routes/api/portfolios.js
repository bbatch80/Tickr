const router = require("express").Router();
// var yahooFinance = require("yahoo-finance");

// This is brought in to make database operations easier..
// finding, updating, deleting, etc..
const portfoliosController = require("../../controllers/portfoliosController");

// Matches with "/api/books" 
router.route("/")
  // with GET
   .get(portfoliosController.findAll)
   .post(portfoliosController.create);

  
  // with POST
  // .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:name")
  // with GET
  .get(portfoliosController.findByName)
  // with PUT
  .put(portfoliosController.update)
  // with DELETE
  .delete(portfoliosController.remove);


module.exports = router;
