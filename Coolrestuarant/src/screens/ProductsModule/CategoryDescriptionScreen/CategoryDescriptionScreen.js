/* eslint-disable */
import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

//Components
import Header from '../../../components/Header/Header';
import TitleText from '../../../components/TitleText/TitleText';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import {BUTTON_TYPE, FONT_FAMILY} from '../../../constants/constants';
import {allColors} from '../../../assets/styles/mainColors';
import {useDispatch, useSelector} from 'react-redux';
import Action from '../../../redux/action';
import BorderDivider from '../../../components/BorderDivider/BorderDivider';
import PlusIcon from '../../../assets/icons/supportIcons/plusSVG2.svg';
import LongButton from '../../../components/LongButton/LongButton';
import {navigate} from '../../../utility/NavigationService';
import Routes from '../../../navigation/Routes';
import ProductItem from '../../../components/ProductItem/ProductItem';
import {loadPagination} from '../../../utility/Helper';
import { useIsFocused } from "@react-navigation/native";

const CategoryDescriptionScreen = props => {
  let dispatch = useDispatch();
  const menuCategoryProductList = useSelector(
    state => state.menuCategoryProductList,
  );1
  const [itemList, setItemList] = useState([]);
  const [offset, setOffset] = useState(1);
  const [noDataAvailable, setNoDataAvailable] = useState(false);
  const [productListArray, setProductListArray] = useState([]);
  const pageSize = 2;
  let item = props.route.params.item;
  let categoryId = props.route.params.item.id;
  const isVisible = useIsFocused();
  //set menu items
  useEffect(() => {
    if(isVisible) {
      let productList = menuCategoryProductList.filter(value => value.categoryId === item.id);
      setProductListArray(
          productList.length > 0 ? [...productList[0].productList] : []
      );
    }
  }, [menuCategoryProductList,isVisible]);

  //pagination
  useEffect(() => {
    if(itemList.length === 0){
      pagination(productListArray, pageSize, offset);
    }
    else{
      setItemList(productListArray.slice(0, itemList.length))
    }
  }, [productListArray]);

  //pagination
  useEffect(() => {
    if (offset > 1) {
      pagination(productListArray, pageSize, offset);
    }
  }, [offset]);

  function pagination(array, page_size, page_number) {
    let temp = loadPagination(array, page_size, page_number);
    if (temp.length > 0) {
      setItemList([...itemList, ...temp]);
      if (productListArray.length <= itemList.length + page_size) {
        setNoDataAvailable(true);
      } else {
        setNoDataAvailable(false);
      }
    } else {
      setNoDataAvailable(true);
    }
  }

  function resetPagination(){
      setItemList([]);
      setProductListArray([]);
      setOffset(1);
  }

  const renderMenuProductItemRows = ({item}) => {
    return (
        <ProductItem
            key={'product_item_' + item.id}
            isActive={item.isActive}
            categoryId={categoryId}
            title={item.title}
            rating={item.rating}
            ratingNum={item.ratingNum}
            description={item.description}
            iconImage={item.iconImage}
            price={item.price}
            toggleIsActive={() => {
              dispatch(
                  Action.toggleProductIsActive({
                    productId: item.id,
                    categoryId: categoryId,
                  }),
              );
            }}
            onPress={() => {
              resetPagination();
              navigate(Routes.ProductConfigScreen, {
                item: {
                  categoryId: categoryId,
                  productId: item.id,
                  description: item.description,
                  moreDescription: item.moreDescription,
                  iconImage: item.iconImage,
                  isActive: item.isActive,
                  rating: item.rating,
                  ratingNum: item.ratingNum,
                  title: item.title,
                  toggleIsActive: item.toggleIsActive,
                  price: item.price,
                  isOrderNowAvailable: item.isOrderNowAvailable,
                  isPreOrderAvailable: item.isPreOrderAvailable,
                  preOrderPrepTime: item.preOrderPrepTime,
                  orderNowPrepTime: item.orderNowPrepTime,
                  cuisineList: item.cuisineList,
                  filterList:item.filterList
                },
              });
            }}
        />
    );
  };

  //Load more button definition
  const LoadMoreButton = () => (
    <View style={globalStyles.marginTop5}>
      {noDataAvailable ? null : (
        <LongButton
          title={'LOAD MORE'}
          titleFontSize={18}
          titleFontColor={allColors.white}
          titleFontWeight={'400'}
          titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
          type={BUTTON_TYPE.SECONDARY}
          onPress={() => setOffset(offset => offset + 1)}
        />
      )}
    </View>
  );

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        title={item.title}
        navigation={props.navigation}
        onLeftIconPress={() => props.navigation.goBack()}
        onRightIconPress={() => props.navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}

      <ScrollView         style={globalStyles.flex}
                          showsVerticalScrollIndicator={false}
                          contentContainerStyle={globalStyles.commonScrollViewPadding}>
        <View
          style={[
            globalStyles.horizontalGeneralPadding,
            globalStyles.marginTop20,
          ]}>
          {/*------- Title Start -----*/}
          <View>
            <TitleText
              title={item.title}
              titleFontWeight={'300'}
              description={item.description}
            />
          </View>
          {/*------- Title End -----*/}

          {/*------ Border Divider Start ------------*/}
          <BorderDivider containerBottomMargin={20} containerTopMargin={15} />
          {/*------ Border Divider End ------------*/}

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
            onPress={()=>{
              resetPagination();
              navigate(Routes.ProductConfigScreen, {categoryId: categoryId})
            }}
          />

          {itemList && itemList.length > 0 && (
            <View>
              <FlatList
                //performance settings
                //initialNumToRender={1} // Reduce initial render amount
                //maxToRenderPerBatch={1} // Reduce number in each render batch
                // windowSize={7} // Reduce the window size
                extraData={itemList}
                showsVerticalScrollIndicator={false}
                data={itemList}
                renderItem={renderMenuProductItemRows}
                contentContainerStyle={[
                  globalStyles.paddingTop20,
                ]}
                ItemSeparatorComponent={() => <View style={styles.gapView} />}
                keyExtractor={(_item, index) => index.toString()}
              />
              <LoadMoreButton />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryDescriptionScreen;
