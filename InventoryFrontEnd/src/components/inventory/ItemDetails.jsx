import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`http://localhost:8011/items/${id}`);
        if (!response.ok) throw new Error('Error fetching item');
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };
    fetchItem();
  }, [id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div>
      <h2>{item.item_name}</h2>
      <p>{item.description}</p>
      <p>Quantity: {item.quantity}</p>
   
    </div>
  );
}

export default ItemDetail;
