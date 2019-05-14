import reducer, { initialState } from './book_reducer';
import { editContact, addContact, removeContact, selectContact } from '../actions/book_actions';
import { initialContacts } from '../constants/contacts';

describe('Book reducer', function() {
  let currentState = {};
  const mockContact = initialContacts[0];

  beforeEach(() => {
    currentState = initialState;
  });

  it('addContact', function() {
    const newState = reducer(currentState, addContact('test', 'test'));
    expect(newState.contacts.length).toBeGreaterThan(0);
  });

  it('selectContact', function() {
    const newState = reducer(currentState, selectContact(mockContact.id));
    expect(newState.selectedContact).toEqual(mockContact);
  });

  it('removeContact', function() {
    const newState = reducer(currentState, removeContact(mockContact.id));
    expect(newState.contacts).not.toContain(mockContact);
  });

  it('editContact', function() {
    const newState = reducer(currentState, editContact(mockContact.id, 'test', 'test'));
    const editedContact = newState.contacts.find((c) => c.id === mockContact.id);
    expect(editedContact.firstName).toEqual('test');
    expect(editedContact.lastName).toEqual('test');
  });
});
