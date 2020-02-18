import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Groovy Object",
        email: "roo@f.ru",
        phone: "888-8995-58869",
        type: "personal"
      },
      {
        id: 2,
        name: "Rosy Bloom",
        email: "rozzyo@f.ru",
        phone: "8995-58869",
        type: "personal"
      },
      {
        id: 3,
        name: "Hover Garden",
        email: "hpover@f.ru",
        phone: "8995-55786660-69",
        type: "professional"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //Set Current Contact
  //Clear Current Contact
  //Update Contact
  //Filter Contacts
  //Clear Filter

  return (
    <ContactContext.Provider
      value={{ contacts: state.contacts, addContact, deleteContact }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
