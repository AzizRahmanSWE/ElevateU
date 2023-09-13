import React, { useState } from 'react';
import LoginForm from './loginForm.jsx';

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = (credentials) => {
    if (
      credentials.email === 'user@example.com' &&
      credentials.password === 'password'
    ) {
      setIsLoggedIn(true);
      setError(null);
    } else {
      setIsLoggedIn(false);
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <h1>Fitness App Login</h1>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <>
          {error && <p>{error}</p>}
          <LoginForm onLogin={handleLogin} />
        </>
      )}
    </div>
  );
};

export default LoginPage;