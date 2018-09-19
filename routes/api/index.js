// const router = require("express").Router();
// const macroRoutes = require("./macros");
// const userRoutes = require("./users");
// const authRoutes = require("./auth");


// router.use("/macros", macroRoutes);
// router.use("/users", userRoutes);
// router.use("/auth", authRoutes);

// module.exports = router;


// before:

const router = require("express").Router();
const macroRoutes = require("./macros");
const userRoutes = require("./users");
const authRoutes = require("./auth");


router.use("/macros", macroRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;