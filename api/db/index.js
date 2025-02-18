const { Sequelize } = require('sequelize');
const logger = require('../utils/logger');

// Create a connection to the database
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: (msg) => logger.info(msg)
});

sequelize.authenticate()
  .then(() => {
    logger.info('Database connection has been established successfully.');
  })
  .catch(err => {
    logger.error('Unable to connect to the database:', err);
  });

// Export both the sequelize instance and Sequelize class
module.exports = {
  sequelize,
  Sequelize
};
