/* eslint-disable */
import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';

//Third party
import {useSelector, useDispatch} from 'react-redux';

//Components
import Header from '../../../components/Header/Header';
import LongButton from '../../../components/LongButton/LongButton';
import NoInformationText from '../../../components/NoInformationText/NoInformationText';
import OrderedItem from '../../../components/OrderedItem/OrderedItem';
import TitleText from '../../../components/TitleText/TitleText';

//Publicly Available Icons that Can be Used for Commercial Purposes
import PriceUp from '../../../assets/icons/discoverMenuIcons/down_arrowSVG.svg';
import PriceDown from '../../../assets/icons/discoverMenuIcons/up_arrowSVG.svg';

//Dummy Data
import OrderHistoryData from '../../../DummyData/OrderHistoryDummyData';

//Utils
import Action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import Routes from '../../../navigation/Routes';
import styles from './styles';
import {allColors} from '../../../assets/styles/mainColors';
import {BUTTON_TYPE, FONT_FAMILY} from '../../../constants/constants';
import {navigate} from '../../../utility/NavigationService';
import {loadPagination} from '../../../utility/Helper';


const OrderHistoryHomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const sharedList = useSelector(state => state.orderHistoryList, []);
  //get order history data in redux store
  const storeSharedData = useCallback(
    () => dispatch(Action.storeOrderHistoryList(OrderHistoryData.data)),
    [dispatch],
  );
  const [itemList, setItemList] = useState([]);
  const [offset, setOffset] = useState(1);
  const [noDataAvailable, setNoDataAvailable] = useState(false);
  const [ascendingOrder, setAscendingOrder] = useState(true);

  //get order history data and update
  useEffect(() => {
    storeSharedData();
  }, []);

  //pagination
  useEffect(() => {
    pagination(sharedList, 2, offset);
  }, [sharedList]);

  //pagination
  useEffect(() => {
    if (offset > 1) {
      pagination(sharedList, 2, offset);
    }
  }, [offset]);

  //sorting
  useEffect(() => {
    if (itemList.length > 0) {
      setItemList(Array.from(itemList).reverse());
    }
  }, [ascendingOrder]);

  //pagination function
  function pagination(array, page_size, page_number) {
    let temp = loadPagination(array, page_size, page_number);
    if (temp.length > 0) {
      if (ascendingOrder) {
        setItemList([...itemList, ...temp]);
      } else {
        setItemList([...temp, ...itemList]);
      }

      if (sharedList.length <= itemList.length + page_size) {
        setNoDataAvailable(true);
      } else {
        setNoDataAvailable(false);
      }
    } else {
      setNoDataAvailable(true);
    }
  }

  //render list items
  const renderListRows = ({item, index}) => {
    return (
      <OrderedItem
        key={'ordered_item' + index}
        name={item.restaurant}
        invoiceNumber={item.invoiceNumber}
        description={item.description}
        amountPaid={item.amountPaid}
        isCompleted={item.isCompleted}
        restaurantIconPath={item.restaurantIconPath}
        restaurantIconComponent={item.restaurantIconComponent}
        date={item.date}
        onPress={() => navigate(Routes.InvoiceScreen,{isCompleted: item.isCompleted})}
      />
    );
  };

  //load more button definition
  const LoadMoreButton = () => (
    <View style={globalStyles.marginTop20}>
      {noDataAvailable ? null : (
        <LongButton
          title={'LOAD MORE'}
          titleFontSize={18}
          titleFontColor={allColors.white}
          titleFontWeight={'400'}
          titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
          type={BUTTON_TYPE.SECONDARY}
          onPress={() => setOffset(offset => offset + 1)}
        />
      )}
    </View>
  );

  //separator
  const SeparatorComponent = () => <View style={{height: 15}} />;

  //for performance reasons of the list
  const getOrderHistoryItemLayout = (data, index) => ({
    length: 300,
    offset: 300 * index,
    index,
  });

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        title={'Order History'}
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}
      <ScrollView
        style={globalStyles.flex}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={globalStyles.commonScrollViewPadding}>
        <View style={globalStyles.horizontalGeneralPadding}>
          {/*------- Page Introductory Title Start ------*/}
          <TitleText
            title={'Order History'}
            description={
              'Drive license number is needed if driver has registered a car. For bicycle is not necessary.'
            }
            containerBottomPadding={13}
            containerTopPadding={10}
            titleFontWeight={'300'}
          />
          {/*------- Page Introductory Title End ------*/}
          {/*------- All Orders List Title Start ------*/}
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.justifySpaceBetween,
            ]}>
            <View>
              <Text style={styles.sectionText}>{'All Orders'}</Text>
            </View>
            <TouchableOpacity
              onPress={() => setAscendingOrder(!ascendingOrder)}
              style={[
                globalStyles.flexDirectionRow,
                globalStyles.alignItemsCenter,
              ]}>
              <Text style={styles.sectionText}>{'Date:'}</Text>
              <View style={globalStyles.marginLeft5}>
                {ascendingOrder ? <PriceDown /> : <PriceUp />}
              </View>
            </TouchableOpacity>
          </View>
          {/*------- All Orders List Title End ------*/}

          {/*------- All Orders List Start ------*/}
          {itemList.length > 0 ? (
            <View style={styles.flatListView}>
              <FlatList
                //performance settings
                //initialNumToRender={1} // Reduce initial render amount
                //maxToRenderPerBatch={1} // Reduce number in each render batch
                // windowSize={7} // Reduce the window size
                showsVerticalScrollIndicator={false}
                data={itemList}
                renderItem={renderListRows}
                // getItemLayout={getOrderHistoryItemLayout}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={() => <LoadMoreButton />}
                ItemSeparatorComponent={() => <SeparatorComponent />}
              />
            </View>
          ) : (
            <View style={globalStyles.marginTop30}>
              <NoInformationText />
            </View>
          )}
          {/*------- All Orders List Title End ------*/}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderHistoryHomeScreen;
