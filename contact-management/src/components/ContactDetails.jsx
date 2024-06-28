import React, { useContext } from 'react';
import { ContactContext } from '../context/ContactContext';

const ContactDetails = () => {
  const { selectedContact, setSelectedContact } = useContext(ContactContext);

  if (!selectedContact) {
    return <div>Select a contact to see the details.</div>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {selectedContact.name}</p>
      <p>Email: {selectedContact.email}</p>
      <p>Phone: {selectedContact.phone}</p>
      <button onClick={() => setSelectedContact(null)}>Close</button> {/* Add Close Button */}
    </div>
  );
};

export default ContactDetails;
