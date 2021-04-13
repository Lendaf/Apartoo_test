const bcrypt = require('bcrypt');

const User = require('../../models/User');
const joi = require('../../plugins/joi');

const signInSchema = joi.object({
    username: joi.string().required(),
    password: joi.string().required(),
});

const signIn = (req, res) => {
    const { username, password } = req.query;

    const { error } = signInSchema.validate(req.query);

    if (error) return res.send({ status: false, data: 'Invalid parameters' });

    User.findOne({ username })
        .exec()
        .then(async (user) => {
            if (!user) throw new Error(!user ? 'User does not exist.' : 'Invalid credentials.');

            const isValid = await bcrypt.compare(password, user.password);
            if (!isValid) throw new Error('Invalid credentials.');
            res.send({status: true, data: "Connected"})
        })
        .catch((err) => res.send({status: false, data: err.message}));
};

module.exports = signIn;