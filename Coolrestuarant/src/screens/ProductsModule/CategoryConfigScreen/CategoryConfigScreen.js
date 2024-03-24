import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Platform,
  Switch,
} from 'react-native';

//Components
import Header from '../../../components/Header/Header';
import SquareGenericInputField from '../../../components/SquareGenericInputField/SquareGenericInputField';
import TitleText from '../../../components/TitleText/TitleText';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import SideIconsWithTitle from '../../../components/SideIconsWithTitle/SideIconsWithTitle';
import DeleteIcon from '../../../assets/icons/generalIcons/deleteIconSVG.svg';
import DownloadIcon from '../../../assets/icons/generalIcons/downloadSVG.svg';
import CameraIcon from '../../../assets/icons/chatIcons/cameraSVG.svg';
import ActionSheet from 'react-native-action-sheet';
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
import ImagePicker from 'react-native-image-crop-picker';
import MultiLineTextInput from '../../../components/MultiLineTextInput/MultiLineTextInput';
import {horizontalScale} from '../../../utility/Scale';
import BackContinueButtons from '../../WizardModule/WizardHomeScreen/BackContinueButtons';
import {useDispatch} from 'react-redux';
import Action from '../../../redux/action';
import PropTypes from 'prop-types';
import MenuCategoryItem from '../../../components/MenuCategoryItem/MenuCategoryItem';
import CachableImage from '../../../components/CachableImage/CachableImage';

const CategoryConfigScreen = props => {
  let dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [largeDescription, setLargeDescription] = useState('');
  const [iconImage, setIconImage] = useState('');
  const [isActive, setIsActive] = useState(true);
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
  let item =
    props.route.params && props.route.params.hasOwnProperty('item')
      ? props.route.params.item
      : null;
  useEffect(() => {
    if (item) {
      setCategoryName(item.title);
      setIsActive(item.isActive);
      setLargeDescription(item.moreDescription);
      setShortDescription(item.description);
      setIconImage(item.iconImage);
    }
  }, [item]);

  let pageName = (item ? 'Edit' : 'Add New') + ' Category';

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        title={pageName}
        navigation={props.navigation}
        onLeftIconPress={() => props.navigation.goBack()}
        onRightIconPress={() => props.navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}

      <ScrollView style={globalStyles.flex}>
        <View
          style={[
            globalStyles.horizontalGeneralPadding,
            globalStyles.marginTop20,
          ]}>
          {/*------- Title Start -----*/}
          <View>
            <TitleText
              title={pageName}
              titleFontWeight={'300'}
              description={
                'Lorem ipsum dolor sit amet, consectetur non adipiscing elit. Eitam ac tempor leo.'
              }
            />
          </View>

          {/*------- Title End -----*/}

          {/*----------- Category Name Start --------------*/}
          <View style={globalStyles.marginTop20}>
            <Text style={styles.titleText}>Category Name</Text>
            <SquareGenericInputField
              value={categoryName}
              onChange={text => setCategoryName(text)}
            />
          </View>
          {/*----------- Category Name End --------------*/}

          {/*---- Category Picture Upload Start ------*/}
          <View style={[globalStyles.marginTop20, globalStyles.width100]}>
            <SideIconsWithTitle
              rightIconComponent={<DeleteIcon />}
              leftIconComponent={<DownloadIcon />}
              title="Add Category Image"
            />
            <TouchableOpacity
              style={styles.uploadContainer}
              onPress={() => btnPickImageClick()}>
              {iconImage.length > 0 && (
                <CachableImage
                  source={{uri: item.iconImage}}
                  style={styles.imageIcon}
                />
              )}
              <View style={styles.cameraContainer}>
                <CameraIcon width={26} height={30} />
              </View>
            </TouchableOpacity>
          </View>
          {/*---- Category Picture Upload End ------*/}

          {/*----------- Short Description Start --------------*/}
          <View style={styles.textInputView}>
            <Text style={styles.titleText}>Short Description</Text>
            <MultiLineTextInput
              moreStyles={[globalStyles.paddingTop10, globalStyles.fontSize13]}
              height={horizontalScale(70)}
              value={shortDescription}
              onChange={text => setShortDescription(text)}
            />
          </View>
          {/*----------- Short Description End --------------*/}

          {/*----------- Large Description Start --------------*/}
          <View style={styles.textInputView}>
            <Text style={styles.titleText}>Long Description</Text>
            <MultiLineTextInput
              height={horizontalScale(115)}
              moreStyles={[globalStyles.paddingTop10, globalStyles.fontSize13]}
              value={largeDescription}
              onChange={text => setLargeDescription(text)}
            />
          </View>
          {/*----------- Large Description End --------------*/}
          {/*-----------Category Active Switch Start -----*/}
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.justifySpaceBetween,
              globalStyles.alignItemsCenter,
              globalStyles.marginTop20,
            ]}>
            <Text style={{fontFamily: FONT_FAMILY.RobotoRegular}}>
              AVAILABLE IN STOCK
            </Text>
            <Switch
              thumbColor={allColors.white}
              trackColor={{true: allColors.yellow}}
              onValueChange={() => setIsActive(!isActive)}
              value={isActive}
            />
          </View>
          {/*-----------Category Active Switch End -----*/}
        </View>
        {/*----------- Save/Cancel Changes Start -----*/}
        <View style={globalStyles.marginTop50}>
          <BackContinueButtons
            nextTitle={'SAVE'}
            backTitle={'CANCEL'}
            isDisabled={
              categoryName.length === 0 && shortDescription.length === 0
            }
            next={() => {
              if (item) {
                dispatch(
                  Action.editMenuCategory({
                    id: item.categoryId,
                    title: categoryName,
                    description: shortDescription,
                    isActive: isActive,
                    moreDescription: largeDescription,
                    iconImage: item.iconImage,
                  }),
                );
              } else {
                dispatch(
                  Action.addMenuCategory({
                    title: categoryName,
                    description: shortDescription,
                    rating: 5,
                    ratingNum: 0,
                    isActive: isActive,
                    moreDescription: largeDescription,
                    iconImage:
                      'https://images.unsplash.com/photo-1612392062126-5cc76074df9c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                  }),
                );
              }
              props.navigation.goBack();
            }}
          />
        </View>
        {/*----------- Save/Cancel Changes End -----*/}
      </ScrollView>
    </SafeAreaView>
  );
};
export default CategoryConfigScreen;
