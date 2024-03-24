import React, {useState} from 'react';
import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {useDispatch} from 'react-redux';

//Third Party
import OTPInputView from '../../thirdParty/@twotalltotems/react-native-otp-input';

//Components
import FooterText from '../../components/FooterText/FooterText';
import LogoIcon from '../../components/icons/LogoIcon/LogoIcon';
import LongButton from '../../components/LongButton/LongButton';
import TitlePicture from '../../components/TitlePicture/TitlePicture';

//Utils
import Routes from '../../navigation/Routes';
import action from '../../redux/action';
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import {BUTTON_TYPE, FONT_FAMILY} from '../../constants/constants';
import {allColors} from '../../assets/styles/mainColors';
import {navigate} from '../../utility/NavigationService';

const OTPVerification = ({route}) => {
  const dispatch = useDispatch();

  const [otpCode, setOtpCode] = useState('');
  const formattedNumber = route.params.formattedNumber;

  const selectedButtonType =
    otpCode.length === 6 ? BUTTON_TYPE.PRIMARY : BUTTON_TYPE.DISABLED;
  const forgotPassword = route.params.hasOwnProperty('forgotPassword')
    ? route.params.forgotPassword
    : false;
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
              formattedNumber
            }
            descriptionTopPadding={7}
            componentTopPadding={100}
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
              codeInputFieldStyle={styles.underlineBase}
              codeInputHighlightStyle={styles.underlineHighlighted}
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
            type={selectedButtonType}
            title={'LOG IN'}
            titleFontColor={allColors.white}
            titleFontWeight={'400'}
            titleFontSize={16}
            titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
            onPress={() => {
              if (forgotPassword) {
                navigate(Routes.ForgotPassword, {
                  formattedNumber: formattedNumber,
                });
              } else {
                dispatch(action.isLoggedIn(true));
              }
            }}
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
