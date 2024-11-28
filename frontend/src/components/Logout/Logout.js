import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Logout = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    console.log('Logged out');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;