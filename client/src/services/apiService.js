import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

const createOrder = async (order) => {
  return await api.post('/orders', order);
};

const getOrders = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders?userId=${userId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

const apiService = { createOrder, getOrders };

export default apiService;
