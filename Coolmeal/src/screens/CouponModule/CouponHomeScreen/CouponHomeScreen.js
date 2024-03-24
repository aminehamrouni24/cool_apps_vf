import React, {useEffect, useCallback} from 'react';
import {SafeAreaView, View} from 'react-native';

//Third party
import {useSelector, useDispatch} from 'react-redux';

//Components
import Header from '../../../components/Header/Header';
import TitleText from '../../../components/TitleText/TitleText';
import TableComponent from '../../../components/TableComponent/TableComponent';

//Dummy Data
import CouponData from '../../../DummyData/CouponDummyData';

//Utils
import Action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import {screenWidth} from '../../../utility/Scale';

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

const CouponHomeScreen = ({navigation}) => {
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
      <View style={[globalStyles.horizontalGeneralPadding]}>
        <TitleText
          title={'My Coupons'}
          description={
            'For using active coupon below, please click on it, copy and paste in the coupons’ field on the checkout page.'
          }
          containerBottomPadding={30}
          containerTopPadding={10}
          titleFontWeight={'300'}
        />
      </View>
      {/*------- Page Introductory Title End ------*/}

      {/*------- Coupon Table Start ------*/}
      <View style={globalStyles.flex}>
        <TableComponent columnData={column} rowsData={rows} />
      </View>
      {/*------- Coupon Table End ------*/}
    </SafeAreaView>
  );
};

export default CouponHomeScreen;
