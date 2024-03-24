import React from 'react';

// Third Party
import {createStackNavigator} from '@react-navigation/stack';

//Components
import BottomTabNavigator from '../BottomTabNavigation';

//Screens
import ChatScreen from '../../screens/ChatModule/ChatScreen/ChatScreen';
import FavoriteProductsHomeScreen from '../../screens/FavoriteProductsModule/FavoriteProductsHomeScreen/FavoriteProductsHomeScreen';
import OrderHistoryHomeScreen from '../../screens/OrderHistoryModule/OrderHistoryHomeScreen/OrderHistoryHomeScreen';

//Utility
import Routes from '../Routes';

const Stack = createStackNavigator();

/*==================== Discover Module Menu Start =========================*/
const DiscoverModuleMenu = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabBar" options={{headerShown: false}}>
        {props => (
          <BottomTabNavigator
            {...props}
            initialRouteName={Routes.DiscoverTabMenu}
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
/*==================== Discover Module Menu End =========================*/

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
    </Stack.Navigator>
  );
};
/*==================== Profile Module Menu End =========================*/

/*==================== Coupon Module Menu Start =========================*/
const CouponModuleMenu = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabBar" options={{headerShown: false}}>
        {props => (
          <BottomTabNavigator
            {...props}
            initialRouteName={Routes.ProfileTabMenu}
            subInitialRootName={Routes.CouponHomeScreen}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
/*==================== Coupon Module Menu End =========================*/

/*==================== Order History Module Menu Start =========================*/
const OrderHistoryModuleMenu = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabBar" options={{headerShown: false}}>
        {props => (
          <BottomTabNavigator
            {...props}
            initialRouteName={Routes.HistoryTabMenu}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name={Routes.OrderHistoryHomeScreen}
        component={OrderHistoryHomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
/*==================== Order History Module Menu End =========================*/

/*==================== Favorite Products Module Menu Start =========================*/
const FavoriteProductsModuleMenu = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabBar" options={{headerShown: false}}>
        {props => (
          <BottomTabNavigator
            {...props}
            initialRouteName={Routes.FavouriteTabMenu}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name={Routes.FavoriteProductsHomeScreen}
        component={FavoriteProductsHomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
/*==================== Favorite Products Module Menu End =========================*/

/*==================== Other  Menu Start =========================*/
const OtherModuleMenu = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabBar" options={{headerShown: false}}>
        {props => (
          <BottomTabNavigator
            {...props}
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
            subInitialRootName={Routes.PaymentMethodsHomeScreen}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
/*==================== Payment Methods Module Menu End =========================*/

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

/*==================== Share & Earn Menu Start =========================*/
const ShareEarnModuleMenu = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabBar" options={{headerShown: false}}>
        {props => (
          <BottomTabNavigator
            {...props}
            initialRouteName={Routes.ProfileTabMenu}
            subInitialRootName={Routes.ShareEarnScreen}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
/*==================== Share & Earn Module Menu End =========================*/

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
  CouponModuleMenu,
  DiscoverModuleMenu,
  FavoriteProductsModuleMenu,
  OrderHistoryModuleMenu,
  OtherModuleMenu,
  PaymentMethodModuleMenu,
  ProfileModuleMenu,
  SupportModuleMenu,
  SettingModuleMenu,
  ShareEarnModuleMenu,
};
