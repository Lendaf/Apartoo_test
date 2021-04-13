const mongoose = require('mongoose');

const mongooseSettings = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
};

const initDb = () => {
    return new Promise((resolve, reject) => {
        console.log('Connecting to db...');
        mongoose.connect(process.env.MONGODB_URI, mongooseSettings)
            .then(() => {
                console.log('Successfully connected to MongoDB !');
                resolve();
            })
            .catch((err) => {
                console.log('Connection to MongoDB failed :', err.message);
                reject(err);
            });
    });
};

module.exports = initDb;