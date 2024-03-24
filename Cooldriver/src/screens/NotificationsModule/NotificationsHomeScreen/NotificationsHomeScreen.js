/* eslint-disable */
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View, Text,TouchableOpacity} from 'react-native';

//Dummy Datta
import OrderRequestsDummy from '../../../DummyData/OrderRequestsDummyData';

//Third Party
import {CountDownText} from 'react-native-countdown-timer-text'

//Utils
import Action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import styles from "./style";
import {useDispatch, useSelector} from 'react-redux';


import CountDownIcon from '../../../assets/icons/generalIcons/countdownSVG.svg'
import CountDownWarning from '../../../assets/icons/generalIcons/countdownSVG2.svg'
import Location from '../../../assets/icons/discoverMenuIcons/locationIcons/active_locationSVG.svg';

//Components
import AddressInformationFields from "../../../components/AddressInformationFields/AddressInformationFields";
import BorderDivider from "../../../components/BorderDivider/BorderDivider";
import CheckboxSubmitGoBackPopUp from '../../../components/popups/CheckboxSubmitGoBackPopUp/CheckboxSubmitGoBackPopUp';
import DeclineOrderPopUp from '../../../components/popups/DeclineOrderPopUp/DeclineOrderPopUp';
import Header from '../../../components/Header/Header';
import NoInformationText from "../../../components/NoInformationText/NoInformationText";
import OrderedItemList from "../../../components/OrderedItemList/OrderedItemList";
import SquareButton from "../../../components/SquareButton/SquareButton";

//Utils
import Routes from "../../../navigation/Routes";
import {FONT_FAMILY} from "../../../constants/constants";
import {allColors} from "../../../assets/styles/mainColors";
import {horizontalScale} from "../../../utility/Scale";

//Countdown time component for order requests
const CountDownComponent = ({countDownTime}) => {
    const [countDown, setCountDown] = useState(countDownTime);
    let countDownIcon = countDown > 30 ? <CountDownIcon width={60} height={60} style={{marginTop:horizontalScale(3)}}/> : <CountDownWarning width={60} height={60} style={{marginTop:horizontalScale(3)}}/>
    return (
        <View style={styles.countdown}>
            <View style={styles.countdownIconContainer}>
                {countDownIcon}
                <CountDownText style={styles.countdownText} timeLeft={countDown} step={-1} auto={true} countType={'seconds'} intervalText={(sec)=>{
                    setCountDown(sec);
                    return sec
                }}/>
            </View>
        </View>
    );
}
const OrderedRequestList = ({acceptingOrderStatus, requests, visibleArr, acceptOnPress, navigation, declinePopup}) => {
    const dispatch = useDispatch();
    const renderRequestList = ({item, index}) => {
        return (
            <View key={'render_item_'+index}>
                {visibleArr.includes(item.id) && <View style={[styles.orderContainer,globalStyles.horizontalMargin20, globalStyles.marginTop50]}>
                <CountDownComponent countDownTime={110} />
                <View style={[globalStyles.flexDirectionRow, globalStyles.justifySpaceBetween, globalStyles.alignItemsCenter]}>
                    <Text style={[globalStyles.RobotoCondensedFont300, globalStyles.fontSize14]}>Deliver by {item.deliverBy}</Text>
                    <Text style={[globalStyles.RobotoCondensedFont300, globalStyles.fontSize14]}>{item.numOfItems} item{item.numOfItems > 1 && 's'}</Text>
                </View>
                <View style={[globalStyles.flexDirectionRow, globalStyles.justifySpaceBetween, globalStyles.alignItemsCenter, globalStyles.marginTop5, globalStyles.marginBottom5]}>
                    <Text style={[globalStyles.RobotoCondensedFont400, globalStyles.fontSize20]}>{item.restaurant}</Text>
                    <Text style={[globalStyles.RobotoCondensedFont300, globalStyles.fontSize14]}>{item.totalDistance}</Text>
                </View>
                <View style={[globalStyles.flexDirectionRow, globalStyles.justifySpaceBetween, globalStyles.alignItemsCenter]}>
                    <Text style={[globalStyles.RobotoCondensedFont300, globalStyles.fontSize14]}>Distance to Restaurant </Text>
                    <Text style={[globalStyles.RobotoCondensedFont300, globalStyles.fontSize14]}>{item.distanceToRestaurant}</Text>
                </View>
                    {/*------ Border Divider Start ------------*/}
                <BorderDivider activeAreaWidth={0} containerTopMargin={15} containerBottomMargin={20}/>
                    {/*------ Border Divider End ------------*/}
                <View style={[globalStyles.justifyCenter, globalStyles.flexDirectionRow]}>
                    <Text style={[globalStyles.RobotoCondensedFont700, globalStyles.fontSize20]}>$ {item.earning}</Text>
                </View>
                <TouchableOpacity style={[globalStyles.justifyCenter, globalStyles.flexDirectionRow, globalStyles.marginTop10, globalStyles.alignItemsCenter]} onPress={()=>{
                    dispatch(Action.storeRequestedPreview(item))
                    navigation.navigate(Routes.DeliveryHomeScreen)}}>
                    <Text style={[globalStyles.RobotoFont300, globalStyles.fontSize18, globalStyles.marginRight10]}>See on Google Map</Text>
                    <Location />
                </TouchableOpacity>

                {/*-------------Address Information Start-------*/}
                <AddressInformationFields toAddress={item.deliveryAddress} fromAddress={item.restaurantAddress}/>
                {/*-------------Address Information End-------*/}

                {/*-------------Delivery Instruction Start-------*/}
                <View style={[globalStyles.marginTop10, globalStyles.marginBottom10]}>
                    <Text
                        style={[
                            globalStyles.RobotoCondensedFont400,
                            globalStyles.fontSize14,
                        ]}>
                        DELIVERY NOTE:
                    </Text>
                    <View style={styles.deliveryInstruction}>
                        <Text
                            style={[
                                globalStyles.RobotoCondensedFont300,
                                globalStyles.horizontalPadding20,
                            ]}>
                            Nulla eu orci rutrum, finibus lectus at, dapibus purus. Ut
                            accumsan, massa nec pellentesque fringilla, justo enim feugiat
                            odio, ut convallis augue. Ante vel nulla. Quisque ut diam
                            sollicitudin, consectetur nisl ut, lacinia libero.
                        </Text>
                    </View>
                </View>
                {/*-------------Delivery Instruction End-------*/}

                <OrderedItemList orderedItems={item.orderedItems}/>

                <View
                    style={[
                        globalStyles.flex,
                        globalStyles.justifySpaceBetween,
                        globalStyles.flexDirectionRow,
                        globalStyles.marginTop20
                    ]}>
                    <View style={[globalStyles.flex, globalStyles.marginRight5]}>
                        <SquareButton
                            title={'DECLINE'}
                            fontFamily={FONT_FAMILY.RobotoMedium}
                            backgroundColor={allColors.red}
                            fontSize={16}
                            fontWeight={'400'}
                            onPress={() => {
                                declinePopup(item)
                            }}
                        />
                    </View>
                    <View style={[globalStyles.flex, globalStyles.marginLeft5]}>
                        <SquareButton
                            title={'ACCEPT'}
                            fontFamily={FONT_FAMILY.RobotoMedium}
                            backgroundColor={allColors.blue}
                            fontSize={16}
                            fontWeight={'400'}
                            onPress={() =>acceptOnPress(item)}
                        />
                    </View>
                </View>
                </View>}
            </View>
        );
    };

    return (
        <View>
            {visibleArr.length > 0 ? <FlatList
                //performance settings
                //initialNumToRender={1} // Reduce initial render amount
                //maxToRenderPerBatch={1} // Reduce number in each render batch
                // windowSize={7} // Reduce the window size
                showsVerticalScrollIndicator={false}
                data={requests}
                renderItem={renderRequestList}
                ItemSeparatorComponent={() => <View style={styles.gapView} />}
                keyExtractor={(_item, index) => index.toString()}
            /> : (
                <View>
                    {!acceptingOrderStatus ? (
                        <View style={[globalStyles.alignItemsCenter, globalStyles.marginTop30]}>
                            <TouchableOpacity
                                onPress={() => {
                                    dispatch(Action.updateAcceptingOrderStatus(true))
                                }}
                            >
                                <Text style={[globalStyles.RobotoFont300]}>
                                    Click Here to Enable Notifications
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ) : <NoInformationText />
                    }
                </View>
            )}

        </View>
    );
};

const NotificationsHomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const acceptingOrderStatus = useSelector(state => state.acceptingOrderStatus);
  //get order request list from redux store
  const orderRequestList = useSelector(state => state.orderRequestList);
  //put the order list in redux store
  const storeOrderRequestList = useCallback(
    () => dispatch(Action.storeOrderRequestList(OrderRequestsDummy.data)),
    [dispatch],
  );

  const [, setRerender] = useState();
  const forceUpdate = React.useCallback(() => setRerender({}), []);
  const [isDeclinePopupVisible, setIsDeclinePopupVisible] = useState(false);
  const [isTellUsWhyVisible, setIsTellUsWhyVisible] = useState(false);
  const [declinedItem, setDeclinedItem] = useState({})
  const [visibleArr, setVisibleArr] = useState(orderRequestList.map((val) => {
      return val.id
  }))

    //on render store order request list in the redux store
    useEffect(() => {
        storeOrderRequestList();
    }, []);

    //on press of the tab, make sure that requests are being re rendered
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // The screen is focused
            // Call any action
            if(acceptingOrderStatus) {
                populateVisibleArr()
                setTimeout(()=>setVisibleArr([]), 110000)
            }
            forceUpdate()
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation, acceptingOrderStatus]);

    //visible order requests array
    const populateVisibleArr = () => setVisibleArr(orderRequestList.map((val) => {
        return val.id
    }))

    //order requests list definition
    let OrderRequests = ({acceptOnPress}) => (
        <OrderedRequestList
                visibleArr={acceptingOrderStatus ? visibleArr : []}
                declinePopup={(item) => {
                    setIsDeclinePopupVisible(true)
                    setDeclinedItem(item)
                }}
                requests={orderRequestList ? orderRequestList : []}
                acceptOnPress={(item) => {
                    acceptOnPress(item)
                }}
                navigation={navigation}
                acceptingOrderStatus={acceptingOrderStatus}
        />
    );

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        navigation={navigation}
        title={'Order Requests'}
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}
        <View
            style={globalStyles.flex}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={globalStyles.commonScrollViewPadding}>
            {/*------ Order request list start Start -----------*/}
            <View >
                <OrderRequests acceptOnPress={(item) => {
                    navigation.navigate(Routes.DeliveryHomeScreen)
                    dispatch(Action.storeCurrentOrder(item))
                }} />
            </View>
            {/*------ Order request list start End -----------*/}

            {/*------------ Decline Order Popup START--------*/}
            {isDeclinePopupVisible && <DeclineOrderPopUp
                showPopUp={isDeclinePopupVisible}
                closePopUp={() => setIsDeclinePopupVisible(false)}
                getStarted={() => {
                    setIsDeclinePopupVisible(false)
                    setIsTellUsWhyVisible(true)
                }}
            />}
            {/*------------ Decline Order Popup End--------*/}

            {/*------------ Tell Us Why Popup START--------*/}
            {isTellUsWhyVisible && <CheckboxSubmitGoBackPopUp
                showPopUp={isTellUsWhyVisible}
                closePopUp={() => {
                    setIsTellUsWhyVisible(false)
                    setIsDeclinePopupVisible(true)
                }}
                title={'Tell Us Why'}
                checkboxLabelArr={['Distance is too far','Location is not my starting point','The order is too small','I have too many orders', 'Other']}
                getStarted={() => {
                    setIsTellUsWhyVisible(false)
                    setIsDeclinePopupVisible(false)
                    setVisibleArr(visibleArr.filter((val) => {
                        return val!==declinedItem.id
                    }))
                    setDeclinedItem({})
                }}
            />}
            {/*------------ Tell Us Why Popup End--------*/}
        </View>
    </SafeAreaView>
  );
};

export default NotificationsHomeScreen;
