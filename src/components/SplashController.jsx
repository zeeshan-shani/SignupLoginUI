import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SplashScreen from './SplashScreen';

const SplashController = () => {
  const [logoVisible, setLogoVisible] = useState(true);
  const [taglineVisible, setTaglineVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setLogoVisible(false);
      setTaglineVisible(true);
    }, 3000);

    const splashTimer = setTimeout(() => {
      navigate('/login');
    }, 6000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(splashTimer);
    };
  }, [navigate]);

  return <SplashScreen logoVisible={logoVisible} taglineVisible={taglineVisible} />;
};

export default SplashController;