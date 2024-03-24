import ActionType from './action-type';
import {reducerInitialState} from './reducer';

// Third Party
import {REHYDRATE} from 'redux-persist/src/constants';

const addPayPalAddress = item => ({
  type: ActionType.addPayPalAddress,
  data: item,
});

const addUserAddress = item => ({
  type: ActionType.addUserAddress,
  data: item,
});

const changePayPalAddresses = id => ({
  type: ActionType.changePayPalAddresses,
  data: id,
});

const changeUserAddress = id => ({
  type: ActionType.changeUserAddress,
  data: id,
});

const deleteCheckoutItem = id => ({
  type: ActionType.deleteCheckoutItem,
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

const setCurrentAddress = address => ({
  type: ActionType.setCurrentAddress,
  data: address,
});

const setProfileTabInitialScreen = screen => ({
  type: ActionType.setProfileTabInitialScreen,
  data: screen,
});

const showActivityLoader = () => ({
  type: ActionType.showActivityLoader,
  data: true,
});

const storeAuthToken = token => ({
  type: ActionType.storeAuthToken,
  data: token,
});

const storeBrowseList = items => ({
  type: ActionType.storeBrowseList,
  data: items,
});

const storeCheckoutList = items => ({
  type: ActionType.storeCheckoutList,
  data: items,
});

const storeCouponList = items => ({
  type: ActionType.storeCouponList,
  data: items,
});

const storeDeliveryAddressData = item => ({
  type: ActionType.storeDeliveryAddressData,
  data: item,
});

const storeDeliveryItem = item => ({
  type: ActionType.storeDeliveryItem,
  data: item,
});

const storeFAQs = items => ({
  type: ActionType.storeFAQs,
  data: items,
});

const storeFavoriteList = items => ({
  type: ActionType.storeFavoriteList,
  data: items,
});

const storeFilterHighLightsList = items => ({
  type: ActionType.storeFilterHighLightsList,
  data: items,
});

const storeFoodItems = items => ({
  type: ActionType.storeFoodItems,
  data: items,
});

const storeFoodOptions = foodOptions => ({
  type: ActionType.storeFoodOptions,
  data: foodOptions,
});

const storeMenuList = items => ({
  type: ActionType.storeMenuList,
  data: items,
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

const storePayPalAddresses = addresses => ({
  type: ActionType.storePayPalAddresses,
  data: addresses,
});

const storeRestaurantList = items => ({
  type: ActionType.storeRestaurantList,
  data: items,
});

const storeSelectedLanguage = selectedLanguage => ({
  type: ActionType.selectedLanguage,
  data: selectedLanguage,
});

const storeShareEarnList = items => ({
  type: ActionType.storeShareEarnList,
  data: items,
});

const storeSortByTitleList = items => ({
  type: ActionType.storeSortByTitleList,
  data: items,
});

const storeSubItemData = items => ({
  type: ActionType.storeSubItemData,
  data: items,
});

const storeTabMenuItems = items => ({
  type: ActionType.storeTabMenuItems,
  data: items,
});

const storeTypeOfFoodList = items => ({
  type: ActionType.storeTypeOfFoodList,
  data: items,
});

const storeUserAddress = items => ({
  type: ActionType.storeUserAddress,
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

const storeUserReviewList = items => ({
  type: ActionType.storeUserReviewList,
  data: items,
});

const toggleFavoriteItem = items => ({
  type: ActionType.toggleFavoriteItem,
  data: items,
});

const toggleFilterHighLightsItem = item => ({
  type: ActionType.toggleFilterHighLightsItem,
  data: item,
});

const toggleFoodOption = item => ({
  type: ActionType.toggleFoodOption,
  data: item,
});

const storeInvoiceData = data => ({
  type: ActionType.storeInvoiceData,
  data: data,
});

const toggleSortByTitleItem = item => ({
  type: ActionType.toggleSortByTitleItem,
  data: item,
});

const toggleTabMenuItem = item => ({
  type: ActionType.toggleTabMenuItem,
  data: item,
});

const toggleTypeOfFoodItem = item => ({
  type: ActionType.toggleTypeOfFoodItem,
  data: item,
});

const updateAppFirstLaunchToFalse = () => ({
  type: ActionType.updateAppFirstLaunchToFalse,
});

const updateCounterOfInvoiceList = (id, counter) => ({
  type: ActionType.updateCounterOfInvoiceList,
  data: id,
  counter: counter,
});

const updateDeliveryItemStatus = item => ({
  type: ActionType.updateDeliveryItemStatus,
  data: item,
});

const updateCounterOfCheckoutList = (id, counter) => ({
  type: ActionType.updateCounterOfCheckoutList,
  data: id,
  counter: counter,
});

const updateInvoiceStatus = status => ({
  type: ActionType.updateInvoiceStatus,
  data: status,
});

const updateInternetStatus = isConnected => ({
  type: ActionType.updateInternetStatus,
  data: isConnected,
});

export default {
  addPayPalAddress,
  addUserAddress,
  changePayPalAddresses,
  changeUserAddress,
  deleteCheckoutItem,
  hideActivityLoader,
  isLoggedIn,
  logout,
  performAutoLogout,
  pushNewMessage,
  setCurrentAddress,
  setProfileTabInitialScreen,
  showActivityLoader,
  storeAuthToken,
  storeBrowseList,
  storeCheckoutList,
  storeCouponList,
  storeDeliveryAddressData,
  storeDeliveryItem,
  storeFAQs,
  storeFavoriteList,
  storeFilterHighLightsList,
  storeFoodItems,
  storeFoodOptions,
  storeInvoiceData,
  storeMenuList,
  storeOrderedItem,
  storeOrderHistoryList,
  storePayPalAddresses,
  storeRestaurantList,
  storeSelectedLanguage,
  storeShareEarnList,
  storeSortByTitleList,
  storeSubItemData,
  storeTabMenuItems,
  storeTypeOfFoodList,
  storeUserAddress,
  storeUserInfo,
  storeUserMessages,
  storeUserReviewList,
  toggleFavoriteItem,
  toggleFilterHighLightsItem,
  toggleFoodOption,
  toggleSortByTitleItem,
  toggleTabMenuItem,
  toggleTypeOfFoodItem,
  updateAppFirstLaunchToFalse,
  updateCounterOfCheckoutList,
  updateCounterOfInvoiceList,
  updateDeliveryItemStatus,
  updateInternetStatus,
  updateInvoiceStatus,
};
