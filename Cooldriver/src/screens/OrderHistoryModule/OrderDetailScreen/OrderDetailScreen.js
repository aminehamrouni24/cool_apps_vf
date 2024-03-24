/* eslint-disable */
import React, {useState, useCallback, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';

//Third Party
import {useDispatch, useSelector} from 'react-redux';

//Components
import AddressInformationFields from "../../../components/AddressInformationFields/AddressInformationFields";
import BorderDivider from '../../../components/BorderDivider/BorderDivider';
import Header from '../../../components/Header/Header';
import OrderedItemList from "../../../components/OrderedItemList/OrderedItemList";
import ProfileWithBorder from '../../../components/ProfileWithBorder/ProfileWithBorder';
import ReviewDisplay from '../../../components/ReviewDisplay/ReviewDisplay';

//Utils
import * as images from '../../../assets/images/map';
import Action from '../../../redux/action';
import Routes from '../../../navigation/Routes';
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import {allColors} from '../../../assets/styles/mainColors';
import {navigate} from '../../../utility/NavigationService';
import {screenWidth,} from '../../../utility/Scale';


import DateIcon from '../../../assets/icons/generalIcons/dateIcons/calendarSVG3.svg';
import TimeIcon from '../../../assets/icons/contactIcons/inactive_clockSVG.svg';

//Dummy Data
import SubItemsDummy from "../../../DummyData/SubItemsDummyData";


const TaxView = ({ totalPrice, taxPrice }) => {
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
                <Text  style={[globalStyles.RobotoCondensedFont300, globalStyles.fontSize16]} >{'Merchant Fee '}</Text>
                <Text  style={[globalStyles.RobotoCondensedFont300, globalStyles.fontSize16]}>{'$ ' + ((0.70) * taxPrice).toFixed(2)}</Text>
            </View>
        </View>
    )
}

const OrderDetailScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const orderedItems = useSelector(state => state.orderedItems);
  const checkoutList = useSelector(state => state.checkoutList);
  const storeCheckoutItemList = useCallback(() => dispatch(Action.storeCheckoutList(SubItemsDummy.data)), [dispatch])
  const storeOrderedItem = useCallback(
    () => dispatch(Action.storeOrderedItem('"Hinkali Factory"', checkoutList)),
    [checkoutList, dispatch],
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const [taxPrice, setTaxPrice] = useState(0);
  const [totalPriceWithTax, setTotalPriceWithTax] = useState(0);

  useEffect(() => {
    storeCheckoutItemList();
    storeOrderedItem();
  }, []);

  useEffect(() => {
    updateItemList();
  }, [orderedItems]);


  const updateItemList = () => {
    if (Object.keys(orderedItems).length > 0) {
      if (orderedItems.itemsOrdered.length > 0) {
        let total = 0;
        for (var i = 0; i < orderedItems.itemsOrdered.length; i++) {
          total += orderedItems.itemsOrdered[i].totalPrice;
        }
        setTotalPrice(total);
      } else {
        setTotalPrice(0);
      }
    }
  };

  useEffect(() => {
    setTaxPrice(totalPrice * 0.12);
  }, [totalPrice]);

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
          {/*-------------Profile Picture Start-----------*/}
          <View style={styles.titleView}>
            <ProfileWithBorder
              imagePath={
                'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
              imageHeight={screenWidth * 0.14}
              imageWidth={screenWidth * 0.14}
              borderColor={allColors.borderBlack}
            />
          </View>
          {/*-------------Profile Picture End-----------*/}

          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.alignCenter,
              globalStyles.justifyCenter,
            ]}>
            {/*--- @TODO -- Didad ar momwons es rogorc gamoikureba da mamas vanaxeb mainc tu ramea prosta pirvelive view amoige*/}
            <View>
              <Text
                style={styles.ratedText}>
                RATED:
              </Text>
            </View>
            {/*---- Rating Information Start ------*/}
            <View style={globalStyles.marginTop5}>
              <ReviewDisplay
                marginLeftText={18}
                rating={4}
                ratingNum={4}
                isDescriptionShown={false}
              />
            </View>
            {/*---- Rating Information End ------*/}
          </View>

          {/*-------------Profile Information Start-------*/}
          <View style={styles.shipperView}>
            <Text style={styles.deliveryManName}>{'Leonardo DiCaprio'}</Text>
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
                {'Surrender Act No: GD345'}
              </Text>
              <Image
                style={styles.pdfImage}
                source={images.generalIcons.pdfIcon}
              />
            </TouchableOpacity>
          </View>
          {/*-------------Profile Information End-------*/}

          {/*-------------Route Information Start-------*/}
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.justifySpaceBetween,
              globalStyles.marginTop20,
            ]}>
            <View style={[globalStyles.flexDirectionRow]}>
              <Text style={[globalStyles.RobotoCondensedFont300]}>
                Route ID:{' '}
              </Text>
              <Text style={[globalStyles.RobotoCondensedFont400]}>FD345</Text>
            </View>
            <View style={[globalStyles.flexDirectionRow]}>
              <DateIcon />
              <Text
                style={[
                  globalStyles.RobotoCondensedFont300,
                  globalStyles.marginLeft5,
                ]}>
                29 April/2020
              </Text>
              <View
                style={[globalStyles.justifyCenter, globalStyles.marginLeft5]}>
                <TimeIcon />
              </View>
              <Text
                style={[
                  globalStyles.RobotoCondensedFont300,
                  globalStyles.marginLeft5,
                ]}>
                16:35
              </Text>
            </View>
          </View>
          {/*-------------Route Information End-------*/}

          {/*-------------Address Information Start-------*/}
            <AddressInformationFields toAddress={'81 Charter Street'} fromAddress={'120 Washington Ave.'}/>
          {/*-------------Address Information End-------*/}

            {/*------ Border Divider Start ------------*/}
          <BorderDivider containerBottomMargin={20} containerTopMargin={10} />
            {/*------ Border Divider End ------------*/}

          {/*-------------Delivery Instruction Start-------*/}
          <View>
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

          <View
            style={[
              globalStyles.marginTop5,
              globalStyles.marginBottom15,
              globalStyles.flexDirectionRow,
              globalStyles.justifySpaceBetween,
            ]}>
            <Text
              style={[
                globalStyles.RobotoCondensedFont400,
                globalStyles.fontSize14,
              ]}>
              ITEM DETAILS:
            </Text>
            <View style={[globalStyles.flexDirectionRow]}>
              <Text
                style={[
                  globalStyles.RobotoCondensedFont300,
                  globalStyles.fontSize14,
                ]}>
                Total{' '}
              </Text>
              <Text
                style={[
                  globalStyles.RobotoCondensedFont400,
                  globalStyles.fontSize14,
                ]}>
                7{' '}
              </Text>
              <Text
                style={[
                  globalStyles.RobotoCondensedFont300,
                  globalStyles.fontSize14,
                ]}>
                items
              </Text>
            </View>
          </View>

          <OrderedItemList orderedItems={orderedItems.itemsOrdered}/>

            <Text
                style={[
                    globalStyles.RobotoCondensedFont400,
                    globalStyles.fontSize15,
                    globalStyles.marginTop20
                ]}>
                TRANSPORTATION FARE
            </Text>

            {/*------ Divider Start -----------*/}
            <BorderDivider containerTopMargin={10} containerBottomMargin={15} activeAreaAlignment={'left'} activeAreaWidth={32} isActiveOnly={false} activeAreaHeight={1} activeAreaColor={allColors.blue} />
            {/*------ Divider End -----------*/}

            <TaxView totalPrice={totalPriceWithTax} taxPrice={taxPrice} />

            {/*------ Divider Start -----------*/}
            <BorderDivider containerTopMargin={15} containerBottomMargin={10} activeAreaAlignment={'right'} activeAreaWidth={32} isActiveOnly={false} activeAreaHeight={1} activeAreaColor={allColors.blue} />
            {/*------ Divider End -----------*/}

            <View style={[globalStyles.flexDirectionRow, globalStyles.justifySpaceBetween, globalStyles.marginBottom30]}>
                <Text style={[globalStyles.RobotoCondensedFont400, globalStyles.fontSize16]}>Total Paid Amount</Text>
                <Text style={[globalStyles.RobotoCondensedFont400, globalStyles.fontSize16]}>$ {totalPriceWithTax.toFixed(2)}</Text>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
/*---- Prop Type Expectations End -------*/
export default OrderDetailScreen;
