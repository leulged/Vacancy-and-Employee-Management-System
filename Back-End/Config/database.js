const { DataSource } = require('typeorm');
require('dotenv').config();

const AppDataSource = new DataSource({
    type: 'postgres',
    host:  'localhost',
    port:  5432,
    username:  'postgres',
    password: '8059',
    database:   'hr_management_system',
    synchronize: true, 
    logging: false,
    entities: [__dirname + '/../Models/*.js'], 
    migrations: [],
    subscribers: [],
});

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Data Source initialization', err);
    });

module.exports = AppDataSource;
