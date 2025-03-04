import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppContext, AppProvider } from './context/AppContext';
import AuthStack from './navigation/AuthStack';
import MainStack from './navigation/MainStack';

const App = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default () => (
  <AppProvider>
    <App />
  </AppProvider>
);