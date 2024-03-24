import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

//Components
import Header from '../../../components/Header/Header';
import LongButton from '../../../components/LongButton/LongButton';
import SquareGenericInputField from '../../../components/SquareGenericInputField/SquareGenericInputField';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';

import AddBankInfoImage from '../../../assets/images/placeholders/84x80.svg';
import SaveIcon from '../../../assets/images/profile/saveWhiteSVG.svg';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import {
  BUTTON_TYPE,
  FONT_FAMILY,
  SQUARE_TEXTFIELD_TYPE,
} from '../../../constants/constants';
import {allColors} from '../../../assets/styles/mainColors';
import {verticalScale} from '../../../utility/Scale';

const WireTransfer = ({navigation, isNavigationHidden}) => {
  //set beneficiary name
  const [beneficiaryName, setBeneficiaryName] = useState('George Backer');
  //set bank name
  const [bankName, setBankName] = useState('TBC Bank');
  //set account number
  const [accountNumber, setAccountNumber] = useState('6000000001SDFSG45345');
  //set swift code
  const [swift, setSwift] = useState('TBC33GEO');

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      {!isNavigationHidden && (
        <Header
          navigation={navigation}
          onLeftIconPress={() => navigation.goBack()}
          onRightIconPress={() => navigation.toggleDrawer()}
        />
      )}
      {/*------- Header End -----*/}
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        style={globalStyles.flex}
        contentContainerStyle={globalStyles.commonScrollViewPadding}
        showsVerticalScrollIndicator={false}>
        <View
          style={[
            globalStyles.horizontalGeneralPadding,
            isNavigationHidden && {marginBottom: verticalScale(50)},
          ]}>
          {/*-----Page Title Start----*/}
          <View>
            <TitlePicture
              imageComponent={<AddBankInfoImage />}
              titleTopPadding={12}
              title={'Add Your Bank Account Information'}
              titleFontSize={20}
              titleFontFamily={FONT_FAMILY.RobotoCondensedLight}
              componentBottomPadding={30}
              componentTopPadding={20}
            />
          </View>
          {/*-----Page Title End----*/}

          {/*-----Beneficiary Name Start----*/}
          <View>
            <Text style={styles.titleText}>Name of Beneficiary</Text>
            <SquareGenericInputField
              placeholder={'Beneficiary Name'}
              type={SQUARE_TEXTFIELD_TYPE.TEXT}
              value={beneficiaryName}
              onChange={text => setBeneficiaryName(text)}
            />
          </View>
          {/*-----Beneficiary Name End----*/}

          {/*-----Bank Name Start----*/}
          <View style={[globalStyles.marginTop15]}>
            <Text style={styles.titleText}>Bank Name</Text>
            <SquareGenericInputField
              type={SQUARE_TEXTFIELD_TYPE.TEXT}
              value={bankName}
              onChange={text => setBankName(text)}
            />
          </View>
          {/*-----Bank Name End----*/}

          {/*-----Account Number Start----*/}
          <View style={[globalStyles.marginTop15]}>
            <Text style={styles.titleText}>Account Number (IBAN)</Text>
            <SquareGenericInputField
              type={SQUARE_TEXTFIELD_TYPE.TEXT}
              value={accountNumber}
              onChange={text => setAccountNumber(text)}
            />
          </View>
          {/*-----Account Number End----*/}

          {/*-----Swift Code Start----*/}
          <View style={[globalStyles.marginTop15]}>
            <Text style={styles.titleText}>SWIFT</Text>
            <SquareGenericInputField
              type={SQUARE_TEXTFIELD_TYPE.TEXT}
              value={swift}
              onChange={text => setSwift(text)}
            />
          </View>
          {/*-----Swift Code End----*/}

          {/*-----Save Information Start----*/}
          {!isNavigationHidden && (
            <View style={[globalStyles.marginTop20]}>
              <LongButton
                title={'SAVE'}
                titleFontColor={allColors.white}
                titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
                titleFontSize={18}
                titleFontWeight={'400'}
                onPress={() => alert('Done')}
                hasTailingIcon={true}
                tailingIconPaddingLeft={0}
                tailingIconComponent={<SaveIcon />}
                type={BUTTON_TYPE.PRIMARY}
                isSquare={true}
              />
            </View>
          )}
          {/*-----Save Information End----*/}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WireTransfer;
