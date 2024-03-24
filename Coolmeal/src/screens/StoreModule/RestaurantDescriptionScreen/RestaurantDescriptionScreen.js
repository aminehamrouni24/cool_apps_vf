/* eslint-disable */
import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList,
    SafeAreaView, Image,
} from 'react-native';

//Third Party
import {useDispatch, useSelector} from 'react-redux';

//Components
import BorderDivider from '../../../components/BorderDivider/BorderDivider';
import CachableImage from '../../../components/CachableImage/CachableImage';
import Header from '../../../components/Header/Header';
import LookingByMapScreen from '../../DiscoverModule/LookingByMapScreen/LookingByMapScreen';
import MenuCategoryItem from '../../../components/MenuCategoryItem/MenuCategoryItem';
import ReviewDisplay from '../../../components/ReviewDisplay/ReviewDisplay';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';
import TitleText from '../../../components/TitleText/TitleText';
import UnderlineTextIcon from '../../../components/UnderlineTextIcon/UnderlineTextIcon';

//Publicly Available Icons that Can be Used for Commercial Purposes
import ActiveLocation from '../../../assets/icons/discoverMenuIcons/active_locationSVG.svg';
import Calendar from '../../../assets/icons/generalIcons/dateIcons/calendarSVG.svg';
import ChevronRightIcon from '../../../components/icons/ChevronRightIcon/ChevronRightIcon';
import HomeIcon from '../../../assets/icons/generalIcons/locationIcons/red_houseSVG.svg';
import Location from '../../../assets/icons/discoverMenuIcons/inactive_locationSVG.svg';

//Utils
import Action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import Routes from '../../../navigation/Routes';
import styles from './style';
import {
    horizontalScale,
    screenHeight, verticalScale,
} from '../../../utility/Scale';
import {FONT_FAMILY} from '../../../constants/constants';
import {navigate} from '../../../utility/NavigationService';

//Dummy Data
import MenuItemDummy from '../../../DummyData/MenuItemDummyData';

const RestaurantDescriptionScreen = ({navigation}) => {
  const dispatch = useDispatch();
  //get menu list items
  const menuListItems = useSelector(state => state.menuList);
  const [showMap, setShowMap] = useState(false);

  const [menuListArray, setMenuListArray] = useState([]);

  //put menu list items in redux store and update
  useEffect(() => {
    dispatch(Action.storeMenuList(MenuItemDummy.data));
  }, []);

  //set menu items
  useEffect(() => {
    setMenuListArray(menuListItems);
  }, [menuListItems]);

  //title picture setup
  const TitlePictureView = () => {
    return (
      <View>
        <TitlePicture
          componentTopPadding={5}
          imageComponent={
              <Image
                  source={require('../../../assets/placeholders/63x55.png')}
                  style={{width: verticalScale(63), height: horizontalScale(55), borderRadius: 3}}
              />
          }
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
          globalStyles.marginTop13,
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
        <TouchableOpacity
          onPress={() => setShowMap(!showMap)}
          style={{alignSelf: 'flex-end'}}>
          {showMap ? <ActiveLocation /> : <Location />}
        </TouchableOpacity>
      </View>
    );
  };

  //
  const RestaurantDescriptionView = () => {
    return (
      <View>
        {/*-Restaurant Information Start--*/}
        <View style={globalStyles.marginTop15}>
          {/*-Restaurant Image Start--*/}
          <View style={{width: '100%', height: screenHeight * 0.237}}>
            <CachableImage
              style={{flex: 1, borderRadius: 5}}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1505620391902-46b120671eb6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
        title={item.title}
        rating={item.rating}
        ratingNum={item.ratingNum}
        itemNum={item.itemNum}
        description={item.description}
        moreDescription={item.moreDescription}
        iconImage={item.iconImage}
        onPress={() =>
          navigate(Routes.RestaurantMenuScreen, {title: item.title})
        }
      />
    );
  };

  //Map View of the restaurant
  const ShowMapView = () => {
    return (
      <View style={[globalStyles.flex, globalStyles.marginTop15]}>
        <LookingByMapScreen
          tempMarkers={false}
          googleMarker={[
            {
              profilePicturePath:
                'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
              name: '67 Prince St #1827, Boston, MA',
              address: '67 Prince St #1827, Boston, MA',
              showRatingView: true,
              rating: 4,
              ratingNum: 4,
              homeIcon: <HomeIcon height={80} width={80} />,
              latitude: 42.36535560364991,
              longitude: -71.0547744751942,
            },
          ]}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[globalStyles.flexGrow1]}>
        <View style={globalStyles.flexGrow1}>
          <View
            style={[globalStyles.horizontalGeneralPadding, globalStyles.flex]}>
            {/*---- Page Title and Picture Container Start ------*/}
            <TitlePictureView />
            {/*---- Page Title and Picture Container End ------*/}

            {/*---- Rating Information Start ------*/}
            <RatingsView />
            {/*---- Rating Information End ------*/}

            {/*---- Address Information Start ------*/}
            <AddressView />
            {/*---- Address Information End ------*/}

            {showMap ? (
              <ShowMapView />
            ) : (
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
                <FlatList
                  //performance settings
                  //initialNumToRender={1} // Reduce initial render amount
                  //maxToRenderPerBatch={1} // Reduce number in each render batch
                  // windowSize={7} // Reduce the window size
                  showsVerticalScrollIndicator={false}
                  data={menuListArray}
                  renderItem={renderMenuCategoryItemRows}
                  contentContainerStyle={[
                    globalStyles.paddingTop20,
                    globalStyles.commonScrollViewPadding,
                  ]}
                  ItemSeparatorComponent={() => <View style={styles.gapView} />}
                  keyExtractor={(_item, index) => index.toString()}
                />
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RestaurantDescriptionScreen;
