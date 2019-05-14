import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  EDIT_CONTACT,
  SELECT_CONTACT,
} from '../constants/action_types';
import { makeContactFromAction } from '../utils/utils';
import { initialContacts } from '../constants/contacts';

export const initialState = {
  selectedContact: undefined,
  contacts: initialContacts,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_CONTACT:
      return {
        ...state,
        selectedContact: state.contacts.find((c) => c.id === action.id),
      };
    case ADD_CONTACT:
      const contact = makeContactFromAction(action);
      return {
        ...state,
        contacts: [...state.contacts, contact]
      };

    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((e) => {
          return e.id !== action.id;
        }),
      };

    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((e) => {
          if (e.id === action.id) {
            return makeContactFromAction(action);
          }
          return e;
        }),
      };

    default:
      return state;
  }
}
