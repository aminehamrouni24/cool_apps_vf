import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Platform} from 'react-native';

//Third Party
import ImagePicker from 'react-native-image-crop-picker';
import {SafeAreaView} from 'react-native-safe-area-context';

//Components
import DatePicker from '../../../components/DatePicker/DatePicker';
import Dropdown from '../../../components/Dropdown/Dropdown';
import Header from '../../../components/Header/Header';
import LongButton from '../../../components/LongButton/LongButton';
import SideIconsWithTitle from '../../../components/SideIconsWithTitle/SideIconsWithTitle';
import SquareGenericInputField from '../../../components/SquareGenericInputField/SquareGenericInputField';
import TitleText from '../../../components/TitleText/TitleText';

import CameraIcon from '../../../assets/icons/chatIcons/cameraSVG.svg';
import DeleteIcon from '../../../assets/icons/generalIcons/deleteIconSVG.svg';
import DownloadIcon from '../../../assets/icons/generalIcons/downloadSVG.svg';
import SaveIcon from '../../../assets/images/profile/saveWhiteSVG.svg';
import Van from '../../../assets/images/placeholders/300x201.svg';

//Utils
import ActionSheet from 'react-native-action-sheet';
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import {
  BUTTON_TYPE,
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
import {scaleFontSize, verticalScale} from '../../../utility/Scale';

const CarRegistrationScreen = ({navigation, isNavigationHidden}) => {
  const [plateNumber, setPlateNumber] = useState('GL-278-LG');
  // ---------------- Vehicle Type Dropdown Definition Start
  const [vehicleTypeOpen, vehicleTypeSetOpen] = useState(false);
  const [vehicleTypeValue, vehicleTypeSetValue] = useState('van');
  const [vehicleTypeItems, vehicleTypeSetItems] = useState([
    {label: 'Car', value: 'car'},
    {label: 'Van', value: 'van'},
  ]);

  // ---------------- Vehicle Manufacturer Dropdown Definition Start
  const [vehicleManufacturerOpen, vehicleManufacturerSetOpen] = useState(false);
  const [vehicleManufacturerValue, vehicleManufacturerSetValue] = useState(
    'ford',
  );
  const [vehicleManufacturerItems, vehicleManufacturerSetItems] = useState([
    {label: 'BMW', value: 'bmw'},
    {label: 'Ford', value: 'ford'},
    {label: 'Hyundai', value: 'hyundai'},
    {label: 'Toyota', value: 'toyota'},
  ]);

  // ---------------- Vehicle Model Dropdown Definition Start
  const [vehicleModelOpen, vehicleModelSetOpen] = useState(false);
  const [vehicleModelValue, vehicleModelSetValue] = useState('model1');
  const [vehicleModelItems, vehicleModelSetItems] = useState([
    {label: 'Model', value: 'model1'},
    {label: 'Model 2', value: 'model2'},
    {label: 'Model 3', value: 'model3'},
    {label: 'Model 4', value: 'model4'},
  ]);

  // ---------------- Vehicle Color Dropdown Definition Start
  const [vehicleColorOpen, vehicleColorSetOpen] = useState(false);
  const [vehicleColorValue, vehicleColorSetValue] = useState('color1');
  const [vehicleColorItems, vehicleColorSetItems] = useState([
    {label: 'Color', value: 'color1'},
    {label: 'Color 2', value: 'color2'},
    {label: 'Color 3', value: 'color3'},
    {label: 'Color 4', value: 'color4'},
  ]);

  // ---------------- Fuel Type Dropdown Definition Start
  const [fuelTypeOpen, fuelTypeSetOpen] = useState(false);
  const [fuelTypeValue, fuelTypeSetValue] = useState('fuelType1');
  const [fuelTypeItems, fuelTypeSetItems] = useState([
    {label: 'Petrol', value: 'fuelType1'},
    {label: 'Diesel', value: 'fuelType2'},
  ]);

  // ---------------- Date
  const [dateOfManufacture, setDateOfManufacture] = useState(new Date());
  const scroll = React.createRef();
  const [ref, setRef] = useState(null);

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
  const title = vehicleTypeItems.filter(
    value => value.value === vehicleTypeValue,
  )[0].label;
  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      {!isNavigationHidden && (
        <Header
          navigation={navigation}
          title={title + ' Registration'}
          onLeftIconPress={() => navigation.goBack()}
          onRightIconPress={() => navigation.toggleDrawer()}
        />
      )}
      {/*------- Header End -----*/}
      <ScrollView
        style={globalStyles.flex}
        ref={c => {
          setRef(c);
        }}>
        <View style={globalStyles.horizontalGeneralPadding}>
          <View style={[globalStyles.marginTop20]}>
            {/*---- Front Picture Upload Start ------*/}
            <View style={[globalStyles.marginBottom20, globalStyles.width100]}>
              <TouchableOpacity
                style={[
                  styles.uploadContainer,
                  globalStyles.marginBottom5,
                  globalStyles.marginTop0,
                ]}
                onPress={() => btnPickImageClick()}>
                <View style={styles.cameraContainer}>
                  <View style={{position: 'absolute'}}>
                    <Van />
                  </View>
                  <CameraIcon width={26} height={30} />
                </View>
              </TouchableOpacity>
              <SideIconsWithTitle
                rightIconComponent={<DeleteIcon />}
                leftIconComponent={<DownloadIcon />}
              />
            </View>
            {/*---- Front Picture Upload End ------*/}

            {/*--- Select Vehicle Type Start ---*/}
            <Dropdown
              zIndex={vehicleTypeOpen ? 1000 : 995}
              open={vehicleTypeOpen}
              value={vehicleTypeValue}
              items={vehicleTypeItems}
              setOpen={vehicleTypeSetOpen}
              setValue={vehicleTypeSetValue}
              setItems={vehicleTypeSetItems}
              label="Vehicle Type"
            />
            {/*--- Select Vehicle Type End ---*/}

            {/*--- Select Vehicle Manufacturer Start ---*/}
            <Dropdown
              zIndex={vehicleManufacturerOpen ? 999 : 996}
              open={vehicleManufacturerOpen}
              value={vehicleManufacturerValue}
              items={vehicleManufacturerItems}
              setOpen={vehicleManufacturerSetOpen}
              setValue={vehicleManufacturerSetValue}
              setItems={vehicleManufacturerSetItems}
              label="Vehicle Manufacturer"
            />
            {/*--- Select Vehicle Manufacturer End ---*/}

            {/*--- Select Vehicle Model Start ---*/}
            <Dropdown
              zIndex={vehicleModelOpen ? 998 : 997}
              open={vehicleModelOpen}
              value={vehicleModelValue}
              items={vehicleModelItems}
              setOpen={vehicleModelSetOpen}
              setValue={vehicleModelSetValue}
              setItems={vehicleModelSetItems}
              label="Vehicle Model"
            />
            {/*--- Select Vehicle Model End ---*/}

            {/*--- Select Vehicle Color Start ---*/}
            <Dropdown
              zIndex={vehicleColorOpen ? 998 : 997}
              open={vehicleColorOpen}
              value={vehicleColorValue}
              items={vehicleColorItems}
              setOpen={vehicleColorSetOpen}
              setValue={vehicleColorSetValue}
              setItems={vehicleColorSetItems}
              label="Vehicle Color"
            />
            {/*--- Select Vehicle Color End ---*/}
            <View
              style={[
                globalStyles.flex,
                globalStyles.flexDirectionRow,
                globalStyles.justifySpaceBetween,
              ]}>
              {/*--- Vehicle Plate Number Start ---*/}
              <View style={[globalStyles.marginBottom20, {width: '45%'}]}>
                <View style={{minHeight: verticalScale(20)}}>
                  <Text style={styles.titleText}>Plate Number</Text>
                </View>
                <SquareGenericInputField
                  value={plateNumber}
                  onChange={text => setPlateNumber(text)}
                />
              </View>
              {/*--- Vehicle Plate Number End ---*/}

              {/*--- Vehicle Fuel Type Start ---*/}
              <View style={{width: '45%'}}>
                <Dropdown
                  zIndex={996}
                  open={fuelTypeOpen}
                  value={fuelTypeValue}
                  items={fuelTypeItems}
                  setOpen={fuelTypeSetOpen}
                  setValue={fuelTypeSetValue}
                  setItems={fuelTypeSetItems}
                  label="Fuel Type"
                />
              </View>
              {/*--- Vehicle Fuel Type End ---*/}
            </View>

            {/*--- Vehicle Manufacture Date Start ---*/}
            <View>
              <DatePicker
                date={dateOfManufacture}
                onDateChange={setDateOfManufacture}
                scroll={ref}
                title="Manufacture Date"
              />
            </View>
            {/*--- Vehicle Manufacture Date End ---*/}

            {/*--- Vehicle Registration Date Start ---*/}
            <View style={[globalStyles.marginTop20]}>
              <DatePicker
                date={dateOfManufacture}
                onDateChange={setDateOfManufacture}
                scroll={ref}
                title="Registration Date"
              />
            </View>
            {/*--- Vehicle Registration Date End ---*/}

            {/*--- Vehicle Certificate Start ---*/}
            <TitleText
              title="Please Upload Car Registration Certificate Below"
              alignCenter={true}
              titleFontWeight="400"
              containerTopPadding={verticalScale(15)}
              containerBottomPadding={verticalScale(5)}
              titleFontSize={scaleFontSize(19)}
            />
            {/*--- Vehicle Certificate End ---*/}

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
                  onPress={() => navigation.goBack()}
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

export default CarRegistrationScreen;
