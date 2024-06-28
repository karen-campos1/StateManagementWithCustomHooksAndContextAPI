import { useState } from 'react';

// Dummy data for products
const initialProducts = [
  { id: 1, name: 'Shampoo', description: 'Lavender Scent' },
  { id: 2, name: 'Conditioner', description: 'Lavender Vanilla Scent' },
  { id: 3, name: 'Hair Spray', description: 'Medium Hold' },
  { id: 4, name: 'Hair Oil', description: 'Extra Shine' },
];

const useInventory = () => {
  const [products, setProducts] = useState(initialProducts);

  const fetchProducts = () => {
    return products;
  };

  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const addProduct = (product) => {
    const newProduct = { ...product, id: products.length + 1 };
    console.log('New product:', newProduct); // Add this line
    setProducts([...products, newProduct]);
  };

  return {
    products,
    fetchProducts,
    removeProduct,
    addProduct,
  };
};

export default useInventory;
