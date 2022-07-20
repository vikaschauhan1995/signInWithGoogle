/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Login from '../../components/login';
import { getLocalStorageByKey } from '../../components/getLocalStorageByKey';
import { PROFILE_OBJ_KEY } from '../../constant/index';
import history from '../../utils/history';

export default function App() {
  useEffect(() => {
    const user = getLocalStorageByKey(PROFILE_OBJ_KEY);
    if (user) {
      history.push('/home');
    } else {
      history.push('/login');
    }
  });
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
