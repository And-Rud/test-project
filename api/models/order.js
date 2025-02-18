const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
const User = require('./user');
const Product = require('./product');

const Orders = sequelize.define('Order', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
});

Orders.belongsTo(User, { foreignKey: 'userId' });
Orders.belongsTo(Product, { foreignKey: 'productId' });

module.exports = Orders;
