import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import * as reducers from '../reducers';
import Book from './book';

const store = createStore(combineReducers(reducers));

it('renders without crashing', () => {
  const div = document.createElement('Book');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Book}/>
      </BrowserRouter>
    </Provider>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
