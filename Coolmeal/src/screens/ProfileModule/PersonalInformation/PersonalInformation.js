import React, {useState} from 'react';
import {SafeAreaView, View, ScrollView, Platform} from 'react-native';

//Third Party
import ActionSheet from 'react-native-action-sheet';
import ImagePicker from 'react-native-image-crop-picker';

//Components
import GenericInputField from '../../../components/GenericInputField/GenericInputField';
import Header from '../../../components/Header/Header';
import LongButton from '../../../components/LongButton/LongButton';
import PhoneNumber from '../../../components/PhoneNumber/PhoneNumber';
import SignatureInputField from '../../../components/SignatureInputField/SignatureInputField';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';

//Publicly Available Icons that Can be Used for Commercial Purposes
import AvtarIcon from '../../../assets/images/profile_imageSVG.svg';
import CameraIcon from '../../../assets/images/cameraUploadSVG.svg';
import EmailIcon from '../../../assets/images/emailSVG.svg';
import PersonalInfoIcon from '../../../assets/images/personalInformationSVG.svg';
import SaveIcon from '../../../assets/images/saveWhiteSVG.svg';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import Routes from '../../../navigation/Routes';
import {allColors} from '../../../assets/styles/mainColors';
import {ButtonIOS, ButtonAndroid} from '../../../constants/constants';
import {
  BUTTON_TYPE,
  FONT_FAMILY,
  TEXTFIELD_TYPE,
} from '../../../constants/constants';

import {
  checkCameraPermission,
  checkPhotoLibraryPermission,
  showPermissionAlert,
} from '../../../utility/Helper';
import {screenHeight, screenWidth} from '../../../utility/Scale';

const PersonalInformation = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  //Profile Picture Placeholder and Camera Icon Definition
  const ReturnCameraIcon = () => {
    return (
      <View>
        <AvtarIcon width={screenWidth * 0.251} height={screenHeight * 0.116} />
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
      <Header
        title={'Personal Information'}
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}
      <ScrollView
        style={[globalStyles.flex]}
        contentContainerStyle={globalStyles.commonScrollViewPadding}
        showsVerticalScrollIndicator={false}>
        <View style={globalStyles.flex}>
          <View style={globalStyles.horizontalGeneralPadding}>
            {/*---- Page Title and Picture Container Start ------*/}
            <View>
              <TitlePicture
                componentTopPadding={45}
                imageComponent={<ReturnCameraIcon />}
                titleTopPadding={15}
                title={'Name, Last name'}
                description={
                  'Enter your new password and then click on the "Save" button below.'
                }
                descriptionTopPadding={7}
                componentBottomPadding={30}
                touchAllowed={true}
                onTouch={() => btnPickImageClick()}
              />
            </View>
            {/*---- Page Title and Picture Container End ------*/}

            {/*---- Phone Number Input Start ------*/}
            <View>
              <PhoneNumber
                value={mobileNumber}
                onChangeText={number => setMobileNumber(number)}
                onChangeFormattedText={number => {}}
              />
            </View>
            {/*---- Phone Number Input End ------*/}

            {/*---- Name Input Start ------*/}
            <View style={[globalStyles.marginTop10]}>
              <GenericInputField
                iconComponent={<PersonalInfoIcon />}
                imageLeftPadding={20}
                imageRightPadding={12}
                placeholder={'Name,Last name'}
                type={TEXTFIELD_TYPE.NORMAL}
                value={name}
                onChange={text => setName(text)}
              />
            </View>
            {/*---- Name Input End ------*/}

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

            {/*---- Signature Input Start ------*/}
            <View style={[globalStyles.marginTop15]}>
              <SignatureInputField />
            </View>
            {/*---- Signature Input End ------*/}

            {/*---- Save Information Start ------*/}
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
                buttonShadow={true}
              />
            </View>
            {/*---- Save Information End ------*/}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalInformation;
