import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';

//Components
import Header from '../../../components/Header/Header';
import LongButton from '../../../components/LongButton/LongButton';
import SquareGenericInputField from '../../../components/SquareGenericInputField/SquareGenericInputField';
import TitleText from '../../../components/TitleText/TitleText';

//Publicly Available Icons that Can be Used for Commercial Purposes
import CreditCard from '../../../assets/images/mastercardSVG.svg';
import Question from '../../../assets/icons/generalIcons/questionSVG.svg';
import SaveIcon from '../../../assets/images/saveWhiteSVG.svg';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import Routes from '../../../navigation/Routes';
import styles from './style';
import {allColors} from '../../../assets/styles/mainColors';
import {BUTTON_TYPE, FONT_FAMILY} from '../../../constants/constants';
import {cc_format} from '../../../utility/Helper';

const AddCardDetails = ({navigation}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [cvv, setCVV] = useState('');
  const [name, setName] = useState('');

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        title={'Add Card Information'}
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
          {/*------- Page Introductory Title Start ------*/}
          <TitleText
            title={'Add New Card Info'}
            description={
              'Drive license number is needed if driver has registered a car. For bicycle is not necessary.'
            }
            containerBottomPadding={0}
            containerTopPadding={15}
            titleFontWeight={'300'}
          />
          {/*------- Page Introductory Title End ------*/}
          {/*-------- Card Number Input Start --------*/}
          <View style={globalStyles.marginTop30}>
            <View>
              <Text style={styles.titleText}>Card Number</Text>
              <SquareGenericInputField
                rightIconComponent={<CreditCard />}
                rightIconPaddingLeft={10}
                rightIconPaddingRight={15}
                placeholder="**** **** **** 5024"
                value={cardNumber}
                onChange={text => setCardNumber(cc_format(text))}
                keyboardType={'number-pad'}
                cardValidation={true}
                maxLength={19}
                backgroundColor={allColors.lightYellowBg}
              />
            </View>
            {/*-------- Card Number Input End --------*/}
            <View
              style={[
                globalStyles.marginTop15,
                globalStyles.flexDirectionRow,
                globalStyles.justifySpaceBetween,
              ]}>
              {/*-------- Expiration Date Input Start --------*/}
              <View style={globalStyles.flex}>
                <Text style={styles.titleText}>Expiration Date</Text>
                <View style={globalStyles.flexDirectionRow}>
                  <View
                    style={[
                      globalStyles.marginRight10,
                      styles.expirationField,
                    ]}>
                    <SquareGenericInputField
                      placeholder="01"
                      value={expirationMonth}
                      onChange={text => setExpirationMonth(text)}
                      keyboardType={'number-pad'}
                      maxLength={2}
                      backgroundColor={allColors.lightYellowBg}
                    />
                  </View>
                  <View style={styles.expirationField}>
                    <SquareGenericInputField
                      placeholder="21"
                      value={expirationYear}
                      onChange={text => setExpirationYear(text)}
                      keyboardType={'number-pad'}
                      maxLength={2}
                      backgroundColor={allColors.lightYellowBg}
                    />
                  </View>
                </View>
              </View>
              {/*-------- Expiration Date Input End --------*/}

              {/*-------- CVV Start --------*/}
              <View>
                <View style={[globalStyles.flexDirectionRow, styles.cvvView]}>
                  <Text style={styles.cvvText}>CVV/CVC</Text>
                  <TouchableOpacity>
                    <Question />
                  </TouchableOpacity>
                </View>
                <SquareGenericInputField
                  value={cvv}
                  onChange={text => setCVV(text)}
                  largeTextBox={false}
                  backgroundColor={allColors.lightYellowBg}
                  width={70}
                  maxLength={3}
                />
              </View>
            </View>
            {/*-------- CVV End --------*/}

            {/*-------- Card Holder Name Start --------*/}
            <View style={[globalStyles.marginTop15]}>
              <Text style={styles.titleText}>Card Holder Full Name</Text>
              <SquareGenericInputField
                placeholder={'Card Holder Full Name'}
                value={name}
                onChange={text => setName(text)}
                backgroundColor={allColors.lightYellowBg}
              />
            </View>
            {/*-------- Card Holder Name End --------*/}

            {/*-------- Save Button Start --------*/}
            <View style={[globalStyles.marginTop20]}>
              <LongButton
                title={'SAVE'}
                titleFontColor={allColors.white}
                titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
                titleFontSize={18}
                titleFontWeight={'400'}
                hasTailingIcon={true}
                tailingIconPaddingLeft={0}
                tailingIconComponent={<SaveIcon />}
                type={BUTTON_TYPE.SECONDARY}
                onPress={() =>
                  navigation.navigate(Routes.PaymentMethodsHomeScreen)
                }
              />
            </View>
            {/*-------- Save Button End --------*/}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddCardDetails;
