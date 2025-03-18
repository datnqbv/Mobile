import React from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const RootRouter = ({ isLoggedIn }) => {
  return isLoggedIn ? <MainStack /> : <AuthStack />;
};

export default RootRouter;
