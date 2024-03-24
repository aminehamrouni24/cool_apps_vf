import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Platform,
  TouchableOpacity,
  Text,
} from 'react-native';

//Third Party
import ActionSheet from 'react-native-action-sheet';
import ImagePicker from 'react-native-image-crop-picker';

//Components
import Header from '../../../components/Header/Header';
import LongButton from '../../../components/LongButton/LongButton';
import SideIconsWithTitle from '../../../components/SideIconsWithTitle/SideIconsWithTitle';
import SquareGenericInputField from '../../../components/SquareGenericInputField/SquareGenericInputField';
import TitleText from '../../../components/TitleText/TitleText';

import CameraIcon from '../../../assets/icons/chatIcons/cameraSVG.svg';
import DeleteIcon from '../../../assets/icons/generalIcons/deleteIconSVG.svg';
import DownloadIcon from '../../../assets/icons/generalIcons/downloadSVG.svg';
import SaveIcon from '../../../assets/images/profile/saveWhiteSVG.svg';

//Utils
import Routes from '../../../navigation/Routes';
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import {
  BUTTON_TYPE,
  FONT_FAMILY,
  TEXTFIELD_TYPE,
} from '../../../constants/constants';
import {ButtonIOS, ButtonAndroid} from '../../../constants/constants';
import {allColors} from '../../../assets/styles/mainColors';
import {
  checkCameraPermission,
  checkPhotoLibraryPermission,
  showPermissionAlert,
} from '../../../utility/Helper';

const DriversLicense = ({navigation, isNavigationHidden}) => {
  const [licenseNumber, setLicenseNumber] = useState('');

  //Image Uploader Action Sheet Definition
  const btnPickImageClick = () => {
    ActionSheet.showActionSheetWithOptions(
      {
        options: Platform.OS === 'ios' ? ButtonIOS : ButtonAndroid,
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
        //take a picture now
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
        //choose from the library
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
      {!isNavigationHidden && (
        <Header
          title={'License Information'}
          onLeftIconPress={() => navigation.goBack()}
          onRightIconPress={() => navigation.toggleDrawer()}
        />
      )}
      {/*------- Header End -----*/}
      <ScrollView
        style={[globalStyles.flex]}
        contentContainerStyle={globalStyles.commonScrollViewPadding}
        showsVerticalScrollIndicator={false}>
        <View style={globalStyles.flex}>
          <View style={globalStyles.horizontalGeneralPadding}>
            {/*---- Page Title and Picture Container Start ------*/}
            <View>
              <TitleText
                containerTopPadding={15}
                title={"Driver's License"}
                description={
                  "Driver's License number is required if driver has a car. If you are delivering a bicycle these fields can be  left blank."
                }
                descriptionTopPadding={7}
                componentBottomPadding={15}
                touchAllowed={true}
                onTouch={() => btnPickImageClick()}
              />
            </View>
            {/*---- Page Title and Picture Container End ------*/}

            {/*---- License Number Input Start ------*/}
            <View style={[globalStyles.marginTop20]}>
              <Text style={[globalStyles.RobotoFont300, styles.fieldName]}>
                License Number
              </Text>
              <SquareGenericInputField
                type={TEXTFIELD_TYPE.NORMAL}
                value={licenseNumber}
                onChange={number => setLicenseNumber(number)}
              />
            </View>
            {/*---- License Number Input End ------*/}

            {/*---- Front Picture Upload Start ------*/}
            <View style={[globalStyles.marginTop20, globalStyles.width100]}>
              <SideIconsWithTitle
                rightIconComponent={<DeleteIcon />}
                leftIconComponent={<DownloadIcon />}
                title="Front"
              />
              <TouchableOpacity
                style={styles.uploadContainer}
                onPress={() => btnPickImageClick()}>
                <View style={styles.cameraContainer}>
                  <CameraIcon width={26} height={30} />
                </View>
              </TouchableOpacity>
            </View>
            {/*---- Front Picture Upload End ------*/}

            {/*---- Back Picture Upload Start ------*/}
            <View style={globalStyles.marginTop20}>
              <SideIconsWithTitle
                rightIconComponent={<DeleteIcon />}
                leftIconComponent={<DownloadIcon />}
                title="BACK"
              />
              <TouchableOpacity
                style={styles.uploadContainer}
                onPress={() => btnPickImageClick()}>
                <View style={styles.cameraContainer}>
                  <CameraIcon width={26} height={30} />
                </View>
              </TouchableOpacity>
            </View>
            {/*---- Back Picture Upload End ------*/}

            {/*---- Save Information Start ------*/}
            {!isNavigationHidden && (
              <View style={[globalStyles.marginTop20]}>
                <LongButton
                  title={'SAVE'}
                  titleFontColor={allColors.white}
                  titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
                  titleFontSize={18}
                  titleFontWeight={'400'}
                  hasTailingIcon={true}
                  tailingIconPaddingLeft={0}
                  tailingIconComponent={<SaveIcon />}
                  type={BUTTON_TYPE.PRIMARY}
                  onPress={() => navigation.navigate(Routes.ProfileHomeScreen)}
                  isSquare={true}
                />
              </View>
            )}
            {/*---- Save Information End ------*/}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DriversLicense;
