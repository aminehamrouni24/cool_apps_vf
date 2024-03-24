import React, {useState} from 'react';
import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {useDispatch} from 'react-redux';

//Third Party
import OTPInputView from '../../thirdParty/@twotalltotems/react-native-otp-input';

//Publicly Available Icons that Can be Used for Commercial Purposes
import LogoIcon from '../../components/icons/LogoIcon/LogoIcon';

//Components
import LongButton from '../../components/LongButton/LongButton';
import TitlePicture from '../../components/TitlePicture/TitlePicture';
import FooterText from '../../components/FooterText/FooterText';

//Utils
import action from '../../redux/action';
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import {allColors} from '../../assets/styles/mainColors';
import {BUTTON_TYPE, FONT_FAMILY} from '../../constants/constants';

const OTPVerification = ({route}) => {
  const dispatch = useDispatch();

  const [otpCode, setOtpCode] = useState('');
  const number = route.params.mobileNumber;

  const selectButtonType =
    otpCode.length === 6 ? BUTTON_TYPE.SECONDARY : BUTTON_TYPE.DISABLED;
  const selectButtonTextColor =
    otpCode.length === 6 ? allColors.white : allColors.black;

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={[globalStyles.bgWhite, globalStyles.flex]}>
      <View style={[globalStyles.bgWhite, globalStyles.flex]}>
        {/*---- Page Title and Picture Container Start ------*/}
        <View
          style={[
            globalStyles.horizontalGeneralPadding,
            globalStyles.marginBottom20,
          ]}>
          <TitlePicture
            imageComponent={<LogoIcon colored />}
            description={
              'Verification code has been sent on your phone number. Please add the verification code in the field below.' +
              ' ' +
              number
            }
            descriptionTopPadding={7}
            componentTopPadding={32}
          />
        </View>
        {/*---- Page Title and Picture Container End ------*/}

        {/*---- OTP Verification Input Start ------*/}
        <View
          style={[
            globalStyles.horizontalGeneralPadding,
            globalStyles.alignItemsCenter,
          ]}>
          <View style={styles.borderView}>
            <OTPInputView
              style={styles.otpViewStyle}
              pinCount={6}
              code={otpCode}
              onCodeChanged={code => setOtpCode(code)}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={code => {
                console.log(`Code is ${code}, you are good to go!`);
              }}
            />
          </View>
        </View>
        {/*---- OTP Verification Input End ------*/}

        {/*---- Login Button Start ------*/}
        <View
          style={[
            globalStyles.horizontalGeneralPadding,
            globalStyles.marginTop15,
            globalStyles.flex,
          ]}>
          <LongButton
            type={selectButtonType}
            title={'LOG IN'}
            titleFontColor={selectButtonTextColor}
            titleFontWeight={'400'}
            titleFontSize={16}
            titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
            onPress={() => dispatch(action.isLoggedIn(true))}
          />
        </View>
        {/*---- Login Button End ------*/}

        {/*---- Footer Text Start ------*/}
        <FooterText
          title={'Copyright @ Web Technology Ltd'}
          componentBottomPadding={22}
        />
        {/*---- Footer Text End ------*/}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default OTPVerification;
