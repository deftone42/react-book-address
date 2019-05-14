import React from 'react';
import { connect } from 'react-redux';
import './book.css';

import { addContact, removeContact, editContact, selectContact } from '../actions/book_actions';
import ContactList from '../components/contact_list';
import ContactForm from '../components/contact_form';
import Search from '../components/search';
import { matchesText } from '../utils/utils';
import {Link} from "react-router-dom";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  search(e) {
    e.preventDefault();
    const text = e.target.value;
    this.setState({ search: text });
  }

  render() {
    const contacts = this.props.book.contacts.filter((c) => {
      return matchesText(c.firstName, this.state.search) || matchesText(c.lastName, this.state.search);
    });
    const selectedContact = this.props.book.selectedContact;
    return (
      <div className="flex-container book">
        <section>
          <Link to="/">Go to Readme</Link>
          <h2>Address Book</h2>
          <Search value={this.state.search} search={(e) => this.search(e)}/>
          <ContactList
            contacts={contacts}
            selectedId={selectedContact && selectedContact.id}
            selectContact={(contact) => this.props.dispatch(selectContact(contact.id))}
            removeContact={(id) => this.props.dispatch(removeContact(id))}
          />
        </section>
        <section className='contact-form-container'>
          <ContactForm
            addContact={(firstName, lastName) => this.props.dispatch(addContact(firstName, lastName))}
            editContact={(id, firstName, lastName) => this.props.dispatch(editContact(id, firstName, lastName))}
            selectedContact={selectedContact}
          />
        </section>
      </div>
    );
  }
}

export default connect(state => ({
  book: state.book
}))(Book);
