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

import AvatarIcon from '../../../assets/images/profile/profileImageSVG.svg';
import CameraIcon from '../../../assets/images/placeholders/32x32.svg';
import CompanyInformationIcon from '../../../assets/images/placeholders/21x19.svg';
import DriversLicenseIcon from '../../../assets/images/profile/driverLicenseSVG.svg';
import PasswordIcon from '../../../assets/images/profile/password2SVG.svg';
import PersonalInformationIcon from '../../../assets/images/profile/personalInformationSVG.svg';

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
  const ReturnCameraIcon = () => {
    return (
      <View>
        <AvatarIcon width={screenWidth * 0.251} height={screenHeight * 0.116} />
        <View style={globalStyles.profileIconAbsolute}>
          <CameraIcon />
        </View>
      </View>
    );
  };

  //Image Uploader Action Sheet Definition
  const btnPickImageClick = () => {
    ActionSheet.showActionSheetWithOptions(
      {
        options: Platform.OS == 'ios' ? ButtonIOS : ButtonAndroid,
        cancelButtonIndex: 2,
        tintColor: allColors.grey,
      },
      openPickerForProfileImage,
    );
  };

  //handle image picker on press
  const openPickerForProfileImage = pickerType => {
    switch (pickerType) {
      case 0:
        checkCameraPermission(granted => {
          if (granted) {
            ImagePicker.openCamera({
              mediaType: 'photo',
              multiple: false,
              compressImageQuality: 0.8,
              compressImageMaxHeight: 720,
              compressImageMaxWidth: 1080,
            })
              .then(images => {})
              .catch(err => {
                console.log('Error :' + err.toString());
              });
          } else {
            showPermissionAlert('Permission', 'Camera Permission Required');
          }
        });
        break;
      case 1:
        checkPhotoLibraryPermission(granted => {
          if (granted) {
            ImagePicker.openPicker({
              mediaType: 'photo',
              multiple: false,
              compressImageQuality: 0.8,
              compressImageMaxHeight: 720,
              compressImageMaxWidth: 1080,
            })
              .then(images => {})
              .catch(err => {
                console.log('Error :' + err.toString());
              });
          } else {
            showPermissionAlert(
              'Permission',
              'Photo Galley Permission Required',
            );
          }
        });
        break;
    }
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
              imageComponent={<ReturnCameraIcon />}
              onTouch={() => btnPickImageClick()}
              titleTopPadding={19}
              title={'Name, Last name'}
              titleFontSize={20}
              titleFontFamily={FONT_FAMILY.RobotoCondensedLight}
              description={
                'Lorem ipsum dolor sit amet, consectetur non adipiscing elit. Eitam ac tempor leo.'
              }
              descriptionTopPadding={19}
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
              title={'Company Information'}
              leftIconRightPadding={19}
              leftIconLeftPadding={21}
              rightIconComponent={<ArrowRightLongIcon />}
            />
            {/*------- Company Information Button End -----*/}

            {/*------- Personal Information Button Start -----*/}
            <SquareListIcon
              containerTopPadding={10}
              showBorder={true}
              onPress={() => navigate(Routes.PersonalInformation)}
              leftIconComponent={<PersonalInformationIcon />}
              title={'Personal Information'}
              leftIconRightPadding={19}
              leftIconLeftPadding={21}
              rightIconComponent={<ArrowRightLongIcon />}
            />
            {/*------- Personal Information Button End -----*/}

            {/*------- Drivers License Button Start -----*/}
            <SquareListIcon
              containerTopPadding={10}
              showBorder={true}
              onPress={() => navigate(Routes.DriversLicense)}
              leftIconComponent={<DriversLicenseIcon />}
              title={'Drivers License'}
              leftIconRightPadding={23}
              leftIconLeftPadding={23}
              rightIconComponent={<ArrowRightLongIcon />}
            />
            {/*------- Drivers License Button End -----*/}

            {/*------- Change Password Button Start -----*/}
            <SquareListIcon
              showBorder={true}
              containerTopPadding={10}
              onPress={() => navigate(Routes.ChangePassword)}
              leftIconComponent={
                <PasswordIcon
                  width={horizontalScale(18)}
                  height={verticalScale(25)}
                />
              }
              title={'Change Password'}
              leftIconRightPadding={22}
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
