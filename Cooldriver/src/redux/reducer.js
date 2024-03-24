/* eslint-disable */
import React from 'react';
import { Text } from 'react-native'

//Third Party
import { REHYDRATE } from 'redux-persist/src/constants';

//Components
import IconText from '../components/IconText/IconText';
import PayPal from '../assets/images/paymentMethods/paypalSVG.svg';

//Utils
import ActionType from './action-type';
import globalStyles from '../assets/styles/globalStyles';

const reducerInitialState = {
  acceptingOrderStatus: false,
  authToken: null,
  userInfo: null,
  internetConnected: false,
  showActivityLoader: false,
  appFirstLaunch: true,
  selectedLanguage: null,
  isLoggedIn: false,
  messageHistory: [],
  payPalAddresses: [],
  subItems: [],
  checkoutList: [],
  orderedItems: {},
  FAQList: [],
  withdrawHistoryList: [],
  orderHistoryList: [],
  orderRequestList: [],
  orderedItemsData: [],
  currentOrder: {},
  hasStartedRoute: null,
  hasPickedUpFood: null,
  isGoingToCustomer: null,
  routePreview: {}
};

const reducerLogoutState = {
  acceptingOrderStatus: false,
  authToken: null,
  showActivityLoader: false,
  autoLogout: false,
  isLoggedIn: false,
  messageHistory: [],
  payPalAddresses: [],
  subItems: [],
  checkoutList: [],
  orderedItems: {},
  FAQList: [],
  withdrawHistoryList: [],
  orderHistoryList: [],
  orderedItemsData: [],
  currentOrder: {},
  hasStartedRoute: null,
  hasPickedUpFood: null,
  isGoingToCustomer: null,
  routePreview: {}
};

const reducer = (state = reducerInitialState, action) => {
  switch (action.type) {

    case ActionType.storeAuthToken:
      return Object.assign({}, state, { authToken: action.data });

    case ActionType.storeUserInfo:
      return Object.assign({}, state, { userInfo: action.data });

    case ActionType.updateInternetStatus:
      return Object.assign({}, state, { internetConnected: action.data });

    case ActionType.showActivityLoader:
      return Object.assign({}, state, { showActivityLoader: action.data });

    case ActionType.hideActivityLoader:
      return Object.assign({}, state, { showActivityLoader: action.data });

    case ActionType.performAutoLogout:
      return Object.assign({}, state, { autoLogout: action.data });

    case ActionType.selectedLanguage:
      return Object.assign({}, state, { selectedLanguage: action.data });

    case ActionType.isLoggedIn: {
      if (!action.data) {
        return Object.assign({}, state, reducerLogoutState)
      } else {
        return Object.assign({}, state, {isLoggedIn: action.data});
      }
    }

    case ActionType.updateAppFirstLaunchToFalse:
      return Object.assign({}, state, { appFirstLaunch: false });

    case ActionType.storeMessages:
      return Object.assign({}, state, { messageHistory: action.data });

    case ActionType.pushNewMessage:
      let tempData = [action.data, ...state.messageHistory.messages]
      return Object.assign({}, state, { messageHistory: { messages: tempData } });

    case ActionType.storePayPalAddresses:
      let payPalAddressData = action.data;
      let tempPayPalAddressData = payPalAddressData.map((itemData) => {
        return {
          ...itemData,
          component: <IconText title={itemData.email} leftIconComponent={<PayPal />} />
        };
      })
      return Object.assign({}, state, { payPalAddresses: tempPayPalAddressData });

    case ActionType.addPayPalAddress:
      let newAddress = action.data;
      let payPalAddresses = state.payPalAddresses;
      payPalAddresses.map((value)=>value.isActive = false)
      payPalAddresses.push( {
        "id": 0,
        "isActive": true,
        "email": newAddress,
        component: <IconText title={newAddress} leftIconComponent={<PayPal />} />
      });
      return Object.assign({}, state, { payPalAddresses: payPalAddresses });

    case ActionType.changePayPalAddresses:
      let tempPayPalAddressChangeData = state.payPalAddresses.map((object) => {
        if (object.id == action.data) {
          return { ...object, isActive: true }
        } else return { ...object, isActive: false }
      })
      return Object.assign({}, state, { payPalAddresses: tempPayPalAddressChangeData });

    case ActionType.storeSubItemData:
      return Object.assign({}, state, { subItems: action.data });

    case ActionType.storeCurrentOrder:
      return Object.assign({}, state, { currentOrder: action.data });

    case ActionType.storeHasStartedRoute:
      return Object.assign({}, state, { hasStartedRoute: action.data });

    case ActionType.storeHasPickedUpFood:
      return Object.assign({}, state, { hasPickedUpFood: action.data });

    case ActionType.storeIsGoingToCustomer:
      return Object.assign({}, state, { isGoingToCustomer: action.data });

    case ActionType.storeDeliveryConfirmation:
      return Object.assign({}, state, {
        currentOrder: {},
        hasStartedRoute: false,
        hasPickedUpFood: false,
        isGoingToCustomer: false,
        acceptingOrderStatus: true
      });

    case ActionType.storeRequestedPreview:
      return Object.assign({}, state, { routePreview: action.data });


    case ActionType.storeCheckoutList:
      let checkOutData = action.data;
      if (checkOutData.length > 0) {
        let tempCheckoutData = checkOutData.map((object) => {
          return { ...object, totalPrice: object.deliveryFee * object.itemPurchased };
        })
        return Object.assign({}, state, { checkoutList: tempCheckoutData });
      } else {
        return Object.assign({}, state, { checkoutList: action.data });
      }

    case ActionType.storeOrderedItem:
      return Object.assign({}, state, {
        orderedItems: { restaurantName: action.restaurantName, itemsOrdered: action.itemsOrdered }
      });

    case ActionType.storeFAQs:
      return Object.assign({}, state, { FAQList: action.data });

    case ActionType.storeWithdrawHistoryList:
      return Object.assign({}, state, { withdrawHistoryList: action.data });

    case ActionType.storeOrderHistoryList:
      return Object.assign({}, state, { orderHistoryList: action.data });

    case ActionType.storeOrderRequestList:
      return Object.assign({}, state, { orderRequestList: action.data });

    case ActionType.storeOrderedItemsData:
      let orderedItemsData = action.data;
      if (orderedItemsData.hasOwnProperty('itemsOrdered') && orderedItemsData.itemsOrdered.length > 0) {
        const tempItemOrderedList = orderedItemsData.itemsOrdered
        let tempItemOrderedData = tempItemOrderedList.map((object) => {
          return { ...object, totalPrice: object.itemPrice * object.itemNum };
        })
        action.data.itemsOrdered = tempItemOrderedData
        return Object.assign({}, state, { orderedItemsData: action.data });
      } else { return Object.assign({}, state, { orderedItemsData: action.data }); }

    case ActionType.updateOrderedItemsStatus:
      let tempOrderedItemsStatus = state.orderedItemsData
      tempOrderedItemsStatus.isConfirmed = action.data
      return Object.assign({}, state, { orderedItemsData: tempOrderedItemsStatus });

    case ActionType.updateAcceptingOrderStatus:
      return Object.assign({},state, {acceptingOrderStatus: action.data, routePreview: {}})

    case REHYDRATE:
      return Object.assign({},state, reducerLogoutState)

    default:
      return state;
  }
};

export { reducer, reducerInitialState };
