import React, { useEffect, useState } from 'react';
import InventoryList from './components/InventoryList';
import { fetchInventory } from './services/api';
import { setupSignalR } from './services/signalr';

const App = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    // Initial fetch
    fetchInventory().then(setInventory);

    // Real-time updates
    const connection = setupSignalR((newItem) => {
      setInventory(prev => {
        const exists = prev.find(p => p.productId === newItem.productId);
        if (exists) {
          return prev.map(p => p.productId === newItem.productId ? newItem : p);
        } else {
          return [...prev, newItem];
        }
      });
    });

    return () => connection.stop();
  }, []);

  return (
    <div className="container">
      <h1>📦 Smart Shelf Inventory</h1>
      <InventoryList inventory={inventory} />
    </div>
  );
};

export default App;
