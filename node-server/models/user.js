const db = require('../util/database');

module.exports = class User {

    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    //stores a new user
    save() {
        return db.execute('INSERT INTO users (user_name, user_password, user_email) VALUES (?, ?, ?)',
            [this.username, this.password, this.email]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM users');
    }

    static findById(userId) {
        return db.execute('SELECT * FROM users WHERE user_id = ? ', [userId]);
    }

    static findByEmail(userEmail) {
        return db.execute('SELECT * FROM users WHERE user_email = ? ', [userEmail]);
    }
};
