import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import * as reducers from './reducers';
import Book from './containers/book';

const store = createStore(combineReducers(reducers));

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Book}/>
            </Switch>
          </Suspense>
        </Router>
      </Provider>
    )
  }
}

export default App;
