const express = require('express');
const { Sequelize } = require('sequelize');
const cors = require('cors');
const rateLimiter = require('./utils/rateLimiter');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(rateLimiter); // Apply rate limiting

// Routes
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
