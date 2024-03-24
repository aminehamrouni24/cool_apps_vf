import React, {useState} from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';

//Components
import Header from '../../../components/Header/Header';
import LongButton from '../../../components/LongButton/LongButton';
import RadioButton from '../../../components/RadioButton/RadioButton';
import SquareGenericInputField from '../../../components/SquareGenericInputField/SquareGenericInputField';
import TitleText from '../../../components/TitleText/TitleText';

import CreditCard from '../../../assets/images/placeholders/22x14.svg';

//Utils
import Routes from '../../../navigation/Routes';
import globalStyles from '../../../assets/styles/globalStyles';
import {
  BUTTON_TYPE,
  FONT_FAMILY,
  SQUARE_TEXTFIELD_TYPE,
} from '../../../constants/constants';
import {allColors} from '../../../assets/styles/mainColors';
import {horizontalScale, scaleFontSize} from '../../../utility/Scale';

const CreditCardSettings = ({navigation}) => {
  // Registered credit cards
  let [creditCards, modifyCreditCards] = useState([
    {
      id: 0,
      isActive: true,
      component: (
        <SquareGenericInputField
          rightIconComponent={<CreditCard />}
          rightIconPaddingLeft={23}
          rightIconPaddingRight={23}
          placeholder="**** **** **** 5024"
          keyboardType={'number-pad'}
          type={SQUARE_TEXTFIELD_TYPE.TEXT}
          cardValidation={true}
          maxLength={19}
          isDisabled={true}
        />
      ),
      title: 'SET AS PRIMARY',
    },
    {
      id: 1,
      isActive: false,
      component: (
        <SquareGenericInputField
          rightIconComponent={<CreditCard />}
          rightIconPaddingLeft={23}
          rightIconPaddingRight={23}
          placeholder="**** **** **** 5024"
          keyboardType={'number-pad'}
          type={SQUARE_TEXTFIELD_TYPE.TEXT}
          cardValidation={true}
          maxLength={19}
          isDisabled={true}
        />
      ),
      title: 'SET AS PRIMARY',
    },
  ]);

  /* ------ which option is selected from the payment method options that are displayed initially start ------- */
  const selectOption = id => {
    modifyCreditCards(
      creditCards.map(object => {
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
        navigation={navigation}
        title={'Set Card as Primary'}
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        style={globalStyles.flex}
        contentContainerStyle={globalStyles.commonScrollViewPadding}
        showsVerticalScrollIndicator={false}>
        <View style={globalStyles.horizontalGeneralPadding}>
          {/*----- Page Title Start -----*/}
          <TitleText
            title={'Credit Card Settings'}
            description={'Set your credit card settings through this page.'}
            containerBottomPadding={0}
            containerTopPadding={15}
            titleFontWeight={'300'}
          />
          {/*----- Page Title End -----*/}

          <View style={globalStyles.marginTop30}>
            {/*----- Choose the main Credit Card Start -----*/}
            <RadioButton
              onItemSelection={id => selectOption(id)}
              paddingBottom={19}
              alignmentPaddingSize={10}
              optionArr={creditCards}
              align="top"
            />
            {/*----- Choose the main Credit Card End -----*/}
            {/*----- Add a new Card Start -----*/}
            <View style={[globalStyles.marginTop20]}>
              <LongButton
                title={
                  <View
                    style={[
                      globalStyles.flex,
                      globalStyles.justifyCenter,
                      globalStyles.flexDirectionRow,
                      globalStyles.alignItemsCenter,
                    ]}>
                    <Text
                      style={{
                        fontSize: scaleFontSize(23),
                        color: allColors.white,
                        marginRight: horizontalScale(10),
                        fontWeight: '300',
                        fontFamily: FONT_FAMILY.RobotoCondensedLight,
                      }}>
                      +
                    </Text>
                    <Text
                      style={{
                        fontSize: scaleFontSize(18),
                        color: allColors.white,
                        fontWeight: '300',
                        fontFamily: FONT_FAMILY.RobotoCondensedLight,
                      }}>
                      ADD NEW CARD
                    </Text>
                  </View>
                }
                onPress={() => navigation.navigate(Routes.AddCardDetails)}
                type={BUTTON_TYPE.SECONDARY}
                isSquare={true}
              />
            </View>
            {/*----- Add a new Card End -----*/}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreditCardSettings;
