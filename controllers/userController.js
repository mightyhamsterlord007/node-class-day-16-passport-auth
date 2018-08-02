var User = require('../models/User');

module.exports = {
  getAllUsers: (params) => {
      return new Promise((resolve, reject) => {
        User.find(params)
            .then(users => resolve(users))
            .catch(error => reject(error));
      });
  },
  createUser: (params) => {
    return new Promise((resolve, reject) => {
      User.register(new User({email: params.email}), params.password)
        .then(user => resolve(user))
        .catch(error => reject(error));
    });
  } 
};