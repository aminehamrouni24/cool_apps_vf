/* eslint-disable */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

// Components
import ProfileWithBorder from '../components/ProfileWithBorder/ProfileWithBorder';

// Third Party
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';


import CloseIcon from '../assets/icons/generalIcons/closeIconSVG.svg';

// Utility
import Routes from './Routes';
import globalStyles from '../assets/styles/globalStyles';
import {allColors} from '../assets/styles/mainColors';
import {horizontalScale, screenWidth} from '../utility/Scale';
import * as images from '../assets/images/map';
import styles from './DrawerNavigation/styles';
import {
  ENGLISH_LANGUAGE,
  GEORGIAN_LANGUAGE,
  RUSSIAN_LANGUAGE,
  TURKISH_LANGUAGE,
} from '../constants/constants';
import action from '../redux/action';
import {pushScreen} from '../utility/NavigationService';

//Navigators
import {
  DeliveryModuleMenu,
  OrderHistoryModuleMenu,
  OtherModuleMenu,
  PaymentMethodModuleMenu,
  ProfileModuleMenu,
  SettingModuleMenu,
  SupportModuleMenu,
  VehicleRegistrationModuleMenu,
  WizardModuleMenu,
} from './DrawerNavigation/DrawerStackNavigator';

const Stack = createStackNavigator();
//Modular menu consisting of screens
const Screens = ({style}) => {
  return (
    <View style={globalStyles.flex}>
      {/*-----Close Icon For the Menu Start----*/}
      <View style={styles.closeIcon}>
        <CloseIcon height={18} width={18} />
        <Text style={styles.closeText}>Close</Text>
      </View>
      {/*-----Close Icon For the Menu End----*/}

      <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
        <Stack.Navigator>
          {/*WizardModuleMenu Menu and Screens Start -- See Component For Sub Menu*/}
          {/*Items*/}
          <Stack.Screen
            name={Routes.WizardModuleMenu}
            component={WizardModuleMenu}
            options={{headerShown: false}}
          />
          {/*WizardModuleMenu and Screens End -- See Component For Sub Menu Items*/}
          {/* DeliveryModuleMenu Menu and Screens Start */}
          <Stack.Screen
            name={Routes.DeliveryModuleMenu}
            component={DeliveryModuleMenu}
            options={{headerShown: false}}
          />
          {/* Discover Menu and Screens End */}
          {/* Profile Menu and Screens Start -- See Component For Sub Menu Items */}
          <Stack.Screen
            name={Routes.ProfileModuleMenu}
            component={ProfileModuleMenu}
            options={{headerShown: false}}
          />
          {/* Profile Menu and Screens End -- See Component For Sub Menu Items */}
          {/* Payment Methods Menu and Screens Start -- See Component For Sub Menu Items */}
          <Stack.Screen
            name={Routes.PaymentMethodModuleMenu}
            component={PaymentMethodModuleMenu}
            options={{headerShown: false}}
          />
          {/* Payment Methods Menu and Screens End -- See Component For Sub Menu Items */}

          {/*/!* Settings Menu and Screens Start -- See Component For Sub Menu Items *!/*/}
          <Stack.Screen
            name={Routes.OtherModuleMenu}
            component={OtherModuleMenu}
            options={{headerShown: false}}
          />
          {/*/!* Settings Menu and Screens End -- See Component For Sub Menu Items *!/*/}
          {/* Settings Menu and Screens Start -- See Component For Sub Menu Items */}
          <Stack.Screen
            name={Routes.SettingModuleMenu}
            component={SettingModuleMenu}
            options={{headerShown: false}}
          />
          {/* Settings Menu and Screens End -- See Component For Sub Menu Items */}
          {/* Support Menu and Screens Start -- See Component For Sub Menu Items */}
          <Stack.Screen
            name={Routes.SupportModuleMenu}
            component={SupportModuleMenu}
            options={{headerShown: false}}
          />
          {/* Support Menu and Screens End -- See Component For Sub Menu Items */}
          {/* Order History Menu and Screens Start -- See Component For Sub Menu Items */}
          <Stack.Screen
            name={Routes.OrderHistoryModuleMenu}
            component={OrderHistoryModuleMenu}
            options={{headerShown: false}}
          />
          {/* Order History Menu and Screens End -- See Component For Sub Menu Items */}
          {/*/!* Vehicle Registration Menu and Screens Start -- See Component For Sub Menu Items *!/*/}
          <Stack.Screen
            name={Routes.VehicleRegistrationModuleMenu}
            component={VehicleRegistrationModuleMenu}
            options={{headerShown: false}}
          />
          {/*/!* Vehicle Registration Menu and Screens End -- See Component For Sub Menu Items *!/*/}
        </Stack.Navigator>
      </Animated.View>
    </View>
  );
};

const DrawerContent = props => {
  const dispatch = useDispatch();

  /*------ Menu Items Present in the Main Menu of Authenticated User Start ------- */
  const DrawerArray = [
    {
      title: 'Profile',
      iconPath: images.drawerMenuIcons.profileIcon,
      routeName: Routes.ProfileModuleMenu,
      screen: Routes.ProfileHomeScreen,
    },
    {
      title: 'Vehicle Registration',
      iconPath: images.drawerMenuIcons.vehicleRegistrationIcon,
      routeName: Routes.VehicleRegistrationModuleMenu,
      screen: Routes.VehicleRegistrationHomeScreen,
    },
    {
      title: 'Delivery History',
      iconPath: images.drawerMenuIcons.deliveryHistoryIcon,
      routeName: Routes.OrderHistoryModuleMenu,
      screen: Routes.OrderHistoryHomeScreen,
    },
    {
      title: 'My Wallet',
      iconPath: images.drawerMenuIcons.myWalletIcon,
      routeName: Routes.PaymentMethodModuleMenu,
      screen: Routes.MyWalletHomeScreen,
    },
    {
      title: 'Settings',
      iconPath: images.drawerMenuIcons.settingIcon,
      routeName: Routes.SettingModuleMenu,
      screen: Routes.Settings,
    },
    {
      title: 'Support',
      iconPath: images.drawerMenuIcons.supportIcon,
      routeName: Routes.SupportModuleMenu,
      screen: Routes.SupportHomeScreen,
    },
    {
      title: 'Other',
      iconPath: images.drawerMenuIcons.settings,
      routeName: Routes.OtherModuleMenu,
      screen: Routes.OtherModuleMenu,
    },
    {
      title: 'Language',
      iconPath: selectFlag(),
      routeName: Routes.SupportModuleMenu,
    },
  ];
  /*------ Menu Items Present in the Main Menu of Authenticated User End ------- */

  /*----- Function that determines which flag to show according to selected language start ------*/
  function selectFlag() {
    let flag = useSelector(state => state.selectedLanguage);
    switch (flag) {
      case ENGLISH_LANGUAGE:
        return images.countryFlags.USAFlag;
      case RUSSIAN_LANGUAGE:
        return images.countryFlags.RussianFlag;
      case GEORGIAN_LANGUAGE:
        return images.countryFlags.GeorgianFlag;
      case TURKISH_LANGUAGE:
        return images.countryFlags.TurkishFlag;
      default:
        return images.countryFlags.USAFlag;
    }
  }
  /*----- Function that determines which flag to show according to selected language end ------*/

  const navigationWithPush = (routeName, params) => {
    props.navigation.toggleDrawer();
    pushScreen(routeName, params);
  };

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={[
        globalStyles.flex,
        globalStyles.bgSecondaryBlack,
        {paddingLeft: horizontalScale(36)},
      ]}>
      <SafeAreaView style={globalStyles.flex}>
        <View style={styles.safeAreaContex}>
          {/*---- User Profile Picture Container Start ----*/}
          <View style={styles.profileView}>
            <ProfileWithBorder
              imagePath={
                'https://images.unsplash.com/photo-1601999109332-542b18dbec57?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
              }
              imageHeight={screenWidth * 0.13}
              imageWidth={screenWidth * 0.13}
              borderColor={allColors.white}
            />
            <View style={styles.userDetailView}>
              <Text style={[styles.welcomeText]}>Welcome</Text>
              <Text style={styles.userNameText}>Sabrina Lorenstein</Text>
              <Text style={[globalStyles.RobotoFont100, styles.userNumberText]}>
                +1 (917) 470-9281
              </Text>
            </View>
          </View>
          {/*---- User Profile Picture Container End ----*/}

          {/*---- Menu Items Display Scrollable Container Start ------*/}
          <ScrollView style={[globalStyles.marginTop15, globalStyles.flex]}>
            {DrawerArray.map((item, index) => {
              return (
                <TouchableOpacity
                  key={'drawer_item_' + index}
                  onPress={() =>
                    navigationWithPush(item.routeName, item.screen)
                  }
                  style={styles.drawerView}>
                  <Image source={item.iconPath} style={styles.iconStyle} />
                  <Text style={styles.drawerLabel}>{item.title}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          {/*---- Menu Items Display Scrollable Container End ------*/}
        </View>

        {/*----Logout Button Start ------*/}
        <TouchableOpacity
          onPress={() => dispatch(action.isLoggedIn(false))}
          style={styles.logoutView}>
          <Image
            source={images.drawerMenuIcons.logoutIcon}
            style={styles.logoutIconStyle}
          />
          <Text style={styles.drawerLabel}>Logout</Text>
        </TouchableOpacity>
        {/*----Logout Button End ------*/}
      </SafeAreaView>
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

/*---------- Drawer Navigator setup and styles start --------*/
const DrawerNavigator = () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));

  const [scale, setScale] = useState({borderRadius: 0, scale: []});

  const [borderRadius, setBorderRadius] = useState({});

  const [animatedStyle, setAnimatedStyle] = useState({});

  useEffect(() => {
    const scaleAnimated = Animated.interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [1, 0.75],
    });
    setScale(scaleAnimated);
    const borderRadiusAnimated = Animated.interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [0, 35],
    });
    setBorderRadius(borderRadiusAnimated);
  }, [progress]);

  useEffect(() => {
    if (Object.keys(borderRadius).length >0 && Object.keys(scale).length > 0) {
      setAnimatedStyle({
        borderRadius,
        transform: [{scale}],
      });
    }
  }, [borderRadius]);

  return (
    <Drawer.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      headerMode="float"
      drawerType="slide"
      overlayColor="transparent"
      drawerStyle={styles.drawerStyles}
      contentContainerStyle={globalStyles.flex}
      drawerContentOptions={{
        activeBackgroundColor: allColors.transparent,
        activeTintColor: allColors.white,
        inactiveTintColor: allColors.white,
      }}
      sceneContainerStyle={{backgroundColor: allColors.secondaryBlack}}
      drawerContent={newProps => {
        setTimeout(() => setProgress(newProps.progress), 10);
        return <DrawerContent {...newProps} />;
      }}>
      <Drawer.Screen
        name="Drawer"
        unmountOnBlur={true}
        options={{headerShown: false, unmountOnBlur: true}}>
        {props => {
          return (
            <Screens {...props} style={animatedStyle !== {} && animatedStyle} />
          );
        }}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};
/*---------- Drawer Navigator setup and styles end --------*/
export default DrawerNavigator;
