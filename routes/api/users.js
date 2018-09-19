const router = require("express").Router();
const macrosController = require("../../controllers/macrosController");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
// const usersController = require("../../controllers/usersController");
// const passport = require("passport");
// const { Strategy:JwtStrategy, ExtractJwt } = require("passport-jwt");

// const passportOpts = {
//   // Set Extraction method to pull it out from our header
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   // Our secrt
//   secretOrKey: process.env.JWT_SECRET
// };

// passport.use(new JwtStrategy(
//     passportOpts,
//     (jwt_payload, done) => {
//       console.log(jwt_payload);
//       db.User.findOne({
//         _id: jwt_payload._id
//       }, (err, user) => {
//         if(err){ return done(err, false); } // if we have a problem remove it
//         console.log("user", user);
//         if(user){
//           done(null, user);
//         } else {
//           done(null, false);
//         }
//       });
//     }
// ));


// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(macrosController.findById)
  .put(macrosController.update)
  .delete(macrosController.remove)
  
router
  .route("/remove/:id")
  .put(macrosController.updateTempFoods)

router
  .route("/ratio/:id")
  .put(macrosController.updateRatio)

// router
//   .route("/auth/register")
//   .post(macrosController.create)

// router
//   .route("/auth/login")
//   .post(macrosController.findOne)

// router
//     .route("/auth/login/private/route", passport.authenticate('jwt', { session: false }))
//     .testRoute(macrosController.find)


module.exports = router;
