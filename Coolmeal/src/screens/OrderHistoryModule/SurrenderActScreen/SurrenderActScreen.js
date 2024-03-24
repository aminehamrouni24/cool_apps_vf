import React, {useCallback} from 'react';
import {SafeAreaView, View, ScrollView, Text, Image} from 'react-native';

//Third party
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';

//Components
import Header from '../../../components/Header/Header';
import SquareButton from '../../../components/SquareButton/SquareButton';
import UnderlineTextIcon from '../../../components/UnderlineTextIcon/UnderlineTextIcon';

//Utils
import Action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import Routes from '../../../navigation/Routes';
import styles from './styles';
import {allColors} from '../../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../../constants/constants';

const SurrenderActScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  //set invoice status to true
  const changeInvoiceStatus = useCallback(
    () => dispatch(Action.updateInvoiceStatus(true)),
    [dispatch],
  );
  const invoiceData = useSelector(state => state.invoiceData, []);
  //format date
  const Year = invoiceData.isConfirmed
    ? moment.unix(invoiceData.deliveryDate).format('YYYY')
    : '[year]';
  const Date = invoiceData.isConfirmed
    ? moment.unix(invoiceData.deliveryDate).format('MM/DD')
    : '[date]';
  const FullDate = invoiceData.isConfirmed
    ? moment.unix(invoiceData.deliveryDate).format('MM/DD/YYYY')
    : '[date]';
  const totalPrice = invoiceData.isConfirmed
    ? route.params.totalPrice
    : '[price of items]';
  const sellerName = invoiceData.isConfirmed
    ? invoiceData.sellerName
    : '[name of seller]';
  const shipperName = invoiceData.isConfirmed
    ? invoiceData.driverName
    : '[name of driver]';
  const deliveryCity = invoiceData.isConfirmed
    ? invoiceData.deliveryCity
    : '[Name of city]';
  //image signatures
  const shipperSign = invoiceData.signatureShipperImagePath;
  const sellerSign = invoiceData.signatureSellerImagePath;
  const showButtons = !invoiceData.isConfirmed;

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
            <Text style={styles.deliveryCityText}>{'Seller'}</Text>
            <Text style={styles.boldText}>{sellerName}</Text>
            {!showButtons && (
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
            <UnderlineTextIcon
              fontFamily={FONT_FAMILY.RobotoCondensedLight}
              fontWeight={'300'}
              fontSize={13}
              onPress={() =>
                navigation.navigate(Routes.ProductReviewScreen, {
                  headerTitle: 'Delivery Review',
                })
              }
              isUnderlined={true}
              title={'Shippers’ Review'}
              color={allColors.red}
            />
            {!showButtons && (
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
            onPress={() => changeInvoiceStatus()}
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
          {showButtons && <ButtonsView />}
          {/*-------- Act Confirmation Buttons End -----*/}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SurrenderActScreen;
