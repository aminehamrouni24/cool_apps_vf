import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Icons
import ORDERICONINACTIVE from '../assets/icons/bottomTabIcons/orderSVG.svg';
import ORDERICONACTIVE from '../assets/icons/bottomTabIcons/orderActiveSVG.svg';
import NOTIFICATIONICONINACTIVE from '../assets/icons/bottomTabIcons/notificationSVG.svg';
import DELIVERYICONINACTIVE from '../assets/icons/bottomTabIcons/deliverySVG.svg';
import DELIVERYICONACTIVE from '../assets/icons/bottomTabIcons/deliveryActiveSVG.svg';
import PROFILEICONINACTIVE from '../assets/icons/bottomTabIcons/profileSVG.svg';
import PROFILEICONACTIVE from '../assets/icons/bottomTabIcons/profileActiveSVG.svg';

//Account Tab Components
import AddPayoutMethods from '../screens/PaymentMethodModule/AddPayoutMethods/AddPayoutMethods';
import AddNewPaypal from '../screens/PaymentMethodModule/AddNewPaypal/AddNewPaypal';
import AddCardDetails from '../screens/PaymentMethodModule/AddCardDetails/AddCardDetails';
import BikeRegistrationScreen from '../screens/VehicleRegistrationModule/BikeRegistrationScreen/BikeRegistrationScreen';
import CarRegistrationScreen from '../screens/VehicleRegistrationModule/CarRegistrationScreen/CarRegistrationScreen';
import ChangePassword from '../screens/ProfileModule/ChangePassword/ChangePassword';
import CompanyInformation from '../screens/ProfileModule/CompanyInformation/CompanyInformation';
import CreditCardSettings from '../screens/PaymentMethodModule/CreditCardSettings/CreditCardSettings';
import DriversLicense from '../screens/ProfileModule/DriversLicense/DriversLicense';
import FAQScreen from '../screens/SupportModule/FAQScreen/FAQScreen';
import MyWalletHomeScreen from '../screens/PaymentMethodModule/MyWalletHomeScreen/MyWalletHomeScreen';
import OnlineSupport from '../screens/SupportModule/OnlineSupport/OnlineSupport';
import Other from '../screens/ProfileModule/Other/Other';
import PersonalInformation from '../screens/ProfileModule/PersonalInformation/PersonalInformation';
import PrivacyPolicy from '../screens/SettingModule/PrivacyPolicy/PrivacyPolicy';
import ProfileHomeScreen from '../screens/ProfileModule/ProfileHomeScreen/ProfileHomeScreen';
import Settings from '../screens/SettingModule/Settings/Settings';
import SupportHomeScreen from '../screens/SupportModule/SupportHomeScreen/SupportHomeScreen';
import TermsOfUse from '../screens/SettingModule/TermsOfUse/TermsOfUse';
import VehicleRegistrationHomeScreen from '../screens/VehicleRegistrationModule/VehicleRegistrationHomeScreen/VehicleRegistrationHomeScreen';
import WireTransfer from '../screens/PaymentMethodModule/WireTransfer/WireTransfer';
import WithdrawHistoryScreen from '../screens/PaymentMethodModule/WithdrawHistoryScreen/WithdrawHistoryScreen';

//Delivery Tab Components
import DeliveryHomeScreen from '../screens/DeliveryModule/DeliveryHomeScreen/DeliveryHomeScreen';

//History Tab Component
import OrderHistoryHomeScreen from '../screens/OrderHistoryModule/OrderHistoryHomeScreen/OrderHistoryHomeScreen';
import SurrenderActScreen from '../screens/OrderHistoryModule/SurrenderActScreen/SurrenderActScreen';

//Notification Tab Component
import NotificationsHomeScreen from '../screens/NotificationsModule/NotificationsHomeScreen/NotificationsHomeScreen';

//Component
import BottomTabBar from '../components/BottomTabBar/BottomTabBar';

//Utils
import Routes from './Routes';
import WizardHomeScreen from '../screens/WizardModule/WizardHomeScreen/WizardHomeScreen';
import OrderDetailScreen from '../screens/OrderHistoryModule/OrderDetailScreen/OrderDetailScreen';
import CurrentOrderScreen from '../screens/DeliveryModule/CurrentOrderScreen/CurrentOrderScreen';
import ChatScreen from '../screens/ChatModule/ChatScreen/ChatScreen';

/*----------------- Discover Module Tab Menu Screens Start ---------------------*/
const DeliveryModule = createStackNavigator();
const DeliveryModuleStackNavigator = () => {
  return (
    <DeliveryModule.Navigator>
      <DeliveryModule.Screen
        name={Routes.DeliveryHomeScreen}
        component={DeliveryHomeScreen}
        options={{headerShown: false}}
      />
      <DeliveryModule.Screen
        name={Routes.CurrentOrderScreen}
        component={CurrentOrderScreen}
        options={{headerShown: false}}
      />
      <DeliveryModule.Screen
        name={Routes.SurrenderActScreen}
        component={SurrenderActScreen}
        options={{headerShown: false}}
      />
      <DeliveryModule.Screen
        name={Routes.ChatScreen}
        component={ChatScreen}
        options={{headerShown: false}}
      />
    </DeliveryModule.Navigator>
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
        name={Routes.OrderDetailScreen}
        component={OrderDetailScreen}
        options={{headerShown: false}}
      />
      <OrderHistoryModule.Screen
        name={Routes.SurrenderActScreen}
        component={SurrenderActScreen}
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
        name={Routes.PersonalInformation}
        component={PersonalInformation}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.MyWalletHomeScreen}
        component={MyWalletHomeScreen}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.VehicleRegistrationHomeScreen}
        component={VehicleRegistrationHomeScreen}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.CarRegistrationScreen}
        component={CarRegistrationScreen}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.BikeRegistrationScreen}
        component={BikeRegistrationScreen}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.AddPayoutMethods}
        component={AddPayoutMethods}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.AddNewPaypal}
        component={AddNewPaypal}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.AddCardDetails}
        component={AddCardDetails}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.WireTransfer}
        component={WireTransfer}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.ChatScreen}
        component={ChatScreen}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.WithdrawHistoryScreen}
        component={WithdrawHistoryScreen}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.CreditCardSettings}
        component={CreditCardSettings}
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
        name={Routes.CompanyInformation}
        component={CompanyInformation}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.DriversLicense}
        component={DriversLicense}
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
        name={Routes.Other}
        component={Other}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.WizardHomeScreen}
        component={WizardHomeScreen}
        options={{headerShown: false}}
      />
    </ProfileModule.Navigator>
  );
};
/*----------------- Profile Module Tab Menu Screens End ---------------------*/

/*----------------- Notifications Module Tab Menu Screens Start ---------------------*/
const NotificationsModule = createStackNavigator();
const NotificationsModuleStackNavigator = () => {
  return (
    <NotificationsModule.Navigator>
      <NotificationsModule.Screen
        name={Routes.NotificationsHomeScreen}
        component={NotificationsHomeScreen}
        options={{headerShown: false}}
      />
    </NotificationsModule.Navigator>
  );
};
/*----------------- Notifications Module Tab Menu Screens End ---------------------*/

/*----------------- Function that helps in rendering the tab menu on the screens start ---------------------*/
const renderTabBar = props => {
  return <BottomTabBar {...props} />;
};
/*----------------- Function that helps in rendering the tab menu on the screens end ---------------------*/

/*----------------- Bottom Tab Navigator Definition Start ---------------------*/
const Tab = createBottomTabNavigator();
const BottomTabNavigator = ({
  initialRouteName,
  subInitialRootName,
  isTabBarHidden,
}) => {
  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      tabBar={props =>
        renderTabBar({...props, ...{isTabBarHidden: isTabBarHidden}})
      }>
      <Tab.Screen
        name={Routes.DeliveryTabMenu}
        options={{
          tabBarLabel: 'Delivery',
          activeTabBarIcon: (
            <DELIVERYICONACTIVE
              height={22}
              width={22}
              style={{marginTop: -3, marginBottom: 2}}
            />
          ),
          tabBarIcon: (
            <DELIVERYICONINACTIVE
              height={22}
              width={22}
              style={{marginBottom: 4, marginTop: -3}}
            />
          ),
        }}
        component={DeliveryModuleStackNavigator}
      />
      <Tab.Screen
        name={Routes.ProfileTabMenu}
        options={{
          tabBarLabel: 'Account',
          activeTabBarIcon: (
            <PROFILEICONACTIVE
              height={22}
              width={22}
              style={{marginBottom: 1, marginTop: -2}}
            />
          ),
          tabBarIcon: (
            <PROFILEICONINACTIVE
              height={22}
              width={22}
              style={{marginBottom: 3, marginTop: -2}}
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
        name={Routes.NotificationsTabMenu}
        options={{
          tabBarLabel: 'New Requests',
          activeTabBarIcon: (
            <NOTIFICATIONICONINACTIVE
              height={21}
              width={23}
              style={{marginBottom: 3, marginTop: -2}}
            />
          ),
          tabBarIcon: (
            <NOTIFICATIONICONINACTIVE
              height={21}
              width={23}
              style={{marginBottom: 4, marginTop: -1}}
            />
          ),
        }}
        component={NotificationsModuleStackNavigator}
      />
      <Tab.Screen
        name={Routes.OrderHistoryTabMenu}
        options={{
          tabBarLabel: 'Orders',
          activeTabBarIcon: (
            <ORDERICONACTIVE
              height={21}
              width={23}
              style={{marginBottom: 3, marginTop: -3}}
            />
          ),
          tabBarIcon: (
            <ORDERICONINACTIVE
              height={21}
              width={23}
              style={{marginBottom: 3, marginTop: -1}}
            />
          ),
        }}
        component={OrderHistoryModuleStackNavigator}
      />
    </Tab.Navigator>
  );
};
/*----------------- Bottom Tab Navigator Definition End ---------------------*/

export default BottomTabNavigator;
