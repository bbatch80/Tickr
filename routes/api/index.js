const router = require("express").Router();
const courseRoutes = require("./courses");
const bookRoutes = require("./books");
const portfolioRoutes = require("./portfolios");

// define the routes to use
router.use("/courses", courseRoutes);
router.use("/books", bookRoutes);
router.use("/portfolios", portfolioRoutes);


module.exports = router;
