/* eslint-disable */
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, ScrollView, Image} from 'react-native';

//Components
import BorderDivider from '../../../components/BorderDivider/BorderDivider';
import ChevronRightIcon from '../../../components/icons/ChevronRightIcon/ChevronRightIcon';
import CommonBrowseList from '../../../components/CommonBrowseList/CommonBrowseList';
import CommonFoodCategoryMenu from '../../../components/CommonFoodCategoryMenu/CommonFoodCategoryMenu';
import CommonTabMenuList from '../../../components/CommonTabMenuList/CommonTabMenuList';
import Header from '../../../components/Header/Header';
import LargeRestaurantInfo from '../../../components/LargeRestaurantInfo/LargeRestaurantInfo';
import SearchBoxWithRightIcon from '../../../components/SearchBoxWithRightIcon/SearchBoxWithRightIcon';
import SliderWithNoSides from '../../../components/SliderWithNoSides/SliderWithNoSides';
import SliderWithSides from '../../../components/SliderWithSides/SliderWithSides';
import TitleWithSideIcons from '../../../components/TitleWithSideIcons/TitleWithSideIcons';
import UnderlineTextIcon from '../../../components/UnderlineTextIcon/UnderlineTextIcon';

//Publicly Available Icons that Can be Used for Commercial Purposes
import Menu from '../../../assets/icons/discoverMenuIcons/filtersSVG.svg';
import Search from '../../../assets/icons/discoverMenuIcons/searchSVG.svg';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import Routes from '../../../navigation/Routes';
import {FONT_FAMILY} from '../../../constants/constants';
import {horizontalScale, screenWidth, verticalScale} from '../../../utility/Scale';
import {navigate} from '../../../utility/NavigationService';

//right icon array definition and the function we should execute on their click
const rightIconArray = [
  {functionName: 'SearchClicked', component: <Search height={25} width={25} />},
  {functionName: 'MenuClick', component: <Menu />},
];

//Best Restaurants category array
const sliderData = [
  {
    id: 0,
    title: 'Pizzeria',
    rating: 4.9,
    deliveryTime: '31min',
    description: "Pizza, Pasta, Ravioli ...",
    deliveryFee: '$3.45',
    imageIconPath:
      'https://images.unsplash.com/photo-1464306076886-da185f6a9d05?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 1,
    title: "Tatte",
    rating: 4.9,
    deliveryTime: '31min',
    description: 'Shakshuka, Cheesecake, Croissant...',
    deliveryFee: '$3.45',
    imageIconPath:
      'https://images.unsplash.com/photo-1505620391902-46b120671eb6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 2,
    title: 'Big Burger Palace',
    rating: 4.9,
    deliveryTime: '31min',
    description: 'Burger, Hot Dog, ChocoShake ...',
    deliveryFee: '$3.45',
    imageIconPath:
      'https://images.unsplash.com/photo-1456418047667-56bcd35b1a88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];

const sliderDataFoodItems = [
    {
        id: 0,
        title: 'Berry Cake',
        rating: 4.9,
        deliveryTime: '31min',
        description: 'Lilian, Rouses, Bouquets.',
        deliveryFee: '$3.45',
        imageIconPath:
            'https://images.unsplash.com/photo-1591638246754-77e0571e6d24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
        id: 1,
        title: "Brownies",
        rating: 4.9,
        deliveryTime: '31min',
        description: 'Lilian, Rouses, Bouquets.',
        deliveryFee: '$3.45',
        imageIconPath:
            'https://images.unsplash.com/photo-1589218436045-ee320057f443?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
        id: 2,
        title: 'Cheesburger',
        rating: 4.9,
        deliveryTime: '31min',
        description: 'Lilian, Rouses, Bouquets.',
        deliveryFee: '$3.45',
        imageIconPath:
            'https://images.unsplash.com/photo-1589218436045-ee320057f443?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
];

/* --- Start Title Top View --- */
const TitleWithTopIconView = props => {
  const [searchValue, setSearchValue] = useState('');
  const [searchView, setSearchView] = useState(false);
  //set header title to original title, it might be changed later with search box value if user toggles it
  const [headerTitle, setHeaderTitle] = useState(
    props.route.params.headerTitle +
      ' ' +
      '(' +
      props.route.params.headerDescription +
      ')',
  );

  //function to determine what happens on click of right icons
  function handleRightIconClick(value) {
    switch (value) {
      case 'SearchClicked': {
        setHeaderTitle(
          searchView
            ? props.route.params.headerTitle +
                ' ' +
                '(' +
                props.route.params.headerDescription +
                ')'
            : '',
        );
        setSearchView(!searchView);
        break;
      }
      case 'MenuClick': {
        navigate(Routes.FilterScreen);
        break;
      }
      default:
        return;
    }
  }

  //change if search value changes
  useEffect(() => {
    if (searchValue.length > 0 && searchView) {
      setHeaderTitle(searchValue);
    } else {
      if (searchView) {
        setHeaderTitle('');
      } else {
        setHeaderTitle(
          props.route.params.headerTitle +
            ' ' +
            '(' +
            props.route.params.headerDescription +
            ')',
        );
      }
    }
  }, [
    searchValue
  ]);

  return (
    <View>
      {/*------- Header Start -----*/}
      <Header
        title={headerTitle}
        onLeftIconPress={() => props.navigation.goBack()}
        onRightIconPress={() => props.navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}

      {/*------- Decide what to show in header, if search view is toggled or not -----*/}
      <View style={globalStyles.horizontalGeneralPadding}>
        {searchView ? (
          <SearchBoxWithRightIcon
            placeholder={'Search Here..'}
            containerMarginTop={15}
            containerMarginBottom={10}
            rightIconComponent={<Menu />}
            value={searchValue}
            onBlur={() => {
              if (searchView) {
                handleRightIconClick('SearchClicked');
              }
            }}
            onSearchIconClick={()=>{
                if (searchView) {
                    handleRightIconClick('SearchClicked');
                }
            }}
            onChangeText={text => setSearchValue(text)}
            onPressRightIcon={() => {
                navigate(Routes.FilterScreen)
            }}
          />
        ) : (
          <TitleWithSideIcons
            titleFontWeight={'normal'}
            fontSize={24}
            title={'Top Categories'}
            containerTopPadding={17}
            containerBottomPadding={10}
            rightIconComponentsArray={rightIconArray}
            iconOnPress={value => handleRightIconClick(value)}
          />
        )}
      </View>
    </View>
  );
};
/* --- End Title Top View --- */

/* --- Start Tab Menu --- */
const TabMenuView = () => {
  return (
    <View style={globalStyles.marginTop15}>
      <CommonTabMenuList />
    </View>
  );
};
/* --- End Tab Menu --- */

const TopCategoriesScreen = ({navigation, route}) => {
  const [headerTitle, setHeaderTitle] = useState(
    route.params.headerTitle + ' ' + '(' + route.params.headerDescription + ')',
  );

  /*------ Border View Divider Start -------*/
  const TopBorderView = () => (
    <View style={globalStyles.paddingLeftGeneral}>
      <BorderDivider
        containerTopMargin={16}
        containerBottomMargin={16}
        activeAreaAlignment={'left'}
        activeAreaWidth={79}
        isActiveOnly={false}
        activeAreaHeight={1}
      />
    </View>
  );
  /*------ Border View Divider End -------*/

  /*------ Common Reused border view divider Start -------*/
  const CommonBorderView = () => (
    <View style={globalStyles.paddingLeftGeneral}>
      <BorderDivider
        containerTopMargin={18}
        containerBottomMargin={16}
        activeAreaAlignment={'left'}
        activeAreaWidth={45}
        isActiveOnly={false}
        activeAreaHeight={1}
      />
    </View>
  );
  /*------ Common Reused border view divider end -------*/

  //navigate to restaurant listing on click of show all
  function navigateToRestaurantListing(title) {
    navigate(Routes.RestaurantsListing, {
      headerTitle: headerTitle,
      topTitle: title,
    });
  }

  //navigate to selected slider screen when user clicks on a large restaurant component
  function navigateToSliderSelectedScreen(title, subTitle) {
    navigate(Routes.SliderSelectedScreen, {
      headerTitle: subTitle,
      topTitle: title,
    });
  }

  /* --- Start Top Category Menu --- */
  const TopCategoriesMenu = () => (
    <View>
      <CommonFoodCategoryMenu navigation={navigation} shouldNavigate={true}/>
    </View>
  );
  /* --- End Top Category Menu --- */

  /* --- Start Best Restaurants Menu --- */
  const DoubleDishesView = () => (
    <View>
      <View
        style={[
          globalStyles.horizontalGeneralPadding,
          globalStyles.flexDirectionRow,
          globalStyles.alignItemsCenter,
        ]}>
        <View style={globalStyles.flex}>
          <Text style={globalStyles.commonTitleText}>{'Best Restaurants'}</Text>
        </View>
        <View>
          <UnderlineTextIcon
            fontFamily={FONT_FAMILY.RobotoCondensedLight}
            fontWeight={'300'}
            fontSize={11}
            onPress={() => navigateToRestaurantListing('Best Restaurants')}
            isUnderlined={false}
            title={'Show All'}
            rightIconSVG={<ChevronRightIcon />}
          />
        </View>
      </View>
      <View style={globalStyles.marginTop10}>
        <SliderWithSides
          informationArray={sliderData}
          sliderWidth={screenWidth}
          itemWidth={screenWidth * 0.8}
          customSlideComponent={renderBestRestaurantsSectionArrRows}
        />
      </View>
    </View>
  );
  /* --- End Best Restaurants Menu --- */

  /*----- Render large restaurant for slider with sides start------*/
  const renderBestRestaurantsSectionArrRows = ({item, index}) => {
    return (
      <LargeRestaurantInfo
        key={'large_restaurant_dobule_dish_' + index}
        title={item.title}
        rating={item.rating}
        deliveryTime={item.deliveryTime}
        description={item.description}
        deliveryFee={item.deliveryFee}
        onPress={() =>
          navigateToSliderSelectedScreen('Double Deals', item.title)
        }
        imageIconPath={item.imageIconPath}
      />
    );
  };
  /*----- Render large restaurant for slider with sides end------*/

  /* --- Start Best Dish Menu --- */
  const BestDishesView = () => (
    <View>
      <View
        style={[
          globalStyles.horizontalGeneralPadding,
          globalStyles.flexDirectionRow,
          globalStyles.alignItemsCenter,
        ]}>
        <View style={globalStyles.flex}>
          <Text style={globalStyles.commonTitleText}>{'Best Dishes'}</Text>
        </View>
        <View>
          <UnderlineTextIcon
            fontFamily={FONT_FAMILY.RobotoCondensedLight}
            fontWeight={'300'}
            fontSize={11}
            onPress={() => navigateToRestaurantListing('Best Dishes')}
            isUnderlined={false}
            title={'Show All'}
            rightIconSVG={<ChevronRightIcon />}
          />
        </View>
      </View>
      <View
        style={[
          globalStyles.justifyCenter,
          globalStyles.alignItemsCenter,
          globalStyles.alignContentCenter,
          globalStyles.marginTop10,
        ]}>
        <SliderWithNoSides
          informationArray={sliderDataFoodItems}
          title={'BestDishes'}
        />
      </View>
    </View>
  );
  /* --- End Best Dish Menu --- */

  /* --- Start New Seller Menu --- */
  const NewSellerView = () => (
    <View>
      <View
        style={[
          globalStyles.horizontalGeneralPadding,
          globalStyles.flexDirectionRow,
          globalStyles.alignItemsCenter,
        ]}>
        <View style={globalStyles.flex}>
          <Text style={globalStyles.commonTitleText}>{'New Seller'}</Text>
        </View>
        <View>
          <UnderlineTextIcon
            fontFamily={FONT_FAMILY.RobotoCondensedLight}
            fontWeight={'300'}
            fontSize={11}
            onPress={() => navigateToRestaurantListing('New Seller')}
            isUnderlined={false}
            title={'Show All'}
            rightIconSVG={<ChevronRightIcon />}
          />
        </View>
      </View>
      <View style={globalStyles.marginTop10}>
        <SliderWithSides
          informationArray={sliderData}
          sliderWidth={screenWidth}
          itemWidth={screenWidth * 0.8}
          customSlideComponent={renderNewSellerRows}
        />
      </View>
    </View>
  );
  /* --- End New Seller Menu --- */

  /* --- Start New Seller List item --- */
  const renderNewSellerRows = ({item, index}) => {
    return (
      <LargeRestaurantInfo
        key={'large_restaurant_new_seller_' + index}
        title={item.title}
        rating={item.rating}
        deliveryTime={item.deliveryTime}
        description={item.description}
        deliveryFee={item.deliveryFee}
        onPress={() => navigateToSliderSelectedScreen('New Seller', item.title)}
        imageIconPath={item.imageIconPath}
      />
    );
  };
  /* --- End New Seller List item --- */

  /* --- Start Bakery Menu --- */
  const BakeryView = () => (
    <View>
      <View
        style={[
          globalStyles.horizontalGeneralPadding,
          globalStyles.flexDirectionRow,
          globalStyles.alignItemsCenter,
        ]}>
        <View style={globalStyles.flex}>
          <Text style={globalStyles.commonTitleText}>{'Bakery'}</Text>
        </View>
        <View>
          <UnderlineTextIcon
            fontFamily={FONT_FAMILY.RobotoCondensedLight}
            fontWeight={'300'}
            fontSize={11}
            onPress={() => navigateToRestaurantListing('Bakery')}
            isUnderlined={false}
            title={'Show All'}
            rightIconSVG={<ChevronRightIcon />}
          />
        </View>
      </View>
      <View
        style={[
          globalStyles.justifyCenter,
          globalStyles.alignItemsCenter,
          globalStyles.alignContentCenter,
          globalStyles.marginTop10,
        ]}>
        <SliderWithNoSides
          informationArray={sliderDataFoodItems}
          title={'Bakery'}
        />
      </View>
    </View>
  );
  /* --- End Bakery Menu --- */

  /* --- Start Most Popular Menu --- */
  const MostPopularView = () => (
    <View>
      <View
        style={[
          globalStyles.horizontalGeneralPadding,
          globalStyles.flexDirectionRow,
          globalStyles.alignItemsCenter,
        ]}>
        <View style={globalStyles.flex}>
          <Text style={globalStyles.commonTitleText}>{'Most Popular'}</Text>
        </View>
        <View>
          <UnderlineTextIcon
            fontFamily={FONT_FAMILY.RobotoCondensedLight}
            fontWeight={'300'}
            fontSize={11}
            onPress={() => navigateToRestaurantListing('Most Popular')}
            isUnderlined={false}
            title={'Show All'}
            rightIconSVG={<ChevronRightIcon />}
          />
        </View>
      </View>
      <View style={globalStyles.marginTop10}>
        <SliderWithSides
          informationArray={sliderData}
          sliderWidth={screenWidth}
          itemWidth={screenWidth * 0.8}
          customSlideComponent={renderMostPopularRows}
        />
      </View>
    </View>
  );

  const renderMostPopularRows = ({item, index}) => {
    return (
      <LargeRestaurantInfo
        key={'large_restaurant_most_popular_' + index}
        title={item.title}
        rating={item.rating}
        deliveryTime={item.deliveryTime}
        description={item.description}
        deliveryFee={item.deliveryFee}
        onPress={() =>
          navigateToSliderSelectedScreen('Most Popular', item.title)
        }
        imageIconPath={item.imageIconPath}
      />
    );
  };

  /* --- End Most Popular Menu --- */

  /* --- Start Title Bottom View --- */
  const BrowseByCuisineTitle = () => (
    <View
      style={[
        globalStyles.horizontalGeneralPadding,
        globalStyles.marginBottom11,
      ]}>
      {/*------ Title and Description with icons start -----------*/}
      <TitleWithSideIcons
        titleFontWeight={'normal'}
        fontSize={24}
        title={'Browse by Cuisines'}
        containerTopPadding={0}
        containerBottomPadding={10}
        leftIcon={                <Image
            source={require('../../../assets/placeholders/20x20.png')}
            style={{
                height: verticalScale(20),
                width: horizontalScale(20),
                borderRadius: 3,
            }}
        />}
      />
      {/*------ Title and Description with icons end -----------*/}
      <Text style={[globalStyles.commonRobotoText]}>
        {
          'Cras blandit consquat sapien ut curcus. Duis in mollis magna. Sed sit amet nulla. Pellentesque non ex velit.'
        }
      </Text>
    </View>
  );

  /* --- End Title Bottom View --- */

  /* --- Start Browser List View --- */
  const BrowseListMenu = () => (
    <View style={globalStyles.horizontalGeneralPadding}>
      <CommonBrowseList headerTitle={headerTitle} />
    </View>
  );
  /* --- End Browser List View --- */

  /*----- Main Screen Definition Starts Here ----*/
  const TopCategoryScreen = () => (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      <TitleWithTopIconView route={route} navigation={navigation} />
      <ScrollView
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps={'always'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={globalStyles.commonScrollViewPadding}
        style={[
          globalStyles.bgWhite,
          globalStyles.flex,
          {paddingTop: verticalScale(13)},
        ]}>
        {/* ---- Top Categories Menu Start ----*/}
        <TopCategoriesMenu />
        {/* ---- Top Categories Menu End ----*/}

        {/* ---- Tab Menu Start ----*/}
        <TabMenuView />
        {/* ---- Tab Menu End ----*/}

        {/* ---- Border Divider Start ----*/}
        <TopBorderView />
        {/* ---- Border Divider End ----*/}

        {/* ---- Dobule Dishes Section Start ----*/}
        <DoubleDishesView />
        {/* ---- Dobule Dishes Section End ----*/}

        {/* ---- Border Divider Start ----*/}
        <CommonBorderView />
        {/* ---- Border Divider End ----*/}
        <BestDishesView />

        {/* ---- Border Divider Start ----*/}
        <CommonBorderView />
        {/* ---- Border Divider End ----*/}

        {/* ----Most Popular Section Start ----*/}
        <MostPopularView />
        {/* ---- Most Popular Section End ----*/}

        {/* ---- Border Divider Start ----*/}
        <CommonBorderView />
        {/* ---- Border Divider End ----*/}

        {/* ---- Bakery Section Start ----*/}
        <BakeryView />
        {/* ---- Bakery Section End ----*/}

        {/* ---- Border Divider Start ----*/}
        <CommonBorderView />
        {/* ---- Border Divider End ----*/}

        {/* ---- New Seller Section Start ----*/}
        <NewSellerView />
        {/* ---- New Seller Section Start End*/}

        {/* ---- Border Divider Start ----*/}
        <CommonBorderView />
        {/* ---- Border Divider End ----*/}

        {/* ---- Browse By List Start ----*/}
        <BrowseByCuisineTitle />
        {/* ---- Browse By List End ----*/}

        {/* ---- Browse List Start ----*/}
        <BrowseListMenu />
        {/* ---- Browse List End ----*/}
      </ScrollView>
    </SafeAreaView>
  );
  /*----- Main Screen Definition End Here ----*/

  return <TopCategoryScreen />;
};

export default TopCategoriesScreen;
