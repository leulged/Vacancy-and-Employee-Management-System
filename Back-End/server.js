const express = require('express');
const cors = require('cors');
const AppDataSource = require('./Config/database'); // Adjust the path to your database.js file
const allRoutes = require('./Routes/allRoutes'); // Import the allRoutes.js file

const app = express();
app.use(cors());
app.use(express.json());

// Register the routes with your app
app.use('/', allRoutes); // Add this line to use your routes

// Initialize database connection
AppDataSource.initialize()
    .then(async () => {
        await AppDataSource.synchronize(); // Synchronize the schema with the database
        console.log('Data Source has been initialized and synchronized!');

        app.listen(3001, () => {
            console.log('Server is running on port 3001');
        });
    })
    .catch((err) => {
        console.error('Error during Data Source initialization and synchronization', err);
    });

module.exports = app;
