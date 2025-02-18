const {sequelize} = require('../db');
const logger = require('../utils/logger');

const performTransaction = async (actions) => {
  let transaction;
  
  try {
    await sequelize.authenticate();
    
    transaction = await sequelize.transaction();

    const result = await actions(transaction);
    await transaction.commit();
    return result;
    
  } catch (error) {
    logger.error('Transaction error:', error);
    
    if (transaction) {
      await transaction.rollback();
    }
    
    if (error.name === 'SequelizeConnectionError') {
      throw new Error('Database connection error. Please try again later.');
    }
    
    throw error;
  }
};

module.exports = { performTransaction };
