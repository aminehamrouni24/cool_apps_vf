/* eslint-disable */
import React, {useState} from 'react';
import {SafeAreaView, View, ScrollView, Image} from 'react-native';

//Components
import ArrowRightLongIcon from '../../../components/icons/ArrowRightLongIcon/ArrowRightLongIcon';
import Header from '../../../components/Header/Header';
import RadioButton from '../../../components/RadioButton/RadioButton';
import SquareListIcon from '../../../components/SquareListIcon/SquareListIcon';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';

//Publicly Available Icons that Can be Used for Commercial Purposes
import Apple from '../../../assets/images/appleSVG.svg';
import CreditCard from '../../../assets/images/mastercardSVG.svg';
import PayPal from '../../../assets/images/paypalSVG.svg';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import Routes from '../../../navigation/Routes';
import {horizontalScale, verticalScale} from '../../../utility/Scale';
import {navigate} from '../../../utility/NavigationService';

/*-------------------- Payment Method Options Displayed Data Start --------------------*/
const paymentOptionsDisplayedArr = [
  {
    id: 0,
    isActive: true,
    title: 'SET AS PRIMARY',
    component: (
      <SquareListIcon
        onPress={() => navigate(Routes.AddCardDetails)}
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
        onPress={() => navigate(Routes.AddNewPaypal)}
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
        leftIconComponent={<Apple />}
        title={'Apple Pay'}
        leftIconRightPadding={20}
        leftIconLeftPadding={20}
        rightIconComponent={<ArrowRightLongIcon />}
      />
    ),
  },
];
/*-------------------- Payment Method Options Displayed Data End --------------------*/

const PaymentMethodHomeScreen = ({navigation}) => {
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
      <Header
        title={'Payment Method'}
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />
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
              componentTopPadding={35}
              imageComponent={
                <Image
                    source={require('../../../assets/placeholders/105x100.png')}
                  style={{height: horizontalScale(100), width: verticalScale(105), borderRadius: 3}}
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
          <View>
            {/*---- Radio Button Component used to display the options presented in the data as a list of radio button options start --- */}
            <RadioButton
              onItemSelection={id => selectOption(id)}
              paddingBottom={23}
              alignmentPaddingSize={6}
              align={'top'}
              optionArr={optionArray}
            />
            {/*---- Radio Button Component used to display the options presented in the data as a list of radio button options end --- */}
          </View>
        </View>
        {/*---- Page Title and Picture Container End ------*/}
      </ScrollView>
      {/*------- Vertical Scroll View End -----*/}
    </SafeAreaView>
  );
};

export default PaymentMethodHomeScreen;
