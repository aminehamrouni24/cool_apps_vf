import React from 'react';
import {View} from 'react-native';

// Third Party
import {createStackNavigator} from '@react-navigation/stack';

// Components
import ArrowLeftIcon from '../components/icons/ArrowLeftIcon/ArrowLeftIcon';
import Header from '../components/Header/Header';
import HeaderFlagIcon from '../components/icons/HeaderFlagIcon/HeaderFlagIcon';
import UnderlineTextIcon from '../components/UnderlineTextIcon/UnderlineTextIcon';

// Screens
import ChooseLanguage from '../screens/ChooseLanguage/ChooseLanguage';
import ChooseRegistrationType from '../screens/ChooseRegistrationType/ChooseRegistrationType';
import CreateAccountSlideshow from '../screens/CreateAccountSlideshow/CreateAccountSlideshow';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import OTPVerification from '../screens/OTPVerification/OTPVerification';
import Registration from '../screens/Registration/Registration';
import SendOTPVerification from '../screens/SendOTPVerification/SendOTPVerification';
import Welcome from '../screens/Welcome/Welcome';

// Utility
import Routes from './Routes';
import globalStyles from '../assets/styles/globalStyles';
import {navigate} from '../utility/NavigationService';

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

  /*-------Header Empty Icon Start------*/
  const headerEmpty = {
    headerTitle: false,
    headerBackTitleVisible: false,
    headerLeft: false,
    headerRight: false,
    headerStyle: globalStyles.commonHeaderTransparent,
  };
  /*-------Header Empty Icon End------*/

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
        options={{
          headerTitle: false,
          headerBackTitleVisible: false,
          gesturesEnabled: false,
          headerBackImage: null,
          headerLeft: false,
          headerStatusBarHeight: -100,
        }}
      />
      {/* Create Account Slideshow Screen End */}

      {/* Registration Screen Start */}
      <Stack.Screen
        name={Routes.Registration}
        component={Registration}
        options={headerWithFlagIcon}
      />
      {/* Registration Screen End */}

      {/* Forgot Password Screen Start */}
      <Stack.Screen
        name={Routes.ForgotPassword}
        component={ForgotPassword}
        options={{
          headerTitle: false,
          headerBackTitleVisible: false,
          headerBackImage: () => <ArrowLeftIcon />,
          headerStyle: globalStyles.commonHeaderTransparent,
        }}
      />
      {/* Forgot Password Screen End */}

      {/* OTP Verification Screen Start */}
      <Stack.Screen
        name={Routes.OTPVerification}
        component={OTPVerification}
        options={headerEmpty}
      />
      {/* OTP Verification Screen End */}

      {/* Send OTP Verification Screen Start */}
      <Stack.Screen
        name={Routes.SendOTPVerification}
        component={SendOTPVerification}
        options={headerEmpty}
      />
      {/* Send OTP Verification Screen Start */}

      {/* Choose Registration Type Screen Start */}
      <Stack.Screen
        name={Routes.ChooseRegistrationType}
        component={ChooseRegistrationType}
        options={{
          headerTitle: false,
          headerBackTitleVisible: false,
          headerBackImage: () => <ArrowLeftIcon />,
          headerStyle: globalStyles.commonHeaderTransparent,
          headerRight: () => (
            <UnderlineTextIcon
              fontSize={13}
              onPress={() => navigate('LOGIN')}
              style={{marginTop: -2, marginRight: 36}}
              isUnderlined={true}
              title={'Login'}
            />
          ),
        }}
      />
      {/* Choose Registration Type Screen End */}
    </Stack.Navigator>
  );
};

export default NotAuthenticated;
