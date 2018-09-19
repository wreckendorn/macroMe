const db = require("../models");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

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

// Defining methods for the macrosController
module.exports = {
  findAll: function(req, res) {
    db.Macro
      .find({ macro: "protein" })
      .sort({ food: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllProtein: function(req, res) {
    db.Macro
    .find({ macro: "protein" })
    .sort({ food: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findAllFat: function(req, res) {
    db.Macro
    .find({ macro: "fat" })
    .sort({ food: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findAllCarbs: function(req, res) {
    db.Macro
    .find({ macro: "carbs" })
    .sort({ food: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    if(!req.body.username || !req.body.password){
      return res.json({success: false, message: "Please provide a username and password"});
    }

    db.User
      .findOne({ username: req.body.username })
      .then(user => {
          if(!user){
            return res.status(401).send({ success: false, message: "Incorrect username"});
          }
          else {
            user.comparePassword(req.body.password, (err, isMatch) => {
              if(!err && isMatch){
                const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
                res.json({ success: true, token: "JWT " + token, id: user });
              } else {
                  return res.status(401).send({ success: false, message: "Incorrect password"});
                }
            })
          }
      })
      .catch(err => res.json(err));
  },
  create: function(req, res) {
    if(!req.body.username || !req.body.password){
      return res.json({success: false, message: "Please provide a username and password"});
    }

    db.User
      .create(req.body)
      .then(dbModel => res.json({ success: true, message: "Successfully created a new User!" }))
      .catch(err => res.status(422).json({ success: false, message: "Username taken" })); 
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, {$push: {temporaryIngredientHold: req.body}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateRatio: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, {$set: {macroRatio: req.body.data}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateTempFoods: function(req, res) {
    db.User
    .findOneAndUpdate({ _id: req.params.id }, {$set: {temporaryIngredientHold: req.body}})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
    .findOneAndUpdate({ _id: req.params.id }, {$set: {temporaryIngredientHold: [] }})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
};
