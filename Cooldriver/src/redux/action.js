import ActionType from './action-type';
import {reducerInitialState} from './reducer';

// Third Party
import {REHYDRATE} from 'redux-persist/src/constants';

const addPayPalAddress = item => ({
  type: ActionType.addPayPalAddress,
  data: item,
});

const changePayPalAddresses = id => ({
  type: ActionType.changePayPalAddresses,
  data: id,
});

const hideActivityLoader = () => ({
  type: ActionType.hideActivityLoader,
  data: false,
});

const isLoggedIn = isLoggedIn => ({
  type: ActionType.isLoggedIn,
  data: isLoggedIn,
});

const logout = () => ({type: REHYDRATE, payload: reducerInitialState});

const performAutoLogout = () => ({
  type: ActionType.performAutoLogout,
  data: true,
});

const pushNewMessage = message => ({
  type: ActionType.pushNewMessage,
  data: message,
});

const showActivityLoader = () => ({
  type: ActionType.showActivityLoader,
  data: true,
});

const storeAuthToken = token => ({
  type: ActionType.storeAuthToken,
  data: token,
});

const storeCheckoutList = items => ({
  type: ActionType.storeCheckoutList,
  data: items,
});

const storeCurrentOrder = items => ({
  type: ActionType.storeCurrentOrder,
  data: items,
});

const storeDeliveryConfirmation = () => ({
  type: ActionType.storeDeliveryConfirmation,
});

const storeFAQs = items => ({
  type: ActionType.storeFAQs,
  data: items,
});

const storeHasStartedRoute = value => ({
  type: ActionType.storeHasStartedRoute,
  data: value,
});

const storeHasPickedUpFood = value => ({
  type: ActionType.storeHasPickedUpFood,
  data: value,
});

const storeIsGoingToCustomer = value => ({
  type: ActionType.storeIsGoingToCustomer,
  data: value,
});

const storeOrderedItem = (restaurantName, items) => ({
  type: ActionType.storeOrderedItem,
  restaurantName: restaurantName,
  itemsOrdered: items,
});

const storeOrderHistoryList = items => ({
  type: ActionType.storeOrderHistoryList,
  data: items,
});

const storeOrderRequestList = items => ({
  type: ActionType.storeOrderRequestList,
  data: items,
});

const storePayPalAddresses = addresses => ({
  type: ActionType.storePayPalAddresses,
  data: addresses,
});

const storeSelectedLanguage = selectedLanguage => ({
  type: ActionType.selectedLanguage,
  data: selectedLanguage,
});

const storeRequestedPreview = items => ({
  type: ActionType.storeRequestedPreview,
  data: items,
});

const storeWithdrawHistoryList = items => ({
  type: ActionType.storeWithdrawHistoryList,
  data: items,
});

const storeSubItemData = items => ({
  type: ActionType.storeSubItemData,
  data: items,
});

const storeUserInfo = userInfo => ({
  type: ActionType.storeUserInfo,
  data: userInfo,
});

const storeUserMessages = messages => ({
  type: ActionType.storeMessages,
  data: messages,
});

const storeOrderedItemsData = data => ({
  type: ActionType.storeOrderedItemsData,
  data: data,
});

const updateAppFirstLaunchToFalse = () => ({
  type: ActionType.updateAppFirstLaunchToFalse,
});

const updateAcceptingOrderStatus = value => ({
  type: ActionType.updateAcceptingOrderStatus,
  data: value,
});

const updateOrderedItemsStatus = status => ({
  type: ActionType.updateOrderedItemsStatus,
  data: status,
});

const updateInternetStatus = isConnected => ({
  type: ActionType.updateInternetStatus,
  data: isConnected,
});

export default {
  addPayPalAddress,
  changePayPalAddresses,
  hideActivityLoader,
  isLoggedIn,
  logout,
  performAutoLogout,
  pushNewMessage,
  showActivityLoader,
  storeAuthToken,
  storeCheckoutList,
  storeCurrentOrder,
  storeDeliveryConfirmation,
  storeFAQs,
  storeHasStartedRoute,
  storeHasPickedUpFood,
  storeOrderedItemsData,
  storeIsGoingToCustomer,
  storeOrderedItem,
  storeOrderHistoryList,
  storeOrderRequestList,
  storePayPalAddresses,
  storeRequestedPreview,
  storeSelectedLanguage,
  storeSubItemData,
  storeUserInfo,
  storeUserMessages,
  storeWithdrawHistoryList,
  updateAppFirstLaunchToFalse,
  updateAcceptingOrderStatus,
  updateInternetStatus,
  updateOrderedItemsStatus,
};
