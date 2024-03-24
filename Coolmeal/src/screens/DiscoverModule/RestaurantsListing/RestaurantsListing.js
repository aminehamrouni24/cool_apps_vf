/* eslint-disable */
import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView, FlatList, Text, View, ScrollView, Image} from 'react-native';

//Third Party
import {useDispatch, useSelector} from 'react-redux';

//Components
import BorderDivider from '../../../components/BorderDivider/BorderDivider';
import CommonTabMenuList from '../../../components/CommonTabMenuList/CommonTabMenuList';
import Header from '../../../components/Header/Header';

import LargeRestaurantInfo from '../../../components/LargeRestaurantInfo/LargeRestaurantInfo';
import LongButton from '../../../components/LongButton/LongButton';
import LookingByMapScreen from '../LookingByMapScreen/LookingByMapScreen';
import NoInformationText from '../../../components/NoInformationText/NoInformationText';
import TitleWithSideIcons from '../../../components/TitleWithSideIcons/TitleWithSideIcons';

//Publicly Available Icons that Can be Used for Commercial Purposes
import ActiveLocation from '../../../assets/icons/discoverMenuIcons/active_locationSVG.svg';
import Location from '../../../assets/icons/discoverMenuIcons/inactive_locationSVG.svg';
import HomeLocation from '../../../assets/icons/generalIcons/locationIcons/red_houseSVG.svg';

//Utils
import Action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import Routes from '../../../navigation/Routes';
import {BUTTON_TYPE, FONT_FAMILY} from '../../../constants/constants';
import {allColors} from '../../../assets/styles/mainColors';
import {loadPagination} from '../../../utility/Helper';
import {horizontalScale, verticalScale} from '../../../utility/Scale';
import {navigate} from '../../../utility/NavigationService';

//Dummy Data
import RestaurantListDummy from '../../../DummyData/RestaurantListDummyData.json';



/* --- Start Restaurant List --- */

const RestaurantListView = React.memo(({route}) => {
  const dispatch = useDispatch();
  //store the restaurant list in redux
  const storeRestaurantList = useCallback(
    () => dispatch(Action.storeRestaurantList(RestaurantListDummy.data)),
    [dispatch],
  );
  //get the restaurant list
  const tempRestaurantList = useSelector(state => state.restaurantList, []);
  const [restaurantList, setRestaurantList] = useState([]);
  const [offset, setOffset] = useState(1);
  const [noDataAvailable, setNoDataAvailable] = useState(false);

  //updates after redux store update
  useEffect(() => {
    storeRestaurantList();
  }, []);

  //get other pages
  useEffect(() => {
    pagination(tempRestaurantList, 2, offset);
  }, [tempRestaurantList]);

  //get other pages
  useEffect(() => {
    if (offset > 1) {
      pagination(tempRestaurantList, 2, offset);
    }
  }, [offset]);

  //pagination function that takes care of how many elements should show
  function pagination(array, page_size, page_number) {
    let temp = loadPagination(array, page_size, page_number);
    if (temp.length > 0) {
      setRestaurantList([...restaurantList, ...temp]);
      if (tempRestaurantList.length <= restaurantList.length + page_size) {
        setNoDataAvailable(true);
      } else {
        setNoDataAvailable(false);
      }
    } else {
      setNoDataAvailable(true);
    }
  }

  //border divider component for dividing each restaurant
  const SeparatorComponent = () => {
    return (
      <View>
        <BorderDivider
          containerTopMargin={12}
          containerBottomMargin={20}
          activeAreaAlignment={'left'}
          activeAreaWidth={0}
          isActiveOnly={false}
          activeAreaHeight={1}
        />
      </View>
    );
  };

  //load more button to get more data
  const LoadMoreButton = () => {
    return (
      <View style={globalStyles.marginTop30}>
        {noDataAvailable ? null : (
          <LongButton
            title={'LOAD MORE'}
            titleFontSize={18}
            titleFontColor={allColors.black}
            titleFontWeight={'300'}
            titleFontFamily={FONT_FAMILY.RobotoCondensedLight}
            type={BUTTON_TYPE.LIGHT}
            onPress={() => setOffset(offset => offset + 1)}
          />
        )}
      </View>
    );
  };

  //for performance purposes
  const getRestaurantListItemLayout = (data, index) => ({
    length: 300,
    offset: 300 * index,
    index,
  });

  //restaurant list row item
  const renderRestaurantListRows = ({item, index}) => {
    return (
      <LargeRestaurantInfo
        key={'large_restaurant_info_' +index}
        title={item.title}
        rating={item.rating}
        deliveryTime={item.deliveryTime}
        description={item.description}
        deliveryFee={'$' + item.deliveryFee}
        onPress={() =>
          navigate(Routes.SliderSelectedScreen, {
            headerTitle: route.params.headerTitle,
            topTitle: route.params.topTitle,
          })
        }
        imageIconPath={item.imageIconPath}
      />
    );
  };

  return (
    <View style={[globalStyles.flex, globalStyles.justifyCenter]}>
      {restaurantList.length > 0 ? (
        <FlatList
          // Performance settings
          //removeClippedSubviews={true} // Unmount components when outside of window
          // initialNumToRender={1} // Reduce initial render amount
          // maxToRenderPerBatch={1} // Reduce number in each render batch
          // windowSize={7} // Reduce the window size
          showsVerticalScrollIndicator={false}
          data={restaurantList}
          // getItemLayout={getRestaurantListItemLayout}
          renderItem={renderRestaurantListRows}
          contentContainerStyle={[
            globalStyles.horizontalGeneralPadding,
            globalStyles.commonScrollViewPadding,
          ]}
          ItemSeparatorComponent={SeparatorComponent}
          ListFooterComponent={LoadMoreButton}
          keyExtractor={(_item, index) => _item.title.split(' ').join('')+index}
        />
      ) : (
        <NoInformationText />
      )}
    </View>
  );
}, [true]);

/* --- End Restaurant List --- */

/* --- Start Tab Menu --- */
const TabMenuView = React.memo(() => {
  return (
    <View style={globalStyles.marginTop15}>
      <CommonTabMenuList />
    </View>
  );
});
/* --- End Tab Menu --- */

const RestaurantsListing = ({navigation, route}) => {
  const [showMap, setShowMap] = useState(false);

  //title right icons definition
  const rightIconArray = [
    {
      functionName: 'LocationClick',
      component: showMap ? <ActiveLocation /> : <Location />,
    },
  ];

  //what happens on click of right icon
  const handleRightIconClick = value => {
    switch (value) {
      case 'LocationClick': {
        setShowMap(!showMap);
        break;
      }
      default:
        return;
    }
  };

  //border divider styles
  const TopBorderView = () => (
    <View style={globalStyles.paddingLeftGeneral}>
      <BorderDivider
        containerTopMargin={16}
        containerBottomMargin={20}
        activeAreaAlignment={'left'}
        activeAreaWidth={79}
        isActiveOnly={false}
        activeAreaHeight={2}
      />
    </View>
  );

  /* --- Start Title Top View --- */
  const TitleWithTopIconView = () => (
    <View style={globalStyles.horizontalGeneralPadding}>
      <TitleWithSideIcons
        titleFontWeight={'normal'}
        fontSize={20}
        title={'Restaurants'}
        containerTopPadding={17}
        containerBottomPadding={9}
        leftIcon={<Image
            source={require('../../../assets/placeholders/20x20.png')}
            style={{
              height: verticalScale(20),
              width: horizontalScale(20),
              borderRadius: 3,
            }}
        />}
        rightIconComponentsArray={rightIconArray}
        iconOnPress={value => handleRightIconClick(value)}
      />
      <Text style={[globalStyles.commonRobotoText]}>
        {
          'Cras blandit consquat sapien ut curcus. Duis in mollis magna. Sed sit amet nulla. Pellentesque non ex velit.'
        }
      </Text>
    </View>
  );
  /* --- End Title Top View --- */

  /* ---- Start map view component ----*/
  const ShowMapView = () => {
    const currentAddress = useSelector(state => state.currentAddress);
    return (
      <View style={[globalStyles.flex, globalStyles.horizontalGeneralPadding]}>
        <LookingByMapScreen
          googleMarker={[
            {
              profilePicturePath:
                'https://images.unsplash.com/photo-1601999109332-542b18dbec57?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
              name: 'Sabrina Lorenshtein',
              address: currentAddress,
              showRatingView: true,
              rating: 4,
              ratingNum: 4,
              homeIcon: <HomeLocation height={80} width={80} />,
              latitude: 42.35433012130913,
              longitude: -71.05910008814041,
            },
          ]}
        />
      </View>
    );
  };
  /* ---- end map view component ----*/

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        title={showMap ? 'Looking by Map' : 'Restaurants Listing'}
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={globalStyles.flexGrow1}>
        <View style={globalStyles.flexGrow1}>
          {/*------ Title and Description with icons start -----------*/}
          <TitleWithTopIconView />
          {/*------ Title and Description with icons end -----------*/}
          <TabMenuView />
          {/*------ Divider start -----------*/}
          <TopBorderView />
          {/*------ Divider End -----------*/}


          {/*-- shows appropriate view according to users selection --*/}
          {showMap ? <ShowMapView /> : <RestaurantListView route={route} />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RestaurantsListing;
