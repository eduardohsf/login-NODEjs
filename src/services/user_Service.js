const User = require('../models/users');

class UserService {
  async criarUser(nome, email, password) {
    try {
      const newUser = new User({ nome, email ,password});
      await newUser.save();
      return newUser;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = new UserService();
