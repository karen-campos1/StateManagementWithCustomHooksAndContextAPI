import React, { createContext, useState, useContext } from 'react';

// Dummy data for products
const initialProducts = [
  { id: 1, name: 'Shampoo', description: 'Lavender Scent' },
  { id: 2, name: 'Conditioner', description: 'Lavender Vanilla Scent' },
  { id: 3, name: 'Hair Spray', description: 'Medium Hold' },
  { id: 4, name: 'Hair Oil', description: 'Extra Shine' },
];

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  const fetchProducts = () => {
    return products;
  };

  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const addProduct = (product) => {
    const newProduct = { ...product, id: products.length + 1 };
    setProducts([...products, newProduct]);
  };

  return (
    <InventoryContext.Provider value={{ products, fetchProducts, removeProduct, addProduct }}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => useContext(InventoryContext);
