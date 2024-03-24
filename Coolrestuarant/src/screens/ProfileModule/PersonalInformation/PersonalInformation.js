import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';

//Third Party
import ActionSheet from 'react-native-action-sheet';
import ImagePicker from 'react-native-image-crop-picker';

//Components
import GenericInputField from '../../../components/GenericInputField/GenericInputField';
import Header from '../../../components/Header/Header';
import LongButton from '../../../components/LongButton/LongButton';
import PhoneNumber from '../../../components/PhoneNumber/PhoneNumber';
import SideIconsWithTitle from '../../../components/SideIconsWithTitle/SideIconsWithTitle';
import SignatureInputField from '../../../components/SignatureInputField/SignatureInputField';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';

import AvatarIcon from '../../../assets/images/profile/profileImageSVG.svg';
import ProfilePic from '../../../assets/images/profile/sabrinaProfileSVG.svg';
import CameraIcon from '../../../assets/icons/chatIcons/cameraSVG.svg';
import CardIcon from '../../../assets/icons/generalIcons/cardSVG.svg';
import DeleteIcon from '../../../assets/icons/generalIcons/deleteIconSVG.svg';
import DownloadIcon from '../../../assets/icons/generalIcons/downloadSVG.svg';
import EmailIcon from '../../../assets/images/profile/emailSVG.svg';
import PersonalInfoIcon from '../../../assets/images/profile/personalInformation2SVG.svg';
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
import {
  scaleFontSize,
  screenHeight,
  screenWidth,
  verticalScale,
} from '../../../utility/Scale';
import Dropdown from '../../../components/Dropdown/Dropdown';

//Dummy Data
import CountryList from '../../../DummyData/CountryList';
import TitleText from '../../../components/TitleText/TitleText';

const PersonalInformation = ({navigation, isNavigationHidden}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [countryOpen, countrySetOpen] = useState(false);
  const [countryValue, countrySetValue] = useState('');
  const [countryItems, countrySetItems] = useState(CountryList.data);

  //Profile Picture Placeholder and Camera Icon Definition
  const ReturnCameraIcon = () => {
    return (
      <View>
        {isNavigationHidden ? (
          <AvatarIcon
            width={screenWidth * 0.251}
            height={screenHeight * 0.116}
          />
        ) : (
          <View style={styles.profilePic}>
            <ProfilePic
              width={screenWidth * 0.251}
              height={screenHeight * 0.116}
            />
          </View>
        )}
        <View style={[globalStyles.profileIconAbsolute, styles.cameraUpload]}>
          <CameraIcon style={[globalStyles.opacity75]} height={13} width={13} />
        </View>
      </View>
    );
  };

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
          title={'Personal Information'}
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
          <View style={[globalStyles.horizontalGeneralPadding]}>
            {/*---- Page Title and Picture Container Start ------*/}
            <View>
              <TitlePicture
                componentTopPadding={15}
                imageComponent={<ReturnCameraIcon />}
                titleTopPadding={15}
                title={'Name, Last name'}
                description={
                  'Enter your new password and then click on the "Save" button below.'
                }
                descriptionTopPadding={7}
                componentBottomPadding={15}
                touchAllowed={true}
                onTouch={() => btnPickImageClick()}
              />
            </View>
            {/*---- Page Title and Picture Container End ------*/}

            {/*---- Name Input Start ------*/}
            <View style={[globalStyles.marginTop10]}>
              <GenericInputField
                iconComponent={<PersonalInfoIcon />}
                imageLeftPadding={20}
                imageRightPadding={12}
                placeholder={'Name, Last name'}
                type={TEXTFIELD_TYPE.NORMAL}
                value={name}
                onChange={text => setName(text)}
              />
            </View>
            {/*---- Name Input End ------*/}

            {/*---- Phone Number Input Start ------*/}
            <View style={[globalStyles.marginTop10]}>
              <PhoneNumber
                value={mobileNumber}
                onChangeText={number => setMobileNumber(number)}
                onChangeFormattedText={number => {}}
              />
            </View>
            {/*---- Phone Number Input End ------*/}

            {/*---- Email Input Start ------*/}
            <View style={[globalStyles.marginTop10]}>
              <GenericInputField
                iconComponent={<EmailIcon />}
                imageLeftPadding={20}
                imageRightPadding={12}
                placeholder={'Email'}
                type={TEXTFIELD_TYPE.EMAIL}
                value={email}
                onChange={text => setEmail(text)}
              />
            </View>
            {/*---- Email Input End ------*/}

            {/*---- Email Input Start ------*/}
            <View style={[globalStyles.marginTop10]}>
              <GenericInputField
                iconComponent={<CardIcon />}
                imageLeftPadding={20}
                imageRightPadding={12}
                placeholder={'Personal ID'}
                type={TEXTFIELD_TYPE.TEXT}
                value={email}
                onChange={text => setEmail(text)}
              />
            </View>
            {/*---- Email Input End ------*/}

            {/*---- Email Input Start ------*/}
            <View style={[globalStyles.marginTop10]}>
              <GenericInputField
                placeholder={'Address'}
                type={TEXTFIELD_TYPE.TEXT}
                value={address}
                onChange={text => setAddress(text)}
              />
            </View>
            {/*---- Email Input End ------*/}

            {/*---- Email Input Start ------*/}
            <View style={[globalStyles.marginTop10]}>
              <GenericInputField
                placeholder={'City'}
                type={TEXTFIELD_TYPE.TEXT}
                value={city}
                onChange={text => setCity(text)}
              />
            </View>
            {/*---- Email Input End ------*/}

            {/*---- Name Input Start ------*/}
            <View style={[globalStyles.marginTop10, {zIndex: 1000}]}>
              <Dropdown
                placeholder={'Country'}
                open={countryOpen}
                value={countryValue}
                items={countryItems}
                setOpen={countrySetOpen}
                setValue={countrySetValue}
                setItems={countrySetItems}
                style={{borderRadius: 35, marginBottom: 0}}
                textMarginLeft={20}
              />
            </View>
            {/*---- Name Input End ------*/}
            {/*------- Title Start -----*/}
            <TitleText
              title="Please Upload Your Personal ID Images Below"
              alignCenter={true}
              titleFontWeight="400"
              containerTopPadding={verticalScale(15)}
              containerBottomPadding={verticalScale(5)}
              titleFontSize={scaleFontSize(19)}
            />
            {/*------- Title End -----*/}
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

            {/*---- Signature Input Start ------*/}
            <View style={[globalStyles.marginTop15]}>
              <SignatureInputField />
            </View>
            {/*---- Signature Input End ------*/}

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
                  type={BUTTON_TYPE.SECONDARY}
                  onPress={() => navigation.navigate(Routes.ProfileHomeScreen)}
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

export default PersonalInformation;
