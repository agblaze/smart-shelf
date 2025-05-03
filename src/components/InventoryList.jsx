import React from 'react';

const InventoryList = ({ inventory }) => (
  <table>
    <thead>
      <tr>
        <th>Product ID</th>
        <th>Quantity</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody>
      {inventory.map(item => (
        <tr key={item.productId}>
          <td>{item.productId}</td>
          <td>{item.quantity}</td>
          <td>{new Date(item.timestamp).toLocaleString()}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default InventoryList;
