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
import BorderDivider from '../../../components/BorderDivider/BorderDivider';
import Header from '../../../components/Header/Header';
import LongButton from '../../../components/LongButton/LongButton';
import NoInformationText from '../../../components/NoInformationText/NoInformationText';
import SquareGenericInputField from "../../../components/SquareGenericInputField/SquareGenericInputField";
import WithdrawHistoryItem from '../../../components/WithdrawHistoryItem/WithdrawHistoryItem';


import PriceDown from '../../../assets/icons/discoverMenuIcons/arrowIcons/up_arrowSVG.svg';
import PriceUp from '../../../assets/icons/discoverMenuIcons/arrowIcons/down_arrowSVG.svg';

//Utils
import Action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import {BUTTON_TYPE, FONT_FAMILY, TEXTFIELD_TYPE} from '../../../constants/constants';
import {allColors} from '../../../assets/styles/mainColors';
import {loadPagination} from '../../../utility/Helper';

//Dummy Data
import WithdrawHistoryData from "../../../DummyData/WithdrawHistoryDummyData";

const WithdrawHistoryScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const withdrawList = useSelector(state => state.withdrawHistoryList);
  // update the share and earn array in redux
  const storeWithdrawHistoryData = useCallback(
      () => dispatch(Action.storeWithdrawHistoryList(WithdrawHistoryData.data)),
      [dispatch],
  );
  const [itemList, setItemList] = useState([]);
  const [offset, setOffset] = useState(1);
  const [noDataAvailable, setNoDataAvailable] = useState(false);
  const [ascendingOrder, setAscendingOrder] = useState(true);

  //on redux update update the view
  useEffect(() => {
    storeWithdrawHistoryData();
  }, []);

  //pagination
  useEffect(() => {
    pagination(withdrawList, 2, offset);
  }, [withdrawList]);

  //pagination
  useEffect(() => {
    if (offset > 1) {
      pagination(withdrawList, 2, offset);
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

      if (withdrawList.length <= itemList.length + page_size) {
        setNoDataAvailable(true);
      } else {
        setNoDataAvailable(false);
      }
    } else {
      setNoDataAvailable(true);
    }
  }

  //Render Rows for Invited Friends
  const renderListRows = ({item, index}) => {
    return (
      <WithdrawHistoryItem
        key={'withdraw_history_item' + index}
        name={item.name}
        moneyGained={item.moneyGained}
        description={item.description}
        profilePicture={item.profilePicture}
        profilePictureComponent={item.profilePictureComponent}
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

  const [amount, setAmount] = useState('');

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
          title={'Withdraw History'}
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
              <Text style={[styles.balanceTitleText, globalStyles.flex, globalStyles.flexDirectionRow,globalStyles.alignSelfEnd ]}>TOTAL WITHDRAWN</Text>
              <Text style={styles.totalEarnedText}>32,340.00</Text>
            </View>
          </View>
          {/*----- Balance Information Container End ------*/}

          {/*---- License Number Input Start ------*/}
          <View style={[globalStyles.marginTop10]}>
            <Text style={[globalStyles.RobotoFont300, styles.fieldName]}>
              License Number
            </Text>
            <SquareGenericInputField
                type={TEXTFIELD_TYPE.NORMAL}
                value={amount}
                onChange={number => setAmount(number)}
            />
            <View style={globalStyles.marginTop10}>
              <LongButton
                  title={'WITHDRAW'}
                  titleFontSize={18}
                  titleFontColor={allColors.white}
                  titleFontWeight={'300'}
                  titleFontFamily={FONT_FAMILY.RobotoCondensedLight}
                  type={BUTTON_TYPE.SECONDARY}
                  isSquare={true}
                  onPress={() => setAmount('')}
              />
            </View>
          </View>
          {/*---- License Number Input End ------*/}

          {/*----- List Container Title Start ------*/}
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.justifySpaceBetween,
                globalStyles.marginTop15,
                globalStyles.marginBottom5
            ]}>
            <View>
              <Text style={styles.withdrawHistoryText}>Withdraw History</Text>
            </View>
            <TouchableOpacity
              onPress={() => setAscendingOrder(!ascendingOrder)}
              style={[
                globalStyles.flexDirectionRow,
                globalStyles.alignItemsCenter,
              ]}>
              <Text style={styles.withdrawHistoryText}>Date</Text>
              <View style={globalStyles.marginLeft5}>
                {ascendingOrder ? <PriceDown /> : <PriceUp />}
              </View>
            </TouchableOpacity>
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

export default WithdrawHistoryScreen;
