import { matchesText, makeContactFromAction } from './utils';
import { addContact, editContact } from '../actions/book_actions';

it('#matchesText should work', () => {
  expect(matchesText('text', 't')).toBe(true);
  expect(matchesText('text', 'bla')).toBe(false);
  expect(matchesText('text', '')).toBe(true);
});

it('#makeContactFromAction should work', () => {
  const addContactAction = addContact('test', 'test');
  expect(makeContactFromAction(addContactAction)).toEqual(jasmine.objectContaining({
    firstName: 'test', lastName: 'test',
  }));
  expect(makeContactFromAction(editContact(1, 'test', 'test'))).toEqual({
    firstName: 'test', lastName: 'test', id: 1,
  });
});

