import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { verifyToken } from '../api';

const ProtectedRoute = ({ element }) => {
  const { token, logout } = useAuth();
  const [isValid, setIsValid] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const checkTokenValidity = async () => {
        try {
          const response = await verifyToken(token);
          setIsValid(true); 
        } catch (error) {
          setIsValid(false); 
          logout(); 
        }
      };

      checkTokenValidity()
      setInterval(() => {
        checkTokenValidity();
      }, 60000);
    } else {
      setIsValid(false); 
    }
  }, [token, logout]);

  if (isValid === null) {
    return <div>Loading...</div>;
  }

  if (isValid === false) {
    navigate('/login');
    return <div>Token is invalid or expired. Please login again.</div>;
  }
  if (!token) {
    navigate("/");
  }
  return element;
};

export default ProtectedRoute;
