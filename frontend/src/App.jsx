import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Movies from './components/MovieList/MovieList';
import ProtectedRoute from './components/ProtectedRotes'; // Import ProtectedRoute component
import Profile from './components/Profile/Profile';

// import './App.css';

const App = () => {
  const homeRef = useRef(null);
  const moviesRef = useRef(null);
  const favoritesRef = useRef(null);
  const watchLaterRef = useRef(null);

  const scrollToSection = (section) => {
    const refMap = {
      home: homeRef,
      movies: moviesRef,
      favorites: favoritesRef,
      watchLater: watchLaterRef
    };

    const sectionRef = refMap[section];

    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Section ${section} not found`);
    }
  };

  return (
    <AuthProvider>
      <Router>
        <Navbar scrollToSection={scrollToSection} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Route for Home */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home refs={homeRef} moviesRef={moviesRef} favoritesRef={favoritesRef} watchLaterRef={watchLaterRef} />
              </ProtectedRoute>
            }
          />

          {/* Protected Route for Profile */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Movies Route */}
          <Route path='/movies' element={<Movies />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
