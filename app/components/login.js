import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { GOOGLE_LOGIN_CLIENT_ID, PROFILE_OBJ_KEY } from '../constant';
import { setLocalStorageByKey } from './setLocalStorageByKey';
import history from '../utils/history';

const Login = () => {
  const onLoginSuccess = res => {
    const profileObj = JSON.stringify(res[PROFILE_OBJ_KEY]);
    setLocalStorageByKey(PROFILE_OBJ_KEY, profileObj);
    // Router.push('/home');
    history.push('./home');
  };
  const onFailureSuccess = res => {
    console.log('failure', res);
  };
  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={GOOGLE_LOGIN_CLIENT_ID}
        buttonText="Login"
        onSuccess={onLoginSuccess}
        onFailure={onFailureSuccess}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};
export default Login;
