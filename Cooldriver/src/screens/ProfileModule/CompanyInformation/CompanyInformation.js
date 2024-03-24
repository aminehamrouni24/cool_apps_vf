import React, {useState} from 'react';
import {SafeAreaView, View, ScrollView, Platform} from 'react-native';

//Third Party
import ActionSheet from 'react-native-action-sheet';
import ImagePicker from 'react-native-image-crop-picker';

//Components
import Dropdown from '../../../components/Dropdown/Dropdown';
import GenericInputField from '../../../components/GenericInputField/GenericInputField';
import Header from '../../../components/Header/Header';
import LongButton from '../../../components/LongButton/LongButton';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';

import CameraIcon from '../../../assets/images/placeholders/32x32.svg';
import CompanyInformationLogo from '../../../assets/images/placeholders/80x80.svg';
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
import {screenHeight, screenWidth} from '../../../utility/Scale';

const CompanyInformation = ({navigation, isNavigationHidden}) => {
  const [name, setName] = useState('');
  const [identificationNumber, setIdentificationNumber] = useState('');
  const [businessTypeOpen, businessTypeSetOpen] = useState(false);
  const [businessTypeValue, businessTypeSetValue] = useState('');
  const [businessTypeItems, businessTypeSetItems] = useState([
    {label: 'Business Type Example 1', value: 'type1'},
    {label: 'Business Type Example 2', value: 'type2'},
  ]);
  //Profile Picture Placeholder and Camera Icon Definition
  const ReturnCameraIcon = () => {
    return (
      <View
        style={[
          styles.companyInfoLogo,
          isNavigationHidden && styles.companyInfoLogoPlaceholder,
        ]}>
        {!isNavigationHidden ? (
          <CompanyInformationLogo
            width={screenWidth * 0.151}
            height={screenHeight * 0.07}
          />
        ) : (
          <View style={styles.companyInfoPlaceholder} />
        )}
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
      {!isNavigationHidden && (
        <Header
          title={'Company Information'}
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
              <TitlePicture
                componentTopPadding={15}
                imageComponent={<ReturnCameraIcon />}
                titleTopPadding={15}
                title={'Company Name'}
                description={
                  'Please choose your business type and add your company information'
                }
                descriptionTopPadding={10}
                componentBottomPadding={10}
                touchAllowed={true}
                onTouch={() => btnPickImageClick()}
              />
            </View>
            {/*---- Page Title and Picture Container End ------*/}

            {/*---- Name Input Start ------*/}
            <View style={[globalStyles.marginTop10, {zIndex: 1000}]}>
              <Dropdown
                placeholder={'Type of Business'}
                open={businessTypeOpen}
                value={businessTypeValue}
                items={businessTypeItems}
                setOpen={businessTypeSetOpen}
                setValue={businessTypeSetValue}
                setItems={businessTypeSetItems}
                style={{borderRadius: 35, marginBottom: 0}}
                textMarginLeft={20}
              />
            </View>
            {/*---- Name Input End ------*/}

            {/*---- Name Input Start ------*/}
            <View style={[globalStyles.marginTop10]}>
              <GenericInputField
                imageLeftPadding={20}
                imageRightPadding={12}
                placeholder={'Name of Company'}
                type={TEXTFIELD_TYPE.NORMAL}
                value={name}
                onChange={text => setName(text)}
              />
            </View>
            {/*---- Name Input End ------*/}

            {/*---- Identification Number Input Start ------*/}
            <View style={[globalStyles.marginTop10]}>
              <GenericInputField
                imageLeftPadding={20}
                imageRightPadding={12}
                placeholder={'Identification Number'}
                type={TEXTFIELD_TYPE.EMAIL}
                value={identificationNumber}
                onChange={text => setIdentificationNumber(text)}
              />
            </View>
            {/*---- Identification Number Input End ------*/}

            {/*---- Address Input Start ------*/}
            <View style={[globalStyles.marginTop10]}>
              <GenericInputField
                imageLeftPadding={20}
                imageRightPadding={12}
                placeholder={'Address'}
                type={TEXTFIELD_TYPE.NORMAL}
                value={name}
                onChange={text => setName(text)}
              />
            </View>
            {/*---- Address Input End ------*/}

            {/*---- City Input Start ------*/}
            <View style={[globalStyles.marginTop10]}>
              <GenericInputField
                imageLeftPadding={20}
                imageRightPadding={12}
                placeholder={'City'}
                type={TEXTFIELD_TYPE.NORMAL}
                value={name}
                onChange={text => setName(text)}
              />
            </View>
            {/*---- City Input End ------*/}

            {/*---- Country Input Start ------*/}
            <View style={[globalStyles.marginTop10]}>
              <GenericInputField
                imageLeftPadding={20}
                imageRightPadding={12}
                placeholder={'Country'}
                type={TEXTFIELD_TYPE.NORMAL}
                value={name}
                onChange={text => setName(text)}
              />
            </View>
            {/*---- Country Input End ------*/}

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
                  buttonShadow={false}
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

export default CompanyInformation;
