import React from 'react';
import {View} from 'react-native';

// Third Party
import {createStackNavigator} from '@react-navigation/stack';

// Components
import Header from '../components/Header/Header';

//Publicly Available Icons that Can be Used for Commercial Purposes
import HeaderFlagIcon from '../components/icons/HeaderFlagIcon/HeaderFlagIcon';
import ArrowLeftIcon from '../components/icons/ArrowLeftIcon/ArrowLeftIcon';

// Screens
import ChooseLanguage from '../screens/ChooseLanguage/ChooseLanguage';
import CreateAccountSlideshow from '../screens/CreateAccountSlideshow/CreateAccountSlideshow';
import OTPVerification from '../screens/OTPVerification/OTPVerification';
import Registration from '../screens/Registration/Registration';
import Welcome from '../screens/Welcome/Welcome';

// Utility
import globalStyles from '../assets/styles/globalStyles';
import Routes from './Routes';

const Stack = createStackNavigator();

const NotAuthenticated = () => {
  /*-------Header With Flag Icon Start------*/
  const headerWithFlagIcon = {
    headerTitle: false,
    headerBackTitleVisible: false,
    headerLeft: () => (
      <View style={globalStyles.flagHeader}>
        <HeaderFlagIcon />
      </View>
    ),
    headerStyle: globalStyles.commonHeaderTransparent,
  };
  /*------- Header With Flag Icon End -----*/

  return (
    <Stack.Navigator>
      {/* Start Welcome Screen Start */}
      <Stack.Screen
        name={Routes.Welcome}
        component={Welcome}
        options={{headerShown: false}}
      />
      {/* Start Welcome Screen End */}

      {/* Choose Language Screen Start */}
      <Stack.Screen
        name={Routes.ChooseLanguage}
        component={ChooseLanguage}
        options={{
          headerTitle: () => (
            <Header
              title={'Choose Language'}
              leftIcon={null}
              rightIcon={null}
            />
          ),
          headerBackTitleVisible: false,
          headerBackImage: () => <ArrowLeftIcon />,
          headerStyle: globalStyles.commonHeaderTransparent,
        }}
      />
      {/* Choose Language Screen End */}

      {/* Create Account Slideshow Screen Start */}
      <Stack.Screen
        name={Routes.CreateAccountSlideshow}
        component={CreateAccountSlideshow}
        options={{headerShown: false}}
      />
      {/* Create Account Slideshow Screen End */}

      {/* Registration Screen Start */}
      <Stack.Screen
        name={Routes.Registration}
        component={Registration}
        options={headerWithFlagIcon}
      />
      {/* Registration Screen End */}

      {/* OTP Verification Screen Start */}
      <Stack.Screen
        name={Routes.OTPVerification}
        component={OTPVerification}
        options={headerWithFlagIcon}
      />
      {/* OTP Verification Screen End */}
    </Stack.Navigator>
  );
};

export default NotAuthenticated;
