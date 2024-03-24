/* eslint-disable */
import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView, View, ScrollView, FlatList} from 'react-native';

//Third Party
import {useDispatch, useSelector} from 'react-redux';

//Components
import BorderDivider from '../../../components/BorderDivider/BorderDivider';
import FoodItem from '../../../components/FoodItem/FoodItem';
import Header from '../../../components/Header/Header';
import LongButton from '../../../components/LongButton/LongButton';
import NoInformationText from '../../../components/NoInformationText/NoInformationText';
import TitleText from '../../../components/TitleText/TitleText';

//Publicly Available Icons that Can be Used for Commercial Purposes
import SurprisedIcon from '../../../assets/icons/generalIcons/bookmarkSVG.svg';

//@TODO - Replace with Placeholder
import FavoriteActiveIcon from '../../../assets/icons/discoverMenuIcons/favoriteActiveSVG.svg';

//Utils
import Action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import Routes from '../../../navigation/Routes';
import {BUTTON_TYPE, FONT_FAMILY} from '../../../constants/constants';
import {allColors} from '../../../assets/styles/mainColors';
import {loadPagination} from '../../../utility/Helper';
import {navigate} from '../../../utility/NavigationService';

//Dummy Data
import SubItemsDummy from '../../../DummyData/SubItemsDummyData';

const FavoriteProductsHomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [itemList, setItemList] = useState([]);
  const [offset, setOffset] = useState(1);
  const [noDataAvailable, setNoDataAvailable] = useState(false);
  //store food items in the redux store
  const storeSubItemList = useCallback(
    () => dispatch(Action.storeFoodItems(SubItemsDummy.data)),
    [dispatch],
  );
  const subItems = useSelector(state => state.foodItems, []);
  const favoritedItems = useSelector(state => state.favoritedItems, [])
  const [allItems,setAllItems] = useState(subItems.filter((value) => favoritedItems.indexOf(parseInt(value.id))>=0))
  // console.log(subItems)
  //update on redux
  useEffect(() => {
    storeSubItemList()
  }, [])

  useEffect(() => {
    pagination(allItems, 2, offset);
  }, [favoritedItems]);

  useEffect(() => {
    if (offset > 1) {
      pagination(subItems, 2, offset)
    }
  }, [offset])

  function pagination(array, page_size, page_number) {
    let temp = loadPagination(array, page_size, page_number)
    if (temp.length > 0) {
      setItemList([...itemList, ...temp])
      if (subItems.length <= (itemList.length + page_size)) {
        setNoDataAvailable(true)
      } else {
        setNoDataAvailable(false)
      }
    } else {
      setNoDataAvailable(true)
    }
    setAllItems(subItems.filter((value) => favoritedItems.indexOf(parseInt(value.id))>=0))
  }

  const LoadMoreButton = () => (
      <View style={[globalStyles.marginTop30, globalStyles.alignItemsCenter]}>
        {
          noDataAvailable ?
              null
              :
              <LongButton
                  title={'LOAD MORE'}
                  titleFontSize={18}
                  titleFontColor={allColors.white}
                  titleFontWeight={'400'}
                  titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
                  type={BUTTON_TYPE.SECONDARY}
                  onPress={() => setOffset((offset) => offset + 1)}
              />
        }
      </View>
  )

  const renderListRows = ({ item, index }) => {
    return (
        <FoodItem
            title={item.title}
            rating={item.rating}
            description={item.description}
            deliveryFee={'$' + item.deliveryFee}
            ratingNum={item.review}
            topRightIconComponent={<FavoriteActiveIcon />}
            onTopRightIconPress={() => alert('Favorite Clicked')}
            addToCartOnPress={() => alert('Favorite Clicked')}
            imageIconPath={item.imageIconPath}
            isActive={item.isActive}
            surprisedIcon={<SurprisedIcon />}
            onItemPress={() => navigate(Routes.AddToCartScreen)}
            isRateVisible={true}
            onPressRate={() => navigate(Routes.ProductReviewScreen, { headerTitle: 'Product Review' })}
            onPressReorder={() => navigate(Routes.AddToCartScreen)}
        />
    )
  }


  return (
      <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
        <Header title={'Favourite Products'} onLeftIconPress={() => navigation.goBack()} onRightIconPress={() => navigation.toggleDrawer()} />
        <ScrollView style={globalStyles.flex} showsVerticalScrollIndicator={false} contentContainerStyle={globalStyles.commonScrollViewPadding} >
          <View style={globalStyles.horizontalGeneralPadding} >
            <TitleText
                title={'Favorite Products'}
                description={'Drive license number is needed if driver has registered a car. For bicycle is not necessary.'}
                containerBottomPadding={0}
                containerTopPadding={17}
                titleFontWeight={'300'}
            />
            <BorderDivider
                containerTopMargin={16}
                containerBottomMargin={15}
                activeAreaAlignment={'left'}
                activeAreaWidth={68}
                isActiveOnly={false}
                activeAreaHeight={1} />

          {itemList.length > 0 ? (
            <FlatList
              //performance settings
              //initialNumToRender={1} // Reduce initial render amount
              //maxToRenderPerBatch={1} // Reduce number in each render batch
              // windowSize={7} // Reduce the window size
              showsVerticalScrollIndicator={false}
              data={itemList}
              renderItem={renderListRows}
              contentContainerStyle={[
                globalStyles.paddingTop15,
                globalStyles.commonScrollViewPadding,
              ]}
              ItemSeparatorComponent={() => <View style={{height: 15}} />}
              keyExtractor={(item, index) => index.toString()}
              ListFooterComponent={() => <LoadMoreButton />}
            />
          ) : (
            <View style={globalStyles.marginTop15}>
              <NoInformationText />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FavoriteProductsHomeScreen;
