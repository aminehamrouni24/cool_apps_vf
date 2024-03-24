import React, {useState, createRef, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';

//Third Party
import {ActionSheetCustom as ActionSheet} from 'react-native-custom-actionsheet';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigationState} from '@react-navigation/native';

//Components
import ActionSheetItem from '../../../components/ActionSheetItem/ActionSheetItem';
import BorderCategory from '../../../components/BorderCategory/BorderCategory';
import BorderDivider from '../../../components/BorderDivider/BorderDivider';
import Header from '../../../components/Header/Header';
import TitleWithSideIcons from '../../../components/TitleWithSideIcons/TitleWithSideIcons';

//Publicly Available Icons that Can be Used for Commercial Purposes
import AddIcon from '../../../assets/icons/discoverMenuIcons/add_smallSVG.svg';
import AddressIcon from '../../../assets/icons/discoverMenuIcons/addressSVG.svg';
import ARROWLEFT from '../../../assets/icons/generalIcons/arrowIcons/arrow_leftSVG.svg';
import Dots from '../../../assets/icons/discoverMenuIcons/dotSVG.svg';
import DownArrow from '../../../assets/icons/discoverMenuIcons/down_chevronSVG.svg';
import Edit from '../../../assets/icons/discoverMenuIcons/editSVG.svg';

//Dummy Data
import FoodTypesDummyData from '../../../DummyData/FoodOptionTypeDummyData';
import AddressSettingDummyData from '../../../DummyData/AddressSettingDummyData.json';

//Utils
import Action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import Routes from '../../../navigation/Routes';
import styles from './style';
import {allColors} from '../../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../../constants/constants';
import {navigate} from '../../../utility/NavigationService';
import {screenHeight} from '../../../utility/Scale';

const actionSheetRef = createRef();

const DiscoverHomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const tempFoodOptions = useSelector(state => state.foodOptions);
  const currentAddress = useSelector(state => state.currentAddress, []);
  const [headerTitle, setHeaderTitle] = useState('Current Location');
  const [foodTypes, setFoodTypes] = useState([]);
  const routesLength = useNavigationState(state => state.routes.length);
  const tempAddressed = useSelector(state => state.userAddressList, []);
  /*---- Get the address option data start -----*/
  const storeUserAddressData = useCallback(
    () => dispatch(Action.storeUserAddress(AddressSettingDummyData.data)),
    [dispatch],
  );
  /*---- Get the address option data end -----*/

  /*---- Set the address options for location popup start -----*/
  const [options, setOptions] = useState([
    'Cancel',
    {
      component: (
        <ActionSheetItem
          title={'Current Location'}
          leftIcon={<AddressIcon />}
        />
      ),
      height: screenHeight * 0.07,
    },
    {
      component: (
        <ActionSheetItem
          title={'Add an Address'}
          leftIcon={<AddIcon style={styles.locationImageStyle} />}
        />
      ),
      height: screenHeight * 0.07,
    },
  ]);
  /*---- Set the address options for location popup start -----*/

  /*---- Update the user address data ----*/
  useEffect(() => {
    storeUserAddressData();
  }, [storeUserAddressData]);

  /*----- if only 3 default options are available - see if user should have more options from the addresses saved -----*/
  useEffect(() => {
    if (options.length === 3) {
      tempAddressed.map(item => {
        options.splice(2, 0, {
          component: (
            <ActionSheetItem title={item.address} leftIcon={<AddressIcon />} />
          ),
          height: screenHeight * 0.07,
        });
      });
    }
  }, [options, tempAddressed]);

  /*---- update the food options data -----*/
  useEffect(() => {
    dispatch(Action.storeFoodOptions(FoodTypesDummyData.data));
  }, [dispatch]);

  /*------ set the food types ------*/
  useEffect(() => {
    setFoodTypes(tempFoodOptions);
  }, [tempFoodOptions]);

  /*----set current address as ------*/
  useEffect(() => {
    dispatch(Action.setCurrentAddress('Current Location'));
    //how to clean up after this effect?
    return () => dispatch(Action.setCurrentAddress([]));
  }, [dispatch]);

  /*----- Action Sheet (determine which index turns off the option popup) ------*/
  const CANCEL_INDEX = 0;

  /*------ Action Sheet Title Start ------*/
  const renderActionSheetTitle = () => (
    <Text style={styles.actionSheetTitleText}>{'Select Delivery Address'}</Text>
  );
  /*------ Action Sheet Title End ------*/

  /*------ Display Action Sheet Function Start ------*/
  const showActionSheet = () => actionSheetRef.current?.show();
  /*------ Display Action Sheet Function End ------*/

  /*------ Function to determine where to navigate ------*/
  function navigateToScreen(itemData) {
    if (itemData.newItem) {
    } else {
      return navigate(Routes.TopCategories, {
        headerTitle: itemData.title,
        headerDescription: itemData.description,
      });
    }
  }

  /*------------ Function to determine which address was selected -------------*/
  function selectedAddress(index) {
    if (index === 1) {
      setHeaderTitle('81 Charter Str. Boston, MA USA');
      dispatch(Action.setCurrentAddress('81 Charter Str. Boston, MA USA'));
    } else if (index === options.length - 1) {
      navigate(Routes.AddressSetting);
    } else if (index !== 0) {
      options.map((item, i) => {
        if (index === i) {
          setHeaderTitle(item.component.props.title);
          dispatch(Action.setCurrentAddress(item.component.props.title));
        }
      });
    }
  }

  /*------------ Function returns each category -------------*/
  const categoryRows = ({item, index}) => {
    return (
      <BorderCategory
        key={'border_category_row' + index}
        itemData={item}
        onPress={itemData => navigateToScreen(itemData)}
        title={item.title}
        description={item.description}
        activeImageComponent={item.activeImageComponent}
        informationAlignment={'left'}
        titleFontSize={18}
        titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
        titleFontWeight={'normal'}
        titlePaddingTop={5}
        descriptionFontFamily={FONT_FAMILY.RobotoLight}
        descriptionFontWeight={'300'}
        descriptionFontSize={13}
        descriptionFontColor={allColors.black}
        descriptionPaddingTop={0}
        componentPaddingTop={25}
        componentPaddingLeft={22}
        componentMarginRight={index % 2 === 0 ? 10 : 0}
        componentPaddingBottom={15}
        isActive={true}
        componentMarginBottom={11}
        componentBorderRadius={24}
        componentWidth={'48%'}
        type={item.newItem ? 'NEW_ITEM' : 'ITEM'}
      />
    );
  };

  /* -- Header Title Definition -- */
  const RenderTitleComponent = () => {
    return (
      <TouchableOpacity
        onPress={() => showActionSheet()}
        style={[
          globalStyles.flexDirectionRow,
          globalStyles.alignItemsCenter,
          globalStyles.alignSelf,
        ]}>
        <Text
          numberOfLines={1}
          style={[globalStyles.commonHeaderText, globalStyles.marginRight5]}>
          {headerTitle}
        </Text>
        <DownArrow height={10} width={10} />
      </TouchableOpacity>
    );
  };

  /* -- Function to handle click event on Discover By Types dots -- */
  const handleRightIconClick = value => {
    switch (value) {
      case 'DotsClicked1':
        alert('You have clicked the dots action');
        break;
      default:
        return;
    }
  };

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------ Header start -----------*/}
      <Header
        SelectDeliveryAddress={<RenderTitleComponent />}
        leftIcon={
          routesLength > 1 ? <ARROWLEFT height={24} width={24} /> : null
        }
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />
      {/*------ Header End -----------*/}
      <ScrollView
        style={globalStyles.flex}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={globalStyles.commonScrollViewPadding}>
        {/*------ Title and Description with options start -----------*/}
        <View style={globalStyles.horizontalGeneralPadding}>
          <TitleWithSideIcons
            titleFontWeight={'normal'}
            fontSize={24}
            title={'Discover By Types'}
            containerTopPadding={15}
            containerBottomPadding={8}
            rightIconComponentsArray={[
              {functionName: 'DotsClicked1', component: <Dots />},
            ]}
            iconOnPress={value => handleRightIconClick(value)}
          />
          <View style={[globalStyles.flexDirectionRow]}>
            <Text style={styles.deliveringToText}>
              {'Delivering to: '}
              <Text style={styles.addressText}>
                {currentAddress}
                <Text onPress={() => showActionSheet()}>
                  {'   '}
                  {Platform.OS === 'android' ? (
                    <Edit />
                  ) : (
                    <TouchableOpacity onPress={() => showActionSheet()}>
                      <Edit />
                    </TouchableOpacity>
                  )}
                </Text>
              </Text>
            </Text>
          </View>
          {/*------ Divider Start -----------*/}
          <BorderDivider
            containerTopMargin={12}
            containerBottomMargin={20}
            activeAreaAlignment={'left'}
            activeAreaWidth={33}
            isActiveOnly={true}
            activeAreaHeight={1.5}
          />
          {/*------ Divider End -----------*/}
        </View>
        {/*------ Title and Description with options end -----------*/}

        {/*------ Category listing start -----------*/}
        <View
          style={[globalStyles.flex, globalStyles.horizontalGeneralPadding]}>
          <FlatList
            // Performance settings
            //initialNumToRender={3} // Reduce initial render amount
            // maxToRenderPerBatch={1} // Reduce number in each render batch
            // windowSize={7} // Reduce the window size
            showsVerticalScrollIndicator={false}
            data={[...foodTypes, {newItem: true}]}
            numColumns={2}
            contentContainerStyle={[
              globalStyles.alignSelf,
              globalStyles.commonScrollViewPadding,
            ]}
            renderItem={categoryRows}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        {/*------ Category listing end -----------*/}

        {/*------ Action Sheet for choosing an address start -----------*/}
        <ActionSheet
          titleHeight={screenHeight * 0.055}
          ref={actionSheetRef}
          title={renderActionSheetTitle()}
          options={options}
          cancelButtonIndex={CANCEL_INDEX}
          onPress={index => selectedAddress(index)}
        />
        {/*------ Action Sheet for choosing an address end -----------*/}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DiscoverHomeScreen;
