// src/Items.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Items = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '', price: '' });

  // Fetch items from the API
  useEffect(() => {
    axios.get('http://localhost:5000/api/items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  }, []);

  // Handle new item form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/items', newItem)
      .then(response => {
        setItems([...items, response.data]);  // Add the new item to the state
        setNewItem({ name: '', description: '', price: '' });  // Clear form fields
      })
      .catch(error => {
        console.error('Error adding item:', error);
      });
  };

  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
          </li>
        ))}
      </ul>

      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={newItem.name} 
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} 
          placeholder="Item name" 
          required 
        />
        <input 
          type="text" 
          value={newItem.description} 
          onChange={(e) => setNewItem({ ...newItem, description: e.target.value })} 
          placeholder="Item description" 
          required 
        />
        <input 
          type="number" 
          value={newItem.price} 
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })} 
          placeholder="Item price" 
          required 
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default Items;
