import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '131613456334-kt87r81789l1fd2labib866j90u6qdvg.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;