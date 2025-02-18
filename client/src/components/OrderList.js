import React, { useState, useEffect } from 'react';
import OrderTable from './OrderTable';

const OrderList = () => {
  const [userId, setUserId] = useState('');

  return (
    <div>
      <label>Enter User ID: </label>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      {userId && <OrderTable userId={userId} />}
    </div>
  );
};

export default OrderList;
