import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Account Tab Components
import AddCardDetails from '../screens/PaymentMethodModule/AddCardDetails/AddCardDetails';
import AddressSetting from '../screens/ProfileModule/AddressSetting/AddressSetting';
import AddNewPaypal from '../screens/PaymentMethodModule/AddNewPaypal/AddNewPaypal';
import ChangePassword from '../screens/ProfileModule/ChangePassword/ChangePassword';
import CouponHomeScreen from '../screens/CouponModule/CouponHomeScreen/CouponHomeScreen';
import FAQScreen from '../screens/SupportModule/FAQScreen/FAQScreen';
import OnlineSupport from '../screens/SupportModule/OnlineSupport/OnlineSupport';
import Other from '../screens/ProfileModule/Other/Other';
import PaymentMethodHomeScreen from '../screens/PaymentMethodModule/PaymentMethodHomeScreen/PaymentMethodHomeScreen';
import PersonalInformation from '../screens/ProfileModule/PersonalInformation/PersonalInformation';
import PrivacyPolicy from '../screens/SettingModule/PrivacyPolicy/PrivacyPolicy';
import ProfileHomeScreen from '../screens/ProfileModule/ProfileHomeScreen/ProfileHomeScreen';
import Settings from '../screens/SettingModule/Settings/Settings';
import ShareEarnScreen from '../screens/ShareEarnModule/ShareEarnScreen/ShareEarnScreen';
import SupportHomeScreen from '../screens/SupportModule/SupportHomeScreen/SupportHomeScreen';
import TermsOfUse from '../screens/SettingModule/TermsOfUse/TermsOfUse';

//Discover Tab Components
import DiscoverHomeScreen from '../screens/DiscoverModule/DiscoverHomeScreen/DiscoverHomeScreen';
import FilterScreen from '../screens/DiscoverModule/FilterScreen/FilterScreen';
import RestaurantsListing from '../screens/DiscoverModule/RestaurantsListing/RestaurantsListing';
import SliderSelectedScreen from '../screens/DiscoverModule/SliderSelectedScreen/SliderSelectedScreen';
import LookingByMapScreen from '../screens/DiscoverModule/LookingByMapScreen/LookingByMapScreen';
import TopCategoriesScreen from '../screens/DiscoverModule/TopCategoriesScreen/TopCategoriesScreen';

//History Tab Component
import InvoiceScreen from '../screens/OrderHistoryModule/InvoiceScreen/InvoiceScreen';
import OrderHistoryHomeScreen from '../screens/OrderHistoryModule/OrderHistoryHomeScreen/OrderHistoryHomeScreen';
import SurrenderActScreen from '../screens/OrderHistoryModule/SurrenderActScreen/SurrenderActScreen';

//Favourite Tab Component
import FavoriteProductsHomeScreen from '../screens/FavoriteProductsModule/FavoriteProductsHomeScreen/FavoriteProductsHomeScreen';

//Store Module
import CheckOutScreen from '../screens/StoreModule/CheckOutScreen/CheckOutScreen';
import DeliveryProcessScreen from '../screens/StoreModule/DeliveryProcessScreen/DeliveryProcessScreen';
import AddToCartScreen from '../screens/StoreModule/AddToCartScreen/AddToCartScreen';
import ProductReviewScreen from '../screens/StoreModule/ProductReviewScreen/ProductReviewScreen';
import RestaurantDescriptionScreen from '../screens/StoreModule/RestaurantDescriptionScreen/RestaurantDescriptionScreen';
import RestaurantMenuScreen from '../screens/StoreModule/RestaurantMenuScreen/RestaurantMenuScreen';
import StoreReviewScreen from '../screens/StoreModule/StoreReviewScreen/StoreReviewScreen';

//Component
import BottomTabBar from '../components/BottomTabBar/BottomTabBar';

//Utils
import Routes from './Routes';

import {AnimatedHeader} from '../utility/Helper';
import {Image} from 'react-native';
import {horizontalScale, verticalScale} from '../utility/Scale';

/*----------------- Discover Module Tab Menu Screens Start ---------------------*/
const DiscoverModule = createStackNavigator();
const DiscoverModuleStackNavigator = () => {
  return (
    <DiscoverModule.Navigator>
      <DiscoverModule.Screen
        name={Routes.FoodDiscover}
        component={DiscoverHomeScreen}
        options={{headerShown: false}}
      />
      <DiscoverModule.Screen
        name={Routes.TopCategories}
        component={TopCategoriesScreen}
        options={{headerShown: false}}
      />
      <DiscoverModule.Screen
        name={Routes.FilterScreen}
        component={FilterScreen}
        options={{headerShown: false, ...AnimatedHeader}}
      />
      <DiscoverModule.Screen
        name={Routes.RestaurantsListing}
        component={RestaurantsListing}
        options={{headerShown: false}}
      />
      <DiscoverModule.Screen
        name={Routes.SliderSelectedScreen}
        component={SliderSelectedScreen}
        options={{headerShown: false}}
      />
      <DiscoverModule.Screen
        name={Routes.LookingByMapScreen}
        component={LookingByMapScreen}
        options={{headerShown: false}}
      />
      <DiscoverModule.Screen
        name={Routes.AddressSetting}
        component={AddressSetting}
        options={{headerShown: false}}
      />
      <DiscoverModule.Screen
        name={Routes.RestaurantDescriptionScreen}
        component={RestaurantDescriptionScreen}
        options={{headerShown: false}}
      />
      <DiscoverModule.Screen
        name={Routes.StoreReviewScreen}
        component={StoreReviewScreen}
        options={{headerShown: false}}
      />
      <DiscoverModule.Screen
        name={Routes.RestaurantMenuScreen}
        component={RestaurantMenuScreen}
        options={{headerShown: false}}
      />
      <DiscoverModule.Screen
        name={Routes.AddToCartScreen}
        component={AddToCartScreen}
        options={{headerShown: false}}
      />
      <DiscoverModule.Screen
        name={Routes.CheckOutScreen}
        component={CheckOutScreen}
        options={{headerShown: false}}
      />
      <DiscoverModule.Screen
        name={Routes.DeliveryProcessScreen}
        component={DeliveryProcessScreen}
        options={{headerShown: false}}
      />
      <DiscoverModule.Screen
        name={Routes.ProductReviewScreen}
        component={ProductReviewScreen}
        options={{headerShown: false}}
      />
      <DiscoverModule.Screen
        name={Routes.ShareEarnScreen}
        component={ShareEarnScreen}
        options={{headerShown: false}}
      />
    </DiscoverModule.Navigator>
  );
};
/*----------------- Discover Module Tab Menu Screens End ---------------------*/

/*----------------- Order History Module Tab Menu Screens Start ---------------------*/
const OrderHistoryModule = createStackNavigator();
const OrderHistoryModuleStackNavigator = () => {
  return (
    <OrderHistoryModule.Navigator>
      <OrderHistoryModule.Screen
        name={Routes.OrderHistoryHomeScreen}
        component={OrderHistoryHomeScreen}
        options={{headerShown: false}}
      />
      <OrderHistoryModule.Screen
        name={Routes.InvoiceScreen}
        component={InvoiceScreen}
        options={{headerShown: false}}
      />
      <OrderHistoryModule.Screen
        name={Routes.ProductReviewScreen}
        component={ProductReviewScreen}
        options={{headerShown: false}}
      />
      <OrderHistoryModule.Screen
        name={Routes.SurrenderActScreen}
        component={SurrenderActScreen}
        options={{headerShown: false}}
      />
      <OrderHistoryModule.Screen
        name={Routes.AddToCartScreen}
        component={AddToCartScreen}
        options={{headerShown: false}}
      />
    </OrderHistoryModule.Navigator>
  );
};
/*----------------- Order History Module Tab Menu Screens End ---------------------*/

/*----------------- Profile Module Tab Menu Screens Start---------------------*/
const ProfileModule = createStackNavigator();
const ProfileModuleStackNavigator = props => {
  return (
    <ProfileModule.Navigator initialRouteName={props.subInitialRootName}>
      <ProfileModule.Screen
        name={Routes.ProfileHomeScreen}
        component={ProfileHomeScreen}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.AddressSetting}
        component={AddressSetting}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.PersonalInformation}
        component={PersonalInformation}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.PaymentMethodsHomeScreen}
        component={PaymentMethodHomeScreen}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.AddCardDetails}
        component={AddCardDetails}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.ChangePassword}
        component={ChangePassword}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.PrivacyPolicy}
        component={PrivacyPolicy}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.TermsOfUse}
        component={TermsOfUse}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.AddNewPaypal}
        component={AddNewPaypal}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.CouponHomeScreen}
        component={CouponHomeScreen}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.Settings}
        component={Settings}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.SupportHomeScreen}
        component={SupportHomeScreen}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.FAQScreen}
        component={FAQScreen}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.OnlineSupport}
        component={OnlineSupport}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.ShareEarnScreen}
        component={ShareEarnScreen}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.Other}
        component={Other}
        options={{headerShown: false}}
      />
    </ProfileModule.Navigator>
  );
};
/*----------------- Profile Module Tab Menu Screens End ---------------------*/

/*----------------- Favorite Products Module Tab Menu Screens Start ---------------------*/
const FavoriteProductsModule = createStackNavigator();
const FavoriteProductsModuleStackNavigator = () => {
  return (
    <FavoriteProductsModule.Navigator>
      <FavoriteProductsModule.Screen
        name={Routes.FavoriteProductsHomeScreen}
        component={FavoriteProductsHomeScreen}
        options={{headerShown: false}}
      />
      <FavoriteProductsModule.Screen
        name={Routes.AddToCartScreen}
        component={AddToCartScreen}
        options={{headerShown: false}}
      />
    </FavoriteProductsModule.Navigator>
  );
};
/*----------------- Favorite Products Module Tab Menu Screens End ---------------------*/

/*----------------- Cart Module Tab Menu Screens Start ---------------------*/
const CartModule = createStackNavigator();
const CartModuleStackNavigator = () => {
  return (
    <CartModule.Navigator>
      <CartModule.Screen // Set for testing purpose
        name={Routes.CheckOutScreen}
        component={CheckOutScreen}
        options={{headerShown: false}}
      />
    </CartModule.Navigator>
  );
};
/*----------------- Cart Module Tab Menu Screens End ---------------------*/

/*----------------- Function that helps in rendering the tab menu on the screens start ---------------------*/
const renderTabBar = props => {
  return <BottomTabBar {...props} />;
};
/*----------------- Function that helps in rendering the tab menu on the screens end ---------------------*/

/*----------------- Bottom Tab Navigator Definition Start ---------------------*/
const Tab = createBottomTabNavigator();
const BottomTabNavigator = ({initialRouteName, subInitialRootName}) => {
  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      tabBar={props => renderTabBar(props)}>
      <Tab.Screen
        name={Routes.DiscoverTabMenu}
        options={{
          tabBarLabel: 'Discovery',
          activeTabBarIcon: (
            <Image
              source={require('../assets/placeholders/20x20.png')}
              style={{
                height: 20,
                width: 20,
                borderRadius: 3,
              }}
            />
          ),
          tabBarIcon: (
            <Image
              source={require('../assets/placeholders/20x20.png')}
              style={{
                height: 20,
                width: 20,
                borderRadius: 3,
              }}
            />
          ),
        }}
        component={DiscoverModuleStackNavigator}
      />
      <Tab.Screen
        name={Routes.HistoryTabMenu}
        options={{
          tabBarLabel: 'History',
          activeTabBarIcon: (
            <Image
              source={require('../assets/placeholders/20x20.png')}
              style={{
                height: 20,
                width: 20,
                borderRadius: 3,
              }}
            />
          ),
          tabBarIcon: (
            <Image
              source={require('../assets/placeholders/20x20.png')}
              style={{
                height: 20,
                width: 20,
                borderRadius: 3,
              }}
            />
          ),
        }}
        component={OrderHistoryModuleStackNavigator}
      />
      <Tab.Screen
        name={Routes.ProfileTabMenu}
        options={{
          tabBarLabel: 'Account',
          activeTabBarIcon: (
            <Image
              source={require('../assets/placeholders/20x20.png')}
              style={{
                height: 20,
                width: 20,
                borderRadius: 3,
              }}
            />
          ),
          tabBarIcon: (
            <Image
              source={require('../assets/placeholders/20x20.png')}
              style={{
                height: 20,
                width: 20,
                borderRadius: 3,
              }}
            />
          ),
        }}>
        {props => (
          <ProfileModuleStackNavigator
            {...props}
            subInitialRootName={subInitialRootName}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name={Routes.FavouriteTabMenu}
        options={{
          tabBarLabel: 'Favourite',
          activeTabBarIcon: (
            <Image
              source={require('../assets/placeholders/20x20.png')}
              style={{
                height: 20,
                width: 20,
                borderRadius: 3,
              }}
            />
          ),
          tabBarIcon: (
            <Image
              source={require('../assets/placeholders/20x20.png')}
              style={{
                height: 20,
                width: 20,
                borderRadius: 3,
              }}
            />
          ),
        }}
        component={FavoriteProductsModuleStackNavigator}
      />
      <Tab.Screen
        name={Routes.CartTabMenu}
        options={{
          tabBarLabel: 'Cart',
          activeTabBarIcon: (
            <Image
              source={require('../assets/placeholders/20x20.png')}
              style={{
                height: 20,
                width: 20,
                borderRadius: 3,
              }}
            />
          ),
          tabBarIcon: (
            <Image
              source={require('../assets/placeholders/20x20.png')}
              style={{
                height: 20,
                width: 20,
                borderRadius: 3,
              }}
            />
          ),
        }}
        component={CartModuleStackNavigator}
      />
    </Tab.Navigator>
  );
};
/*----------------- Bottom Tab Navigator Definition End ---------------------*/

export default BottomTabNavigator;
