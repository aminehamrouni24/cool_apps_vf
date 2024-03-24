import * as React from 'react';
import {StackActions} from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function pushScreen(name, params) {
  let currentScreen =
    navigationRef.current && navigationRef.current.getCurrentRoute();
  if (params === currentScreen.name) {
    navigationRef.current?.navigate(name, params);
  } else {
    navigationRef.current &&
      navigationRef.current.dispatch(StackActions.push(name, params));
  }
}
