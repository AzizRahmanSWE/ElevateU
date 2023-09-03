import React, { useState } from 'react';
import RegistrationForm from '/Register ./RegistrationForm';

const RegistrationPage = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = (userData) => {
    if (userData.name && userData.email && userData.password) {
      setIsRegistered(true);
      setError(null);
    } else {
      setIsRegistered(false);
      setError('Please fill in all fields.');
    }
  };

  return (
    <div>
      <h1>Fitness App Registration</h1>
      {isRegistered ? (
        <p>Registration successful!</p>
      ) : (
        <>
          {error && <p>{error}</p>}
          <RegistrationForm onRegister={handleRegister} />
        </>
      )}
    </div>
  );
};

export default RegistrationPage;