import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { GOOGLE_LOGIN_CLIENT_ID, PROFILE_OBJ_KEY } from '../constant';
import { removeLocalStorageByKey } from './removeLocalStorageByKey';
import history from '../utils/history';

const Logout = () => {
  const onSignoutSuccess = () => {
    removeLocalStorageByKey(PROFILE_OBJ_KEY);
    history.push('/login');
  };
  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={GOOGLE_LOGIN_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={onSignoutSuccess}
      />
    </div>
  );
};

export default Logout;
