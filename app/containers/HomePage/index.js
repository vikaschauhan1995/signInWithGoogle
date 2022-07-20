/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Logout from '../../components/logout';
import { NAME_KEY, PROFILE_OBJ_KEY } from '../../constant/index';
import { getLocalStorageByKey } from '../../components/getLocalStorageByKey';

export default function HomePage() {
  const profileObjJson = getLocalStorageByKey(PROFILE_OBJ_KEY);
  const profileObj = JSON.parse(profileObjJson);
  const name = profileObj ? profileObj[NAME_KEY] : 'User';
  return (
    <h1>
      Hi, {name}
      <Logout />
    </h1>
  );
}
