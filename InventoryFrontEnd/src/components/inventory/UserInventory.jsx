import React, { useEffect, useState } from 'react';
import { useParams,Link} from 'react-router-dom';

function UserInventory() {
  const { id } = useParams();
  
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState({});
  const [editedItems, setEditedItems] = useState({});

  useEffect(() => {
    const fetchUserInventory = async () => {
      try {
        const response = await fetch(`http://localhost:8011/users/${id}/items`);
        if (!response.ok) throw new Error('Error fetching inventory items');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchUserInventory();
  }, [id]);

  const handleEditToggle = (item) => {
    setEditing((prev) => ({ ...prev, [item.id]: !prev[item.id] }));
    setEditedItems((prev) => ({ ...prev, [item.id]: { ...item } }));
  };

  const handleChange = (itemId, event) => {
    const { name, value } = event.target;
    setEditedItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        [name]: value
      }
    }));
  };

  const handleSave = async (itemId) => {
    const updatedItem = editedItems[itemId];
    try {
      const response = await fetch(`http://localhost:8011/items/${itemId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedItem)
      });
      if (!response.ok) throw new Error('Error updating item');
      const data = await response.json();
      setItems((prev) => prev.map((item) => (item.id === itemId ? data : item)));
      setEditing((prev) => ({ ...prev, [itemId]: false }));
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleCancel = (itemId) => {
    setEditing((prev) => ({ ...prev, [itemId]: false }));
    setEditedItems((prev) => {
      const newEdited = { ...prev };
      delete newEdited[itemId];
      return newEdited;
    });
  };

  const handleDelete = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:8011/items/${itemId}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Error deleting item');
      setItems((prev) => prev.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h2>Your Inventory (User ID: {id})</h2>
      <Link to="/create-item">Create New Item</Link>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: '1rem' }}>
            {editing[item.id] ? (
              <div>
                <input
                  type="text"
                  name="item_name"
                  value={editedItems[item.id]?.item_name || ''}
                  onChange={(e) => handleChange(item.id, e)}
                />
                <input
                  type="text"
                  name="description"
                  value={editedItems[item.id]?.description || ''}
                  onChange={(e) => handleChange(item.id, e)}
                />
                <input
                  type="number"
                  name="quantity"
                  value={editedItems[item.id]?.quantity || ''}
                  onChange={(e) => handleChange(item.id, e)}
                />
                <button onClick={() => handleSave(item.id)}>Save</button>
                <button onClick={() => handleCancel(item.id)}>Cancel</button>
              </div>
            ) : (
              <div>
                <strong>{item.item_name}</strong>: {item.description} (Quantity: {item.quantity})
                <div>
                  <button onClick={() => handleEditToggle(item)}>Edit</button>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserInventory;
