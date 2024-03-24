import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Icons
import ORDERICONACTIVE from '../assets/icons/bottomTabIcons/orderActiveSVG.svg';
import ORDERICONINACTIVE from '../assets/icons/bottomTabIcons/orderSVG.svg';
import PAYOUTICONACTIVE from '../assets/icons/bottomTabIcons/payoutActiveSVG.svg';
import PAYOUTICONINACTIVE from '../assets/icons/bottomTabIcons/payoutSVG.svg';
import PRODUCTICONACTIVE from '../assets/icons/bottomTabIcons/productActiveSVG.svg';
import PRODUCTICONINACTIVE from '../assets/icons/bottomTabIcons/productSVG.svg';
import PROFILEICONACTIVE from '../assets/icons/bottomTabIcons/profileActiveSVG.svg';
import PROFILEICONINACTIVE from '../assets/icons/bottomTabIcons/profileSVG.svg';

//Account Tab Components
import AddPayoutMethods from '../screens/PaymentMethodModule/AddPayoutMethods/AddPayoutMethods';
import AddNewPaypal from '../screens/PaymentMethodModule/AddNewPaypal/AddNewPaypal';
import AddCardDetails from '../screens/PaymentMethodModule/AddCardDetails/AddCardDetails';
import ChangePassword from '../screens/ProfileModule/ChangePassword/ChangePassword';
import CompanyInformation from '../screens/ProfileModule/CompanyInformation/CompanyInformation';
import CreditCardSettings from '../screens/PaymentMethodModule/CreditCardSettings/CreditCardSettings';
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
import ProductsHomeScreen from '../screens/ProductsModule/ProductsHomeScreen/ProductsHomeScreen';
import WireTransfer from '../screens/PaymentMethodModule/WireTransfer/WireTransfer';
import WithdrawHistoryScreen from '../screens/PaymentMethodModule/WithdrawHistoryScreen/WithdrawHistoryScreen';

//History Tab Component
import OrderHistoryHomeScreen from '../screens/OrderHistoryModule/OrderHistoryHomeScreen/OrderHistoryHomeScreen';
import SurrenderActScreen from '../screens/OrderHistoryModule/SurrenderActScreen/SurrenderActScreen';

//Component
import BottomTabBar from '../components/BottomTabBar/BottomTabBar';

//Utils
import Routes from './Routes';
import WizardHomeScreen from '../screens/WizardModule/WizardHomeScreen/WizardHomeScreen';
import OrderDetailScreen from '../screens/OrderHistoryModule/OrderDetailScreen/OrderDetailScreen';
import ChatScreen from '../screens/ChatModule/ChatScreen/ChatScreen';
import CategoryConfigScreen from '../screens/ProductsModule/CategoryConfigScreen/CategoryConfigScreen';
import CategoryDescriptionScreen from '../screens/ProductsModule/CategoryDescriptionScreen/CategoryDescriptionScreen';
import ProductConfigScreen from '../screens/ProductsModule/ProductConfigScreen/ProductConfigScreen';
import StoreReviewScreen from '../screens/ProductsModule/StoreReviewScreen/StoreReviewScreen';
import DeliveryReviewScreen from '../screens/ProductsModule/DeliveryReviewScreen/DeliveryReviewScreen';
import CouponListScreen from '../screens/CouponModuleMenu/CouponListScreen/CouponListScreen';
import CouponConfigScreen from '../screens/CouponModuleMenu/CouponConfigScreen/CouponConfigScreen';

/*----------------- Discover Module Tab Menu Screens Start ---------------------*/
const ProductsModule = createStackNavigator();
const ProductsModuleStackNavigator = props => {
  return (
    <ProductsModule.Navigator initialRouteName={props.subInitialRootName}>
      <ProductsModule.Screen
        name={Routes.ProductsHomeScreen}
        component={ProductsHomeScreen}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.CouponListScreen}
        component={CouponListScreen}
        options={{headerShown: false}}
      />
      <ProfileModule.Screen
        name={Routes.CouponConfigScreen}
        component={CouponConfigScreen}
        options={{headerShown: false}}
      />
      <ProductsModule.Screen
        name={Routes.SurrenderActScreen}
        component={SurrenderActScreen}
        options={{headerShown: false}}
      />
      <ProductsModule.Screen
        name={Routes.ChatScreen}
        component={ChatScreen}
        options={{headerShown: false}}
      />
      <ProductsModule.Screen
        name={Routes.CategoryConfigScreen}
        component={CategoryConfigScreen}
        options={{headerShown: false}}
      />
      <ProductsModule.Screen
        name={Routes.ProductConfigScreen}
        component={ProductConfigScreen}
        options={{headerShown: false}}
      />

      <ProductsModule.Screen
        name={Routes.StoreReviewScreen}
        component={StoreReviewScreen}
        options={{headerShown: false}}
      />

      <ProductsModule.Screen
        name={Routes.DeliveryReviewScreen}
        component={DeliveryReviewScreen}
        options={{headerShown: false}}
      />

      <ProductsModule.Screen
        name={Routes.CategoryDescriptionScreen}
        component={CategoryDescriptionScreen}
        options={{headerShown: false}}
      />
    </ProductsModule.Navigator>
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
        name={Routes.ChatScreen}
        component={ChatScreen}
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

/*----------------- Profile Module Tab Menu Screens Start---------------------*/
const PaymentModule = createStackNavigator();
const PaymentModuleStackNavigator = props => {
  return (
    <PaymentModule.Navigator initialRouteName={props.subInitialRootName}>
      <PaymentModule.Screen
        name={Routes.MyWalletHomeScreen}
        component={MyWalletHomeScreen}
        options={{headerShown: false}}
      />
      <PaymentModule.Screen
        name={Routes.AddPayoutMethods}
        component={AddPayoutMethods}
        options={{headerShown: false}}
      />
      <PaymentModule.Screen
        name={Routes.AddNewPaypal}
        component={AddNewPaypal}
        options={{headerShown: false}}
      />
      <PaymentModule.Screen
        name={Routes.AddCardDetails}
        component={AddCardDetails}
        options={{headerShown: false}}
      />
      <PaymentModule.Screen
        name={Routes.WireTransfer}
        component={WireTransfer}
        options={{headerShown: false}}
      />
      <PaymentModule.Screen
        name={Routes.WithdrawHistoryScreen}
        component={WithdrawHistoryScreen}
        options={{headerShown: false}}
      />
      <PaymentModule.Screen
        name={Routes.CreditCardSettings}
        component={CreditCardSettings}
        options={{headerShown: false}}
      />
    </PaymentModule.Navigator>
  );
};
/*----------------- Profile Module Tab Menu Screens End ---------------------*/

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
        name={Routes.ProductsTabMenu}
        options={{
          tabBarLabel: 'Products',
          activeTabBarIcon: (
            <PRODUCTICONACTIVE
              height={22}
              width={22}
              style={{marginTop: -3, marginBottom: 2}}
            />
          ),
          tabBarIcon: (
            <PRODUCTICONINACTIVE
              height={22}
              width={22}
              style={{marginBottom: 4, marginTop: -3}}
            />
          ),
        }}>
        {props => (
          <ProductsModuleStackNavigator
            {...props}
            subInitialRootName={subInitialRootName}
          />
        )}
      </Tab.Screen>
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
        name={Routes.OrderHistoryTabMenu}
        options={{
          tabBarLabel: 'Order History',
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
      <Tab.Screen
        name={Routes.PaymentTabMenu}
        options={{
          tabBarLabel: 'Payouts',
          activeTabBarIcon: (
            <PAYOUTICONACTIVE
              height={21}
              width={23}
              style={{marginBottom: 3, marginTop: -3}}
            />
          ),
          tabBarIcon: (
            <PAYOUTICONINACTIVE
              height={21}
              width={23}
              style={{marginBottom: 3, marginTop: -1}}
            />
          ),
        }}
        component={PaymentModuleStackNavigator}
      />
    </Tab.Navigator>
  );
};
/*----------------- Bottom Tab Navigator Definition End ---------------------*/

export default BottomTabNavigator;
