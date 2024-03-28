const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = new mongoose.Schema({
    nome:{type:String, require:true},
    email:{type:String, require:true , unique: true},
    password:{type:String, require:true}


})


Schema.pre('save', async function (next) {
    try {
      if (!this.isModified('password')) return next();
      
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(this.password, salt);
      console.log("1",salt)
      console.log("2",hash)
      this.password = hash;
      next();
    } catch (error) {
      next(error);
    }
  });

  const User = mongoose.model('user', Schema);

  module.exports= User;