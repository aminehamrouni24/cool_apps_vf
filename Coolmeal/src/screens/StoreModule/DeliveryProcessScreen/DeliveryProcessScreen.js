/* eslint-disable */
import React, {useState, useEffect, useCallback, createRef} from 'react';
import {View, Text, ScrollView, SafeAreaView, TouchableOpacity, FlatList, Image} from 'react-native';

//Third Party
import { useDispatch, useSelector } from 'react-redux';
import {ActionSheetCustom as ActionSheet} from 'react-native-custom-actionsheet';

//Components
import BorderDivider from '../../../components/BorderDivider/BorderDivider';
import FoodItem from '../../../components/FoodItem/FoodItem';
import Header from '../../../components/Header/Header';
import LongButton from '../../../components/LongButton/LongButton';
import ProfileWithBorder from '../../../components/ProfileWithBorder/ProfileWithBorder';


//Publicly Available Icons that Can be Used for Commercial Purposes
import ActiveTimeIcon from '../../../assets/icons/storeIcons/active/active_clockSVG.svg';
import CallIcon from '../../../assets/icons/storeIcons/callSVG.svg';
import DateIcon from '../../../assets/icons/storeIcons/dateSVG.svg';
import Edit from '../../../assets/icons/discoverMenuIcons/editSVG.svg';
import InActiveArrow from '../../../assets/icons/storeIcons/inactive/inactive_arrowSVG.svg';
import InCallIcon from '../../../assets/icons/storeIcons/in_callSVG.svg';
import TimeIcon from '../../../assets/icons/storeIcons/inactive/inactive_clockSVG.svg';

//Utils
import Action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import Routes from '../../../navigation/Routes';
import styles from './style';
import { BUTTON_TYPE, FONT_FAMILY } from '../../../constants/constants';
import { allColors } from '../../../assets/styles/mainColors';
import {horizontalScale, screenHeight, screenWidth, verticalScale} from '../../../utility/Scale';
import {navigate} from '../../../utility/NavigationService';

//Dummy Data
import DeliveryItem from '../../../DummyData/DeliveryItemDummyData.json';

const actionSheetRef = createRef();

const options = ['Cancel',
    {
        component: <Text style={styles.actionSheetOptionText} >{'Store Review'}</Text>,
        height: screenHeight * 0.07
    },
    {
        component: <Text style={styles.actionSheetOptionText}>{'Products Review'}</Text>,
        height: screenHeight * 0.07
    },
    {
        component: <Text style={styles.actionSheetOptionText}>{'Driver Review'}</Text>,
        height: screenHeight * 0.07
    },
]


const OrderTimeDetails = ({ deliveryDetails }) => {
    return (
        <View style={[globalStyles.alignItemsCenter, globalStyles.marginTop15]}>
            <Text style={styles.titleText} >{'The Restaurant Received Your Order!'}</Text>
            <View style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]} >
                <Text style={styles.descText} >{'ESTIMATED ARRIVAL TIME:  '}</Text>
                <Text style={styles.timeText}>{deliveryDetails ? deliveryDetails.estimatedDeliveryTime ? deliveryDetails.estimatedDeliveryTime.from + ' - ' + deliveryDetails.estimatedDeliveryTime.to : '-' : '-'}</Text>
            </View>
        </View>
    )
}

const ProfileView = ({ deliveryDetails }) => {
    return (
        <View style={[globalStyles.flexDirectionRow, globalStyles.justifySpaceBetween, globalStyles.alignItemsCenter]} >
            {/*---- User Profile Picture Container Start ----*/}
            <ProfileWithBorder
                imagePath={'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
                imageHeight={screenWidth * 0.12}
                imageWidth={screenWidth * 0.12}
                borderColor={allColors.borderBlack}
            />
            {/*---- User Profile Picture Container End ----*/}
            <View style={globalStyles.justifySpaceBetween} >
                <Text style={styles.courierText} >{'Your Courier'}</Text>
                <Text style={styles.nameText} >{'George Becker'}</Text>
            </View>
            <View>
                <TouchableOpacity disabled={deliveryDetails.delivered ? !deliveryDetails.delivered.isActive : true} onPress={() => Linking.openURL('tel:123456789')} >
                    {deliveryDetails.delivered ? deliveryDetails.delivered.isActive ? <CallIcon /> : <InCallIcon /> : <InCallIcon />}
                </TouchableOpacity>
            </View>
        </View>
    )
}
const ActiveImage = () => {
    return (
        <Image
            style={{
                width: horizontalScale(25),
                height: verticalScale(25),
                borderRadius: 3,
            }}
            source={require('../../../assets/placeholders/active25x25.png')}
        />
    );
}

const InactiveImage = () => {
    return (
        <Image
            style={{
                width: horizontalScale(25),
                height: verticalScale(25),
                borderRadius: 3,
            }}
            source={require('../../../assets/placeholders/inactive25x25.png')}
        />
        )
}
const TimeLineView = ({ deliveryDetails }) => {
    return (
        <View style={styles.timelineView} >
            <View style={[globalStyles.flexDirectionRow, globalStyles.justifySpaceBetween]} >
                <View style={globalStyles.alignItemsFlexStart}>
                    {deliveryDetails.accepted ? deliveryDetails.accepted.isActive ? <ActiveImage /> : <InactiveImage /> : <InactiveImage />}
                    <Text style={styles.processText}>{'Accepted'}</Text>
                    <View style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]} >
                        {deliveryDetails.accepted ? deliveryDetails.accepted.isActive ? <ActiveTimeIcon /> : <TimeIcon /> : <TimeIcon />}
                        <Text style={styles.timeText}>{'00:00'}</Text>
                    </View>
                </View>
                <View style={styles.arrowLeft} >
                    <InActiveArrow />
                </View>
                <View style={globalStyles.alignItemsFlexStart}>
                    {deliveryDetails.onTheWay ? deliveryDetails.onTheWay.isActive ? <ActiveImage /> : <InactiveImage /> : <InactiveImage />}
                    <Text style={styles.processText}>{'On The Way'}</Text>
                    <View style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]} >
                        {deliveryDetails.onTheWay ? deliveryDetails.onTheWay.isActive ? <ActiveTimeIcon /> : <TimeIcon /> : <TimeIcon />}
                        <Text style={styles.timeText}>{'00:00'}</Text>
                    </View>
                </View>
                <View style={styles.arrowLeft} >
                    <InActiveArrow />
                </View>
                <View style={globalStyles.alignItemsFlexEnd}>
                    <View style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter, globalStyles.justifyFlexEnd]} >
                        {deliveryDetails.pickedUp ? deliveryDetails.pickedUp.isActive ? <ActiveImage /> : <InactiveImage /> : <InactiveImage />}
                    </View>
                    <Text style={styles.processText}>{'Picked Up'}</Text>
                    <View style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter, globalStyles.justifyFlexEnd]} >
                        {deliveryDetails.pickedUp ? deliveryDetails.pickedUp.isActive ? <ActiveTimeIcon /> : <TimeIcon /> : <TimeIcon />}
                        <Text style={styles.timeText}>{'00:00'}</Text>
                    </View>
                </View>
                <View style={styles.arrowRight} >
                    <InActiveArrow />
                </View>
                <View style={globalStyles.alignItemsFlexEnd}>
                    <View style={globalStyles.alignItemsFlexEnd} >
                        {deliveryDetails.delivered ? deliveryDetails.delivered.isActive ? <ActiveImage /> : <InactiveImage /> : <InactiveImage />}
                    </View>
                    <Text style={styles.processText}>{'Delivered'}</Text>
                    <View style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter, globalStyles.justifyFlexEnd]} >
                        {deliveryDetails.delivered ? deliveryDetails.delivered.isActive ? <ActiveTimeIcon /> : <TimeIcon /> : <TimeIcon />}
                        <Text style={styles.timeText}>{'00:00'}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const OrderedView = ({ orderedItems }) => {

    const renderRestaurantRows = ({ item, index }) => {
        return (
            <FoodItem
                key={'food_item_'+index}
                title={item.title}
                rating={item.rating}
                description={item.description}
                deliveryFee={'$' + item.deliveryFee}
                ratingNum={item.review}
                isRateVisible={false}
                showTotalCount={true}
                onTopRightIconPress={() => alert('Pressed')}
                isCounterVisible={false}
                isAddToCartVisible={false}
                imageIconPath={item.imageIconPath}
                itemPurchasedCount={item.itemPurchased}
            />
        )
    }

    return (
        <View>
            <View style={globalStyles.alignSelf} >
                <Text style={styles.restaurantText} >{'Your Order: ' + (orderedItems && orderedItems.itemsOrdered ? orderedItems.itemsOrdered.length + 1 : 0) + ' ' + 'Products From'}</Text>
                <Text style={styles.restaurantText}>{'"' + orderedItems.restaurantName + '""'}</Text>
            </View>
            <View>
                <FlatList
                    //performance settings
                    //initialNumToRender={1} // Reduce initial render amount
                    //maxToRenderPerBatch={1} // Reduce number in each render batch
                    // windowSize={7} // Reduce the window size
                    showsVerticalScrollIndicator={false}
                    data={orderedItems.itemsOrdered}
                    renderItem={renderRestaurantRows}
                    contentContainerStyle={[globalStyles.paddingTop20]}
                    ItemSeparatorComponent={() => <View style={styles.gapView} />}
                    keyExtractor={(_item, index) => index.toString()} />
            </View>
        </View>
    )
}

const DeliveryDetails = ({ }) => {
    return (
        <View style={globalStyles.marginTop20} >
            <View>
                <Text style={styles.deliverTitle}  >{'Delivery Date & Time:'}</Text>
            </View>
            <View style={[globalStyles.flexDirectionRow, globalStyles.marginTop5]} >
                <View style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]} >
                    <DateIcon />
                    <Text style={[styles.deliverAddressText, { marginLeft: horizontalScale(5) }]}>{'Today'}</Text>
                </View>
                <View style={[globalStyles.flexDirectionRow, globalStyles.marginLeft9, globalStyles.alignItemsCenter]} >
                    <TimeIcon />
                    <Text style={[styles.deliverAddressText, { marginLeft: horizontalScale(5) }]}> {'37 Min'}</Text>
                </View>
                <View style={[globalStyles.marginLeft9]} >
                    <Edit />
                </View>
            </View>
        </View>
    )
}

const TaxView = ({ totalPrice, taxPrice }) => {
    return (
        <View style={{ alignItems: 'flex-end' }} >
            <View style={globalStyles.flexDirectionRow} >
                <Text style={styles.taxText} >{'Tax: '}</Text>
                <Text style={styles.priceText}>{'$' + taxPrice.toFixed(2)}</Text>
            </View>
            <View style={[globalStyles.flexDirectionRow, globalStyles.marginTop5]} >
                <Text style={styles.totalText} >{'Total: '}</Text>
                <Text style={styles.totalPriceText}>{'$' + totalPrice.toFixed(2)}</Text>
            </View>
        </View>
    )
}

const DeliveryProcessScreen = ({ navigation, route }) => {

    const CANCEL_INDEX = 0
    const showActionSheet = () => actionSheetRef.current?.show()

    //render the action sheet title
    const renderActionSheetTitle = () => (
        <Text style={styles.actionSheetTitleText}>{'Please choose which review you want to add'}</Text>
    )

    //select an items from the action sheet
    function selectedIndex(index) {
        if (index === 1) {
            navigate(Routes.ProductReviewScreen, { headerTitle: 'Store Review' })
        } else if (index === 2) {
            navigate(Routes.ProductReviewScreen, { headerTitle: 'Product Review' })
        } else if (index === 3) {
            navigate(Routes.ProductReviewScreen, { headerTitle: 'Driver Review' })
        }
    }

    const dispatch = useDispatch()
    const deliveryDetails = useSelector(state => state.deliveryItem, [])
    const orderedItems = useSelector(state => state.orderedItems, [])
    const checkoutList = useSelector(state => state.checkoutList, [])
    const storeDeliveryItem = useCallback(() => dispatch(Action.storeDeliveryItem(DeliveryItem)), [dispatch])
    const storeOrderedItem = useCallback(() => dispatch(Action.storeOrderedItem('"Hinkali Factory"', checkoutList)), [dispatch])
    const [totalPrice, setTotalPrice] = useState(0)
    const [headerTitle, setHeaderTitle] = useState('')
    const [showButton, setShowButton] = useState(false)
    const [taxPrice, setTaxPrice] = useState(0)
    const [totalPriceWithTax, setTotalPriceWithTax] = useState(0)

    useEffect(() => {
        storeDeliveryItem()
        storeOrderedItem()
    }, [])

    useEffect(() => {
        updateItemList()
    }, [orderedItems])

    useEffect(()=>{
        updateDeliveryItemStatus();
    }, [deliveryDetails])

    function updateItemList() {
        if (Object.keys(orderedItems).length > 0) {
            if (orderedItems.itemsOrdered.length > 0) {
                let total = 0;
                for (var i = 0; i < orderedItems.itemsOrdered.length; i++) {
                    total += orderedItems.itemsOrdered[i].totalPrice;
                }
                setTotalPrice(total)
            } else {
                setTotalPrice(0)
            }
        }
    }

    function updateDeliveryItemStatus(){
        Object.keys(deliveryDetails).map((key, index)=>{
            if(index>0 && deliveryDetails[key]['isActive'] === false){
                setTimeout(()=>dispatch(Action.updateDeliveryItemStatus(key)), 5000*index+5000);
            }
        })
    }

    useEffect(() => {
        if (deliveryDetails && deliveryDetails.delivered) {
            if (deliveryDetails.delivered.isActive) {
                setHeaderTitle('Accepted')
                setShowButton(false)
            } else {
                setHeaderTitle('Delivering Process')
                setShowButton(true)
            }
        }
    }, [deliveryDetails])

    useEffect(() => {
        setTaxPrice(totalPrice * 0.12)
    }, [totalPrice])

    useEffect(() => {
        setTotalPriceWithTax(totalPrice + taxPrice)
    }, [taxPrice])

    return (
        <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
            {/*------- Header Start -----*/}
            <Header title={headerTitle} onLeftIconPress={() => navigation.goBack()} onRightIconPress={() => navigation.toggleDrawer()} />
            {/*------- Header End -----*/}
            <ScrollView style={globalStyles.flex} showsVerticalScrollIndicator={false} contentContainerStyle={globalStyles.commonScrollViewPadding}>
                <View style={[globalStyles.horizontalGeneralPadding]} >
                    <OrderTimeDetails deliveryDetails={deliveryDetails} />

                    {/*------ Divider Start -----------*/}
                    <BorderDivider containerTopMargin={25} containerBottomMargin={25} activeAreaAlignment={'left'} activeAreaWidth={67} isActiveOnly={false} activeAreaHeight={1} />
                    {/*------ Divider End -----------*/}

                    <ProfileView deliveryDetails={deliveryDetails} />
                    <TimeLineView deliveryDetails={deliveryDetails} />

                    {/*------ Divider Start -----------*/}
                    <BorderDivider containerTopMargin={25} containerBottomMargin={20} activeAreaAlignment={'right'} activeAreaWidth={67} isActiveOnly={false} activeAreaHeight={1} />
                    {/*------ Divider End -----------*/}

                    <OrderedView orderedItems={orderedItems} />
                    <DeliveryDetails />

                    {/*------ Divider Start -----------*/}
                    <BorderDivider containerTopMargin={21} containerBottomMargin={20} activeAreaAlignment={'right'} activeAreaWidth={67} isActiveOnly={false} activeAreaHeight={1} />
                    {/*------ Divider End -----------*/}

                    <TaxView totalPrice={totalPriceWithTax} taxPrice={taxPrice} />
                    {
                        showButton &&
                        <View style={globalStyles.marginTop25}>
                            <LongButton
                                title={'CANCEL ORDER'}
                                titleFontSize={18}
                                titleFontColor={allColors.black}
                                titleFontWeight={'300'}
                                titleFontFamily={FONT_FAMILY.RobotoLight}
                                type={BUTTON_TYPE.LIGHT}
                                onPress={() => navigation.navigate(Routes.RestaurantDescriptionScreen)}
                            />
                        </View>
                    }
                    {
                        !showButton &&
                        <View style={globalStyles.marginTop25}>
                            <LongButton
                                title={'REVIEW'}
                                titleFontSize={18}
                                titleFontColor={allColors.black}
                                titleFontWeight={'300'}
                                titleFontFamily={FONT_FAMILY.RobotoLight}
                                type={BUTTON_TYPE.LIGHT}
                                onPress={() => showActionSheet()}
                            />
                        </View>
                    }

                    {/*---- Action Sheet Start ------*/}
                    <ActionSheet
                        titleHeight={screenHeight * 0.055}
                        ref={actionSheetRef}
                        title={renderActionSheetTitle()}
                        options={options}
                        cancelButtonIndex={CANCEL_INDEX}
                        onPress={(index) => selectedIndex(index)}

                    />
                    {/*---- Action Sheet End ------*/}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DeliveryProcessScreen;
