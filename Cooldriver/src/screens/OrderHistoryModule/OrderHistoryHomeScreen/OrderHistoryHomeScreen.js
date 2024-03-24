/* eslint-disable */
import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView, View, ScrollView, Text, FlatList} from 'react-native';

//Third party
import {useSelector, useDispatch} from 'react-redux';

//Components
import BorderDivider from '../../../components/BorderDivider/BorderDivider';
import EarningItem from '../../../components/EarningItem/EarningItem';
import Header from '../../../components/Header/Header';
import LongButton from '../../../components/LongButton/LongButton';
import NoInformationText from '../../../components/NoInformationText/NoInformationText';
import SearchBoxWithRightIcon from '../../../components/SearchBoxWithRightIcon/SearchBoxWithRightIcon';
import UnderlineTextIcon from '../../../components/UnderlineTextIcon/UnderlineTextIcon';

//Dummy Data
import OrderHistoryDummyData from '../../../DummyData/OrderHistoryDummyData';

//Utils
import Action from '../../../redux/action';
import Routes from '../../../navigation/Routes';
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './styles';
import {BUTTON_TYPE, FONT_FAMILY} from '../../../constants/constants';
import {allColors} from '../../../assets/styles/mainColors';
import {loadPagination} from '../../../utility/Helper';
import {scaleFontSize} from '../../../utility/Scale';

const OrderHistoryHomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  // get the list from redux store
  const orderHistoryList = useSelector(state => state.orderHistoryList);
  // update the share and earn array in redux
  const storeSharedData = useCallback(
    () => dispatch(Action.storeOrderHistoryList(OrderHistoryDummyData.data)),
    [dispatch],
  );
  const [itemList, setItemList] = useState([]);
  const [offset, setOffset] = useState(1);
  const [noDataAvailable, setNoDataAvailable] = useState(false);

  //on redux update update the view
  useEffect(() => {
    storeSharedData();
  }, []);

  //pagination
  useEffect(() => {
    pagination(orderHistoryList, 2, offset);
  }, [orderHistoryList]);

  //pagination
  useEffect(() => {
    if (offset > 1) {
      pagination(orderHistoryList, 2, offset);
    }
  }, [offset]);

  //pagination function
  function pagination(array, page_size, page_number) {
    let temp = loadPagination(array, page_size, page_number);
    if (temp.length > 0) {
      setItemList([...itemList, ...temp]);

      if (orderHistoryList.length <= itemList.length + page_size) {
        setNoDataAvailable(true);
      } else {
        setNoDataAvailable(false);
      }
    } else {
      setNoDataAvailable(true);
    }
  }

  //Render Rows for a history item
  const renderListRows = ({item, index}) => {
    return (
      <EarningItem
        key={'order_history_item_' + index}
        amountPaid={item.amountPaid}
        address2={item.address1}
        address1={item.address2}
        imagePath={item.restaurantIconPath}
        imageComponent={item.restaurantIconComponent}
        date={item.date}
        onPress={() => navigation.navigate(Routes.OrderDetailScreen)}
      />
    );
  };

  //Separator component
  const SeparatorComponent = () => (
    <View>
      <BorderDivider
        containerTopMargin={0}
        containerBottomMargin={0}
        activeAreaAlignment={'left'}
        activeAreaWidth={0}
        isActiveOnly={false}
        activeAreaHeight={1}
      />
    </View>
  );

  //Load more button definition
  const LoadMoreButton = () => (
    <View style={globalStyles.marginTop20}>
      {noDataAvailable ? null : (
        <LongButton
          title={'LOAD MORE'}
          titleFontSize={18}
          titleFontColor={allColors.white}
          titleFontWeight={'400'}
          titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
          type={BUTTON_TYPE.PRIMARY}
          isSquare={true}
          onPress={() => setOffset(offset => offset + 1)}
        />
      )}
    </View>
  );

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
          {/*----- Balance Information Container Start ------*/}
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.marginTop15,
              globalStyles.justifySpaceBetween,
            ]}>
            <View style={globalStyles.marginRight20}>
              <Text style={styles.balanceTitleText}>BALANCE</Text>
              <Text style={styles.balanceText}>$2.50</Text>
            </View>
            <View>
              <Text
                style={[
                  styles.balanceTitleText,
                  globalStyles.flex,
                  globalStyles.flexDirectionRow,
                  globalStyles.alignSelfEnd,
                ]}>
                TOTAL EARNED
              </Text>
              <Text style={styles.totalEarnedText}>32,340.00</Text>
            </View>
          </View>
          {/*----- Balance Information Container End ------*/}

          {/*---- License Number Input Start ------*/}
          <View style={[globalStyles.marginTop10]}>
            <SearchBoxWithRightIcon />
          </View>
          {/*---- License Number Input End ------*/}

          {/*----- List Container Title Start ------*/}
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.justifySpaceBetween,
              globalStyles.marginTop15,
              globalStyles.marginBottom5,
            ]}>
            <View>
              <Text style={styles.withdrawHistoryText}>Delivery History</Text>
            </View>
            <View
              style={[
                globalStyles.flexDirectionRow,
                globalStyles.alignItemsCenter,
              ]}>
              <UnderlineTextIcon
                fontWeight={'300'}
                fontFamily={FONT_FAMILY.RobotoCondensedLight}
                fontSize={scaleFontSize(12)}
                title={'View All'}
              />
            </View>
          </View>
          {/*----- List Container Title End ------*/}

          {/*----- List Container Start ------*/}
          {itemList.length > 0 ? (
            <View style={styles.flatListView}>
              <View style={styles.flatListBorderView}>
                <FlatList
                  //performance settings
                  // removeClippedSubviews={true}
                  //initialNumToRender={1} // Reduce initial render amount
                  //maxToRenderPerBatch={1} // Reduce number in each render batch
                  // windowSize={7} // Reduce the window size
                  showsVerticalScrollIndicator={false}
                  data={itemList}
                  renderItem={renderListRows}
                  ItemSeparatorComponent={SeparatorComponent}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
              <LoadMoreButton />
            </View>
          ) : (
            <View style={globalStyles.marginTop30}>
              <NoInformationText />
            </View>
          )}
          {/*----- List Container End ------*/}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderHistoryHomeScreen;
