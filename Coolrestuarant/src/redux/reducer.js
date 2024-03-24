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
  FAQList: [],
  acceptingOrderStatus: false,
  appFirstLaunch: true,
  authToken: null,
  checkoutList: [],
  couponList: [],
  internetConnected: false,
  isLoggedIn: false,
  messageHistory: [],
  orderHistoryList: [],
  orderRequestList: [],
  orderedItems: {},
  orderedItemsData: [],
  payPalAddresses: [],
  selectedLanguage: null,
  showActivityLoader: false,
  subItems: [],
  userInfo: null,
  userReviewList: [],
  withdrawHistoryList: [],
  cuisineList: [
    {
      value: 1,
      title: 'Asian'
    },
    {
      value: 2,
      title: 'Georgian'
    },
    {
      value: 3,
      title: 'Indian'
    },
    {
      value: 4,
      title: 'Asian'
    },
    {
      value: 5,
      title: 'Georgian'
    },
    {
      value: 6,
      title: 'Indian'
    },
  ],
  filterList: [
    {
      value: 1,
      title: 'Cake'
    },
    {
      value: 2,
      title: 'Cupcake'
    },
    {
      value: 3,
      title: 'Chicken'
    },
    {
      value: 4,
      title: 'Cake'
    },
    {
      value: 5,
      title: 'Cupcake'
    },
    {
      value: 6,
      title: 'Chicken'
    }
  ],
  menuCategoryList: [{
    id: 1,
    title: 'Combo Meal',
    description:
        'Cras blandit consequat sapien ut cursus. Duis in mollis de magna. Sed sit amet nulla. Pellentesque non ex velit.',
    rating: 5,
    ratingNum: 4,
    isActive: true,
    moreDescription:
        'Cras blandit consequat sapien ut cursus. Duis in mollis de magna. Sed sit amet nulla. Pellentesque non ex velit. Cras blandit consequat sapien ut cursus. Duis in mollis de magna. Sed sit amet nulla. Pellentesque non ex velit.',
    iconImage:
        'https://images.unsplash.com/photo-1612392062126-5cc76074df9c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },],
  menuCategoryProductList: [
    {
      categoryId: 1,
      productList: [
        {
          id: 1,
          title: 'Dobule Muffin',
          description: 'Lorem ipsum dolor sit amet, consectetur non adipiscing elit. Eitam ac tempor leo.',
          rating: 5,
          ratingNum: 4,
          isActive: true,
          isOrderNowAvailable: true,
          isPreOrderAvailable: true,
          preOrderPrepTime: 20,
          orderNowPrepTime: 20,
          price: 1.29,
          filterList: [1,2,3],
          cuisineList: [1,2,3],
          iconImage:
              'https://images.unsplash.com/photo-1612392062126-5cc76074df9c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          id: 2,
          title: 'Dobule Muffin 1',
          description: 'Lorem ipsum dolor sit amet, consectetur non adipiscing elit. Eitam ac tempor leo.',
          rating: 5,
          ratingNum: 4,
          isActive: true,
          isOrderNowAvailable: true,
          isPreOrderAvailable: true,
          preOrderPrepTime: 20,
          orderNowPrepTime: 20,
          price: 1.29,
          filterList: [1,2,3],
          cuisineList: [1,2,3],
          iconImage:
              'https://images.unsplash.com/photo-1612392062126-5cc76074df9c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          id: 3,
          title: 'Dobule Muffin 2',
          description: 'Lorem ipsum dolor sit amet, consectetur non adipiscing elit. Eitam ac tempor leo.',
          rating: 5,
          ratingNum: 4,
          price: 1.29,
          isActive: true,
          isOrderNowAvailable: true,
          isPreOrderAvailable: true,
          preOrderPrepTime: 20,
          orderNowPrepTime: 20,
          filterList: [1,2,3],
          cuisineList: [1,2,3],
          iconImage:
              'https://images.unsplash.com/photo-1612392062126-5cc76074df9c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        }
      ]
    },
  ],

};

const reducerLogoutState = {
  FAQList: [],
  acceptingOrderStatus: false,
  authToken: null,
  autoLogout: false,
  checkoutList: [],
  couponList:[],
  isLoggedIn: false,
  messageHistory: [],
  orderHistoryList: [],
  orderedItems: {},
  orderedItemsData: [],
  payPalAddresses: [],
  showActivityLoader: false,
  subItems: [],
  userReviewList: [],
  withdrawHistoryList: [],
  cuisineList: [
    {
      value: 1,
      title: 'Asian'
    },
    {
      value: 2,
      title: 'Georgian'
    },
    {
      value: 3,
      title: 'Indian'
    },
    {
      value: 4,
      title: 'Asian'
    },
    {
      value: 5,
      title: 'Georgian'
    },
    {
      value: 6,
      title: 'Indian'
    },
  ],
  filterList: [
    {
      value: 1,
      title: 'Cake'
    },
    {
      value: 2,
      title: 'Cupcake'
    },
    {
      value: 3,
      title: 'Chicken'
    },
    {
      value: 4,
      title: 'Cake'
    },
    {
      value: 5,
      title: 'Cupcake'
    },
    {
      value: 6,
      title: 'Chicken'
    }
  ],
  menuCategoryList: [{
    id: 1,
    title: 'Combo Meal',
    description:
        'Cras blandit consequat sapien ut cursus. Duis in mollis de magna. Sed sit amet nulla. Pellentesque non ex velit.',
    rating: 5,
    ratingNum: 4,
    isActive: true,
    moreDescription:
        'Cras blandit consequat sapien ut cursus. Duis in mollis de magna. Sed sit amet nulla. Pellentesque non ex velit. Cras blandit consequat sapien ut cursus. Duis in mollis de magna. Sed sit amet nulla. Pellentesque non ex velit.',
    iconImage:
        'https://images.unsplash.com/photo-1612392062126-5cc76074df9c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },],
  menuCategoryProductList: [
    {
      categoryId: 1,
      productList: [
        {
          id: 1,
          title: 'Dobule Muffin',
          description: 'Lorem ipsum dolor sit amet, consectetur non adipiscing elit. Eitam ac tempor leo.',
          rating: 5,
          ratingNum: 4,
          isActive: true,
          isOrderNowAvailable: true,
          isPreOrderAvailable: true,
          preOrderPrepTime: 20,
          orderNowPrepTime: 20,
          price: 1.29,
          filterList: [1,2,3],
          cuisineList: [1,2,3],
          iconImage:
              'https://images.unsplash.com/photo-1612392062126-5cc76074df9c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          id: 2,
          title: 'Dobule Muffin 1',
          description: 'Lorem ipsum dolor sit amet, consectetur non adipiscing elit. Eitam ac tempor leo.',
          rating: 5,
          ratingNum: 4,
          isActive: true,
          isOrderNowAvailable: true,
          isPreOrderAvailable: true,
          preOrderPrepTime: 20,
          orderNowPrepTime: 20,
          price: 1.29,
          filterList: [1,2,3],
          cuisineList: [1,2,3],
          iconImage:
              'https://images.unsplash.com/photo-1612392062126-5cc76074df9c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          id: 3,
          title: 'Dobule Muffin 2',
          description: 'Lorem ipsum dolor sit amet, consectetur non adipiscing elit. Eitam ac tempor leo.',
          rating: 5,
          ratingNum: 4,
          price: 1.29,
          isActive: true,
          isOrderNowAvailable: true,
          isPreOrderAvailable: true,
          preOrderPrepTime: 20,
          orderNowPrepTime: 20,
          filterList: [1,2,3],
          cuisineList: [1,2,3],
          iconImage:
              'https://images.unsplash.com/photo-1612392062126-5cc76074df9c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        }
      ]
    },
  ],

};

const reducer = (state = reducerInitialState, action) => {
  let menuCategoryListItems = state.menuCategoryList;
  let menuCategoryProductListItems = state.menuCategoryProductList;
  let couponListItems = state.couponList;
  switch (action.type) {
    case ActionType.addMenuCategory:
      action.data.id = menuCategoryListItems.length + 1;
      menuCategoryListItems.push(action.data);
      return Object.assign({}, state, { menuCategoryList: [...menuCategoryListItems] });

    case ActionType.editMenuCategory:
      menuCategoryListItems = menuCategoryListItems.map((value) => {
        if(value.id === action.data.id){
          return {...value, ...action.data}
        }
        return value
      })
      return Object.assign({}, state, { menuCategoryList: menuCategoryListItems });

    case ActionType.deleteMenuCategory:
      let menuCategoryListArr = state.menuCategoryList.filter(value => value.id !== action.data);
      return Object.assign({}, state, { menuCategoryList: [...menuCategoryListArr] });

    case ActionType.addCoupon:
      action.data.id = couponListItems.length + 1;
      couponListItems.push([action.data]);
      return Object.assign({}, state, { couponList: [...couponListItems] });

    case ActionType.editCoupon:
      couponListItems = couponListItems.map((value) => {
        if(value[0].id === action.data.id){

          return [{...value[0], ...action.data}]
        }
        return value
      })

      return Object.assign({}, state, { couponList: [...couponListItems] });

    case ActionType.deleteCoupon:
      let couponList = state.couponList.filter(value => value[0].id !== action.data);
      return Object.assign({}, state, { couponList: [...couponList] });


    case ActionType.addMenuCategoryProduct:
      let menuCategoryProductListItemsArray =
          menuCategoryProductListItems.filter((value) => value.categoryId === action.data.categoryId)
      if(menuCategoryProductListItemsArray.length > 0){
        menuCategoryProductListItemsArray = menuCategoryProductListItemsArray[0].productList;
      }
      else{
        menuCategoryProductListItemsArray = {categoryId: action.data.categoryId, productList: []};
        state.menuCategoryProductList = [...menuCategoryProductListItems, ...[menuCategoryProductListItemsArray]];
        menuCategoryProductListItemsArray = menuCategoryProductListItemsArray.productList;
        menuCategoryProductListItems = state.menuCategoryProductList;
      }
      action.data.id = menuCategoryProductListItemsArray.length + 1;
      menuCategoryProductListItemsArray.push({...action.data});
      menuCategoryProductListItems = menuCategoryProductListItems.map((value) => {
        if(value.categoryId === action.data.categoryId){
          value.productList = menuCategoryProductListItemsArray;
          return value;
        }
        return value;
      });
      return Object.assign({}, state, { menuCategoryProductList: [...menuCategoryProductListItems] });

    case ActionType.editMenuCategoryProduct:
      menuCategoryProductListItems = menuCategoryProductListItems.map((value) => {
        if(value.categoryId === action.data.categoryId){
          let productArr = value.productList.map((product) => {
            if(product.id === action.data.productId){
              return {...product, ...action.data}
            }
            return product;
          });
          value.productList = productArr;
        }
        return value
      })
      return Object.assign({}, state, { menuCategoryProductList: [...menuCategoryProductListItems] });

    case ActionType.deleteMenuCategoryProduct:
      menuCategoryProductListItems = menuCategoryProductListItems.map((value) => {
        if(value.categoryId === action.data.categoryId){
          let productArr = value.productList.filter((product) => product.id !== action.data.product.id);
          value.productList = productArr;
        }
        return value
      })
      return Object.assign({}, state, { menuCategoryProductList: [...menuCategoryProductListItems] });

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

    case ActionType.storeCouponList:
      return Object.assign({}, state, { couponList: action.data });

    case ActionType.storeSubItemData:
      return Object.assign({}, state, { subItems: action.data });

    case ActionType.storeCheckoutList:
      let checkOutData = action.data;
      if (checkOutData.length > 0) {
        let tempCheckoutData = checkOutData.map((object) => {
          return { ...object, totalPrice: object.itemPrice * object.itemPurchased };
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

    case ActionType.storeUserReviewList:
      return Object.assign({}, state, { userReviewList: action.data });

    case ActionType.toggleCategoryIsActive:
      let newMenuArr = state.menuCategoryList.map((value) => {
        if(value.id === action.data){
          value.isActive = !value.isActive;
        }
        return value;
      })
      return Object.assign({}, state, { menuCategoryList: newMenuArr});

    case ActionType.toggleCouponIsActive:
      let coupons = state.couponList.map((value) => {
        if(value.id === action.data){
          value.isActive = !value.isActive;
        }
        return value;
      })
      return Object.assign({}, state, { couponList: coupons});

    case ActionType.toggleProductIsActive:
      let newMenuProductArr = menuCategoryProductListItems.map((value) => {
        if(value.categoryId === action.data.categoryId){
          let productArr = value.productList.map((product) => {
            if(product.id === action.data.productId){
              return {...product,
              ...{isActive: !product.isActive}}
            }
            return product;
          });
          value.productList = productArr;
        }
        return value
      })
      return Object.assign({}, state, { menuCategoryProductList: [...newMenuProductArr]});

    case ActionType.updateOrderedItemsStatus:
      let tempOrderedItemsStatus = state.orderedItemsData
      tempOrderedItemsStatus.isConfirmed = action.data
      return Object.assign({}, state, { orderedItemsData: tempOrderedItemsStatus });

    case REHYDRATE:
      return Object.assign({},state, reducerLogoutState)

    default:
      return state;
  }
};

export { reducer, reducerInitialState };
