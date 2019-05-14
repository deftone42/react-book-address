/**
 * Helper that matches a text inside a string
 * @param text
 * @param match
 * @returns {boolean}
 */
export function matchesText(text, match) {
  return text.toLowerCase().indexOf(match.toLowerCase()) > -1;
}

/**
 * Helper function that creates a Contact object from action
 * @see ADD_CONTACT | EDIT_CONTACT
 * @param action(ADD_CONTACT || EDIT_CONTACT)
 * @returns {{firstName: string, lastName: string, id: number}}
 */
export function makeContactFromAction(action) {
  return {
    firstName: action.firstName,
    lastName: action.lastName,
    id: action.id || Math.random(),
  }
}
