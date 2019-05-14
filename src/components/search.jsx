import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component made for fun, but if the application grows and we need more complex functionality, using a search component might be very useful
 * What if we want to autofocus? or make an animation? or validate what the user types? among others
 */
const Search = (props) => (
  <input type="text" value={props.value} placeholder="Search..." onChange={props.search} />
);

Search.propTypes = {
  value: PropTypes.string,
  search: PropTypes.func.isRequired
};

export default Search
