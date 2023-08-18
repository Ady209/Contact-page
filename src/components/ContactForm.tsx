import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../store/contactsSlice';
import { Contact } from '../types';

interface ContactFormProps {
  contact?: Contact;
}

const ContactForm: React.FC<ContactFormProps> = ({ contact }) => {
  const [name, setName] = useState(contact ? contact.name : '');
  const [email, setEmail] = useState(contact ? contact.email : '');

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newContact: Contact = {
      id: contact ? contact.id : String(Date.now()),
      name,
      email,
    };

    if (contact) {
      dispatch(editContact(newContact));
    } else {
      dispatch(addContact(newContact));
    }

    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default ContactForm;
