const router = require("express").Router();

// This is brought in to make database operations easier..
// finding, updating, deleting, etc..
const booksController = require("../../controllers/booksController");

// Matches with "/api/books" 
router.route("/")
  // with GET
   .get(booksController.findAll)
   .post(booksController.create);
  
  // with POST
  // .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  // with GET
  .get(booksController.findById)
  // with PUT
  .put(booksController.update)
  // with DELETE
  .delete(booksController.remove);

module.exports = router;