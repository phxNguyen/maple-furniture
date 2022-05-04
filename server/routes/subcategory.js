const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const {
  create,
  read,
  update,
  remove,
  list,
} = require("../controllers/subcategoryController");

// routes
router
  .post("/subcategory", authCheck, adminCheck, create)
  .get("/subcategories", list)
  .get("/subcategory/:slug", read)
  .put("/subcategory/:slug", authCheck, adminCheck, update)
  .delete("/subcategory/:slug", authCheck, adminCheck, remove);

module.exports = router;
