import * as types from '../constants/action_types';
import * as actions from './book_actions';

describe('Book actions', () => {
  const mockContact = {
    id: 1,
    firstName: 'eder',
    lastName: 'bodelon',
  };

  it(`selectContact should create ${types.SELECT_CONTACT} action`, () => {
    expect(actions.selectContact(mockContact.id)).toEqual({
      type: types.SELECT_CONTACT,
      id: mockContact.id,
    })
  });

  it(`addContact should create ${types.ADD_CONTACT} action`, () => {
    expect(actions.addContact(mockContact.firstName, mockContact.lastName)).toEqual({
      type: types.ADD_CONTACT,
      firstName: mockContact.firstName,
      lastName: mockContact.lastName,
    })
  });

  it(`removeContact should create ${types.REMOVE_CONTACT} action`, () => {
    expect(actions.removeContact(mockContact.id)).toEqual({
      type: types.REMOVE_CONTACT,
      id: mockContact.id,
    });
  });

  it(`editContact should create ${types.EDIT_CONTACT} action`, () => {
    expect(actions.editContact(mockContact.id, mockContact.firstName, mockContact.lastName)).toEqual({
      type: types.EDIT_CONTACT,
      id: mockContact.id,
      firstName: mockContact.firstName,
      lastName: mockContact.lastName,
    });
  });
});
