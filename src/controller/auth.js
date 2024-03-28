const bcrypt = require('bcrypt');
const User = require('../models/users');

exports.login = async (email, password, done) => {

    try {
      const user = await User.findOne({ email });
      
      if (!user) {
       
        return done(null, false, { message: 'E-mail não registrado.' });
      }
  
      const senhaconfere = await bcrypt.compare(password, user.password);
  
      if (!senhaconfere) {
        return done(null, false, { message: 'E-mail não registrado.' });
      }
  
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  };