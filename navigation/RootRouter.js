import React from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const RootRouter = ({ isLoggedIn, onLogin, onLogout }) => {
  return isLoggedIn ? (
    <MainStack onLogout={onLogout} />
  ) : (
    <AuthStack onLogin={onLogin} />
  );
};

export default RootRouter;
