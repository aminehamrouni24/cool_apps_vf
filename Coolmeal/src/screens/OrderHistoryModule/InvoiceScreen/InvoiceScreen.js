/* eslint-disable */
import React, { useState, useCallback, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';

//Third Party
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

//Components
import BorderDivider from '../../../components/BorderDivider/BorderDivider';
import ChevronRightIcon from '../../../components/icons/ChevronRightIcon/ChevronRightIcon';
import FoodItem from '../../../components/FoodItem/FoodItem';
import Header from '../../../components/Header/Header';
import LogoIcon from '../../../components/icons/LogoIcon/LogoIcon';
import LookingByMapScreen from '../../DiscoverModule/LookingByMapScreen/LookingByMapScreen';
import ProfileWithBorder from '../../../components/ProfileWithBorder/ProfileWithBorder';

//Publicly Available Icons that Can be Used for Commercial Purposes
import ActiveLocation from '../../../assets/icons/discoverMenuIcons/active_locationSVG.svg';
import Location from '../../../assets/icons/discoverMenuIcons/inactive_locationSVG.svg';

//@TODO - GET Placeholders for these
import DeliveredIcon from '../../../assets/images/deliveredSVG.svg';
import DeclinedIcon from '../../../assets/images/declinedSVG.svg';
import FavoriteInactiveIcon from '../../../assets/icons/discoverMenuIcons/favoriteSVG.svg';
import FavoriteActiveIcon from '../../../assets/icons/discoverMenuIcons/favoriteActiveSVG.svg';

//Publicly Available Icons that Can be Used for Commercial Purposes
import DateIcon from '../../../assets/icons/storeIcons/dateSVG.svg';
import TimeIcon from '../../../assets/icons/storeIcons/inactive/inactive_clockSVG.svg';

//Utils
import Action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import * as images from '../../../assets/images/map';
import styles from './style';
import Routes from '../../../navigation/Routes';
import { allColors } from '../../../assets/styles/mainColors';
import {horizontalScale, screenWidth, verticalScale} from '../../../utility/Scale';
import { navigate } from '../../../utility/NavigationService';
import { returnDeliveryDate, returnDeliveryTime } from '../../../utility/Helper';

//Dummy Data
import InvoiceDummy from '../../../DummyData/InvoiceItemDummyData';
import DeliveryAddressDummy from '../../../DummyData/DeliveryDummyData';

const InvoiceScreen = ({ navigation, route }) => {

    const dispatch = useDispatch();
    //store invoice data in redux store
    const storeInvoiceData = useCallback(() => dispatch(Action.storeInvoiceData(InvoiceDummy.data)), [dispatch])
    //store delivery address data in redux store
    const storeDeliveryAddressData = useCallback(() => dispatch(Action.storeDeliveryAddressData(DeliveryAddressDummy.data)), [dispatch])
    const tempInvoiceData = useSelector(state => state.invoiceData, [])
    const tempDeliveryAddressData = useSelector(state => state.deliveryAddressData, [])
    const favoritedItems = useSelector(state => state.favoritedItems, [])
    const [showMap, setShowMap] = useState(false)
    const [invoiceItemList, setInvoiceList] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [taxPrice, setTaxPrice] = useState(0)
    const [totalPriceWithTax, setTotalPriceWithTax] = useState(0)
    const [deliveryAddressData, setDeliveryAddressData] = useState([])
    let isCompleted = route.params.isCompleted;
    //get the data in redux store and update
    useEffect(() => {
        storeInvoiceData()
        storeDeliveryAddressData()
    }, [])

    //put the data in invoice History
    useEffect(() => {
        setInvoiceList(tempInvoiceData.itemsOrdered)
    }, [tempInvoiceData])

    //set delivery information for map view
    useEffect(() => {
        if (tempDeliveryAddressData) {
            let tempData = []
            tempData.push(tempDeliveryAddressData.pickupInformation)
            tempData.push(tempDeliveryAddressData.restaurantInformation)
            tempData.push(tempDeliveryAddressData.deliveryInformation)

            setDeliveryAddressData(tempData)
        }
    }, [tempDeliveryAddressData])

    //update the item list if any changes occur
    useEffect(() => {
        updateItemList()
    }, [invoiceItemList])

    //update the invoice information if any changes in quantities occur
    function updateItemList() {
        if (invoiceItemList && invoiceItemList.length > 0) {
            let total = 0;
            for (let i = 0; i < invoiceItemList.length; i++) {
                total += invoiceItemList[i].totalPrice;
            }
            setTotalPrice(total)
        } else {
            setTotalPrice(0)
        }
    }

    //set the tax price
    useEffect(() => {
        setTaxPrice(totalPrice * 0.15)
    }, [totalPrice])

    //set total price
    useEffect(() => {
        setTotalPriceWithTax(totalPrice + taxPrice)
    }, [taxPrice])

    /*---------------------------------------- Invoice Title Information Start -----------------------------------------*/
    const TitleView = () => {
        return (
            <View style={[globalStyles.alignSelf, globalStyles.alignItemsCenter]} >
                <View style={styles.titleView} >
                    {isCompleted ? <Image
                        source={require('../../../assets/icons/generalIcons/invoice.png')}
                        style={{
                            width: verticalScale(55),
                            height: horizontalScale(60),
                            borderRadius: 3,
                        }}
                    /> : <LogoIcon />}
                </View>
                <View style={[globalStyles.marginTop15, globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}>
                    <Text style={styles.invoiceTitle} >{'Invoice No. '}</Text>
                    <Text style={styles.invoiceText}>{'30WT43GD54'}</Text>
                </View>
                <View style={[globalStyles.marginTop5]} >
                    <Text style={styles.descriptionText} >{'Drive license number is needed if driver has registered a car. For bicycle it is not necessary. '}
                        <Text style={styles.reviewText} onPress={() => navigate(Routes.ProductReviewScreen, { headerTitle: 'Restaurant Review' })} >{'Add Review'}<ChevronRightIcon /></Text>
                    </Text>
                </View>
                {!isCompleted && <View style={{position:'absolute',top:verticalScale(112)}}>
                    <DeclinedIcon />
                </View>}
            </View>
        )
    }
    /*---------------------------------------- Invoice Title Information End -----------------------------------------*/

    /*---------------------------------------- Map View Title Start -----------------------------------------*/
    const MapViewTitle = () => {
        return (
            <View style={[globalStyles.alignSelf, globalStyles.alignItemsCenter]} >
                {/*-------------Profile Picture Start-----------*/}
                <View style={styles.titleView} >
                    <ProfileWithBorder
                        imagePath={'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
                        imageHeight={screenWidth * 0.14}
                        imageWidth={screenWidth * 0.14}
                        borderColor={allColors.borderBlack}
                    />
                </View>
                {/*-------------Profile Picture End-----------*/}

                {/*-------------Profile Information Start-------*/}
                <View style={styles.shipperView} >
                    <Text style={styles.shipperText} >{'Your Shipper'}</Text>
                    <Text style={styles.deliveryManName} >{tempInvoiceData && tempInvoiceData.driverName}</Text>
                </View>
                <View style={[globalStyles.marginTop5, globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}>
                    <Text style={styles.smallInvoiceTitle} >{'Invoice No. '}</Text>
                    <Text style={styles.smallInvoiceText}>{'30WT43GD54'}</Text>
                    <TouchableOpacity style={globalStyles.marginLeft5} onPress={() => navigate(Routes.SurrenderActScreen, { totalPrice: totalPriceWithTax.toFixed(2) })}>
                        <Image style={styles.pdfImage} source={images.generalIcons.pdfIcon} />
                    </TouchableOpacity>
                </View>
                <View style={[globalStyles.marginTop5, globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}>
                    <Text style={styles.smallInvoiceText} >{'Delivered by: '}</Text>
                    <Text style={styles.smallInvoiceTitle}>{tempInvoiceData && tempInvoiceData.deliveredBy}</Text>
                </View>
                {/*-------------Profile Information End-------*/}
            </View>
        )
    }
    /*---------------------------------------- Map View Title End -----------------------------------------*/

    /*---------------------------------------- Tracking Map Title Start -----------------------------------------*/
    const TrackingMapTitleAndIcon = () => {
        return (
            <View style={[globalStyles.alignItemsFlexEnd, globalStyles.marginTop25]} >
                <TouchableOpacity onPress={() => setShowMap(!showMap)} style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]} >
                    {showMap ? <ActiveLocation /> : <Location />}
                    <Text style={styles.trackingHistoryText} >{'Tracking History'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    /*---------------------------------------- Tracking Map Title End -----------------------------------------*/

    /*---------------------------------------- Map View Screen Definition Start -------------------------------*/
    const ShowMapView = () => {
        return (
            <View style={[globalStyles.flex, globalStyles.marginTop15]} >
                {deliveryAddressData.length > 0 && <LookingByMapScreen
                    googleMarker={deliveryAddressData}
                    showRoute={true}
                    tempMarkers={false}
                />}
            </View>
        )
    }
    /*---------------------------------------- Map View Screen Definition End -------------------------------*/

    //change counter on items
    const changeCounter = (item, counter) => {
        dispatch(Action.updateCounterOfInvoiceList(item.id, counter))
        updateItemList()
    }

    //render list of items that user ordered
    const renderListRows = ({ item,index }) => {
        return (
            <FoodItem
                key={'food_item_'+index}
                title={item.title}
                rating={item.rating}
                description={item.description}
                deliveryFee={'$' + item.itemPrice}
                showImagePopup={false}
                ratingNum={item.ratingNum}
                topRightIconComponent={favoritedItems.indexOf(item.id) >=0 ? <FavoriteActiveIcon /> : <FavoriteInactiveIcon /> }
                onTopRightIconPress={() =>  dispatch(Action.toggleFavoriteItem(item.id))}
                imageIconPath={item.imagePath}
                imageIconComponent={item.imageComponent}
                isActive={item.isActive}
                isCounterVisible={true}
                isAddToCartVisible={false}
                counterStartingValue={item.itemNum}
                isCounterDisabled={item.isCounterDisabled}
                isRateVisible={true}
                onCounterChange={(counter) => changeCounter(item, counter)}
                onPressRate={() => navigate(Routes.ProductReviewScreen, { headerTitle: 'Product Review' })}
                onPressReorder={() => navigate(Routes.AddToCartScreen)}
            />
        )
    }

    /*---------------------------------------- Invoice View Start -----------------------------------------*/
    const InvoiceView = () => {
        return (
            <View style={globalStyles.commonScrollViewPadding}>
                <FlatList
                    //performance settings
                    // removeClippedSubviews={true}
                    //maxToRenderPerBatch={1} // Reduce number in each render batch
                    // windowSize={7} // Reduce the window size
                    showsVerticalScrollIndicator={false}
                    data={invoiceItemList}
                    renderItem={renderListRows}
                    contentContainerStyle={[globalStyles.paddingTop10]}
                    ItemSeparatorComponent={() => <View style={styles.gapView} />}
                    keyExtractor={(_item, index) => 'invoice_item_id_' + _item.id} />

                <View style={globalStyles.marginTop30} >
                    {/*---------------- Delivery Information Start --------------------------*/}
                    <View style={[globalStyles.flexDirectionRow, globalStyles.justifySpaceBetween]} >
                        <Text style={styles.deliverTitle}  >{'Delivered To:'}</Text>
                        <Text style={styles.deliverTitle}>{'$' + (tempInvoiceData && tempInvoiceData.deliveryFee)}</Text>
                    </View>
                    <View>
                        <Text style={styles.deliverAddressText}>{tempInvoiceData && tempInvoiceData.deliveryAddress + ' ' + tempInvoiceData.deliveryCity}</Text>
                        <TouchableOpacity onPress={() => navigate(Routes.SurrenderActScreen, { totalPrice: totalPriceWithTax.toFixed(2) })} style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]} >
                            <Text style={styles.surrenderText} >{'Surrender Act'}</Text>
                            <Image style={styles.pdfImage} source={images.generalIcons.pdfIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={globalStyles.marginTop30} >
                        <Text style={styles.deliverTitle}  >{'Delivery Date & Time:'}</Text>
                        <View style={globalStyles.flexDirectionRow} >
                            <View style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]} >
                                <DateIcon />
                                <Text style={[styles.deliverAddressText, { marginLeft: horizontalScale(5) }]}>{returnDeliveryDate(tempInvoiceData && tempInvoiceData.deliveryDate)}</Text>
                            </View>
                            <View style={[globalStyles.flexDirectionRow, globalStyles.marginLeft9, globalStyles.alignItemsCenter]} >
                                <TimeIcon />
                                <Text style={[styles.deliverAddressText, { marginLeft: horizontalScale(5) }]}> {returnDeliveryTime(tempInvoiceData && tempInvoiceData.deliveryDate)}</Text>
                            </View>
                        </View>
                        <View>

                        </View>
                    </View>
                    {/*---------------- Delivery Information End --------------------------*/}

                    {/*--------------- Subtotal and Tax Information Start ---------------*/}
                    <View style={[globalStyles.marginTop15, globalStyles.alignItemsFlexEnd]} >
                        <View style={globalStyles.flexDirectionRow} >
                            <Text style={styles.taxText} >{'Subtotal: '}</Text>
                            <Text style={styles.priceText}>{'$' + totalPrice.toFixed(2)}</Text>
                        </View>
                        <View style={[globalStyles.flexDirectionRow, globalStyles.marginTop5]} >
                            <Text style={styles.taxText}>{'Tax Vat'} </Text>
                            <Text style={styles.taxText} >{tempInvoiceData && tempInvoiceData.taxValue + '%: '}</Text>
                            <Text style={styles.priceText}>{'$' + taxPrice.toFixed(2)}</Text>
                        </View>
                    </View>
                    {/*--------------- Subtotal and Tax Information End ---------------*/}

                    {/*------ Divider Start -----------*/}
                    <BorderDivider activeAreaAlignment={'right'} containerTopMargin={18} containerBottomMargin={17} activeAreaWidth={150} isActiveOnly={true} activeAreaHeight={1} activeAreaColor={isCompleted ? allColors.yellow : allColors.black}/>
                    {/*------ Divider End -----------*/}

                    {/*------ Grand Total Start -----------*/}
                    <View style={globalStyles.alignItemsFlexEnd} >
                        <View style={globalStyles.flexDirectionRow} >
                            <Text style={styles.grandText} >{'Grand Total: '}</Text>
                            <Text style={styles.grandPriceText}>{'$' + totalPriceWithTax.toFixed(2)}</Text>
                        </View>
                    </View>
                    {/*------ Grand Total End -----------*/}

                    {/*------ Is Confirmed Start -----------*/}
                    {
                        (tempInvoiceData && isCompleted) && <View style={styles.deliveredLogo} >
                            <View style={globalStyles.alignItemsFlexEnd} >
                                <DeliveredIcon />
                            </View>
                        </View>
                    }
                    {/*------ Is Confirmed End -----------*/}
                </View>
            </View>
        )
    }
    /*---------------------------------------- Invoice View End -----------------------------------------*/

    return (
        <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
            {/*------- Header Start -----*/}
            <Header title={'Invoice History'} onLeftIconPress={() => navigation.goBack()} onRightIconPress={() => navigation.toggleDrawer()} />
            {/*------- Header End -----*/}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={globalStyles.flexGrow1}>
                <View style={globalStyles.flexGrow1} >
                    <View style={[globalStyles.horizontalGeneralPadding, globalStyles.flex]}>
                        {showMap ? <MapViewTitle /> : <TitleView />}
                        {/*------- Tracking Map Title To Toggle Map View Start ------*/}
                        <TrackingMapTitleAndIcon />
                        {/*------- Tracking Map Title To Toggle Map View End ------*/}

                        {/*------ Divider Start -----------*/}
                        <BorderDivider activeAreaAlignment={'left'} containerTopMargin={0} containerBottomMargin={15} activeAreaWidth={79} isActiveOnly={true} activeAreaHeight={1}  activeAreaColor={isCompleted ? allColors.yellow : allColors.black} />
                        {/*------ Divider End -----------*/}

                        {/*-------  Map View or Invoice Information View ----*/}
                        {showMap ? <ShowMapView /> : <InvoiceView />}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
/*---- Default Props Start -------*/
InvoiceScreen.defaultProps = {
    isCompleted: true
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
InvoiceScreen.propTypes = {
    isCompleted: PropTypes.bool,
};
/*---- Prop Type Expectations End -------*/
export default InvoiceScreen;
