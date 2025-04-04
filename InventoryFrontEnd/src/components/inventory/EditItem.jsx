import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditItem() {
  const { id } = useParams();
  const navigate= useNavigate();
  const [itemData, setItemData] = useState({
    item_name: '',
    description: '',
    quantity: 0
  });

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`http://localhost:8011/items/${id}`);
        if (!response.ok) throw new Error('Error fetching item');
        const data = await response.json();
        setItemData({
          item_name: data.item_name,
          description: data.description,
          quantity: data.quantity
        });
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };
    fetchItem();
  }, [id]);

  const handleChange = (event) => {
    setItemData({ ...itemData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8011/items/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(itemData)
      });
      if (!response.ok) throw new Error('Error updating item');
      const data = await response.json();
      console.log('Item updated:', data);
      navigate.push('/inventory');
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <div>
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <input name="item_name" value={itemData.item_name} placeholder="Item Name" onChange={handleChange} required />
        <textarea name="description" value={itemData.description} placeholder="Description" onChange={handleChange} required />
        <input name="quantity" type="number" value={itemData.quantity} placeholder="Quantity" onChange={handleChange} required />
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
}

export default EditItem;
