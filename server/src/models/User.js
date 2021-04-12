const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false, default: '' },
    age: { type: Number, required: false, default: 0 },
    family: { type: String, required: false, default: '' },
    food: { type: String, required: false, default: '' },
    race: { type: String, required: false, default: '' },
    friends: [{
        username: {type: String, required: true}
    }]
});

module.exports = mongoose.model('User', userSchema);