import React  from 'react';
import './contact_form.css';
import PropTypes from 'prop-types';
import darth from './darth.ico';
import c3p0 from './C3PO-icon.png';

/**
 * This component fill the contact data and callback `addContact` or `editContact` depending if you passed `selectedContact`
 */
class ContactForm extends React.Component {
  initialState = {
    id: null, firstName: '', lastName: '', errorMessage: '',
  };

  constructor(props) {
    super(props);
    const selectedContact = props.selectedContact;
    this.state = (selectedContact && {
      id: selectedContact.id,
      firstName: selectedContact.firstName,
      lastName: selectedContact.lastName,
      errorMessage: '',
    }) || this.initialState;
  }

  /**
   * Filling contact info when a contact is selected
   */
  componentWillReceiveProps(nextProps) {
    const selectedContact = nextProps.selectedContact;
    if (selectedContact !== this.props.selectedContact) {
      this.setState({
        id: selectedContact.id, firstName: selectedContact.firstName, lastName: selectedContact.lastName,
      });
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.firstName || !this.state.lastName) {
      this.showErrorMessage();
      return;
    }

    if (this.state.id) {
      this.props.editContact(this.state.id, this.state.firstName, this.state.lastName);
    } else {
      this.props.addContact(this.state.firstName, this.state.lastName);
      this.setState(this.initialState); // Re-initialising the state after adding a new contact
    }
  };

  showErrorMessage = () => {
    this.setState({ errorMessage: 'First name & Last name must be defined' });
    setTimeout(() => {
      this.setState({ errorMessage: '' });
    }, 3000);
  };

  render() {
    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <h2>Contact Form</h2>
        <div className="field">
          <label><img width="20" height="20" src={darth} alt="address book" /> First Name: &nbsp;</label>
          <input type="text" name="firstName" placeholder="e.g: Eder"
                 value={this.state.firstName} onChange={this.handleInputChange} />
        </div>
        <div className="field">
          <label><img width="20" height="20" src={c3p0} alt="address book" /> Last Name: &nbsp;</label>
          <input type="text" name="lastName" placeholder="e.g: Bodelon"
                 value={this.state.lastName} onChange={this.handleInputChange} />
        </div>
        <button>{!this.state.id ? 'Add new' : 'Save'} contact</button>
        <div className="error">{this.state.errorMessage}</div>
      </form>
    )
  }
}

ContactForm.propTypes = {
  selectedContact: PropTypes.object,
  addContact: PropTypes.func.isRequired,
  editContact: PropTypes.func.isRequired
};

export default ContactForm
