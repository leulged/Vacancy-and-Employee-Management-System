require('dotenv').config();

console.log('JWT_SECRET:', process.env.JWT_SECRET);

const express = require('express');
const cors = require('cors');
const AppDataSource = require('./Config/database');
const allRoutes = require('./Routes/allRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', allRoutes);

AppDataSource.initialize()
    .then(async () => {
        await AppDataSource.synchronize();
        console.log('Data Source has been initialized and synchronized!');
        console.log('Initializing AppDataSource:', AppDataSource.isInitialized);

        app.listen(3001, () => {
            console.log('Server is running on port 3001');
        });
    })
    .catch((err) => {
        console.error('Error during Data Source initialization and synchronization', err);
    });

module.exports = app;
