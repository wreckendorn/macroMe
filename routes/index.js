// const path = require("path");
// const router = require("express").Router();
// const apiRoutes = require("./api");
// const passport = require('passport');
// require('../config/passport')(passport);

// // API Routes
// router.use("/api", apiRoutes);

// // If no API routes are hit, send the React app
// router.use(passport.authenticate('jwt', { session: false}), function(req, res) {
//   const token = getToken(req.headers);
//   if (token) {
//    res.sendFile(path.join(__dirname, "../client/build/index.html"));
//   }
//   else {
//     return res.status(403).send({success: false, msg: 'Unauthorized.'});
//   }
// });

// module.exports = router;


// before:

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
