import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';

//Third Party
import ActionSheet from 'react-native-action-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

//Components
import Dropdown from '../../../components/Dropdown/Dropdown';
import GenericInputField from '../../../components/GenericInputField/GenericInputField';
import Header from '../../../components/Header/Header';
import LongButton from '../../../components/LongButton/LongButton';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';

import CameraIcon from '../../../assets/icons/chatIcons/cameraSVG.svg';
import CompanyInformationLogo from '../../../assets/images/logos/companyLogoSVG.svg';
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
  getCoordinates,
  showPermissionAlert,
} from '../../../utility/Helper';
import {
  horizontalScale,
  screenHeight,
  screenWidth,
} from '../../../utility/Scale';
import SideIconsWithTitle from '../../../components/SideIconsWithTitle/SideIconsWithTitle';
import DeleteIcon from '../../../assets/icons/generalIcons/deleteIconSVG.svg';
import DownloadIcon from '../../../assets/icons/generalIcons/downloadSVG.svg';
import MultiLineTextInput from '../../../components/MultiLineTextInput/MultiLineTextInput';
import CountryList from '../../../DummyData/CountryList';
import LookingByMapScreen from '../../ProductsModule/LookingByMapScreen/LookingByMapScreen';
import CachableImage from '../../../components/CachableImage/CachableImage';
import RestaurantImage from '../../../assets/images/wizard/restaurantImageSVG.svg';
const CompanyInformation = ({navigation, isNavigationHidden}) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [identificationNumber, setIdentificationNumber] = useState('');
  const [additionalInformation, setAdditionalInformation] = useState('');
  const [googleMapAddress, setGoogleMapAddress] = useState({});
  const [shouldInformationShow, setShouldInformationShow] =
    useState(!isNavigationHidden);
  //country setup
  const [countryOpen, countrySetOpen] = useState(false);
  const [countryValue, countrySetValue] = useState('');
  const [countryItems, countrySetItems] = useState(CountryList.data);

  //business type setup
  const [businessTypeOpen, businessTypeSetOpen] = useState(false);
  const [businessTypeValue, businessTypeSetValue] = useState('');
  const [businessTypeItems, businessTypeSetItems] = useState([
    {label: 'Business Type Example 1', value: 'type1'},
    {label: 'Business Type Example 2', value: 'type2'},
  ]);

  //restaurant type setup
  const [restaurantTypeOpen, restaurantTypeSetOpen] = useState(false);
  const [restaurantTypeValue, restaurantTypeSetValue] = useState('');
  const [restaurantTypeItems, restaurantTypeSetItems] = useState([
    {label: 'Restaurant Type Example 1', value: 'type1'},
    {label: 'Restaurant Type Example 2', value: 'type2'},
  ]);

  //Profile Picture Placeholder and Camera Icon Definition
  const ReturnCameraIcon = () => {
    return (
      <View style={[styles.companyInfoLogo]}>
        <CompanyInformationLogo
          width={screenWidth * 0.19}
          height={screenHeight * 0.105}
          style={styles.logoStyles}
        />
        <View style={[globalStyles.profileIconAbsolute, styles.profileIcon]}>
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
  const openPickerForProfileImage = (pickerType) => {
    switch (pickerType) {
      case 0:
        //take a picture now
        checkCameraPermission((granted) => {
          if (granted) {
            ImagePicker.openCamera({
              mediaType: 'photo',
              multiple: false,
              compressImageQuality: 0.8,
              compressImageMaxHeight: 720,
              compressImageMaxWidth: 1080,
            })
              .then((images) => {})
              .catch((err) => {
                console.log('Error :' + err.toString());
              });
          } else {
            showPermissionAlert('Permission', 'Camera Permission Required');
          }
        });
        break;
      case 1:
        //choose from the library
        checkPhotoLibraryPermission((granted) => {
          if (granted) {
            ImagePicker.openPicker({
              mediaType: 'photo',
              multiple: false,
              compressImageQuality: 0.8,
              compressImageMaxHeight: 720,
              compressImageMaxWidth: 1080,
            })
              .then((images) => {})
              .catch((err) => {
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

  useEffect(() => {
    if (address.length && city.length && countryValue.length) {
      getCoordinates(address + ' ' + city + ' ' + countryValue).then((val) => {
        setGoogleMapAddress(val);
      });
    } else {
      getCoordinates('80 Charter Street, Boston').then((val) => {
        setGoogleMapAddress(val);
      });
    }
  }, [address, city, countryValue]);

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      {shouldInformationShow && (
        <Header
          title={'Company Information'}
          onLeftIconPress={() => navigation.goBack()}
          onRightIconPress={() => navigation.toggleDrawer()}
        />
      )}
      {/*------- Header End -----*/}
      <KeyboardAwareScrollView
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
                title={'Restaurant Name'}
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

            {/*---- Company Name Input Start ------*/}
            <View style={[globalStyles.marginTop10]}>
              <GenericInputField
                placeholder={'Company Name'}
                type={TEXTFIELD_TYPE.NORMAL}
                value={name}
                onChange={(text) => setName(text)}
              />
            </View>
            {/*---- Company Name Input End ------*/}

            {/*---- Restaurant Name Input Start ------*/}
            <View style={[globalStyles.marginTop10]}>
              <GenericInputField
                placeholder={'Restaurant Name'}
                type={TEXTFIELD_TYPE.NORMAL}
                value={name}
                onChange={(text) => setName(text)}
              />
            </View>
            {/*---- Restaurant Name Input End ------*/}

            {/*---- Name Input Start ------*/}
            <View style={[globalStyles.marginTop10, {zIndex: 1000}]}>
              <Dropdown
                placeholder={'Restaurant Type'}
                open={restaurantTypeOpen}
                value={restaurantTypeValue}
                items={restaurantTypeItems}
                setOpen={restaurantTypeSetOpen}
                setValue={restaurantTypeSetValue}
                setItems={restaurantTypeSetItems}
                style={{borderRadius: 35, marginBottom: 0}}
                textMarginLeft={20}
              />
            </View>
            {/*---- Name Input End ------*/}

            {/*---- Company Logo Upload Start ------*/}
            <View style={[globalStyles.marginTop20, globalStyles.width100]}>
              <SideIconsWithTitle
                rightIconComponent={<DeleteIcon />}
                leftIconComponent={<DownloadIcon />}
                title="Company Logo"
              />
              <TouchableOpacity
                style={styles.uploadContainer}
                onPress={() => btnPickImageClick()}>
                <CompanyInformationLogo width={80} height={80} />
              </TouchableOpacity>
            </View>
            {/*---- Company Logo Upload End ------*/}

            {/*---- Restaurant Image Upload Start ------*/}
            <View style={globalStyles.marginTop20}>
              <SideIconsWithTitle
                rightIconComponent={<DeleteIcon />}
                leftIconComponent={<DownloadIcon />}
                title="Restaurant Image"
              />
              <TouchableOpacity
                style={[
                  styles.uploadContainer,
                  styles.uploadContainerRestaurantImage,
                ]}
                onPress={() => btnPickImageClick()}>
                <RestaurantImage
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 5,
                    marginTop: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
            {/*---- Restaurant Image Upload End ------*/}

            {/*---- Identification Number Input Start ------*/}
            <View style={[globalStyles.marginTop20]}>
              <GenericInputField
                placeholder={'Company Identification Number'}
                type={TEXTFIELD_TYPE.EMAIL}
                value={identificationNumber}
                onChange={(text) => setIdentificationNumber(text)}
              />
            </View>
            {/*---- Identification Number Input End ------*/}

            {/*---- Address Input Start ------*/}
            <View style={[globalStyles.marginTop10]}>
              <GenericInputField
                placeholder={'Address'}
                type={TEXTFIELD_TYPE.NORMAL}
                value={address}
                onChange={(text) => setAddress(text)}
              />
            </View>
            {/*---- Address Input End ------*/}

            {/*---- City Input Start ------*/}
            <View style={[globalStyles.marginTop10]}>
              <GenericInputField
                placeholder={'City'}
                type={TEXTFIELD_TYPE.NORMAL}
                value={city}
                onChange={(text) => setCity(text)}
              />
            </View>
            {/*---- City Input End ------*/}

            {/*---- Country Input Start ------*/}
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
            {/*---- Country Input End ------*/}

            <View style={globalStyles.marginTop10}>
              <LookingByMapScreen
                googleMarker={[
                  {
                    latitude: googleMapAddress.lat ? googleMapAddress.lat : 0,
                    longitude: googleMapAddress.lng ? googleMapAddress.lng : 0,
                  },
                ]}
              />
            </View>

            <View style={styles.textInputView}>
              <Text style={styles.additionalInformationLabel}>
                Additional Information
              </Text>
              <MultiLineTextInput
                height={screenHeight * 0.107}
                value={additionalInformation}
                onChange={(text) => setAdditionalInformation(text)}
              />
            </View>

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
                  buttonShadow={false}
                />
              </View>
            )}
            {/*---- Save Information End ------*/}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default CompanyInformation;
