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
  convertToInteger,
  showPermissionAlert,
} from '../../../utility/Helper';
import ImagePicker from 'react-native-image-crop-picker';
import MultiLineTextInput from '../../../components/MultiLineTextInput/MultiLineTextInput';
import {horizontalScale, verticalScale} from '../../../utility/Scale';
import BackContinueButtons from '../../WizardModule/WizardHomeScreen/BackContinueButtons';
import {useDispatch, useSelector} from 'react-redux';
import Action from '../../../redux/action';
import PropTypes from 'prop-types';
import MenuCategoryItem from '../../../components/MenuCategoryItem/MenuCategoryItem';
import CachableImage from '../../../components/CachableImage/CachableImage';
import BorderDivider from '../../../components/BorderDivider/BorderDivider';
import CheckBox from '@react-native-community/checkbox';
import Dropdown from '../../../components/Dropdown/Dropdown';
import PrepTimeIcon from '../../../assets/icons/generalIcons/prepTimeSVG.svg';
import TabMenuItem from '../../../components/TabMenuItem/TabMenuItem';
const ProductConfigScreen = props => {
  let dispatch = useDispatch();
  const [productName, setProductName] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [largeDescription, setLargeDescription] = useState('');
  const [iconImage, setIconImage] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [price, setPrice] = useState('');
  const [preOrderPrepTime, setPreOrderPrepTime] = useState('');
  const [orderNowPrepTime, setOrderNowPrepTime] = useState('');
  const [isPreOrderAvailable, setIsPreOrderAvailable] = useState(false);
  const [isOrderNowAvailable, setIsOrderNowAvailable] = useState(true);
  const [activeCuisinesArr, setActiveCuisinesArr] = useState([]);
  const [activeFiltersArr, setActiveFiltersArr] = useState([]);
  const [productCategoriesOpen, productCategoriesSetOpen] = useState(false);
  const [productCategoriesValue, productCategoriesSetValue] = useState('');
  const [productCategoriesItems, productCategoriesSetItems] = useState([]);

  const menuCategoryList = useSelector(state => state.menuCategoryList);
  const filterList = useSelector(state => state.filterList);
  const cuisineList = useSelector(state => state.cuisineList);
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
  let addCategoryId =
    props.route.params && props.route.params.hasOwnProperty('categoryId')
      ? props.route.params.categoryId
      : null;

  useEffect(() => {
    if (item) {
      setProductName(item.title);
      setIsActive(item.isActive);
      setLargeDescription(item.moreDescription);
      setShortDescription(item.description);
      setIconImage(item.iconImage);
      setPrice(item.price);
      setIsOrderNowAvailable(item.isOrderNowAvailable);
      setIsPreOrderAvailable(item.isPreOrderAvailable);
      setPreOrderPrepTime(item.preOrderPrepTime);
      setOrderNowPrepTime(item.orderNowPrepTime);
      if (!productCategoriesValue) {
        productCategoriesSetValue(item.categoryId);
      }
      setActiveCuisinesArr(item.cuisineList);
      setActiveFiltersArr(item.filterList);
    }
  }, [item, productCategoriesValue]);

  useEffect(() => {
    if (addCategoryId !== null && !productCategoriesValue) {
      productCategoriesSetValue(addCategoryId);
    }
  }, [addCategoryId, productCategoriesItems, productCategoriesValue]);

  useEffect(() => {
    productCategoriesSetItems(
      menuCategoryList.map(value => {
        return {label: value.title, value: value.id};
      }),
    );
    if (productCategoriesValue === undefined && menuCategoryList.length > 0) {
      productCategoriesSetValue(menuCategoryList[0].id);
    }
  }, [item, menuCategoryList, productCategoriesValue]);

  let pageName = (item ? 'Edit' : 'Add New') + ' Product';

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
          {/*--- Category MultiDropdownPicker Start ---- */}
          <View style={globalStyles.marginTop20}>
            <Text style={styles.titleText}>Category</Text>
            <Dropdown
              zIndex={productCategoriesOpen ? 1000 : 995}
              open={productCategoriesOpen}
              value={productCategoriesValue}
              items={productCategoriesItems}
              setOpen={productCategoriesSetOpen}
              setValue={productCategoriesSetValue}
              setItems={productCategoriesSetItems}
            />
          </View>
          {/*---Category MultiDropdownPicker End ---- */}
          {/*----------- Product Name Start --------------*/}
          <View style={{zIndex: -1}}>
            <Text style={styles.titleText}>Product Name</Text>
            <SquareGenericInputField
              value={productName}
              onChange={text => setProductName(text)}
            />
          </View>
          {/*----------- Product Name End --------------*/}
          {/*---- Category Picture Upload Start ------*/}
          <View style={[globalStyles.marginTop20, globalStyles.width100]}>
            <SideIconsWithTitle
              rightIconComponent={<DeleteIcon />}
              leftIconComponent={<DownloadIcon />}
              title="Add Product Image"
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
          {/*----------- Price Start --------------*/}
          <View style={globalStyles.marginTop20}>
            <Text style={styles.titleText}>Price</Text>
            <SquareGenericInputField
              value={price}
              keyboardType={'numeric'}
              onChange={text => setPrice(text)}
            />
          </View>
          {/*----------- Price End --------------*/}
          {/*------ Border Divider Start ------------*/}
          <BorderDivider
            containerBottomMargin={20}
            containerTopMargin={25}
            isActiveOnly={true}
            activeAreaWidth={32}
          />
          {/*------ Border Divider End ------------*/}

          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.justifySpaceBetween,
            ]}>
            {/*-- Checkboxes Start --*/}
            <View style={styles.checkboxContainer}>
              <Text style={styles.checkboxTitle}>Pre-Order</Text>
              <CheckBox
                style={styles.checkbox}
                boxType="square"
                lineWidth={1}
                onFillColor={allColors.yellow}
                tintColor={allColors.black}
                onCheckColor={allColors.white}
                onTintColor={allColors.yellow}
                value={isPreOrderAvailable}
                onValueChange={() =>
                  setIsPreOrderAvailable(!isPreOrderAvailable)
                }
              />
            </View>
            {/*-- Checkboxes End --*/}
            {/*-- Checkboxes Start --*/}
            <View style={styles.checkboxContainer2}>
              <Text style={styles.checkboxTitle}>Order Now</Text>
              <CheckBox
                style={styles.checkbox}
                boxType="square"
                lineWidth={1}
                onFillColor={allColors.yellow}
                tintColor={allColors.black}
                onCheckColor={allColors.white}
                onTintColor={allColors.yellow}
                value={isOrderNowAvailable}
                onValueChange={() =>
                  setIsOrderNowAvailable(!isOrderNowAvailable)
                }
              />
            </View>
            {/*-- Checkboxes End --*/}
          </View>

          {/*----------- Pre Order Prep Time Start --------------*/}
          {isPreOrderAvailable && (
            <View style={globalStyles.marginTop20}>
              <Text style={styles.titleText}>Pre-Order - Preparation Time</Text>
              <SquareGenericInputField
                leftIconComponent={
                  <PrepTimeIcon
                    width={horizontalScale(20)}
                    height={verticalScale(20)}
                  />
                }
                keyboardType="numeric"
                leftIconPaddingLeft={horizontalScale(15)}
                leftIconPaddingRight={horizontalScale(0)}
                value={preOrderPrepTime}
                onChange={text => {
                  setPreOrderPrepTime(convertToInteger(text).substring(0, 3));
                }}
              />
            </View>
          )}
          {/*----------- Pre Order Prep Time End --------------*/}
          {/*----------- Order Now Prep Time Start --------------*/}
          {isOrderNowAvailable && (
            <View style={globalStyles.marginTop20}>
              <Text style={styles.titleText}>Order Now - Preparation Time</Text>
              <SquareGenericInputField
                leftIconComponent={
                  <PrepTimeIcon
                    width={horizontalScale(20)}
                    height={verticalScale(20)}
                  />
                }
                keyboardType="numeric"
                leftIconPaddingLeft={horizontalScale(15)}
                leftIconPaddingRight={horizontalScale(0)}
                value={orderNowPrepTime}
                onChange={text =>
                  setOrderNowPrepTime(convertToInteger(text).substring(0, 3))
                }
              />
            </View>
          )}
          {/*----------- Order Now Prep Time End --------------*/}
          {/*------ Border Divider Start ------------*/}
          <BorderDivider
            activeAreaAlignment={'right'}
            containerBottomMargin={0}
            containerTopMargin={25}
            isActiveOnly={true}
            activeAreaWidth={32}
          />
          {/*------ Border Divider End ------------*/}
          {cuisineList.length > 0 && (
            <View style={[globalStyles.marginTop15]}>
              <Text style={styles.tagSelectionTitleText}>Cuisines:</Text>
              <View
                style={[globalStyles.flexDirectionRow, globalStyles.flexWrap]}>
                {cuisineList.map((value, index) => {
                  let activeIndex = activeCuisinesArr.indexOf(value.value);
                  let isActiveCuisine = activeIndex >= 0;
                  let cuisineListArr = [...activeCuisinesArr];
                  return (
                    <TabMenuItem
                      itemData={value}
                      isActive={isActiveCuisine}
                      onPress={() => {
                        if (isActiveCuisine) {
                          cuisineListArr.splice(activeIndex, 1);
                        } else {
                          cuisineListArr.push(value.value);
                        }
                        setActiveCuisinesArr(cuisineListArr);
                      }}
                      componentMarginRight={horizontalScale(10)}
                      componentMarginBottom={verticalScale(5)}
                      title={value.title}
                      key={'cuisine_list_' + index}
                    />
                  );
                })}
              </View>
            </View>
          )}
          {/*------ Border Divider Start ------------*/}
          <BorderDivider
            containerBottomMargin={0}
            containerTopMargin={20}
            isActiveOnly={true}
            activeAreaWidth={32}
          />
          {/*------ Border Divider End ------------*/}
          {filterList.length > 0 && (
            <View style={[globalStyles.marginTop20]}>
              <Text style={styles.tagSelectionTitleText}>Filters:</Text>
              <View
                style={[globalStyles.flexDirectionRow, globalStyles.flexWrap]}>
                {filterList.map((value, index) => {
                  let activeIndex = activeFiltersArr.indexOf(value.value);
                  let isActiveFilter = activeIndex >= 0;
                  let filterListArr = [...activeFiltersArr];
                  return (
                    <TabMenuItem
                      itemData={value}
                      isActive={isActiveFilter}
                      onPress={() => {
                        if (isActiveFilter) {
                          filterListArr.splice(activeIndex, 1);
                        } else {
                          filterListArr.push(value.value);
                        }
                        setActiveFiltersArr(filterListArr);
                      }}
                      componentMarginRight={horizontalScale(10)}
                      componentMarginBottom={verticalScale(5)}
                      title={value.title}
                      key={'filter_list_' + index}
                    />
                  );
                })}
              </View>
            </View>
          )}
          {/*------ Border Divider Start ------------*/}
          <BorderDivider
            activeAreaAlignment={'right'}
            containerBottomMargin={5}
            containerTopMargin={15}
            isActiveOnly={true}
            activeAreaWidth={32}
          />
          {/*------ Border Divider End ------------*/}
          {/*-----------Product Active Switch Start -----*/}
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
        </View>
        {/*-----------Category Active Switch End -----*/}
        {/*----------- Save/Cancel Changes Start -----*/}
        <View style={globalStyles.marginTop50}>
          <BackContinueButtons
            nextTitle={'SAVE'}
            backTitle={'CANCEL'}
            isDisabled={
              productName.length === 0 && shortDescription.length === 0
            }
            next={() => {
              if (item) {
                dispatch(
                  Action.editMenuCategoryProduct({
                    categoryId: item.categoryId,
                    productId: item.productId,
                    title: productName,
                    description: shortDescription,
                    isActive: isActive,
                    moreDescription: largeDescription,
                    iconImage: item.iconImage,
                    price: price,
                    isOrderNowAvailable: isOrderNowAvailable,
                    isPreOrderAvailable: isPreOrderAvailable,
                    preOrderPrepTime: preOrderPrepTime,
                    orderNowPrepTime: orderNowPrepTime,
                    cuisineList: activeCuisinesArr,
                    filterList: activeFiltersArr,
                  }),
                );
              } else {
                dispatch(
                  Action.addMenuCategoryProduct({
                    categoryId: productCategoriesValue,
                    title: productName,
                    description: shortDescription,
                    isActive: isActive,
                    moreDescription: largeDescription,
                    iconImage:
                      'https://images.unsplash.com/photo-1612392062126-5cc76074df9c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                    price: price,
                    isOrderNowAvailable: isOrderNowAvailable,
                    isPreOrderAvailable: isPreOrderAvailable,
                    preOrderPrepTime: preOrderPrepTime,
                    orderNowPrepTime: orderNowPrepTime,
                    cuisineList: activeCuisinesArr,
                    filterList: activeFiltersArr,
                    rating: 5,
                    ratingNum: 0,
                  }),
                );
              }
              props.navigation.goBack();
            }}
            back={() => props.navigation.goBack()}
          />
        </View>
        {/*----------- Save/Cancel Changes End -----*/}
      </ScrollView>
    </SafeAreaView>
  );
};

/*---- Default Props Start -------*/
MenuCategoryItem.defaultProps = {
  categoryId: '',
  description: '',
  iconImage: '',
  isActive: true,
  moreDescription: '',
  price: 0,
  productId: '',
  rating: 0,
  ratingNum: 0,
  title: '',
  toggleIsActive: () => {},
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
MenuCategoryItem.propTypes = {
  categoryId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  description: PropTypes.string,
  iconImage: PropTypes.string,
  isActive: PropTypes.bool,
  moreDescription: PropTypes.string,
  price: PropTypes.number,
  productId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onPress: PropTypes.func,
  onPressShowAll: PropTypes.func,
  rating: PropTypes.number,
  ratingNum: PropTypes.number,
  title: PropTypes.string,
  toggleIsActive: PropTypes.func,
};
export default ProductConfigScreen;
