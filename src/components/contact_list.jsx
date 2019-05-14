import React from 'react';
import './contact_list.css';
import PropTypes from 'prop-types';

function compare(a, b){
  if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) return 1;
  if (b.firstName.toLowerCase() > a.firstName.toLowerCase()) return -1;
  if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
  if (b.lastName.toLowerCase() > a.lastName.toLowerCase()) return -1;
  return 0;
}

/**
 * Takes a list of contacts an display it
 * You can also select or remove, that will run a function in Book component
 */
const ContactList = (props) => (
  <ul className="contact-list">
    {props.contacts.length > 0 ? (
      props.contacts.sort(compare).map((contact, index) => (
        <li
          key={ index }
          onClick={() => props.selectContact(contact)}
          className={props.selectedId === contact.id ? 'selected' : ''}
        >
          {contact.firstName} {contact.lastName} <button onClick={() => props.removeContact(contact.id)}>Remove</button>
        </li>
      ))
    ) : (
      <li>No contacts</li>
    )}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  selectedId: PropTypes.number,
  selectContact: PropTypes.func.isRequired,
  removeContact: PropTypes.func.isRequired
};

export default ContactList;
