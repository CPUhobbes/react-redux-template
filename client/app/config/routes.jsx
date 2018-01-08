import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './../components/App';
import Home from './../components/home/Home';
import Child from './../components/child/Child';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/child" component={Child} />;
  </Route>
);
