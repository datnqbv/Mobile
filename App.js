import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootRouter from './navigation/RootRouter';
import { authService } from './services/authService';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const status = await authService.getLoggedIn();
      setIsLoggedIn(status);
    } catch (error) {
      console.error('Error checking auth status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async () => {
    await authService.setLoggedIn(true);
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    await authService.clearAuth();
    setIsLoggedIn(false);
  };

  if (isLoading) {
    return null; // Or a loading screen component
  }

  return (
    <NavigationContainer>
      <RootRouter 
        isLoggedIn={isLoggedIn} 
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
    </NavigationContainer>
  );
};

export default App;
