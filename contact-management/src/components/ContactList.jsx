import { useContext }  from 'react';
import { ContactContext } from '../context/ContactContext';

const ContactList = () => {
    const { contacts, setSelectedContact } =useContext (ContactContext);

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact =>(
            <li key={contact.id} onClick={() => setSelectedContact(contact)}>
                {contact.name}
            </li>
        ))}
      </ul>
    </div>
  )
};

export default ContactList
