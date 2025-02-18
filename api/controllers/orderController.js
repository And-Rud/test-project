const Order = require('../models/order');
const User = require('../models/user');
const Product = require('../models/product');
const { performTransaction } = require('../services/transactionService');
const logger = require('../utils/logger');

const createOrder = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  
  try {
    logger.info(`Starting order creation for user ${userId}, product ${productId}, quantity ${quantity}`);

    const order = await performTransaction(async (transaction) => {
      const user = await User.findByPk(userId, { transaction });
      if (!user) {
        logger.warn(`User not found: ${userId}`);
        throw new Error('User not found');
      }

      const product = await Product.findByPk(productId, { transaction });
      if (!product) {
        logger.warn(`Product not found: ${productId}`);
        throw new Error('Product not found');
      }

      // Check balance and stock
      if (user.balance < product.price * quantity) {
        logger.warn(`Insufficient balance for user ${userId}. Required: ${product.price * quantity}, Available: ${user.balance}`);
        throw new Error('Insufficient balance');
      }
      if (product.stock < quantity) {
        logger.warn(`Insufficient stock for product ${productId}. Required: ${quantity}, Available: ${product.stock}`);
        throw new Error('Not enough stock');
      }

      const totalPrice = product.price * quantity;
      const newOrder = await Order.create({
        userId,
        productId,
        quantity,
        totalPrice
      }, { transaction });

      await user.update({ balance: user.balance - totalPrice }, { transaction });
      await product.update({ stock: product.stock - quantity }, { transaction });

      logger.info(`Order ${newOrder.id} created successfully for user ${userId}`);
      return newOrder;
    });

    res.status(201).json(order);
  } catch (error) {
    logger.error(`Error creating order: ${error.message}`);
    
    const message = error.message || 'Error creating order';
    const status = {
      'User not found': 404,
      'Product not found': 404,
      'Insufficient balance': 400,
      'Not enough stock': 400
    }[error.message] || 500;

    res.status(status).json({ message });
  }
};

module.exports = { createOrder };
