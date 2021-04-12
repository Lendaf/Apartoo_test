const bcrypt = require('bcrypt');

const User = require('../../models/User');

const signIn = (req, res) => {

    const { username, password } = req.query;
    User.findOne({ username })
        .exec()
        .then(async (user) => {
            if (!user) throw new Error(!user ? 'User does not exist.' : 'Invalid credentials.');

            const isValid = await bcrypt.compare(password, user.password);
            if (!isValid) throw new Error('Invalid credentials.');
            res.send("Connected")
        })
        .catch((err) => res.send(err.message));
};

module.exports = signIn;