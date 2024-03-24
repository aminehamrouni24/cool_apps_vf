/* eslint-disable */
import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, View, ScrollView, Text, Image} from 'react-native';

//Third party
import moment from 'moment';
import {useSelector, useDispatch} from 'react-redux';

//Components
import Header from '../../../components/Header/Header';
import SquareButton from '../../../components/SquareButton/SquareButton';

//Utils
import Action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './styles';
import {FONT_FAMILY} from '../../../constants/constants';
import {allColors} from '../../../assets/styles/mainColors';

//Dummy Data
import OrderedItemsDummyData from '../../../DummyData/OrderedItemsDummyData';

const SurrenderActScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const orderedItemsData = useSelector(state => state.orderedItemsData);

  useEffect(() => {
    storeOrderedItemsData();
  }, []);

  const storeOrderedItemsData = useCallback(
    () => dispatch(Action.storeOrderedItemsData(OrderedItemsDummyData.data)),
    [],
  );

  const [isConfirmed, setIsConfirmed] = useState(false);

  //set ordered items status
  const changeOrderedItemStatus = useCallback(
    () => {
        setIsConfirmed(!isConfirmed)
        dispatch(Action.updateOrderedItemsStatus(!isConfirmed))
    },
    [dispatch],
  );
  useEffect(() => {

  }, [isConfirmed])

  //format date
  const Year = isConfirmed
    ? moment.unix(orderedItemsData.deliveryDate).format('YYYY')
    : '[year]';
  const Date = isConfirmed
    ? moment.unix(orderedItemsData.deliveryDate).format('MM/DD')
    : '[date]';
  const FullDate = isConfirmed
    ? moment.unix(orderedItemsData.deliveryDate).format('MM/DD/YYYY')
    : '[date]';
  const totalPrice = isConfirmed
    ? route.params.totalPrice
    : '[price of items]';
  const sellerName = isConfirmed
    ? orderedItemsData.sellerName
    : '[name of seller]';
  const shipperName = isConfirmed
    ? orderedItemsData.driverName
    : '[name of driver]';
  const deliveryCity = isConfirmed
    ? orderedItemsData.deliveryCity
    : '[Name of city]';

  //image signatures
  const shipperSign = orderedItemsData.signatureShipperImagePath;
  const sellerSign = orderedItemsData.signatureSellerImagePath;

  /* ---------------------------------------- Information Container Start -----------------------------------------*/
  const FormView = () => {
    return (
      <View>
        <View style={globalStyles.marginTop20}>
          <Text style={styles.commonText}>
            {'Lorem ipsum dolor sit amet concateur '}
            <Text style={styles.boldText}>{sellerName}</Text>
            {' non troppo di sarono, ambocadi la trie '}
            <Text style={styles.boldText}>{shipperName}</Text>
            {' (la due as produtto sellero) imbsaduone.'}
          </Text>
        </View>
        <View style={globalStyles.marginTop15}>
          <Text style={styles.commonText}>
            <Text style={styles.boldText}>{Year}</Text>
            {' Year '}
            <Text style={styles.boldText}>{Date}</Text>
            {
              ' Produtione la prada sesaturo la rico del prazo nue. Ut a lectus ac est aliquam posuere eget nec metus lido pradio selucosa inglucione '
            }
            <Text style={styles.boldText}>{Year}</Text>
            {' rivo dela '}
            <Text style={styles.boldText}>{Date}</Text>
            {' ordinare la produtione dis sel rufo non frigo.'}
          </Text>
        </View>
        <View style={globalStyles.marginTop15}>
          <Text style={styles.commonText}>
            {'Products total price is: '}
            <Text style={styles.boldText}>{totalPrice}</Text>
            {' USD'}
          </Text>
        </View>
        <View style={globalStyles.marginTop15}>
          <Text style={styles.commonText}>
            {
              'Pellentesque rutrum nibh vel neque facilisis, eu posuere sem molestie. Vivamus rutrum at tortor at porttitor. Ut a lectus ac est aliquam posuere eget nec metus.'
            }
          </Text>
        </View>
      </View>
    );
  };
  /* ---------------------------------------- Information Container End -----------------------------------------*/

  /* ---------------------------------------- Signatures Container Start -----------------------------------------*/
  const SignatureView = () => {
    return (
      <View style={styles.descView}>
        <View style={styles.detailView}>
          <View>
            <Text style={styles.deliveryCityText}>{'Buyer'}</Text>
            <Text style={styles.boldText}>{sellerName}</Text>
            {isConfirmed && (
              <View style={globalStyles.marginTop5}>
                <Image
                  style={styles.signatureView}
                  source={{uri: sellerSign}}
                />
              </View>
            )}
          </View>
          <View style={globalStyles.alignItemsFlexEnd}>
            <Text style={styles.deliveryDateText}>{'Shipper'}</Text>
            <Text style={styles.boldText}>{shipperName}</Text>
            {isConfirmed && (
              <View style={globalStyles.marginTop5}>
                <Image
                  style={styles.signatureView}
                  source={{uri: shipperSign}}
                />
              </View>
            )}
          </View>
        </View>
      </View>
    );
  };
  /* ---------------------------------------- Signatures Container End -----------------------------------------*/

  /* ---------------------------------------- Button Container Start -----------------------------------------*/
  const ButtonsView = () => {
    return (
      <View
        style={[
          globalStyles.marginTop35,
          globalStyles.flex,
          globalStyles.justifySpaceBetween,
          globalStyles.flexDirectionRow,
        ]}>
        <View style={[globalStyles.flex, globalStyles.marginRight5]}>
          <SquareButton
            title={'DECLINE'}
            backgroundColor={allColors.red}
            fontFamily={FONT_FAMILY.RobotoMedium}
            fontSize={16}
            fontWeight={'400'}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={[globalStyles.flex, globalStyles.marginLeft5]}>
          <SquareButton
            title={'CONFIRM'}
            fontFamily={FONT_FAMILY.RobotoMedium}
            fontSize={16}
            fontWeight={'400'}
            onPress={() => {
                changeOrderedItemStatus()
                route.params.onPressConfirm && route.params.onPressConfirm()
            }}
          />
        </View>
      </View>
    );
  };
  /* ---------------------------------------- Button Container End -----------------------------------------*/

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        title={'Surrender Act'}
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}

      <ScrollView
        style={globalStyles.flex}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={globalStyles.commonScrollViewPadding}>
        <View style={globalStyles.horizontalGeneralPadding}>
          {/*--------------------- Surrender Act Title Start ------------------------*/}
          <Text style={styles.titleText}>
            {'Receipt / Surrender Act  No DE354'}
          </Text>
          <View style={styles.detailView}>
            <Text style={styles.deliveryCityText}>{deliveryCity}</Text>
            <Text style={styles.deliveryDateText}>{FullDate}</Text>
          </View>
          {/*--------------------- Surrender Act Title End ------------------------*/}

          {/*----- Surrender Act Information Start -----*/}
          <FormView />
          {/*----- Surrender Act Information End -----*/}

          {/*----- Signatures Start -----*/}
          <SignatureView />
          {/*----- Signatures End -----*/}

          {/*-------- Act Confirmation Buttons Start -----*/}
          {!isConfirmed && <ButtonsView />}
          {/*-------- Act Confirmation Buttons End -----*/}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SurrenderActScreen;
