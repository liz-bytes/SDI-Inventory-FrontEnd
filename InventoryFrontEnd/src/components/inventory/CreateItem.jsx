import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

function CreateItem() {
  const [itemData, setItemData] = useState({
    user_id: '', // Ideally, this comes from authentication context
    item_name: '',
    description: '',
    quantity: 0
  });
  const navigate=  useNavigate();

  const handleChange = (event) => {
    setItemData({ ...itemData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8011/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(itemData)
      });
      if (!response.ok) throw new Error('Error creating item');
      const data = await response.json();
      console.log('Item created:', data);
      navigate(`/users/${itemData.user_id}/items`);
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  return (
    <div>
      <h2>Create New Item</h2>
      <form onSubmit={handleSubmit}>
        <input name="user_id" placeholder="User ID" onChange={handleChange} required />
        <input name="item_name" placeholder="Item Name" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <input name="quantity" type="number" placeholder="Quantity" onChange={handleChange} required />
        <button type="submit">Create Item</button>
      </form>
    </div>
  );
}

export default CreateItem;
