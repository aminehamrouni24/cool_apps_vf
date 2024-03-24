import React from 'react';

// Third Party
import {NavigationContainer} from '@react-navigation/native';

// Utility
import RootNav from '../src/navigation/index';
import {navigationRef} from './utility/NavigationService';

const AppRootNavigation = () => {
  return (
    <React.Fragment>
      <NavigationContainer ref={navigationRef}>
        <RootNav />
      </NavigationContainer>
    </React.Fragment>
  );
};

export default AppRootNavigation;
