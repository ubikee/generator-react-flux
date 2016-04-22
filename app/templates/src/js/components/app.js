import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import Layout from './page/app-layout';

// Pages
import Page1 from './page1/app-page1'

export default () => {
  return (
    <Router>
      <Route path="/" component={Layout}>
        <IndexRoute component={Page1}></IndexRoute>
        <Route path="page2" component={Page2}></Route>
      </Route>
    </Router>
  )
}
