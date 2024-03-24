/* eslint-disable */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, Switch, View, TouchableOpacity, Text} from 'react-native';

//Components
import LookingByMapScreen from '../LookingByMapScreen/LookingByMapScreen';
import Notification from '../../../components/Notification/Notification';
import SquareButton from '../../../components/SquareButton/SquareButton';


import DriverLocation from '../../../assets/icons/generalIcons/locationIcons/driver_locationSVG.svg';
import GreenLocation from '../../../assets/icons/generalIcons/locationIcons/green_locationSVG.svg';
import RedLocation from '../../../assets/icons/generalIcons/locationIcons/red_locationSVG.svg';
import RestaurantLocation from '../../../assets/icons/generalIcons/locationIcons/red_houseSVG.svg';

//Utils
import Action from '../../../redux/action';
import Routes from '../../../navigation/Routes';
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import {FONT_FAMILY} from '../../../constants/constants';
import {allColors} from '../../../assets/styles/mainColors';


const DeliveryHomeScreen = props => {
  const dispatch = useDispatch();
  //current location coordinates
  const currentLocation = [
    {
      profilePicturePath:
        'https://images.unsplash.com/photo-1601999109332-542b18dbec57?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      name: 'Sabrina Lorenshtein',
      address: '81 Charter Street',
      showRatingView: true,
      rating: 4,
      ratingNum: 4,
      homeIcon: <DriverLocation height={80} width={80} />,
      latitude: 42.36362168160893,
      longitude: -71.06114148472689,
    },
  ];

  //is this user accepting orders at this time?
  const acceptingOrderStatus = useSelector(state => state.acceptingOrderStatus);

  //preview route if the user decides to take on a delivery
  const routePreview = useSelector(state => state.routePreview);

  //has the user started the delivery order
  const hasStartedRoute = useSelector(state => state.hasStartedRoute);

  //has  the user already picked up food from restaurant
  const hasPickedUpFood = useSelector(state => state.hasPickedUpFood);

  //has the user started to head to customer
  const isGoingToCustomer = useSelector(state => state.isGoingToCustomer);

  //what is the current order user is trying to complete?
  const currentOrder = useSelector(state => state.currentOrder);

  //polygons on map for choosing delivery  area
  const [isPolygonVisible, setIsPolygonVisible] = useState(
    acceptingOrderStatus === null ? false : acceptingOrderStatus,
  );

  //is notification visible (new orders)
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  //is getting new order notifications enabled
  const [isNotificationEnabled, setNotificationEnabled] = useState(
    acceptingOrderStatus === null ? false : acceptingOrderStatus,
  );

  //markers on google maps
  const [googleMarkerArray, setGoogleMarkerArray] = useState(currentLocation);

  useEffect(() => {
    //if map should display route preview or current order than calculate what kind of information we might wanna display
    if (
      Object.keys(routePreview).length > 0 ||
      Object.keys(currentOrder).length > 0
    ) {
      //is it just a route preview or are we building current order
      let isPreview = Object.keys(routePreview).length > 0;
      //determine the request information accordingly
      let request = isPreview ? routePreview : currentOrder;
      //we should at least show the current location of the driver
      let markerArr = currentLocation;
      //if request is not null lets start building other information
      if (request) {
        //restaurant google marker
        let restaurantMarker = {
          profilePicturePath: request.restaurantImage,
          name: request.restaurant,
          address: request.restaurantAddress,
          showRatingView: false,
          homeIcon: isPreview ? (
            <RestaurantLocation height={80} width={80} />
          ) : (
            <RedLocation height={80} width={80} />
          ),
          latitude: 42.35433012130913,
          longitude: -71.05910008814041,
        };
        //delivery address marker
        let homeMarker = {
          profilePicturePath: request.restaurantImage,
          name: request.restaurant,
          address: request.deliveryAddress,
          showRatingView: false,
          homeIcon: isPreview ? (
            <RestaurantLocation height={80} width={80} />
          ) : (
            <RedLocation height={80} width={80} />
          ),
          latitude: 42.35237379698773,
          longitude: -71.06874846040138,
        };
        markerArr.push(restaurantMarker);
        markerArr.push(homeMarker);

        //if the user has not picked up the food yet then show the directions to restaurant
        //else show  the direction  to delivery address
        if (!hasPickedUpFood || (hasPickedUpFood && !isGoingToCustomer)) {
          markerArr[0]['homeIcon'] = <RedLocation height={80} width={80} />;
          markerArr[1]['homeIcon'] = <GreenLocation height={80} width={80} />;
          markerArr = markerArr.filter((val, index) => index !== 2);
        } else {
          markerArr[1]['homeIcon'] = <RedLocation height={80} width={80} />;
          markerArr[2]['homeIcon'] = <GreenLocation height={80} width={80} />;
          markerArr = markerArr.filter((val, index) => index !== 0);
        }
        setGoogleMarkerArray(markerArr);
      } else {
        setGoogleMarkerArray(currentLocation);
      }
    } else {
      //if the request is null just show  the current location
      setGoogleMarkerArray(currentLocation);
    }
  }, [
    props.route.params,
    hasStartedRoute,
    hasPickedUpFood,
    isGoingToCustomer,
    currentOrder,
    routePreview,
  ]);

  //when accepting order status changes, we should enable getting notifications and show the user their current location
  useEffect(() => {
    if (acceptingOrderStatus !== null) {
      setNotificationEnabled(acceptingOrderStatus);
      setGoogleMarkerArray(currentLocation);
    }
  }, [acceptingOrderStatus]);

  //if the polygon visibility changes
  //we should also enable seeing the notification after selecting the area where the delivery guy wants to work in
  useEffect(() => {
    if (!isPolygonVisible && isNotificationEnabled) {
      setIsNotificationVisible(isNotificationEnabled);
      setTimeout(() => {
        setIsNotificationVisible(false);
        setNotificationEnabled(isNotificationEnabled);
      }, 110000);
    }
  }, [isPolygonVisible]);

  //if getting notification status changes, we need to make sure that store accepting order is also up to date
  //this is needed when user  actually switches on and off for a map
  useEffect(() => {
    if (
      acceptingOrderStatus !== isNotificationEnabled &&
      acceptingOrderStatus !== null
    ) {
      dispatch(Action.updateAcceptingOrderStatus(isNotificationEnabled));
    }
  }, [isNotificationEnabled]);

  //when notification is toggled, we should determine whether polygon areas are visible
  //and make sure to reset the  map options and display the updates right away
  const toggleNotificationSwitch = () => {
    setNotificationEnabled(!isNotificationEnabled);
    setIsPolygonVisible(!isNotificationEnabled);
    if (!isNotificationEnabled) {
      dispatch(Action.storeRequestedPreview({}));
      dispatch(Action.storeDeliveryConfirmation());
      setIsNotificationVisible(false);
      setGoogleMarkerArray(currentLocation);
      props.navigation.setParams({totalPrice: null});
    }
  };

  //change the values for has started route in redux
  const storeHasStartedRoute = data =>
    dispatch(Action.storeHasStartedRoute(data));

  //change the is going to customer in redux
  const storeIsGoingToCustomer = data =>
    dispatch(Action.storeIsGoingToCustomer(data));

  //change the current order request information in store
  const storeCurrentOrder = data =>
    dispatch(Action.storeCurrentOrder(Object.assign({}, data)));

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*--- Switch toggle for enabling map & getting notifications for orders Start----*/}
      <View style={styles.notificationToggleContainer}>
        <View>
          <Switch
            ios_backgroundColor={allColors.lightGreyText}
            thumbColor={allColors.white}
            trackColor={{
              true:
                hasStartedRoute || hasPickedUpFood
                  ? allColors.grey
                  : allColors.yellow,
            }}
            onValueChange={toggleNotificationSwitch}
            value={isNotificationEnabled}
            disabled={hasStartedRoute}
          />
        </View>
      </View>
      {/*--- Switch toggle for enabling map & getting notifications for orders End----*/}

      {/*------ Setup a map Start -----*/}
      <LookingByMapScreen
        showRoute={
          isNotificationEnabled &&
          (routePreview.hasOwnProperty('orderedItems') ||
            currentOrder.hasOwnProperty('orderedItems'))
        }
        googleMarker={googleMarkerArray}
        isIconVisible={isNotificationEnabled}
        isPolygonVisible={isPolygonVisible}
        onPolygonPress={() => setIsPolygonVisible(false)}
      />
      {/*------ Setup a map End -----*/}

      {/*------ Notification container Start -----*/}
      {isNotificationVisible && !currentOrder.hasOwnProperty('orderedItems') && (
        <Notification
          onPressCloseIcon={() => {
            setIsNotificationVisible(false);
          }}
          onPress={() => {
            props.navigation.navigate(Routes.NotificationsTabMenu);
            setIsNotificationVisible(false);
          }}
          title={'2 New Order Requests'}
          description={
            'In order to see all requests, please click on this \n' +
            'window and accept or decline order requests.'
          }
        />
      )}
      {/*------ Notification container End -----*/}

      {/*------- When Previewing you might wanna go back & not deliver the  item Start -----*/}
      {isNotificationEnabled && routePreview.hasOwnProperty('id') && (
        <View style={styles.backButtonContainer}>
          <View style={styles.backButtonWidth}>
            <SquareButton
              title={'BACK'}
              titleFontColor={allColors.black}
              fontFamily={FONT_FAMILY.RobotoMedium}
              backgroundColor={allColors.almostWhite}
              fontSize={16}
              borderRadius={30}
              fontWeight={'400'}
              onPress={() => {
                dispatch(Action.storeRequestedPreview({}));
               storeCurrentOrder({});
                setGoogleMarkerArray(currentLocation);
                props.navigation.navigate(Routes.NotificationsHomeScreen);
              }}
            />
          </View>
        </View>
      )}
      {/*------- When Previewing you might wanna go back & not deliver the  item End -----*/}

      {/*------- Start or End Pickup from Restaurant Button Start -----*/}
      {isNotificationEnabled &&
        Object.keys(currentOrder).length > 0 &&
        (!hasPickedUpFood ? (
          <View style={styles.backButtonContainer}>
            <View style={styles.routeButtonWidth}>
              <SquareButton
                title={
                  !hasStartedRoute ? 'START PICKUP' : 'PICKUP CONFIRMATION'
                }
                titleFontColor={allColors.white}
                fontFamily={FONT_FAMILY.RobotoMedium}
                backgroundColor={
                  !hasStartedRoute ? allColors.red : allColors.black
                }
                fontSize={16}
                borderRadius={30}
                fontWeight={'400'}
                onPress={() => {
                  if (!hasStartedRoute) {
                    //starting to head to the restaurant
                    storeHasStartedRoute(true);
                  } else {
                    props.navigation.navigate(Routes.CurrentOrderScreen, {
                      orderDetails: currentOrder,
                    });
                  }
                }}
              />
            </View>
          </View>
        ) : null)}
      {/*------- Start or End Pickup from Restaurant Button End -----*/}

      {/*------- Start or End Delivery from Restaurant Button Start -----*/}
      {isNotificationEnabled && hasPickedUpFood && (
        <View style={styles.backButtonContainer}>
          <View style={styles.routeButtonWidth}>
            <SquareButton
              title={!isGoingToCustomer ? 'START DELIVERY' : 'CONFIRM DELIVERY'}
              titleFontColor={allColors.white}
              fontFamily={FONT_FAMILY.RobotoMedium}
              backgroundColor={
                !isGoingToCustomer ? allColors.red : allColors.black
              }
              fontSize={16}
              borderRadius={30}
              fontWeight={'400'}
              onPress={() => {
                if (!isGoingToCustomer) {
                  //starting to head to the restaurant
                  storeIsGoingToCustomer(true);
                  let markerArr = googleMarkerArray;
                  markerArr[0]['homeIcon'] = (
                    <RedLocation height={80} width={80} />
                  );
                  markerArr[1]['homeIcon'] = (
                    <GreenLocation height={80} width={80} />
                  );
                  markerArr = markerArr.filter((val, index) => index !== 1);
                  setGoogleMarkerArray(markerArr);
                } else {
                  props.navigation.navigate(Routes.CurrentOrderScreen, {
                    orderDetails: currentOrder,
                  });
                }
              }}
            />
          </View>
        </View>
      )}
      {/*------- Start or End Delivery from Restaurant Button End -----*/}

      {/*------- See Order Details Button Start -----*/}
      {hasStartedRoute && (
        <View style={styles.orderDetailButtonContainer}>
          <TouchableOpacity
            style={styles.orderDetailButton}
            onPress={() => {
              props.navigation.navigate(Routes.CurrentOrderScreen, {
                orderDetails: currentOrder,
              });
            }}>
            <Text style={styles.orderDetailButtonTitle}>Order Details</Text>
          </TouchableOpacity>
        </View>
      )}
      {/*------- See Order Details Button End -----*/}
    </SafeAreaView>
  );
};

export default DeliveryHomeScreen;
