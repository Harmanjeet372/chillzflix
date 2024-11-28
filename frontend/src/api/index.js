import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users'; 

// Signup function
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data; // return the response data (like user details or token)
  } catch (error) {
    throw error.response ? error.response.data : 'Error signing up'; 
  }
};

// Login function
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : 'Error logging in'; 
  }
};

// Forgot Password function (request reset link)
export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/forgot-password`, { email });
    return response.data; // return response, like a success message
  } catch (error) {
    throw error.response ? error.response.data : 'Error requesting password reset';
  }
};

// Reset Password function (with token)
export const resetPassword = async (token, newPassword) => {
  try {
    const response = await axios.post(`${API_URL}/reset-password/${token}`, { password: newPassword });
    return response.data; // return success message or user data
  } catch (error) {
    throw error.response ? error.response.data : 'Error resetting password';
  }
};

// Verify Email function (to validate user email after signup)
export const verifyEmail = async (token) => {
  try {
    const response = await axios.post(`${API_URL}/verify-email`, { token });
    return response.data; // return success message
  } catch (error) {
    throw error.response ? error.response.data : 'Error verifying email';
  }
};

// Verify Token function (check if the token is still valid)
export const verifyToken = async (token) => {
  try {
    const response = await axios.post(`${API_URL}/verifyToken`, { token });
    return response.data; 
  } catch (error) {
    throw error.response ? error.response.data : 'Error verifying token';
  }
};
