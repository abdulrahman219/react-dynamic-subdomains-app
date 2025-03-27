import React from 'react';
import { useLocation } from 'react-router-dom';
import { getSubdomain } from '../utils/subdomainHelper';

const Orders = () => {
  const location = useLocation();
  const subdomain = getSubdomain(location);

  const ordersData = {
    subdomain1: ['Order 1', 'Order 2'],
    subdomain2: ['Order A', 'Order B'],
  };

  const orders = ordersData[subdomain] || [];

  return (
    <div>
      <h2>Orders for {subdomain}</h2>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>{order}</li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;