import React, { useState } from 'react';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function successLogin(loginText, passwordText) {
    // enviar para api
    setLogin(loginText);
    setPassword(passwordText);
  }

  return (
    <UserContext.Provider
      value={ { login, password, successLogin } }
    >
      {children}
    </UserContext.Provider>

  );
}

export default UserProvider;
