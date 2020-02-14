import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Pages from "./pageloader";

export default class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Pages.HomePage} />
            <Route exact path="/search-results" component={Pages.SearchResults} />
          </Switch>
      </Router>
    )
  }
}
