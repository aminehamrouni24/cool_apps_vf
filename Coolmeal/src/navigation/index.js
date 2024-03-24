import React from 'react';
import {useSelector} from 'react-redux';
import Authenticated from './Authenticated';
import NotAuthenticated from './NotAuthenticated';

const RootNav = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  return isLoggedIn ? <Authenticated /> : <NotAuthenticated />;
};

export default RootNav;
