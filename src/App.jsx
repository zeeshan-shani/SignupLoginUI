import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { WaitScreen } from './pages/WaitScreen';
import SplashController from './components/SplashController';
import Auth from './pages/Auth';
import './App.css';

function App() {
  useEffect(() => {
    if (!localStorage.getItem('splashShown')) {
      localStorage.setItem('splashShown', 'true');
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={localStorage.getItem('splashShown') ? <SignUp /> : <SplashController />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/wait" element={<WaitScreen titleOne={'Getting Start with'} titletwo={'‘Workspace Name’'} />} />
      </Routes>
    </Router>
  );
}

export default App;