import React from 'react';
import {Platform, SafeAreaView, View} from 'react-native';

//Third Party
import ActionSheet from 'react-native-action-sheet';
import ImagePicker from 'react-native-image-crop-picker';

//Components
import ArrowRightLongIcon from '../../../components/icons/ArrowRightLongIcon/ArrowRightLongIcon';
import Header from '../../../components/Header/Header';
import SquareListIcon from '../../../components/SquareListIcon/SquareListIcon';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';

import ProfileHomeScreenIcon from '../../../assets/images/profile/profileHomeScreenSVG.svg';
import CompanyInformationIcon from '../../../assets/images/profile/addRestaurantSVG.svg';
import PasswordIcon from '../../../assets/images/profile/passwordSVG.svg';
import PersonalInformationIcon from '../../../assets/images/profile/personalInformation2SVG.svg';

//Utils
import Routes from '../../../navigation/Routes';
import globalStyles from '../../../assets/styles/globalStyles';
import {
  ButtonAndroid,
  ButtonIOS,
  FONT_FAMILY,
} from '../../../constants/constants';
import {allColors} from '../../../assets/styles/mainColors';
import {
  checkCameraPermission,
  checkPhotoLibraryPermission,
  showPermissionAlert,
} from '../../../utility/Helper';
import {navigate} from '../../../utility/NavigationService';
import {
  screenHeight,
  screenWidth,
  horizontalScale,
  verticalScale,
} from '../../../utility/Scale';

const ProfileHomeScreen = ({navigation}) => {
  //Profile Picture Placeholder and Camera Icon Definition
  const ProfileIcon = () => {
    return (
      <View style={globalStyles.marginTop10}>
        <ProfileHomeScreenIcon
          width={screenWidth * 0.251}
          height={screenHeight * 0.116}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        navigation={navigation}
        title={'Profile'}
        onRightIconPress={() => navigation.toggleDrawer()}
        onLeftIconPress={() => navigation.goBack()}
      />
      {/*------- Header End -----*/}

      <View style={globalStyles.flex}>
        <View style={globalStyles.horizontalGeneralPadding}>
          {/*-----Page Title Start----*/}
          <View>
            <TitlePicture
              componentTopPadding={23}
              imageComponent={<ProfileIcon />}
              titleTopPadding={10}
              title={'Profile Information'}
              titleFontSize={20}
              titleFontFamily={FONT_FAMILY.RobotoCondensedLight}
              description={
                'Lorem ipsum dolor sit amet, consectetur non adipiscing elit. Eitam ac tempor leo.'
              }
              descriptionTopPadding={10}
              touchAllowed={true}
              componentBottomPadding={22}
            />
          </View>
          {/*-----Page Title End----*/}
          <View>
            {/*------- Company Information Button Start -----*/}
            <SquareListIcon
              showBorder={true}
              onPress={() => navigate(Routes.CompanyInformation)}
              leftIconComponent={<CompanyInformationIcon />}
              title={'Restaurant Information'}
              leftIconRightPadding={13}
              leftIconLeftPadding={21}
              rightIconComponent={<ArrowRightLongIcon />}
            />
            {/*------- Company Information Button End -----*/}

            {/*------- Personal Information Button Start -----*/}
            <SquareListIcon
              containerTopPadding={10}
              showBorder={true}
              onPress={() => navigate(Routes.PersonalInformation)}
              leftIconComponent={
                <PersonalInformationIcon
                  width={horizontalScale(13)}
                  height={verticalScale(13)}
                />
              }
              title={'Personal Information'}
              leftIconRightPadding={16}
              leftIconLeftPadding={23}
              rightIconComponent={<ArrowRightLongIcon />}
            />
            {/*------- Personal Information Button End -----*/}
            {/*------- Change Password Button Start -----*/}
            <SquareListIcon
              showBorder={true}
              containerTopPadding={10}
              onPress={() => navigate(Routes.ChangePassword)}
              leftIconComponent={
                <PasswordIcon
                  width={horizontalScale(13)}
                  height={verticalScale(13)}
                />
              }
              title={'Change Password'}
              leftIconRightPadding={17}
              leftIconLeftPadding={23}
              rightIconComponent={<ArrowRightLongIcon />}
            />
            {/*------- Change Password Button End -----*/}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileHomeScreen;
