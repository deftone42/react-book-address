import * as types from '../constants/action_types'

export const selectContact = (id) => ({ type: types.SELECT_CONTACT, id });
export const addContact = (firstName, lastName) => ({ type: types.ADD_CONTACT, firstName, lastName });
export const removeContact = (id) => ({ type: types.REMOVE_CONTACT, id });
export const editContact = (id, firstName, lastName) => ({ type: types.EDIT_CONTACT, id, firstName, lastName });
