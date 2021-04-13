const bcrypt = require('bcrypt');

const User = require('../../models/User');
const joi = require('../../plugins/joi');

const signUpSchema = joi.object({
    username: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
});

const signUp = (req, res) => {
    const { email, username, password } = req.body;

    const fd = { username, email, password }
    const { error } = signUpSchema.validate(fd);

    if (error) return res.send({ status: false, data: 'Invalid parameters' });

    User.exists({ $or: [ { email }, { username } ] })
        .then(async (userExists) => {
            if (userExists) throw new Error('User already exists.')

            const hash = await bcrypt.hash(password, 10);
            req.body.password = hash
            User(req.body).save()
            res.send({status: true, data: "User successfully added to db"})
        })
        .catch((err) => res.send({status: false, data: err.message}));
};


module.exports = signUp;