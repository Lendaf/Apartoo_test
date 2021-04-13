const User = require('../../models/User');

const addFriend = (req, res) => {
    const user1 = req.body["0"]
    const user2 = req.body["1"]

    User.findOne({ username: user1.username})
        .exec()
        .then((user) => {
            user1.friends = user.friends
            user1.friends.push({username: user2.username})
            User.updateOne({ username: user1.username }, user1).exec()
            User.updateOne({ username: user2.username }, user2).exec()
            res.send({ status: true, data: "added" })
        })
        .catch((err) => res.send({ status: false, data: err.message }));
}

const deleteFriend = (req, res) => {
    const user1 = req.body["0"]
    const user2 = req.body["1"]

    User.findOne({ username: user1.username})
        .exec()
        .then((user) => {
            user1.friends = user.friends
            user1.friends = user1.friends.filter(user => user.username !== user2.username)
            User.updateOne({ username: user1.username }, user1).exec()
            User.updateOne({ username: user2.username }, user2).exec()
            res.send({ status: true, data: "deleted" })
        })
        .catch((err) => res.send({ status: false, data: err.message }));
}

exports.addFriend = addFriend
exports.deleteFriend = deleteFriend