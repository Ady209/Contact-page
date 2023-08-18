// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './store/contactsSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
