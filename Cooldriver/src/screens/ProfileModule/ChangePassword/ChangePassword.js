import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View, TouchableOpacity} from 'react-native';

//Components
import EyeIcon from '../../../components/icons/EyeIcon/EyeIcon';
import GenericInputField from '../../../components/GenericInputField/GenericInputField';
import Header from '../../../components/Header/Header';
import LongButton from '../../../components/LongButton/LongButton';
import PasswordIcon from '../../../components/icons/PasswordIcon/PasswordIcon';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';

import ChangePasswordIcon from '../../../assets/images/placeholders/93x95.svg';
import SaveIcon from '../../../assets/images/profile/saveWhiteSVG.svg';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import {
  BUTTON_TYPE,
  FONT_FAMILY,
  TEXTFIELD_TYPE,
} from '../../../constants/constants';
import {allColors} from '../../../assets/styles/mainColors';
import {screenHeight, screenWidth} from '../../../utility/Scale';

const ChangePassword = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [cnfPassword, setcnfPassword] = useState('');
  const [disable, setDisable] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [cnfPasswordVisible, setcnfPasswordVisible] = useState(false);

  //update the password fields as user types and enable/disable the button to save the password accordingly
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
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        navigation={navigation}
        title={'Change Password'}
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}
      <ScrollView
        style={[globalStyles.flex]}
        contentContainerStyle={globalStyles.commonScrollViewPadding}
        showsVerticalScrollIndicator={false}>
        <View style={[globalStyles.horizontalGeneralPadding]}>
          {/*-----Page Title Start----*/}
          <TitlePicture
            imageComponent={
              <ChangePasswordIcon
                width={screenWidth * 0.28}
                height={screenHeight * 0.11}
              />
            }
            title={'Change Password'}
            description={
              'Enter your new password and then click on the "Save" button below.'
            }
            descriptionTopPadding={10}
            titleTopPadding={10}
            componentTopPadding={34}
            componentBottomPadding={10}
          />
          {/*-----Page Title End----*/}
          <View>
            {/*-----Password Start----*/}
            <View style={[globalStyles.marginTop10]}>
              <GenericInputField
                iconComponent={<PasswordIcon height={15} width={11} />}
                imageLeftPadding={20}
                imageRightPadding={12}
                placeholder={'Password'}
                type={
                  passwordVisible
                    ? TEXTFIELD_TYPE.EMAIL
                    : TEXTFIELD_TYPE.PASSWORD
                }
                value={password}
                onChange={text => setPassword(text)}
                hasTailingIcon={true}
                tailingIconPaddingLeft={23}
                tailingIconComponent={
                  <TouchableOpacity
                    onPress={() => setPasswordVisible(!passwordVisible)}>
                    <EyeIcon isClosed={passwordVisible} />
                  </TouchableOpacity>
                }
              />
            </View>
            {/*-----Password End----*/}

            {/*-----Confirm Password Start----*/}
            <View style={[globalStyles.marginTop10]}>
              <GenericInputField
                iconComponent={<PasswordIcon height={15} width={11} />}
                imageLeftPadding={20}
                imageRightPadding={12}
                placeholder={'Confirm Password'}
                type={
                  cnfPasswordVisible
                    ? TEXTFIELD_TYPE.EMAIL
                    : TEXTFIELD_TYPE.PASSWORD
                }
                value={cnfPassword}
                onChange={text => setcnfPassword(text)}
                hasTailingIcon={true}
                tailingIconPaddingLeft={23}
                tailingIconComponent={
                  <TouchableOpacity
                    onPress={() => setcnfPasswordVisible(!cnfPasswordVisible)}>
                    <EyeIcon isClosed={cnfPasswordVisible} />
                  </TouchableOpacity>
                }
              />
            </View>
            {/*-----Confirm Password End----*/}
          </View>

          {/*-----Save Changes Start----*/}
          <View style={[globalStyles.marginTop15]}>
            <LongButton
              title={'SAVE'}
              titleFontSize={16}
              titleFontColor={allColors.white}
              titleFontWeight={'400'}
              titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
              type={disable ? BUTTON_TYPE.DISABLED : BUTTON_TYPE.PRIMARY}
              onPress={() => console.log('Save Pressed')}
              hasTailingIcon={true}
              tailingIconPaddingLeft={0}
              tailingIconComponent={<SaveIcon />}
            />
          </View>
          {/*-----Save Changes End----*/}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePassword;
