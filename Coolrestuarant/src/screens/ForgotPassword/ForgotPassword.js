import React, {useState} from 'react';
import {View} from 'react-native';

//Third Party
import {useDispatch} from 'react-redux';

//Components
import FooterText from '../../components/FooterText/FooterText';
import GenericInputField from '../../components/GenericInputField/GenericInputField';
import LongButton from '../../components/LongButton/LongButton';
import PasswordIcon from '../../components/icons/PasswordIcon/PasswordIcon';
import ProfileWithBorder from '../../components/ProfileWithBorder/ProfileWithBorder';
import TitlePicture from '../../components/TitlePicture/TitlePicture';

//Utils
import action from '../../redux/action';
import globalStyles from '../../assets/styles/globalStyles';
import {
  BUTTON_TYPE,
  FONT_FAMILY,
  TEXTFIELD_TYPE,
} from '../../constants/constants';
import {allColors} from '../../assets/styles/mainColors';
import {screenWidth} from '../../utility/Scale';

const ForgotPassword = props => {
  //password
  const [cnfPassword, setcnfPassword] = useState('');
  const dispatch = useDispatch();

  //save button definition
  const saveButton =
    cnfPassword.length > 0 ? BUTTON_TYPE.PRIMARYLIGHT : BUTTON_TYPE.DISABLED;

  return (
    <View style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*--- Profile Picture Start ---*/}
      <View
        style={[
          globalStyles.horizontalGeneralPadding,
          globalStyles.marginBottom20,
        ]}>
        <TitlePicture
          imageComponent={
            <ProfileWithBorder
              imagePath={
                'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg'
              }
              imageHeight={screenWidth * 0.13}
              imageWidth={screenWidth * 0.13}
              borderColor={allColors.borderBlack}
            />
          }
          imageBottomPadding={8}
          title={'Welcome George'}
          titleFontWeight="400"
          titleFontSize={15}
          titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
          description={
            'Enter your new password and then click on the “Save” button below.'
          }
          descriptionTopPadding={5}
          componentTopPadding={34}
        />
      </View>
      {/*--- Profile Picture End ---*/}

      {/*--- Password Field Start ---*/}
      <View
        style={[
          globalStyles.horizontalGeneralPadding,
          globalStyles.alignItemsCenter,
        ]}>
        <View>
          <GenericInputField
            iconComponent={<PasswordIcon height={15} width={11} />}
            imageLeftPadding={20}
            imageRightPadding={12}
            placeholder={'Reset Password'}
            type={TEXTFIELD_TYPE.PASSWORD}
            value={cnfPassword}
            onChange={text => setcnfPassword(text)}
          />
        </View>
      </View>
      {/*--- Password Field End ---*/}

      {/*--- Save Button Start ---*/}
      <View
        style={[
          globalStyles.horizontalGeneralPadding,
          globalStyles.marginTop15,
          globalStyles.flex,
        ]}>
        <LongButton
          type={saveButton}
          title={'SAVE'}
          titleFontColor={cnfPassword.length > 0 ? allColors.black : allColors.white}
          titleFontWeight={'400'}
          titleFontSize={16}
          titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
          onPress={() => {
            dispatch(action.isLoggedIn(true));
          }}
        />
      </View>
      {/*--- Save Button End ---*/}

      {/*--- Footer Text Start ---*/}
      <FooterText
        title={'Copyright @ Web Technology Ltd'}
        componentBottomPadding={22}
      />
      {/*--- Footer Text End ---*/}
    </View>
  );
};

export default ForgotPassword;
