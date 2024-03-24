/* eslint-disable */
import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

//Third party
import {useSelector, useDispatch} from 'react-redux';
import Share from 'react-native-share';

//Components
import Header from '../../../components/Header/Header';
import BorderDivider from '../../../components/BorderDivider/BorderDivider';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';
import LongButton from '../../../components/LongButton/LongButton';
import InviteFriend from '../../../components/InviteFriend/InviteFriend';
import NoInformationText from '../../../components/NoInformationText/NoInformationText';

//Publicly Available Icons that Can be Used for Commercial Purposes
import PriceUp from '../../../assets/icons/discoverMenuIcons/down_arrowSVG.svg';
import PriceDown from '../../../assets/icons/discoverMenuIcons/up_arrowSVG.svg';
import * as images from '../../../assets/images/map';

//Utils
import Action from '../../../redux/action';
import {BUTTON_TYPE, FONT_FAMILY} from '../../../constants/constants';
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import {allColors} from '../../../assets/styles/mainColors';
import {loadPagination} from '../../../utility/Helper';
import {horizontalScale,verticalScale} from '../../../utility/Scale';

//Dummy Data
import SharedData from '../../../DummyData/ShareEarnDummyData';

const shareCode = '4NXPZ56GQ';

const ShareEarnScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const sharedList = useSelector(state => state.shareEarnList);
  // update the share and earn array in redux
  const storeSharedData = useCallback(
    () => dispatch(Action.storeShareEarnList(SharedData.data)),
    [dispatch],
  );
  const [itemList, setItemList] = useState([]);
  const [offset, setOffset] = useState(1);
  const [noDataAvailable, setNoDataAvailable] = useState(false);
  const [ascendingOrder, setAscendingOrder] = useState(true);

  //on redux update update the view
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

  //Share Options
  const openShareOption = shareCode => {
    let shareOptions = {
      message: 'Hey! Download the FoodDoor app' + shareCode,
    };
    Share.open(shareOptions).catch(err => console.log(err));
  };

  //Render Rows for Invited Friends
  const renderListRows = ({item, index}) => {
    return (
      <InviteFriend
        key={'invited_friend' + index}
        name={item.name}
        moneyGained={item.moneyGained}
        code={item.code}
        date={item.date}
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
          type={BUTTON_TYPE.SECONDARY}
          onPress={() => setOffset(offset => offset + 1)}
        />
      )}
    </View>
  );

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}
      <ScrollView
        style={globalStyles.flex}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={globalStyles.commonScrollViewPadding}>
        <View style={globalStyles.horizontalGeneralPadding}>
          {/*---- Page Title and Picture Container Start ------*/}
          <View>
            <TitlePicture
              componentTopPadding={15}
              imageComponent={
                <Image
                source={require('../../../assets/placeholders/80x80.png')}
                style={{width: verticalScale(80), height: horizontalScale(80), borderRadius: 3}}
                />
              }
              titleTopPadding={13}
              title={'Share & Earn $10.00'}
              description={
                'Share your code with friends to give them 2 free deliveries, valid for 60 days on orders above $15.00. When they place their first order, you’ll get $10.00 off products.'
              }
              descriptionTopPadding={10}
              componentBottomPadding={10}
            />
          </View>
          {/*---- Page Title and Picture Container End ------*/}

          {/*----- Share and Earn Button Container Start ------*/}
          <View>
            <Text style={styles.titleText}>{'Share Your Invite Code '}</Text>
            <TouchableOpacity
              onPress={() => openShareOption(shareCode)}
              style={styles.sectionStyle}>
              <Text style={styles.shareCodeText}>{shareCode}</Text>
              <Image
                style={styles.shareCodeIcon}
                source={images.generalIcons.shareCodeIcon}
              />
            </TouchableOpacity>
          </View>
          {/*----- Share and Earn Button Container End ------*/}

          {/*----- Balance Information Container Start ------*/}
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.marginTop25,
              globalStyles.justifySpaceBetween,
            ]}>
            <View style={globalStyles.marginRight20}>
              <Text style={styles.balanceTitleText}>{'BALANCE'}</Text>
              <Text style={styles.balanceText}>{'$2.50'}</Text>
            </View>
            <View>
              <Text style={styles.balanceTitleText}>{'TOTAL EARNED'}</Text>
              <Text style={styles.totalEarnedText}>{'$320.00 '}</Text>
            </View>
          </View>
          {/*----- Balance Information Container End ------*/}

          {/*------ Divider Start -----------*/}
          <BorderDivider
            containerTopMargin={22}
            containerBottomMargin={20}
            activeAreaAlignment={'left'}
            activeAreaWidth={68}
            isActiveOnly={false}
            activeAreaHeight={1}
          />
          {/*------ Divider End -----------*/}

          {/*----- List Container Title Start ------*/}
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.justifySpaceBetween,
            ]}>
            <View>
              <Text style={styles.inviteFriendText}>{'Invited Friends'}</Text>
            </View>
            <TouchableOpacity
              onPress={() => setAscendingOrder(!ascendingOrder)}
              style={[
                globalStyles.flexDirectionRow,
                globalStyles.alignItemsCenter,
              ]}>
              <Text style={styles.inviteFriendText}>{'Date:'}</Text>
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
                  ItemSeparatorComponent={() => <SeparatorComponent />}
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

export default ShareEarnScreen;
