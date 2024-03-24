/* eslint-disable */
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ScrollView, FlatList, SafeAreaView } from 'react-native'

//Third Party
import { useDispatch, useSelector } from 'react-redux';

//Components
import FoodItem from '../../../components/FoodItem/FoodItem';
import Header from '../../../components/Header/Header';
import LongButton from '../../../components/LongButton/LongButton';
import NoInformationText from '../../../components/NoInformationText/NoInformationText';
import ReviewDisplay from '../../../components/ReviewDisplay/ReviewDisplay';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';
import UnderlineTextIcon from '../../../components/UnderlineTextIcon/UnderlineTextIcon';

//Publicly Available Icons that Can be Used for Commercial Purposes
import ChevronRightIcon from '../../../components/icons/ChevronRightIcon/ChevronRightIcon';
import SurprisedIcon from '../../../assets/icons/generalIcons/bookmarkSVG.svg';


//Utils
import Action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import Routes from '../../../navigation/Routes';
import styles from './style';
import { allColors } from '../../../assets/styles/mainColors';
import { BUTTON_TYPE, FONT_FAMILY } from '../../../constants/constants';
import { horizontalScale } from '../../../utility/Scale';
import { loadPagination } from '../../../utility/Helper';
import { navigate } from '../../../utility/NavigationService';

//Dummy Data
import SubItemsDummy from '../../../DummyData/SubItemsDummyData';

const RestaurantMenuScreen = ({ navigation, route }) => {

  const dispatch = useDispatch();
  const [itemList, setItemList] = useState([])
  const [offset, setOffset] = useState(1)
  const [noDataAvailable, setNoDataAvailable] = useState(false)

  //update redux store with food items
  const storeSubItemList = useCallback(() => dispatch(Action.storeFoodItems(SubItemsDummy.data)), [dispatch])

  const subItems = useSelector(state => state.foodItems, [])
  const favoritedItems = useSelector(state => state.favoritedItems, []);

  //store food items
  useEffect(() => {
    storeSubItemList()
  }, [])

  //pagination and update
  useEffect(() => {
    pagination(subItems, 2, offset)
  }, [subItems])

  //pagination and update
  useEffect(() => {
    if (offset > 1) {
      pagination(subItems, 2, offset)
    }
  }, [offset])

  //pagination
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
  }

  //title container start for the menu screen
  const TitlePictureView = () => {
    return (
        <View>
          <TitlePicture
              componentTopPadding={5}
              imageLocal={require('../../../assets/placeholders/63x55.png')}
              imageStyle={{borderRadius: 15, width: horizontalScale(63), height: horizontalScale(55)}}
              titleTopPadding={20}
              title={'"La Casa" Cafe'}
              componentBottomPadding={8}
          />
        </View>
    )
  }

  //rating information for the restaurant
  const RatingsView = () => {
    return (
        <View>
          <Text style={globalStyles.commonRobotoText}>{'Burgers, Salads,Burritos, Sandwiches, Drink'}</Text>
          <View style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter, { marginTop: 2 }]} >
            <ReviewDisplay marginLeftText={18} rating={4} ratingNum={4} isDescriptionShown={true} />
            <View style={{ marginLeft: horizontalScale(7) }} >
              <UnderlineTextIcon
                  fontFamily={FONT_FAMILY.RobotoCondensedLight}
                  fontWeight={'300'}
                  fontSize={11}
                  onPress={() => navigate(Routes.StoreReviewScreen)}
                  isUnderlined={true}
                  title={'read review'}
                  rightIconSVG={<ChevronRightIcon />} />
            </View>
          </View>
        </View>
    )
  }

  //delivery information for the restaurant
  const AddressView = () => {
    return (
        <View style={[globalStyles.marginTop13, globalStyles.flexDirectionRow, globalStyles.justifySpaceBetween]} >
          <View style={globalStyles.flexDirectionRow} >
            <View>
              <Text style={styles.titleText}>{'$3'}</Text>
              <Text style={styles.titleDesc}>{'Delivery'}</Text>
            </View>
            <View style={{ marginHorizontal: horizontalScale(10) }} >
              <Text style={styles.titleText}>{'37'}</Text>
              <Text style={styles.titleDesc}>{'Min'}</Text>
            </View>
            <View>
              <Text style={styles.titleText}>{'3.4'}</Text>
              <Text style={styles.titleDesc}>{'Mi/Km'}</Text>
            </View>
          </View>
        </View>
    )
  }

  //menu title & description
  const TitleDetailsView = () => {
    return (
        <View>
          <TitlePicture
              componentTopPadding={15}
              titleTopPadding={5}
              title={route.params.title}
              componentBottomPadding={5}
              descriptionTopPadding={5}
          />
          <Text style={globalStyles.commonRobotoText} >
            {'Curabitur sit amet massa nunc. Fusce at tristique magna. Fusce eget dapibus dui.'}
          </Text>
        </View>
    )
  }

  //load more button definition
  const LoadMoreButton = () => (
      <View style={[globalStyles.marginTop20, globalStyles.alignItemsCenter]}>
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

  //render food items for the menu list
  const renderListRows = ({ item }) => {
    return (
        <FoodItem
            key={'food_item_menu'+item.id}
            title={item.title}
            rating={item.rating}
            description={item.description}
            deliveryFee={'$' + item.deliveryFee}
            ratingNum={item.review}
            isRateVisible={false}
            topRightIconComponent={favoritedItems.indexOf(item.id) >=0 ? require('../../../assets/placeholders/20x20.png') : require('../../../assets/placeholders/20x20.png') }
            onTopRightIconPress={() =>  dispatch(Action.toggleFavoriteItem(item.id))}
            addToCartOnPress={() => navigation.navigate(Routes.AddToCartScreen)}
            imageIconPath={item.imageIconPath}
            isActive={item.isActive}
            leftTopIcon={<SurprisedIcon />}
            onItemPress={() => navigate(Routes.AddToCartScreen)}
        />
    )
  }

  return (
      <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
        {/*------- Header Start -----*/}
        <Header onLeftIconPress={() => navigation.goBack()} onRightIconPress={() => navigation.toggleDrawer()} />
        {/*------- Header End -----*/}
        <ScrollView style={globalStyles.flex} showsVerticalScrollIndicator={false} contentContainerStyle={globalStyles.commonScrollViewPadding}>
          <View style={[globalStyles.horizontalGeneralPadding, globalStyles.flex]}>
            {/*---- Page Title and Picture Container Start ------*/}
            <TitlePictureView />
            {/*---- Page Title and Picture Container End ------*/}

            {/*---- Rating Information Start ------*/}
            <RatingsView />
            {/*---- Rating Information End ------*/}

            {/*---- Delivery Information Start ------*/}
            <AddressView />
            {/*---- Delivery Information End ------*/}

            {/*---- List Title Start ------*/}
            <TitleDetailsView />
            {/*---- List Title End ------*/}

            {/*---- List Start ------*/}
            {
              itemList.length > 0 ?
                  <FlatList
                      //performance settings
                      //initialNumToRender={1} // Reduce initial render amount
                      //maxToRenderPerBatch={1} // Reduce number in each render batch
                      // windowSize={7} // Reduce the window size
                      showsVerticalScrollIndicator={false}
                      data={itemList}
                      renderItem={renderListRows}
                      contentContainerStyle={[globalStyles.paddingTop15, globalStyles.commonScrollViewPadding]}
                      ItemSeparatorComponent={() => (<View style={{ height: 15 }} />)}
                      keyExtractor={(item, index) => index.toString()}
                      ListFooterComponent={() => <LoadMoreButton />}
                  />
                  :
                  <View style={globalStyles.marginTop15} >
                    <NoInformationText />
                  </View>

            }
            {/*---- List End ------*/}
          </View>

        </ScrollView>
      </SafeAreaView >
  )
}

export default RestaurantMenuScreen;
