import React, {useState} from 'react';
import {View} from 'react-native';

//Components
import FooterText from '../../components/FooterText/FooterText';
import LogoIcon from '../../components/icons/LogoIcon/LogoIcon';
import LongButton from '../../components/LongButton/LongButton';
import PhoneNumber from '../../components/PhoneNumber/PhoneNumber';
import TitlePicture from '../../components/TitlePicture/TitlePicture';

//Utils
import Routes from '../../navigation/Routes';
import globalStyles from '../../assets/styles/globalStyles';
import {BUTTON_TYPE, FONT_FAMILY} from '../../constants/constants';
import {allColors} from '../../assets/styles/mainColors';
import {navigate} from '../../utility/NavigationService';

const SendOTPVerification = ({route}) => {
  const [mobileNumber, setMobileNumber] = useState(route.params.mobileNumber);
  const [formattedNumber, setFormattedNumber] = useState(
    route.params.formattedNumber,
  );
  const selectedButtonType = mobileNumber.length
    ? BUTTON_TYPE.PRIMARYLIGHT
    : BUTTON_TYPE.DISABLED;
  const areaCode = route.params.areaCode;
  return (
    <View style={[globalStyles.bgWhite, globalStyles.flex]}>
      <View
        style={[
          globalStyles.horizontalGeneralPadding,
          globalStyles.marginBottom20,
        ]}>
        {/*-----Page Title Start----*/}
        <TitlePicture
          imageComponent={<LogoIcon colored />}
          description={
            'Please confirm the verification phone number. If changed this number will be chosen for registation: ' +
            ' ' +
            formattedNumber
          }
          descriptionTopPadding={15}
          componentTopPadding={100}
        />
        {/*-----Page Title End----*/}
      </View>
      {/*---- Phone Number Start -----*/}
      <View
        style={[
          globalStyles.horizontalGeneralPadding,
          globalStyles.alignItemsCenter,
        ]}>
        <PhoneNumber
          value={mobileNumber}
          defaultCode={areaCode}
          onChangeText={number => setMobileNumber(number)}
          onChangeFormattedText={number => setFormattedNumber(number)}
        />
      </View>
      {/*---- Phone Number End -----*/}

      {/*---- Authorization Code Request Start -----*/}
      <View
        style={[
          globalStyles.horizontalGeneralPadding,
          globalStyles.marginTop15,
          globalStyles.flex,
        ]}>
        <LongButton
          type={selectedButtonType}
          title={'REQUEST CODE'}
          titleFontColor={mobileNumber.length > 0 ? allColors.black : allColors.white}
          titleFontWeight={'300'}
          titleFontSize={18}
          titleFontFamily={FONT_FAMILY.RobotoCondensedLight}
          onPress={() =>
            navigate(Routes.OTPVerification, {
              formattedNumber: mobileNumber,
              forgotPassword: route.params.hasOwnProperty('forgotPassword'),
            })
          }
        />
      </View>
      {/*---- Authorization Code Request End -----*/}

      {/*---- Footer Text Start -----*/}
      <FooterText
        title={'Copyright @ Cool Apps Ltd'}
        componentBottomPadding={22}
      />
      {/*---- Footer Text End -----*/}
    </View>
  );
};

export default SendOTPVerification;
