import React from 'react';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import OrderTable from './components/OrderTable';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Order Management System</h1>
      </header>
      <main>
        <OrderForm />
        <OrderList />
        <OrderTable userId={1} />
      </main>
    </div>
  );
};

export default App;
