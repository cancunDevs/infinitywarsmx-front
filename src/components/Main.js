import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Rules from './rules';
import Announcements from './announcements';
import Tournaments from './tournaments';
import Penalties from './penalties';
import Leaders from './leaders';
import Leaderboard from './leaderboard';
import NotFound from './notFound';
import MemberDetails from './leaderboard/memberDetails';

/* eslint-disable arrow-body-style */
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/members/:id' component={MemberDetails} />
      <Route exact path='/members' component={Leaderboard} />
      <Route path='/rules' component={Rules} />
      <Route path='/leaders' component={Leaders} />
      <Route path='/penalties' component={Penalties} />
      <Route path='/tournaments' component={Tournaments} />
      <Route path='/announcements' component={Announcements} />
      <Route component={NotFound} />
    </Switch>
  </main>
);
/* eslint-enable arrow-body-style */

export default Main;
