const User = require('../../models/User');

const findUser = (req, res) => {
	const { username } = req.query

	User.findOne({ username: username })
        .exec()
        .then((user) => {
            if (!user) return res.send({ status: false, data: 'User not found.'})
			res.send({ status: true, data: user })
		})
        .catch((err) => res.send({ status: false, data: err.message }));
}

const updateUser = (req, res) => {
    const { username } = req.body

	User.updateOne({ username: username }, req.body)
        .exec()
        .then((user) => {
            if (!user) return res.send({ status: false, data: 'User not found.'})
			res.send({ status: true, data: "Sucessfully saved!" })
		})
        .catch((err) => res.send({ status: false, data: err.message }));
}

const getAllUser = (req, res) => {
	User.find({})
        .exec()
        .then((users) => {
            if (!users) return res.send({ status: false, data: 'No user in database'})
    		res.send({ status: true, data: users });
	    })
        .catch((err) => res.send({ status: false, data: err.message }));
}

exports.findUser = findUser
exports.updateUser = updateUser
exports.getAllUser = getAllUser