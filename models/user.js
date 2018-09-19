const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    username: { 
        type: String, 
        unique: true,
        required: true 
      },

      password: {
        type: String,
        required: true
    },

    macroRatio: [{
      type: Number,
      required: false
    }],

    temporaryIngredientHold: [{
        food: { type: String, required: false },
        calories: { type: Number, required: false },
        protein: { type: Number, required: false },
        carb: { type: Number, required: false },
        fat: { type: Number, required: false },
        ndbid: { type: String, required: false }
    }],
    date: { type: Date, default: Date.now }
  });

userSchema.pre('save', function(next){
  if(this.isModified('password') || this.isNew){
    bcrypt.hash(this.password, 10, (err, hash) => {
      if(err){ return next(err); }
      this.password = hash;
      return next();
    })
  } else {
    return next();
  }
});

userSchema.methods.comparePassword = function(pass, cb){
  bcrypt.compare(pass, this.password, (err, isMatch) => {
    if(err) {return cb(err)}
    cb(null, isMatch);
  });
};
  
const User = mongoose.model("User", userSchema);
  
module.exports = User;
  