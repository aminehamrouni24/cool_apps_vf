import React from 'react';
import {Text, View} from 'react-native';

//Components
import LogoIcon from '../../components/icons/LogoIcon/LogoIcon';
import LongButton from '../../components/LongButton/LongButton';
import TitlePicture from '../../components/TitlePicture/TitlePicture';
import UnderlineTextIcon from '../../components/UnderlineTextIcon/UnderlineTextIcon';

//Utils
import Routes from '../../navigation/Routes';
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import {BUTTON_TYPE, FONT_FAMILY} from '../../constants/constants';
import {allColors} from '../../assets/styles/mainColors';
import {navigate} from '../../utility/NavigationService';

const ChooseRegistrationType = ({route}) => {
  //phone number information passed through navigations params
  const mobileNumber = route.params.mobileNumber;
  const formattedNumber = route.params.formattedNumber;
  const areaCode = route.params.areaCode;

  return (
    <View
      style={[
        globalStyles.bgWhite,
        globalStyles.flex,
        globalStyles.horizontalGeneralPadding,
      ]}>
      {/*-- Choose Type of Account Text & Picture Start -- */}
      <View style={[globalStyles.marginBottom20]}>
        <TitlePicture
          imageComponent={<LogoIcon colored />}
          title="DobuleShip"
          titleFontFamily="Flanella"
          titleFontSize={38}
          titleFontColor={allColors.blue}
          description={
            'Welcome :) You can be one of our “DobuleShipper”, please choose which account you want to create and start business with us.'
          }
          descriptionColor={allColors.black}
          descriptionTopPadding={7}
          componentTopPadding={57}
        />
      </View>
      {/*-- Choose Type of Account Text & Picture End -- */}

      <View style={[globalStyles.flex]}>
        {/*-- Choose Type of Account Buttons Start -- */}
        <View>
          <LongButton
            type={BUTTON_TYPE.PRIMARY}
            title={'REGISTER AS A SHIPPER'}
            titleFontColor={allColors.white}
            titleFontWeight={'400'}
            titleFontSize={17}
            titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
            onPress={() =>
              navigate(Routes.SendOTPVerification, {
                mobileNumber: mobileNumber,
                areaCode: areaCode,
                formattedNumber: formattedNumber,
              })
            }
          />
        </View>
        <View style={[globalStyles.marginTop10]}>
          <LongButton
            type={BUTTON_TYPE.SECONDARY}
            title={'REGISTER AS A PARTNER'}
            titleFontColor={allColors.white}
            titleFontWeight={'400'}
            titleFontSize={17}
            titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
            onPress={() =>
              navigate(Routes.SendOTPVerification, {
                mobileNumber: mobileNumber,
                areaCode: areaCode,
                formattedNumber: formattedNumber,
              })
            }
          />
        </View>
        {/*-- Choose Type of Account Buttons End -- */}

        {/*-- Already have an account Start -- */}
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
              style={styles.alreadyHaveAnAccountButton}
              isUnderlined={true}
              title={'Login'}
            />
          </View>
        </View>
        {/*-- Already have an account End -- */}
      </View>
    </View>
  );
};

export default ChooseRegistrationType;
