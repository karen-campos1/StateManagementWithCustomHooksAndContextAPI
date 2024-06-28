import React from 'react';
import { ContactProvider } from './context/ContactContext';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import './App.css'

function App() {

  return (
    <>
     <ContactProvider>
      <div className="App">
        <h1>Contact Management App</h1>
        <ContactList />
        <ContactDetails />
      </div>
     </ContactProvider>
    </>
  );
};

export default App
