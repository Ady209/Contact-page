import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editContact, deleteContact } from '../store/contactsSlice';
import { RootState } from '../store';
import { Contact } from '../types';

const ContactDetails: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const contact = contacts.find((c: Contact) => c.id === id);

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(contact ? contact.name : '');
  const [email, setEmail] = useState(contact ? contact.email : '');

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    dispatch(editContact({ ...contact, name, email }));
    setEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <div>
      {editing ? (
        <div>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{contact.name}</h2>
          <p>Email: {contact.email}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ContactDetails;
