import React from 'react';

// Third Party
import {createStackNavigator} from '@react-navigation/stack';

//Components
import BottomTabNavigator from '../BottomTabNavigation';

//Screens
import NotificationsHomeScreen from '../../screens/NotificationsModule/NotificationsHomeScreen/NotificationsHomeScreen';
import ChatScreen from '../../screens/ChatModule/ChatScreen/ChatScreen';

//Utility
import Routes from '../Routes';
const Stack = createStackNavigator();

/*==================== Wizard Module Menu Start =========================*/
const WizardModuleMenu = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabBar" options={{headerShown: false}}>
        {props => {
          return (
            <BottomTabNavigator
              {...props}
              isTabBarHidden={true}
              initialRouteName={Routes.ProfileTabMenu}
              subInitialRootName={Routes.WizardHomeScreen}
            />
          );
        }}
      </Stack.Screen>
      <Stack.Screen name="DeliveryTabMenu" options={{headerShown: false}}>
        {props => {
          return (
            <BottomTabNavigator
              {...props}
              isTabBarHidden={false}
              initialRouteName={Routes.DeliveryTabMenu}
              subInitialRootName={Routes.DeliveryHomeScreen}
            />
          );
        }}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
/*==================== Wizard Module Menu End =========================*/

/*==================== Delivery Module Menu Start =========================*/
const DeliveryModuleMenu = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabBar" options={{headerShown: false}}>
        {props => (
          <BottomTabNavigator
            {...props}
            initialRouteName={Routes.DeliveryTabMenu}
            subInitialRootName={Routes.DeliveryHomeScreen}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
/*==================== Delivery Module Menu End =========================*/

/*==================== Profile Module Menu Start =========================*/
const ProfileModuleMenu = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabBar" options={{headerShown: false}}>
        {props => (
          <BottomTabNavigator
            {...props}
            initialRouteName={Routes.ProfileTabMenu}
            subInitialRootName={Routes.ProfileHomeScreen}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name={Routes.ChatScreen}
        component={ChatScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
/*==================== Profile Module Menu End =========================*/

/*==================== Order History Module Menu Start =========================*/
const OrderHistoryModuleMenu = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabBar" options={{headerShown: false}}>
        {props => (
          <BottomTabNavigator
            {...props}
            initialRouteName={Routes.OrderHistoryTabMenu}
            subInitialRootName={Routes.OrderHistoryHomeScreen}
          />
        )}
      </Stack.Screen>
      {/*<Stack.Screen*/}
      {/*  name={Routes.OrderHistoryHomeScreen}*/}
      {/*  component={OrderHistoryHomeScreen}*/}
      {/*  options={{headerShown: false}}*/}
      {/*/>*/}
    </Stack.Navigator>
  );
};
/*==================== Order History Module Menu End =========================*/

/*==================== OrderedItemList  Menu Start =========================*/
const NotificationsModuleMenu = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabBar" options={{headerShown: false}}>
        {props => (
          <BottomTabNavigator
            {...props}
            initialRouteName={Routes.NotificationsTabMenu}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name={Routes.NotificationsHomeScreen}
        component={NotificationsHomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
/*==================== OrderedItemList  Menu End =========================*/

/*==================== Other  Menu Start =========================*/
const OtherModuleMenu = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabBar" options={{headerShown: false}}>
        {props => (
          <BottomTabNavigator
            {...props}
            isTabBarHidden={true}
            initialRouteName={Routes.ProfileTabMenu}
            subInitialRootName={Routes.Other}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
/*==================== Other Menu End =========================*/

/*==================== Payment Methods Module Menu Start =========================*/
const PaymentMethodModuleMenu = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabBar" options={{headerShown: false}}>
        {props => (
          <BottomTabNavigator
            {...props}
            initialRouteName={Routes.ProfileTabMenu}
            subInitialRootName={Routes.MyWalletHomeScreen}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
/*==================== Payment Methods Module Menu End =========================*/

/*==================== Vehicle Registration Module Menu Start =========================*/
const VehicleRegistrationModuleMenu = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabBar" options={{headerShown: false}}>
        {props => (
          <BottomTabNavigator
            {...props}
            initialRouteName={Routes.ProfileTabMenu}
            subInitialRootName={Routes.VehicleRegistrationHomeScreen}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}; /*==================== Vehicle Registration Module Menu End =========================*/

/*==================== Settings Module Menu Start =========================*/
const SettingModuleMenu = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabBar" options={{headerShown: false}}>
        {props => (
          <BottomTabNavigator
            {...props}
            initialRouteName={Routes.ProfileTabMenu}
            subInitialRootName={Routes.Settings}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
/*==================== Settings Module Menu End =========================*/

/*==================== Support Module Menu Start =========================*/
const SupportModuleMenu = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabBar" options={{headerShown: false}}>
        {props => (
          <BottomTabNavigator
            {...props}
            initialRouteName={Routes.ProfileTabMenu}
            subInitialRootName={Routes.SupportHomeScreen}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
/*==================== Support Module Menu End =========================*/
export {
  DeliveryModuleMenu,
  NotificationsModuleMenu,
  OrderHistoryModuleMenu,
  OtherModuleMenu,
  PaymentMethodModuleMenu,
  ProfileModuleMenu,
  SupportModuleMenu,
  SettingModuleMenu,
  VehicleRegistrationModuleMenu,
  WizardModuleMenu,
};
