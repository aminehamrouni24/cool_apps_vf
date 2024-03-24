import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//Third Party
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

//Components
import EmailIcon from '../../components/icons/EmailIcon/EmailIcon';
import FooterText from '../../components/FooterText/FooterText';
import GenericInputField from '../../components/GenericInputField/GenericInputField';
import LongButton from '../../components/LongButton/LongButton';
import PasswordIcon from '../../components/icons/PasswordIcon/PasswordIcon';
import PhoneNumber from '../../components/PhoneNumber/PhoneNumber';
import TabBar from '../../components/TabBar/TabBar';
import TitlePicture from '../../components/TitlePicture/TitlePicture';
import UnderlineTextIcon from '../../components/UnderlineTextIcon/UnderlineTextIcon';

//Publicly Available Icons that Can be Used for Commercial Purposes
import LogoIcon from '../../components/icons/LogoIcon/LogoIcon';

//Utils
import action from '../../redux/action';
import globalStyles from '../../assets/styles/globalStyles';
import Routes from '../../navigation/Routes';
import styles from './style';
import {allColors} from '../../assets/styles/mainColors';
import {
  BUTTON_TYPE,
  FONT_FAMILY,
  TEXTFIELD_TYPE,
} from '../../constants/constants';
import {navigate} from '../../utility/NavigationService';

const Tab = createMaterialTopTabNavigator();

/*------------------------------------------ Login Tab Content Start --------------------------------*/
const LoginTab = () => {
  const dispatch = useDispatch();

  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={[globalStyles.flex, globalStyles.bgWhite]}>
      {/*---- Phone Number Input Start ------*/}
      <View style={[globalStyles.marginTop13]}>
        <PhoneNumber
          value={mobileNumber}
          onChangeText={number => setMobileNumber(number)}
          onChangeFormattedText={number => {}}
        />
      </View>
      {/*---- Phone Number Input End ------*/}

      {/*---- Password Input Start ------*/}
      <View style={[globalStyles.marginTop10]}>
        <GenericInputField
          iconComponent={<PasswordIcon height={15} width={11} />}
          imageLeftPadding={20}
          imageRightPadding={12}
          placeholder={'Password'}
          type={TEXTFIELD_TYPE.PASSWORD}
          value={password}
          onChange={text => setPassword(text)}
        />
      </View>
      {/*---- Password Input End ------*/}

      {/*---- Login Button Start ------*/}
      <View style={[globalStyles.marginTop20]}>
        <LongButton
          title={'LOGIN'}
          titleFontSize={18}
          titleFontColor={allColors.white}
          titleFontWeight={'400'}
          titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
          type={BUTTON_TYPE.SECONDARY}
          onPress={() => dispatch(action.isLoggedIn(true))}
          buttonShadow={true}
          buttonShadowOpacity={0.5}
        />
      </View>
      {/*---- Login Button End ------*/}

      {/*---- Forgot Password Start ------*/}
      <View
        style={[
          globalStyles.marginTop10,
          globalStyles.alignItemsCenter,
          globalStyles.flex,
        ]}>
        <TouchableOpacity onPress={() => alert('Forgot Password')}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      {/*---- Forgot Password End ------*/}

      {/*----Footer Start ------*/}
      <FooterText
        title={'Copyright @ Web Technology Ltd'}
        componentBottomPadding={22}
      />
      {/*----Footer End ------*/}
    </View>
  );
};
/*------------------------------------------ Login Tab Content End --------------------------------*/

/*------------------------------------------ Sign Up Tab Content Start --------------------------------*/
const SignUpTab = () => {
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [cnfPassword, setcnfPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [formattedNumber, setFormattedNumber] = useState('');
  const [disable, setDisable] = useState(true);

  //determine if the button should be disabled or enabled according to users input
  useEffect(() => {
    if (password.trim().length > 0 && cnfPassword.trim().length > 0) {
      if (JSON.stringify(password) === JSON.stringify(cnfPassword)) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    } else {
      setDisable(true);
    }
  }, [password, cnfPassword]);

  return (
    <View style={[globalStyles.flex, globalStyles.bgWhite]}>
      <KeyboardAwareScrollView
        enableResetScrollToCoords={false}
        enableOnAndroid={true}
        keyboardDismissMode="interactive"
        style={globalStyles.flex}
        bounces={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled={true}
        enableAutomaticScroll={true}
        extraScrollHeight={20}>
        {/*---- Password Input Start ------*/}
        <View style={[globalStyles.marginTop10]}>
          <GenericInputField
            iconComponent={<EmailIcon height={15} width={11} />}
            imageLeftPadding={20}
            imageRightPadding={12}
            placeholder={'Email'}
            type={TEXTFIELD_TYPE.EMAIL}
            value={email}
            onChange={text => setEmail(text)}
          />
        </View>
        {/*---- Password Input End ------*/}
        {/*---- Phone Number Input Start ------*/}
        <View style={[globalStyles.marginTop13]}>
          <PhoneNumber
            value={mobileNumber}
            onChangeText={number => setMobileNumber(number)}
            onChangeFormattedText={number => setFormattedNumber(number)}
          />
        </View>
        {/*---- Phone Number Input End ------*/}

        {/*---- Password Input Start ------*/}
        <View style={[globalStyles.marginTop10]}>
          <GenericInputField
            iconComponent={<PasswordIcon height={15} width={11} />}
            imageLeftPadding={20}
            imageRightPadding={12}
            placeholder={'Password'}
            type={TEXTFIELD_TYPE.PASSWORD}
            value={password}
            onChange={text => setPassword(text)}
          />
        </View>
        {/*---- Password Input End ------*/}

        {/*---- Confirm Password Input Start ------*/}
        <View style={[globalStyles.marginTop10]}>
          <GenericInputField
            iconComponent={<PasswordIcon height={15} width={11} />}
            imageLeftPadding={20}
            imageRightPadding={12}
            placeholder={'Confirm Password'}
            type={TEXTFIELD_TYPE.PASSWORD}
            value={cnfPassword}
            onChange={text => setcnfPassword(text)}
          />
        </View>
        {/*---- Confirm Password Input End ------*/}

        {/*---- Invitation Code Input Start ------*/}
        <View style={[globalStyles.marginTop10]}>
          <GenericInputField
            placeholder={'Invitation Code'}
            type={TEXTFIELD_TYPE.NORMAL}
            value={inviteCode}
            onChange={text => setInviteCode(text)}
          />
        </View>
        {/*---- Invitation Code Input End ------*/}

        {/*---- Sign Up Button Start ------*/}
        <View style={[globalStyles.marginTop15]}>
          <LongButton
            title={'SIGN UP'}
            titleFontSize={18}
            titleFontColor={disable ? allColors.black : allColors.white}
            titleFontWeight={'400'}
            titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
            type={disable ? BUTTON_TYPE.DISABLED : BUTTON_TYPE.SECONDARY}
            onPress={() =>
              navigate(Routes.OTPVerification, {mobileNumber: formattedNumber})
            }
            buttonShadow={!disable}
            buttonShadowOpacity={0.5}
          />
        </View>
        {/*---- Sign Up Button End ------*/}

        {/*---- Tab View Buttons Start ------*/}
        <View style={[globalStyles.flex, globalStyles.marginBottom15]}>
          <View
            style={[
              globalStyles.marginTop10,
              globalStyles.alignSelf,
              globalStyles.alignItemsCenter,
              globalStyles.flexDirectionRow,
            ]}>
            <Text style={styles.alreadyHaveAccountText}>
              Already have account?
            </Text>
            <UnderlineTextIcon
              fontSize={13}
              onPress={() => navigate('LOGIN')}
              style={{marginTop: -2, marginLeft: 7}}
              isUnderlined={true}
              title={'Login'}
            />
          </View>
        </View>
        {/*---- Tab View Buttons End ------*/}

        {/*----Footer Start ------*/}
        <View style={{backgroundColor: allColors.transparent}}>
          <FooterText
            title={'Copyright @ Web Technology Ltd'}
            componentBottomPadding={22}
          />
        </View>
        {/*----Footer End ------*/}
      </KeyboardAwareScrollView>
    </View>
  );
};
/*------------------------------------------ Sign Up Tab Content End --------------------------------*/

const Registration = () => {
  const [tab, setTab] = useState(0);

  //tab sign in description text
  const tab1 =
    'If you are registered with us, please enter your phone, password and click sign in button below.';
  //tab sign up
  const tab2 =
    'To register correctly, please fill all of the fields below and click the sign up button below.';

  //render tabs
  const renderTabBar = props => {
    setTab(props.state.index);
    return <TabBar {...props} />;
  };

  //get the tabTitleSelection according to the selected tab
  const tabTitleSelection = tab === 0 ? tab1 : tab2;

  return (
    <View style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*---- Page Title and Picture Container Start ------*/}
      <View style={[globalStyles.horizontalGeneralPadding]}>
        <TitlePicture
          imageComponent={<LogoIcon colored />}
          description={tabTitleSelection}
          descriptionTopPadding={11}
          componentBottomPadding={34}
          imageTopPadding={10}
        />
      </View>
      {/*---- Page Title and Picture Container End ------*/}

      <View style={[globalStyles.horizontalGeneralPadding, globalStyles.flex]}>
        {/*---- Tab Bar Start -----*/}

        {/*--You can add an item here to add one more tab --*/}
        <Tab.Navigator tabBar={props => renderTabBar(props)}>
          <Tab.Screen name="LOGIN" component={LoginTab} />
          <Tab.Screen name="SIGN UP" component={SignUpTab} />
        </Tab.Navigator>

        {/*---- Tab Bar End -----*/}
      </View>
    </View>
  );
};

export default Registration;
