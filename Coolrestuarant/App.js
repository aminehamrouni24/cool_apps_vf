import React, {useEffect} from 'react';
import {StatusBar, Platform} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import {NetworkProvider} from './src/utility/NetworkProvider';
import AppRootNavigation from './src/AppRootNavigation';
import {allColors} from './src/assets/styles/mainColors';
import {LogBox} from 'react-native';

export const PageContext = React.createContext();

const App = () => {
  useEffect(() => {
    Platform.OS === 'android' && StatusBar.setBackgroundColor(allColors.white);
    StatusBar.setBarStyle('dark-content');
  }, []);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NetworkProvider>
          <AppRootNavigation />
        </NetworkProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
