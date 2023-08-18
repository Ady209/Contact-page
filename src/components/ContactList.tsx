import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Contact } from '../types';

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map((contact: Contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
