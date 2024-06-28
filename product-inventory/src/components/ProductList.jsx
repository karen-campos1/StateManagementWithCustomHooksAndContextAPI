import React from 'react';
import { useInventory } from '../hooks/InventoryContext.jsx'; // Ensure the correct path and extension

const ProductList = () => {
  const { products, removeProduct } = useInventory();
  console.log('Products:', products);

  return (
    <div className="ProductList">
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
            <button onClick={() => removeProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
