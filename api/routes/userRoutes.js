const express = require('express');
const { getAllUsers, getUserOrders } = require('../controllers/userController');
const router = express.Router();

router.get('/orders', getAllUsers);
router.get('/orders/:userId', getUserOrders);

module.exports = router;
