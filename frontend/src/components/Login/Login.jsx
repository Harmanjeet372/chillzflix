import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { login } from '../../api';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login: setAuthToken } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    try {
      const response = await login({ email, password });
      console.log(response);
      setAuthToken(response.token);
      sessionStorage.setItem('authToken', response.token);
      sessionStorage.setItem('user', JSON.stringify(response.user));
      localStorage.setItem('authToken', response.token);
      setError('');

      navigate('/home');
      setIsSubmitting(false);
    } catch (error) {
      setError(error.message);
      setIsSubmitting(false);
    }
  };

  return (
    <div
  className="flex justify-center items-center h-screen bg-cover bg-center"
  style={{
    backgroundImage: `url('./log.jpeg')`, // Replace with your image URL
  }}
>
  <div className="bg-white p-8 rounded-lg shadow-xl w-96 transform transition-transform">
    <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">Welcome Back!</h2>
    <p className="text-center text-gray-600 mb-6">Please sign in to your account</p>
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded-md text-sm">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full p-2 rounded-md text-white font-semibold ${
          isSubmitting
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500'
        } transition-all`}
      >
        {isSubmitting ? 'Signing in...' : 'Login'}
      </button>
    </form>

    <div className="mt-6 text-center">
      <p className="text-gray-600 text-sm">
        Don't have an account?{' '}
        <a
          href="/signup"
          className="text-blue-500 hover:underline transition-all"
        >
          Sign Up
        </a>
      </p>
    </div>
  </div>
</div>


  );
};

export default Login;
