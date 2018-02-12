import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Rules from './rules';

/* eslint-disable arrow-body-style */
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/rules' component={Rules} />
    </Switch>
  </main>
);
/* eslint-enable arrow-body-style */

export default Main;
