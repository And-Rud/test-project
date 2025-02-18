import React, { useState } from 'react';
import apiService from '../services/apiService';

const OrderForm = () => {
  const [userId, setUserId] = useState('');
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await apiService.createOrder({ userId, productId, quantity });
      // Clear form after successful order
      setUserId('');
      setProductId('');
      setQuantity('');
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <input
        type="text"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        placeholder="Product ID"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
      />
      <button type="submit">Submit Order</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default OrderForm;
