const bcrypt = require('bcryptjs');

const User = require('../models/user');


exports.postLogin = (req, res, next) => {

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    console.log(req);

    if(!username || !user_password || !email)
    {
        return res.send({isFound:false});
    }

    User.findByEmail(email)
    .then(result => {
        console.log(result[0]);
        console.log(result[0][0].user_email);
        console.log(result[0][0].user_password);
        if (result[0].length === 0 || result[0][0].user_name !== username) {
            return res.redirect('/');
        }
        bcrypt
            .compare(password, result[0][0].user_password)
            //doMatch is a boolean
            .then(doMatch => {
                if (doMatch) {
                    req.session.isLoggedIn = true;
                    req.session.user = result[0];
                    return req.session.save(err => {
                        res.send({isFound:true});
                    });

                }
            })
            .catch(err => {
                console.log(err);
                res.send({error: err});
            })

    })
    .catch(err => {
        console.log(err);
        res.send({error: err});
    });
        
};


exports.postLogout = (req, res, next) => {

    //destroy the session
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        }
        res.send('logged out');
    });

};