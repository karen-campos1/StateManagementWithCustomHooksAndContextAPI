import React from 'react';
import ProductList from './components/ProductList';
import NewProductForm from './components/NewProductForm';
import { InventoryProvider } from './hooks/InventoryContext.jsx'; // Ensure the correct path and extension
import './App.css';  // Import the CSS file

const App = () => {
  return (
    <InventoryProvider>
      <div className="App">
        <h1>Product Inventory Management</h1>
        <ProductList />
        <NewProductForm />
      </div>
    </InventoryProvider>
  );
};

export default App;
