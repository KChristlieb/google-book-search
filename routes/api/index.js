const router = require("express").Router();
const bookRoutes = require("./dbBooks");

// Book routes
router.use("./books", bookRoutes);

module.exports = router;