import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppContext, AppProvider } from './context/AppContext';
import RootRouter from './navigation/RootRouter';

const AppContent = () => {
  const { isLoggedIn } = useContext(AppContext);

  return <RootRouter isLoggedIn={isLoggedIn} />;
};

const App = () => (
  <AppProvider>
    <NavigationContainer>
      <AppContent />
    </NavigationContainer>
  </AppProvider>
);

export default App;
