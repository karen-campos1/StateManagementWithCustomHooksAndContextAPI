import React, { useState } from 'react';
import { useInventory } from '../hooks/InventoryContext.jsx'; // Ensure the correct path and extension

const NewProductForm = () => {
  const { addProduct } = useInventory();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, description });
    addProduct({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="NewProductForm">
      <h2>Add New Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Product Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default NewProductForm;
