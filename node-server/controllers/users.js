const bcrypt = require('bcryptjs');

const User = require('../models/user');


exports.postAddUser = (req, res, next) => {

  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  console.log(req.body);

  User.findByEmail(email)
    .then(result => {
      if (result[0].length > 0) {
        return res.send({message: 'user is already exist!'});
      }

      return bcrypt.hash(password, 12)
        .then(hashedPassword => {
          const newUser = new User(username, hashedPassword, email);

          return newUser.save();
        })
        .then(result => {
          res.send({message: 'added successfully'});
        })

    })
    .catch(err => {
      console.log(err);
      res.send({message: err});
    });

};
