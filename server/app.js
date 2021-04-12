const express = require('express');
const cors = require('cors');

const router = require('./src/router');
const initDb = require('./src/db');

initDb()
    .then(async () => {
        const app = express();

        app.use(cors());
        app.use(express.urlencoded({ extended: false })); // to parse application/x-www-form-urlencoded
        app.use(express.json()); // to parse application/json

        app.use('/api', router);

        const port = 8080;
        app.listen(port, () => console.log(`The magic port is ${port}`));
    })
    .catch(() => process.exit(1));
