import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';
import './OrderTable.css';

const OrderTable = ({ userId }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const fetchedOrders = await apiService.getOrders(userId);
        console.log('Fetched orders:', fetchedOrders); // Для дебагу
        setOrders(fetchedOrders);
      } catch (err) {
        console.error("Error fetching orders", err);
        setError('Failed to load orders. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  if (loading) return <div>Loading orders...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!orders?.length) return <div>No orders found.</div>;

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order?.product?.name || 'N/A'}</td>
              <td>{order.quantity}</td>
              <td>${order.totalPrice}</td>
              <td>{new Date(order.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
