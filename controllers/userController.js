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

      let user = new User({
        email: params.email
      });

      User.register(user, params.password)
        .then(user => resolve(user))
        .catch(error => reject(error));
    });
  } 
};