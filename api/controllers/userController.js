const User = require('../models/user');
const logger = require('../utils/logger');

// Get all users
const getAllUsers = async (req, res) => {
  try {
    logger.info('Fetching all users');
    const users = await User.findAll();
    logger.info(`Successfully retrieved ${users.length} users`);
    res.json(users);
  } catch (error) {
    logger.error(`Error fetching users: ${error.message}`);
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

// Get user's orders
const getUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;
    logger.info(`Fetching orders for user ${userId}`);

    const user = await User.findByPk(userId, {
      include: ['orders']
    });

    if (!user) {
      logger.warn(`User not found: ${userId}`);
      return res.status(404).json({ message: 'User not found' });
    }

    logger.info(`Successfully retrieved orders for user ${userId}`);
    res.json(user.orders);
  } catch (error) {
    logger.error(`Error fetching orders for user ${req.params.userId}: ${error.message}`);
    res.status(500).json({ message: 'Error fetching user orders', error });
  }
};

module.exports = { getAllUsers, getUserOrders };
