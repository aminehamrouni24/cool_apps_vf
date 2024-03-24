import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Switch,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

//Components
import Header from '../../../components/Header/Header';
import TitleText from '../../../components/TitleText/TitleText';
import TitleWithUnderline from '../../../components/TitleWithUnderline/TitleWithUnderline';

//Utils
import Routes from '../../../navigation/Routes';
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import {allColors} from '../../../assets/styles/mainColors';
import {horizontalScale, verticalScale} from '../../../utility/Scale';
import {navigate} from '../../../utility/NavigationService';

const Settings = ({navigation}) => {
  //toggler state definitions
  const [isNotificationEnabled, setNotificationEnabled] = useState(false);
  const [isDoNotCallEnabled, setDoNotCallEnabled] = useState(false);
  const [isShareLocationEnabled, setShareLocationEnabled] = useState(false);

  //toggle switch function definitions
  const toggleNotificationSwitch = () =>
    setNotificationEnabled(previousState => !previousState);
  const toggleDoNotCallSwitch = () =>
    setDoNotCallEnabled(previousState => !previousState);
  const toggleShareLocationSwitch = () =>
    setShareLocationEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}
      <ScrollView style={globalStyles.flex}>
        <View
          style={[
            globalStyles.horizontalGeneralPadding,
            globalStyles.marginTop20,
          ]}>
          <View>
            {/*------- Page Introductory Title Start ------*/}
            <TitleText
              title={'General Settings'}
              description={
                'Drive license number is needed if driver has registered a car. For bicycle is not necessary.'
              }
              titleFontWeight={'300'}
            />
            {/*------- Page Introductory Title End ------*/}
          </View>

          <View style={[globalStyles.marginTop20]}>
            {/*------- Notifications Start ---------*/}
            <View style={[globalStyles.flexDirectionRow, styles.toggleStyle]}>
              <TitleWithUnderline
                borderBottomColor={allColors.lightGreyText}
                bottomBorderWidth={horizontalScale(44)}
                borderMarginTop={verticalScale(12)}
                titleFontSize={18}
                titleFontWeight={'300'}
                title={'Notifications'}
              />

              <Switch
                thumbColor={allColors.white}
                trackColor={{true: allColors.yellow}}
                onValueChange={toggleNotificationSwitch}
                value={isNotificationEnabled}
              />
            </View>
            {/*------- Notifications End ---------*/}

            {/*------- Change Password Start ---------*/}
            <TouchableOpacity
              onPress={() => navigate(Routes.ChangePassword)}
              style={[
                globalStyles.flexDirectionRow,
                globalStyles.marginTop15,
                styles.toggleStyle,
              ]}>
              <TitleWithUnderline
                borderBottomColor={allColors.lightGreyText}
                bottomBorderWidth={horizontalScale(36)}
                borderMarginTop={horizontalScale(12)}
                titleFontSize={18}
                titleFontWeight={'300'}
                title={'Change Password'}
              />
            </TouchableOpacity>
            {/*------- Change Password End ---------*/}

            {/*------- Do Not Call Start ---------*/}
            <View
              style={[
                globalStyles.flexDirectionRow,
                globalStyles.marginTop15,
                styles.toggleStyle,
              ]}>
              <TitleWithUnderline
                borderBottomColor={allColors.lightGreyText}
                bottomBorderWidth={horizontalScale(34)}
                borderMarginTop={horizontalScale(12)}
                titleFontSize={18}
                titleFontWeight={'300'}
                title={'Do Not Call'}
              />

              <Switch
                thumbColor={allColors.white}
                trackColor={{true: allColors.yellow}}
                onValueChange={toggleDoNotCallSwitch}
                value={isDoNotCallEnabled}
              />
            </View>
            {/*------- Do Not Call End ---------*/}

            {/*------- Share My Location Start ---------*/}
            <View
              style={[
                globalStyles.flexDirectionRow,
                globalStyles.marginTop15,
                styles.toggleStyle,
              ]}>
              <TitleWithUnderline
                borderBottomColor={allColors.lightGreyText}
                bottomBorderWidth={horizontalScale(94)}
                borderMarginTop={horizontalScale(12)}
                titleFontSize={18}
                titleFontWeight={'300'}
                title={'I agree to share my location'}
              />
              <Switch
                thumbColor={allColors.white}
                trackColor={{true: allColors.yellow}}
                onValueChange={toggleShareLocationSwitch}
                value={isShareLocationEnabled}
              />
            </View>
            {/*------- Share My Location End ---------*/}

            {/*------- Terms Of Use Start ---------*/}
            <TouchableOpacity
              onPress={() => navigate(Routes.TermsOfUse)}
              style={[
                globalStyles.flexDirectionRow,
                globalStyles.marginTop15,
                styles.toggleStyle,
              ]}>
              <TitleWithUnderline
                borderBottomColor={allColors.lightGreyText}
                bottomBorderWidth={horizontalScale(46)}
                borderMarginTop={horizontalScale(12)}
                titleFontSize={18}
                titleFontWeight={'300'}
                title={'Terms of Use'}
              />
            </TouchableOpacity>
            {/*------- Terms Of Use End ---------*/}

            {/*------- Privacy Policy Start ---------*/}
            <TouchableOpacity
              onPress={() => navigate(Routes.PrivacyPolicy)}
              style={[
                globalStyles.flexDirectionRow,
                globalStyles.marginTop15,
                styles.toggleStyle,
              ]}>
              <TitleWithUnderline
                borderBottomColor={allColors.lightGreyText}
                bottomBorderWidth={horizontalScale(52)}
                borderMarginTop={horizontalScale(12)}
                titleFontSize={18}
                titleFontWeight={'300'}
                title={'Privacy Policy'}
              />
            </TouchableOpacity>
            {/*------- Privacy Policy End ---------*/}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
