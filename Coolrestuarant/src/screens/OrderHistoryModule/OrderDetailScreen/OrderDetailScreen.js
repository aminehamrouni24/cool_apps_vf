/* eslint-disable */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

//Third Party
import {useDispatch, useSelector} from 'react-redux';

//Components
import BorderDivider from '../../../components/BorderDivider/BorderDivider';
import Header from '../../../components/Header/Header';
import OrderedItemList from "../../../components/OrderedItemList/OrderedItemList";
import TitleText from "../../../components/TitleText/TitleText";

//Utils
import * as images from '../../../assets/images/map';
import Action from '../../../redux/action';
import Routes from '../../../navigation/Routes';
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import {allColors} from '../../../assets/styles/mainColors';
import {navigate} from '../../../utility/NavigationService';

//Dummy Data
import SubItemsDummy from "../../../DummyData/SubItemsDummyData";

import CalendarIcon from '../../../assets/icons/generalIcons/dateIcons/calendarSVG4.svg';
import ClockIcon from '../../../assets/icons/contactIcons/inactive_clockSVG.svg';

const TaxView = ({ taxPrice }) => {
    return (
        <View >
            <View style={[globalStyles.flexDirectionRow, globalStyles.justifySpaceBetween]} >
                <Text style={[globalStyles.RobotoCondensedFont300, globalStyles.fontSize16]} >Transportation</Text>
                <Text style={[globalStyles.RobotoCondensedFont300, globalStyles.fontSize16]}>{'$ ' + taxPrice.toFixed(2)}</Text>
            </View>
            <View style={[globalStyles.flexDirectionRow, globalStyles.justifySpaceBetween,globalStyles.marginTop5]} >
                <Text  style={[globalStyles.RobotoCondensedFont300, globalStyles.fontSize16]} >Tax</Text>
                <Text  style={[globalStyles.RobotoCondensedFont300, globalStyles.fontSize16]}>{'$ ' + taxPrice.toFixed(2)}</Text>
            </View>
            <View style={[globalStyles.flexDirectionRow, globalStyles.justifySpaceBetween, globalStyles.marginTop5]} >
                <Text  style={[globalStyles.RobotoCondensedFont300, globalStyles.fontSize16]} >{'Service Fee '}</Text>
                <Text  style={[globalStyles.RobotoCondensedFont300, globalStyles.fontSize16]}>{'$ ' + ((0.70) * taxPrice).toFixed(2)}</Text>
            </View>
        </View>
    )
}

const OrderDetailScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const checkoutList = useSelector(state => state.checkoutList);

  //save dummy data in redux store
  const storeCheckoutItemList = () => dispatch(Action.storeCheckoutList(SubItemsDummy.data));

  //data needed for the page
  const [totalPrice, setTotalPrice] = useState(0);
  const [taxPrice, setTaxPrice] = useState(0);
  const [totalPriceWithTax, setTotalPriceWithTax] = useState(0);

  //save checked out item list in the store to update the page on load
  useEffect(() => {
    storeCheckoutItemList();
  }, []);

  //when checked out items change, update the item list
  useEffect(() => {
    updateItemList();
  }, [checkoutList]);


  //update item list according to order items
  const updateItemList = () => {
      if (checkoutList.length > 0) {
        let total = 0;
        for (let i = 0; i < checkoutList.length; i++) {
          total += checkoutList[i].totalPrice;
        }
        setTotalPrice(total);
      } else {
        setTotalPrice(0);
      }
  };

  //reset tax price, when total price changes
  useEffect(() => {
    setTaxPrice(totalPrice * 0.12);
  }, [totalPrice]);

  //reset total price with  tax when tax price or total price changes
  useEffect(() => {
    setTotalPriceWithTax(totalPrice + taxPrice);
  }, [taxPrice, totalPrice]);

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        title={'Order Detail'}
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={globalStyles.flexGrow1}>
        <View
          style={[globalStyles.horizontalGeneralPadding, globalStyles.flex]}>
            {/*------- Title Start -----*/}
            <TitleText
                title={<Text><Text style={{fontWeight:'400'}}>Order </Text>#30WT43GD53</Text>}
                description={
                    'Date: 30/10/2020'
                }
                containerBottomPadding={15}
                containerTopPadding={10}
                titleFontWeight={'300'}
            />
            {/*------- Title End -----*/}
          <OrderedItemList orderedItems={checkoutList}/>

            {/*------ Divider Start -----------*/}
            <BorderDivider containerTopMargin={20} containerBottomMargin={15} activeAreaAlignment={'right'} activeAreaWidth={68} isActiveOnly={false} activeAreaHeight={1} activeAreaColor={allColors.yellow} />
            {/*------ Divider End -----------*/}

            {/*-------- Delivery Information Start ---------*/}
            <View>
                <Text style={globalStyles.RobotoCondensedFont400}>Delivering to</Text>
                <Text style={globalStyles.RobotoCondensedFont300}>Nata V</Text>
                <Text style={globalStyles.RobotoCondensedFont300}>80 Charter Street, Boston, MA</Text>
                <Text style={[globalStyles.RobotoCondensedFont400, globalStyles.marginTop10]}>Promised Time</Text>
                <View>
                    <View style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}>
                        <CalendarIcon height={15} width={15}/>
                        <Text style={[globalStyles.RobotoCondensedFont300, globalStyles.marginLeft2, {marginTop:1}]}>22 September, 2020</Text>
                    </View>
                    <View style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}>
                        <ClockIcon height={13} width={15} style={{opacity:0.8}}/>
                        <Text style={[globalStyles.RobotoCondensedFont300, globalStyles.marginLeft2]}>10:00 P.M.</Text>
                    </View>
                </View>
            </View>
            {/*-------- Delivery Information End ---------*/}

            {/*-------------Surrender Act Start-------*/}
            <TouchableOpacity
                onPress={() =>
                    navigate(Routes.SurrenderActScreen, {
                        totalPrice: totalPriceWithTax.toFixed(2),
                    })
                }
                style={[
                    globalStyles.flexDirectionRow,
                    globalStyles.alignItemsCenter,
                ]}>
                <Text
                    style={styles.surrenderText}>
                    <Text style={[globalStyles.fontWeight400]}>Surrender Act No: </Text>
                    {'GD345'}
                </Text>
                <Image
                    style={styles.pdfImage}
                    source={images.generalIcons.pdfIcon}
                />
            </TouchableOpacity>
            {/*-------------Surrender Act End-------*/}

            {/*------ Divider Start -----------*/}
            <BorderDivider containerTopMargin={15} containerBottomMargin={15} activeAreaAlignment={'left'} activeAreaWidth={50} isActiveOnly={false} activeAreaHeight={1} activeAreaColor={allColors.yellow} />
            {/*------ Divider End -----------*/}

            <TaxView totalPrice={totalPriceWithTax} taxPrice={taxPrice} />

            {/*------ Divider Start -----------*/}
            <BorderDivider containerTopMargin={15} containerBottomMargin={10} activeAreaAlignment={'right'} activeAreaWidth={68} isActiveOnly={false} activeAreaHeight={1} activeAreaColor={allColors.yellow} />
            {/*------ Divider End -----------*/}

            {/*-------- Total Amount Start ---------*/}
            <View style={[globalStyles.flexDirectionRow, globalStyles.justifySpaceBetween, globalStyles.marginBottom30]}>
                <Text style={[globalStyles.RobotoCondensedFont400, globalStyles.fontSize16]}>TOTAL AMOUNT</Text>
                <Text style={[globalStyles.RobotoCondensedFont400, globalStyles.fontSize16]}>$ {totalPriceWithTax.toFixed(2)}</Text>
            </View>
            {/*-------- Total Amount End ---------*/}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
/*---- Prop Type Expectations End -------*/
export default OrderDetailScreen;
