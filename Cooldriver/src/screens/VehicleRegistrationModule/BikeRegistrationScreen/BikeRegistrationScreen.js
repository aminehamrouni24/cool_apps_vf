import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Platform} from 'react-native';

//Third Party
import ActionSheet from 'react-native-action-sheet';
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

import BicycleIcon from '../../../assets/images/placeholders/300x201.svg';
import BikeRegistrationIcon from '../../../assets/images/placeholders/300x201.svg';
import CameraIcon from '../../../assets/icons/chatIcons/cameraSVG.svg';
import DeleteIcon from '../../../assets/icons/generalIcons/deleteIconSVG.svg';
import DownloadIcon from '../../../assets/icons/generalIcons/downloadSVG.svg';
import SaveIcon from '../../../assets/images/profile/saveWhiteSVG.svg';

//Utils
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

const BikeRegistrationScreen = ({navigation, isNavigationHidden}) => {
  const [plateNumber, setPlateNumber] = useState('GL-278-LG');

  // ---------------- Bike Type Dropdown Definition Start
  const [bikeTypeOpen, bikeTypeSetOpen] = useState(false);
  const [bikeTypeValue, bikeTypeSetValue] = useState('scooter');
  const [bikeTypeItems, bikeTypeSetItems] = useState([
    {label: 'Scooter', value: 'scooter'},
    {label: 'Bicycle', value: 'bike'},
  ]);

  // ---------------- Bike Manufacturer Dropdown Definition Start
  const [bikeManufacturerOpen, bikeManufacturerSetOpen] = useState(false);
  const [bikeManufacturerValue, bikeManufacturerSetValue] = useState('yamaha');
  const [bikeManufacturerItems, bikeManufacturerSetItems] = useState([
    {label: 'Yamaha', value: 'yamaha'},
    {label: 'Honda', value: 'honda'},
    {label: 'Kawasaki', value: 'kawasaki'},
    {label: 'Harley-Davidson', value: 'harley'},
  ]);

  // ---------------- Bike Model Dropdown Definition Start
  const [bikeModelOpen, bikeModelSetOpen] = useState(false);
  const [bikeModelValue, bikeModelSetValue] = useState('model1');
  const [bikeModelItems, bikeModelSetItems] = useState([
    {label: 'Model', value: 'model1'},
    {label: 'Model 2', value: 'model2'},
    {label: 'Model 3', value: 'model3'},
    {label: 'Model 4', value: 'model4'},
  ]);

  // ---------------- Bike Color Dropdown Definition Start
  const [bikeColorOpen, bikeColorSetOpen] = useState(false);
  const [bikeColorValue, bikeColorSetValue] = useState('color1');
  const [bikeColorItems, bikeColorSetItems] = useState([
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
  const title = bikeTypeItems.filter(value => value.value === bikeTypeValue)[0]
    .label;

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
                    {bikeTypeValue === 'scooter' ? (
                      <BikeRegistrationIcon opacity={0.5} />
                    ) : (
                      <BicycleIcon
                        opacity={0.5}
                        marginTop={verticalScale(20)}
                      />
                    )}
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

            {/*--- Select Bike Type Start ---- */}
            <Dropdown
              zIndex={bikeTypeOpen ? 1000 : 995}
              open={bikeTypeOpen}
              value={bikeTypeValue}
              items={bikeTypeItems}
              setOpen={bikeTypeSetOpen}
              setValue={bikeTypeSetValue}
              setItems={bikeTypeSetItems}
              label="Bike Type"
            />
            {/*--- Select Bike Type End ---- */}

            {/*--- Bike Manufacturer Start ---- */}
            <Dropdown
              zIndex={bikeManufacturerOpen ? 999 : 996}
              open={bikeManufacturerOpen}
              value={bikeManufacturerValue}
              items={bikeManufacturerItems}
              setOpen={bikeManufacturerSetOpen}
              setValue={bikeManufacturerSetValue}
              setItems={bikeManufacturerSetItems}
              label="Bike Manufacturer"
            />
            {/*--- Bike Manufacturer End ---- */}

            {/*--- Bike Model Start ---- */}
            <Dropdown
              zIndex={bikeModelOpen ? 998 : 997}
              open={bikeModelOpen}
              value={bikeModelValue}
              items={bikeModelItems}
              setOpen={bikeModelSetOpen}
              setValue={bikeModelSetValue}
              setItems={bikeModelSetItems}
              label="Bike Model"
            />
            {/*--- Bike Model End ---- */}

            {/*--- Bike Color Start ---- */}
            <Dropdown
              zIndex={bikeColorOpen ? 998 : 997}
              open={bikeColorOpen}
              value={bikeColorValue}
              items={bikeColorItems}
              setOpen={bikeColorSetOpen}
              setValue={bikeColorSetValue}
              setItems={bikeColorSetItems}
              label="Bike Color"
            />
            {/*--- Bike Color End ---- */}

            {/*--- Plate Number & Fuel Type for Scooter Start ---- */}
            {bikeTypeValue === 'scooter' && (
              <View
                style={[
                  globalStyles.flex,
                  globalStyles.flexDirectionRow,
                  globalStyles.justifySpaceBetween,
                ]}>
                <View style={[globalStyles.marginBottom20, {width: '45%'}]}>
                  <View style={{minHeight: verticalScale(20)}}>
                    <Text style={styles.titleText}>Plate Number</Text>
                  </View>
                  <SquareGenericInputField
                    value={plateNumber}
                    onChange={text => setPlateNumber(text)}
                  />
                </View>
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
              </View>
            )}
            {/*--- Plate Number & Fuel Type for Scooter End ---- */}

            {/*--- Manufactured Date for Scooter Start ---- */}
            <View>
              <DatePicker
                date={dateOfManufacture}
                onDateChange={setDateOfManufacture}
                scroll={ref}
                title="Manufacture Date"
              />
            </View>
            {/*--- Manufactured Date for Scooter End ---- */}

            {/*--- Registration Date for Scooter Start ---- */}
            {bikeTypeValue === 'scooter' && (
              <View style={[globalStyles.marginTop20]}>
                <DatePicker
                  date={dateOfManufacture}
                  onDateChange={setDateOfManufacture}
                  scroll={ref}
                  title="Registration Date"
                />
              </View>
            )}
            {/*--- Registration Date for Scooter End ---- */}

            {/*--- If bike type value is scooter we need a certificate for registration Start---*/}
            {bikeTypeValue === 'scooter' && (
              <TitleText
                title="Please Upload Bike Registration Certificate Below"
                alignCenter={true}
                titleFontWeight="400"
                containerTopPadding={verticalScale(15)}
                containerBottomPadding={verticalScale(5)}
                titleFontSize={scaleFontSize(19)}
              />
            )}
            {/*--- If bike type value is scooter we need a certificate for registration End---*/}

            {/*---- Front Picture Upload Start ------*/}
            {bikeTypeValue === 'scooter' && (
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
            )}
            {/*---- Front Picture Upload End ------*/}

            {/*---- Back Picture Upload Start ------*/}
            {bikeTypeValue === 'scooter' && (
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
            )}
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

export default BikeRegistrationScreen;
