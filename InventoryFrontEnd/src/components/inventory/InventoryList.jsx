import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function InventoryList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:8011/items');
        if (!response.ok) throw new Error('Error fetching items');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchItems();
  }, []);

  return (
    <div>
      <h2>Inventory</h2>
      
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>
              <strong>{item.item_name}</strong>: {item.description}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InventoryList;
