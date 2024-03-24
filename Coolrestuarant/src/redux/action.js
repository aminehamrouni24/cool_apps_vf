import ActionType from './action-type';
import {reducerInitialState} from './reducer';

// Third Party
import {REHYDRATE} from 'redux-persist/src/constants';

const addCoupon = item => ({
  type: ActionType.addCoupon,
  data: item,
});

const addMenuCategory = item => ({
  type: ActionType.addMenuCategory,
  data: item,
});

const addMenuCategoryProduct = item => ({
  type: ActionType.addMenuCategoryProduct,
  data: item,
});

const addPayPalAddress = item => ({
  type: ActionType.addPayPalAddress,
  data: item,
});

const changePayPalAddresses = id => ({
  type: ActionType.changePayPalAddresses,
  data: id,
});

const editCoupon = item => ({
  type: ActionType.editCoupon,
  data: item,
});

const editMenuCategory = item => ({
  type: ActionType.editMenuCategory,
  data: item,
});

const editMenuCategoryProduct = item => ({
  type: ActionType.editMenuCategoryProduct,
  data: item,
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

const storeCouponList = items => ({
  type: ActionType.storeCouponList,
  data: items,
});

const storeFAQs = items => ({
  type: ActionType.storeFAQs,
  data: items,
});

const storeOrderHistoryList = items => ({
  type: ActionType.storeOrderHistoryList,
  data: items,
});

const storeOrderRequestList = items => ({
  type: ActionType.storeOrderRequestList,
  data: items,
});

const storeOrderedItem = (restaurantName, items) => ({
  type: ActionType.storeOrderedItem,
  restaurantName: restaurantName,
  itemsOrdered: items,
});

const storeOrderedItemsData = data => ({
  type: ActionType.storeOrderedItemsData,
  data: data,
});

const storePayPalAddresses = addresses => ({
  type: ActionType.storePayPalAddresses,
  data: addresses,
});

const storeSelectedLanguage = selectedLanguage => ({
  type: ActionType.selectedLanguage,
  data: selectedLanguage,
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

const storeUserReviewList = items => ({
  type: ActionType.storeUserReviewList,
  data: items,
});

const storeWithdrawHistoryList = items => ({
  type: ActionType.storeWithdrawHistoryList,
  data: items,
});
const toggleCategoryIsActive = data => ({
  type: ActionType.toggleCategoryIsActive,
  data: data,
});

const toggleCouponIsActive = data => ({
  type: ActionType.toggleCouponIsActive,
  data: data,
});

const toggleProductIsActive = data => ({
  type: ActionType.toggleProductIsActive,
  data: data,
});

const updateAppFirstLaunchToFalse = () => ({
  type: ActionType.updateAppFirstLaunchToFalse,
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
  addCoupon,
  addMenuCategory,
  addMenuCategoryProduct,
  addPayPalAddress,
  changePayPalAddresses,
  editCoupon,
  editMenuCategory,
  editMenuCategoryProduct,
  hideActivityLoader,
  isLoggedIn,
  logout,
  performAutoLogout,
  pushNewMessage,
  showActivityLoader,
  storeAuthToken,
  storeCheckoutList,
  storeCouponList,
  storeFAQs,
  storeOrderHistoryList,
  storeOrderRequestList,
  storeOrderedItem,
  storeOrderedItemsData,
  storePayPalAddresses,
  storeSelectedLanguage,
  storeSubItemData,
  storeUserInfo,
  storeUserMessages,
  storeUserReviewList,
  storeWithdrawHistoryList,
  toggleCategoryIsActive,
  toggleCouponIsActive,
  toggleProductIsActive,
  updateAppFirstLaunchToFalse,
  updateInternetStatus,
  updateOrderedItemsStatus,
};
