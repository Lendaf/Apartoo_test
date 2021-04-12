const mongoose = require('mongoose');

const mongooseSettings = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
};

const url = "mongodb+srv://Admin:admin123456789@cluster0.9ahjq.mongodb.net/cluster0?retryWrites=true&w=majority"

const initDb = () => {
    return new Promise((resolve, reject) => {
        const uri = url;

        console.log('Connecting to db...');
        mongoose.connect(uri, mongooseSettings)
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