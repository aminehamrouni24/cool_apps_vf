import React, {useEffect, useCallback} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

//Third party
import {useSelector, useDispatch} from 'react-redux';

//Components
import BorderDivider from '../../../components/BorderDivider/BorderDivider';
import Header from '../../../components/Header/Header';
import LongButton from '../../../components/LongButton/LongButton';
import TableComponent from '../../../components/TableComponent/TableComponent';
import TitleText from '../../../components/TitleText/TitleText';

//Dummy Data
import CouponData from '../../../DummyData/CouponDummyData';

//Utils
import Action from '../../../redux/action';
import Routes from '../../../navigation/Routes';
import globalStyles from '../../../assets/styles/globalStyles';
import {BUTTON_TYPE, FONT_FAMILY} from '../../../constants/constants';
import {allColors} from '../../../assets/styles/mainColors';
import {navigate} from '../../../utility/NavigationService';
import {screenWidth} from '../../../utility/Scale';

import PlusIcon from '../../../assets/icons/supportIcons/plusSVG2.svg';

//List of all columns
const column = [
  {
    id: 0,
    title: 'All Coupons',
    alignment: 'flex-start',
    width: screenWidth * 0.35,
  },
  {id: 1, title: 'Disc. %', alignment: 'center', width: screenWidth * 0.15},
  {id: 2, title: 'Exp. Date', alignment: 'flex-end', width: screenWidth * 0.25},
];

const CouponListScreen = ({navigation}) => {
  const dispatch = useDispatch();
  //get the rows from coupon list redux data variable
  const rows = useSelector(state => state.couponList, []);

  //get the store coupon data inside the redux store
  const storeCouponData = useCallback(
    () => dispatch(Action.storeCouponList(CouponData.data)),
    [dispatch],
  );

  //on render get the data inside the redux store
  useEffect(() => {
    storeCouponData();
  }, [storeCouponData]);

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        title={'Coupons'}
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}

      {/*------- Page Introductory Title Start ------*/}
      <ScrollView
        style={[globalStyles.flex]}
        contentContainerStyle={globalStyles.commonScrollViewPadding}
        showsVerticalScrollIndicator={false}>
        <View
          style={[
            globalStyles.horizontalGeneralPadding,
            globalStyles.marginBottom20,
          ]}>
          {/*------- Title Start -----*/}
          <TitleText
            title={'All Coupons'}
            description={
              'Lorem ipsum dolor sit amet concateur non troppo di sarono, la prada neu primo.'
            }
            containerBottomPadding={0}
            containerTopPadding={10}
            titleFontWeight={'300'}
          />
          {/*------- Title End -----*/}

          {/*------ Border Divider Start ------------*/}
          <BorderDivider containerBottomMargin={20} containerTopMargin={20} />
          {/*------ Border Divider End ------------*/}

          {/*------ Add New Coupon Button Start ------------*/}
          <LongButton
            title={'ADD A NEW COUPON'}
            titleFontColor={allColors.black}
            titleFontFamily={FONT_FAMILY.RobotoLight}
            titleFontSize={16}
            titleFontWeight={'300'}
            hasPrecedingIcon={true}
            precedingIconPaddingRight={7}
            precedingIconPaddingTop={-1}
            precedingIconComponent={<PlusIcon />}
            type={BUTTON_TYPE.LIGHT}
            isSquare={true}
            onPress={() => {
              navigate(Routes.CouponConfigScreen);
            }}
          />
          {/*------ Add New Coupon Button End ------------*/}
        </View>
        {/*------- Page Introductory Title End ------*/}

        {/*------- Coupon Table Start ------*/}
        <View style={globalStyles.flex}>
          <TableComponent
            columnData={column}
            rowsData={rows}
            onPressRow={item => {
              navigate(Routes.CouponConfigScreen, {
                item: item,
              });
            }}
          />
        </View>
        {/*------- Coupon Table End ------*/}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CouponListScreen;
