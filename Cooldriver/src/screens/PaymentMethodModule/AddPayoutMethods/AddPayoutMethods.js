/* eslint-disable */
import React, {useState} from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';

//Components
import ArrowRightLongIcon from '../../../components/icons/ArrowRightLongIcon/ArrowRightLongIcon';
import Header from '../../../components/Header/Header';
import RadioButton from '../../../components/RadioButton/RadioButton';
import SquareListIcon from '../../../components/SquareListIcon/SquareListIcon';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';

//Images - @TODO Replace with Placeholders
import CreditCard from '../../../assets/images/placeholders/22x14.svg';
import PayPal from '../../../assets/images/paymentMethods/paypalSVG.svg';
import PaymentMethod from '../../../assets/images/placeholders/104x99.svg';
import WireTransfer from '../../../assets/images/placeholders/22x21.svg';

//Utils
import Routes from '../../../navigation/Routes';
import globalStyles from '../../../assets/styles/globalStyles';
import {navigate} from '../../../utility/NavigationService';
import {screenHeight, screenWidth} from '../../../utility/Scale';
import {PAYMENT_METHODS} from "../../../constants/constants";

const AddPayoutMethods = ({navigation, isNavigationHidden,setSelectedPaymentMethod}) => {

  /*-------------------- Payment Method Options Displayed Data Start --------------------*/
  const paymentOptionsDisplayedArr = [
    {
      id: 0,
      isActive: true,
      title: 'AvatarIcon',
      component: (
          <SquareListIcon
              onPress={() => isNavigationHidden ? setSelectedPaymentMethod(PAYMENT_METHODS.CREDIT_CARD) : navigate(Routes.CreditCardSettings)}
              showBorder={true}
              leftIconRightPadding={20}
              leftIconLeftPadding={20}
              leftIconComponent={<CreditCard />}
              title={'Credit Card'}
              rightIconComponent={<ArrowRightLongIcon />}
          />
      ),
    },
    {
      id: 1,
      isActive: false,
      title: 'SET AS PRIMARY',
      component: (
          <SquareListIcon
              onPress={() => isNavigationHidden ? setSelectedPaymentMethod(PAYMENT_METHODS.PAY_PAL) : navigate(Routes.AddNewPaypal)}
              showBorder={true}
              leftIconRightPadding={20}
              leftIconLeftPadding={20}
              leftIconComponent={<PayPal />}
              title={'PayPal'}
              rightIconComponent={<ArrowRightLongIcon />}
          />
      ),
    },
    {
      id: 2,
      isActive: false,
      title: 'SET AS PRIMARY',
      component: (
          <SquareListIcon
              showBorder={true}
              onPress={() => isNavigationHidden ? setSelectedPaymentMethod(PAYMENT_METHODS.WIRE_TRANSFER) : navigate(Routes.WireTransfer)}
              leftIconComponent={<WireTransfer />}
              title={'Wire Transfer'}
              leftIconRightPadding={20}
              leftIconLeftPadding={20}
              rightIconComponent={<ArrowRightLongIcon />}
          />
      ),
    },
  ];
  /*-------------------- Payment Method Options Displayed Data End --------------------*/

  const [optionArray, setOptionArray] = useState(paymentOptionsDisplayedArr);

  /* ------ which option is selected from the payment method options that are displayed initially start ------- */
  const selectOption = id => {
    setOptionArray(
      optionArray.map(object => {
        if (object.id === id) {
          return {...object, isActive: true};
        } else {
          return {...object, isActive: false};
        }
      }),
    );
  };
  /* ------ which option is selected from the payment method options that are displayed initially end ------- */

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      {!isNavigationHidden && (
        <Header
          title={'Payment Methods'}
          onLeftIconPress={() => navigation.goBack()}
          onRightIconPress={() => navigation.toggleDrawer()}
        />
      )}
      {/*------- Header End -----*/}

      {/*------- Vertical Scroll View Start -----*/}
      <ScrollView
        style={[globalStyles.flex]}
        contentContainerStyle={globalStyles.commonScrollViewPadding}
        showsVerticalScrollIndicator={false}>
        <View style={globalStyles.horizontalGeneralPadding}>
          {/*---- Page Title and Picture Container Start ------*/}
          <View>
            <TitlePicture
              componentTopPadding={isNavigationHidden ? 10 : 35}
              imageComponent={
                <PaymentMethod
                  height={screenHeight * 0.123}
                  width={screenWidth * 0.33}
                />
              }
              titleTopPadding={16}
              title={'Payment Methods'}
              description={
                'Enter your new password and then click on the "Save" button below'
              }
              descriptionTopPadding={7}
              componentBottomPadding={25}
            />
          </View>
          {/*---- Page Title and Picture Container End ------*/}

          {/*---- Page Title and Picture Container End ------*/}
          <View style={isNavigationHidden && globalStyles.marginBottom30}>
            {/*---- Radio Button Component used to display the options presented in the data as a list of radio button options start --- */}
            {!isNavigationHidden && <RadioButton
              onItemSelection={id => selectOption(id)}
              paddingBottom={23}
              alignmentPaddingSize={6}
              align={'top'}
              optionArr={optionArray}
            />}
            {/*---- Radio Button Component used to display the options presented in the data as a list of radio button options end --- */}
            {isNavigationHidden && optionArray.map((value, key) => <View key={'payment_methods_'+key} style={key>0 && globalStyles.marginTop10}>{value.component}</View>)}
          </View>
        </View>
        {/*---- Page Title and Picture Container End ------*/}
      </ScrollView>
      {/*------- Vertical Scroll View End -----*/}
    </SafeAreaView>
  );
};

export default AddPayoutMethods;
