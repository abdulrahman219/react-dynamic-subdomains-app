import React from "react";
import { useLocation } from "react-router-dom";
import { getSubdomain } from "../utils/subdomainHelper";

const Orders = () => {
  const location = useLocation();
  const subdomain = getSubdomain(location);

  const ordersData = {
    subdomain1: ["Order 1", "Order 2"],
    subdomain2: ["Order A", "Order B"],
  };

  const orders = ordersData[subdomain] || [];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Orders for <span className="text-blue-600">{subdomain || "Unknown"}</span>
      </h2>

      {orders.length > 0 ? (
        <ul className="space-y-2">
          {orders.map((order, index) => (
            <li
              key={index}
              className="bg-white shadow-md rounded-lg px-4 py-2 text-gray-700 border border-gray-200"
            >
              {order}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No orders found for this subdomain.</p>
      )}
    </div>
  );
};

export default Orders;
