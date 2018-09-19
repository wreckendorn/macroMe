const router = require("express").Router();
const macrosController = require("../../controllers/macrosController");

// Matches with "/api/macros"
router.route("/")
  .get(macrosController.findAll)
  .post(macrosController.create);

router.route("/carbs")
  .get(macrosController.findAllCarbs)

  router.route("/fat")
  .get(macrosController.findAllFat)

  router.route("/protein")
  .get(macrosController.findAllProtein)

// Matches with "/api/macros/:id"
router
  .route("/:id")
  .get(macrosController.findById)
  .put(macrosController.update)
  .delete(macrosController.remove);

module.exports = router;
