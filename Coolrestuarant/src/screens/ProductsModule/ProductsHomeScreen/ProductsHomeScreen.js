/* eslint-disable */
import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, FlatList, SafeAreaView} from 'react-native';

//Third Party
import {useDispatch, useSelector} from 'react-redux';

//Components
import BorderDivider from '../../../components/BorderDivider/BorderDivider';
import Header from '../../../components/Header/Header';
import MenuCategoryItem from '../../../components/MenuCategoryItem/MenuCategoryItem';
import ReviewDisplay from '../../../components/ReviewDisplay/ReviewDisplay';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';
import TitleText from '../../../components/TitleText/TitleText';
import UnderlineTextIcon from '../../../components/UnderlineTextIcon/UnderlineTextIcon';

//Publicly Available Icons that Can be Used for Commercial Purposes
import Calendar from '../../../assets/icons/generalIcons/dateIcons/calendarSVG3.svg';
import ChevronRightIcon from '../../../assets/icons/generalIcons/chevronRightBlackSVG.svg';
import PlusIcon from '../../../assets/icons/supportIcons/plusSVG2.svg';
import CompanyInformationLogo from '../../../assets/images/logos/companyLogoSVG.svg';

//Utils
import Action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import Routes from '../../../navigation/Routes';
import styles from './style';
import {horizontalScale, screenHeight} from '../../../utility/Scale';
import {BUTTON_TYPE, FONT_FAMILY} from '../../../constants/constants';
import {navigate} from '../../../utility/NavigationService';
import LongButton from '../../../components/LongButton/LongButton';
import {allColors} from '../../../assets/styles/mainColors';
import RestaurantImage from '../../../assets/images/wizard/restaurantImageSVG.svg';

const RestaurantDescriptionScreen = ({navigation}) => {
  const dispatch = useDispatch();
  //get menu list items
  const menuCategoryListItems = useSelector((state) => state.menuCategoryList);

  const [menuCategoryListArray, setmenuCategoryListArray] = useState([]);

  //set menu items
  useEffect(() => {
    setmenuCategoryListArray(menuCategoryListItems);
  }, [menuCategoryListItems]);

  //title picture setup
  const TitlePictureView = () => {
    return (
      <View>
        <TitlePicture
          componentTopPadding={5}
          imageComponent={<CompanyInformationLogo />}
          titleTopPadding={5}
          title={'"La Casa" Cafe'}
          componentBottomPadding={8}
        />
      </View>
    );
  };

  //Rating Information Container
  const RatingsView = () => {
    return (
      <View>
        <Text style={globalStyles.commonRobotoText}>
          {'Burgers, Salads,Burritos, Sandwiches, Drink'}
        </Text>
        <View
          style={[
            globalStyles.flexDirectionRow,
            globalStyles.alignItemsCenter,
            {marginTop: 2},
          ]}>
          <ReviewDisplay
            marginLeftText={18}
            rating={4}
            ratingNum={4}
            isDescriptionShown={true}
          />
          <View style={{marginLeft: horizontalScale(7)}}>
            <UnderlineTextIcon
              fontFamily={FONT_FAMILY.RobotoCondensedLight}
              fontWeight={'300'}
              fontSize={11}
              onPress={() => navigate(Routes.StoreReviewScreen)}
              isUnderlined={true}
              title={'read review'}
              rightIconSVG={<ChevronRightIcon />}
            />
          </View>
        </View>
      </View>
    );
  };

  //Delivery information container
  const AddressView = () => {
    return (
      <View
        style={[
          globalStyles.marginTop10,
          globalStyles.flexDirectionRow,
          globalStyles.justifySpaceBetween,
        ]}>
        <View style={globalStyles.flexDirectionRow}>
          <View>
            <Text style={styles.titleText}>{'$3'}</Text>
            <Text style={styles.titleDesc}>{'Delivery'}</Text>
          </View>
          <View style={{marginHorizontal: horizontalScale(10)}}>
            <Text style={styles.titleText}>{'37'}</Text>
            <Text style={styles.titleDesc}>{'Min'}</Text>
          </View>
          <View>
            <Text style={styles.titleText}>{'3.4'}</Text>
            <Text style={styles.titleDesc}>{'Mi/Km'}</Text>
          </View>
        </View>
      </View>
    );
  };

  //
  const RestaurantDescriptionView = () => {
    return (
      <View>
        {/*-Restaurant Information Start--*/}
        <View style={globalStyles.marginTop10}>
          {/*-Restaurant Image Start--*/}
          <View style={{width: '100%', height: screenHeight * 0.237}}>
            <RestaurantImage
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 5,
              }}
            />
          </View>
          {/*-Restaurant Image End--*/}

          {/*-Restaurant Address Start--*/}
          <View style={globalStyles.marginTop10}>
            <Text style={globalStyles.commonRobotoText}>
              {'Address: ' + '67 Prince St #1827, Boston, MA'}
            </Text>
            <Text style={globalStyles.commonRobotoText}>
              {'Phone: ' + '(617) 397 8384'}
            </Text>
          </View>
          {/*-Restaurant Address End--*/}
        </View>
        {/*-Restaurant Information End--*/}

        {/*-Restaurant Operating Hours Start--*/}
        <View style={globalStyles.marginTop15}>
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.justifySpaceBetween,
              globalStyles.alignItemsCenter,
            ]}>
            <View
              style={[
                globalStyles.flexDirectionRow,
                globalStyles.alignItemsCenter,
              ]}>
              <Calendar />
              <Text
                style={[
                  globalStyles.commonRobotoText,
                  globalStyles.marginLeft5,
                ]}>
                {'Monday - Friday'}
              </Text>
            </View>
            <View
              style={[
                globalStyles.flexDirectionRow,
                globalStyles.alignItemsCenter,
              ]}>
              <Text style={globalStyles.commonRobotoText}>
                {'09:00 - 22:00'}
              </Text>
            </View>
          </View>
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.justifySpaceBetween,
            ]}>
            <View
              style={[
                globalStyles.flexDirectionRow,
                globalStyles.alignItemsCenter,
              ]}>
              <Calendar />
              <Text
                style={[
                  globalStyles.commonRobotoText,
                  globalStyles.marginLeft5,
                ]}>
                {'Weekends'}
              </Text>
            </View>
            <View
              style={[
                globalStyles.flexDirectionRow,
                globalStyles.alignItemsCenter,
              ]}>
              <Text style={globalStyles.commonRobotoText}>
                {'14:00 - 22:00'}
              </Text>
            </View>
          </View>
        </View>
        {/*-Restaurant Operating Hours End--*/}
      </View>
    );
  };

  //Menu Categories and its description
  const MenuCategories = () => {
    return (
      <View>
        <View>
          {/*------- Page Introductory Title Start ------*/}
          <TitleText
            title={'Menu by Categories'}
            containerBottomPadding={7}
            containerTopPadding={0}
            titleFontWeight={'400'}
            titleFontSize={16}
          />
          {/*------- Page Introductory Title End ------*/}
        </View>
        <View>
          <Text style={globalStyles.commonRobotoText}>
            {
              'Cras blandit consequat sapien ut cursus. Duis in mollis de magna. Sed sit amet nulla. Pellentesque non ex velit.'
            }
          </Text>
        </View>
      </View>
    );
  };

  //menu category item list render
  const renderMenuCategoryItemRows = ({item}) => {
    return (
      <MenuCategoryItem
        key={'menu_category_item' + item.id}
        isActive={item.isActive}
        categoryId={item.id}
        title={item.title}
        rating={item.rating}
        ratingNum={item.ratingNum}
        description={item.description}
        moreDescription={item.moreDescription}
        iconImage={item.iconImage}
        toggleIsActive={() => {
          dispatch(Action.toggleCategoryIsActive(item.id));
        }}
        onPress={() => navigate(Routes.CategoryDescriptionScreen, {item: item})}
      />
    );
  };

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        leftIcon={null}
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[globalStyles.flexGrow1]}>
        <View style={globalStyles.flexGrow1}>
          <View
            style={[
              globalStyles.horizontalGeneralPadding,
              globalStyles.flex,
              globalStyles.marginBottom30,
            ]}>
            {/*---- Page Title and Picture Container Start ------*/}
            <TitlePictureView />
            {/*---- Page Title and Picture Container End ------*/}

            {/*---- Rating Information Start ------*/}
            <RatingsView />
            {/*---- Rating Information End ------*/}

            {/*---- Address Information Start ------*/}
            <AddressView />
            {/*---- Address Information End ------*/}

            <View>
              <RestaurantDescriptionView />

              {/*------ Divider Start -----------*/}
              <BorderDivider
                containerTopMargin={27}
                containerBottomMargin={23}
                activeAreaAlignment={'left'}
                activeAreaWidth={66}
                isActiveOnly={false}
                activeAreaHeight={1.5}
              />
              {/*------ Divider End -----------*/}

              <MenuCategories />
              {/*---- Add New Category Button Start ------*/}
              <View style={globalStyles.marginTop25}>
                <LongButton
                  title={'ADD CATEGORY'}
                  titleFontColor={allColors.black}
                  titleFontFamily={FONT_FAMILY.RobotoLight}
                  titleFontSize={16}
                  titleFontWeight={'300'}
                  hasPrecedingIcon={true}
                  precedingIconPaddingRight={7}
                  precedingIconPaddingTop={-1}
                  precedingIconComponent={<PlusIcon />}
                  type={BUTTON_TYPE.PRIMARYLIGHT}
                  isSquare={true}
                  onPress={() =>
                    navigation.navigate(Routes.CategoryConfigScreen)
                  }
                />
              </View>
              {/*---- Add New Category Button End ------*/}
              {/*---- Add New Product Button Start ------*/}
              {menuCategoryListArray && menuCategoryListArray.length > 0 && (
                <View style={globalStyles.marginTop10}>
                  <LongButton
                    title={'ADD PRODUCT'}
                    titleFontColor={allColors.black}
                    titleFontFamily={FONT_FAMILY.RobotoLight}
                    titleFontSize={16}
                    titleFontWeight={'300'}
                    hasPrecedingIcon={true}
                    precedingIconPaddingRight={7}
                    precedingIconPaddingTop={-1}
                    precedingIconComponent={<PlusIcon />}
                    type={BUTTON_TYPE.LIGHT}
                    isSquare={true}
                    onPress={() =>
                      navigation.navigate(Routes.ProductConfigScreen)
                    }
                  />
                  {/*---- Add New Product Button End ------*/}
                </View>
              )}
              {menuCategoryListArray && menuCategoryListArray.length > 0 && (
                <View>
                  {/*------ Border Divider Start ------------*/}
                  <BorderDivider
                    activeAreaAlignment={'right'}
                    containerTopMargin={25}
                    containerBottomMargin={5}
                  />
                  {/*------ Border Divider End ------------*/}
                  <FlatList
                    //performance settings
                    //initialNumToRender={1} // Reduce initial render amount
                    //maxToRenderPerBatch={1} // Reduce number in each render batch
                    // windowSize={7} // Reduce the window size
                    extraData={menuCategoryListArray}
                    showsVerticalScrollIndicator={false}
                    data={menuCategoryListArray}
                    renderItem={renderMenuCategoryItemRows}
                    contentContainerStyle={[
                      globalStyles.paddingTop20,
                      globalStyles.commonScrollViewPadding,
                    ]}
                    ItemSeparatorComponent={() => (
                      <View style={styles.gapView} />
                    )}
                    keyExtractor={(_item, index) => index.toString()}
                  />
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RestaurantDescriptionScreen;
