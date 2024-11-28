import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
    const { logout, token } = useAuth();
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // For navigation after logout

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
        navigate('/login');
        console.error('No user data found in sessionStorage.');
    }
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  if (!user) {
    return <div>Loading...</div>; 

  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-white mb-4">Profile</h1>
        <div className="text-white">
          <div className="mb-4">
            <strong className="text-lg">User ID:</strong> {user._id}
          </div>
          <div className="mb-4">
            <strong className="text-lg">Name:</strong> {user.name}
          </div>
          <div className="mb-4">
            <strong className="text-lg">Email:</strong> {user.email}
          </div>
        </div>
        <div className="mt-6">
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
