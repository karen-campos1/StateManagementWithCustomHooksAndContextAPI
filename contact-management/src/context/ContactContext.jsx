import React, { createContext, useState } from 'react';

const ContactContext = createContext();

const dummyContacts = [
  { id: 1, name: 'Ashley Hill', email: 'ashh@gmail.com', phone: '123-456-7899' },
  { id: 2, name: 'Bob Shmob', email: 'shmboddy@yahoo.com', phone: '897-4651-137' },
  { id: 3, name: 'Kate Middleton', email: 'royal@aol.com', phone: '654-857-5319' },
  { id: 4, name: 'Abby Farnk', email: 'monkey@aol.com', phone: '854-957-5419' },
];

const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState(dummyContacts);
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <ContactContext.Provider value={{ contacts, selectedContact, setSelectedContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export { ContactContext, ContactProvider };
