const bcrypt = require('bcrypt');

const User = require('../../models/User');

const signUp = (req, res) => {
    const { email, username, password } = req.body;
    User.exists({ $or: [ { email }, { username } ] })
        .then(async (userExists) => {
            if (userExists) throw new Error('User already exists.')

            const hash = await bcrypt.hash(password, 10);
            req.body.password = hash
            User(req.body).save()
            res.send("User successfully added to db")
        })
        .catch((err) => res.send(err.message));
};


module.exports = signUp;