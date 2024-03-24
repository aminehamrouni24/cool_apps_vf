/* eslint-disable */
import React, { useEffect, useCallback } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

//Third Party
import { useDispatch, useSelector } from 'react-redux';

//Components
import BorderCategory from '../../../components/BorderCategory/BorderCategory';
import BorderDivider from '../../../components/BorderDivider/BorderDivider';
import Header from '../../../components/Header/Header';


//Publicly Available Icons that Can be Used for Commercial Purposes
import CloseIcon from '../../../assets/icons/generalIcons/closeIconSVG.svg';

//Utils
import Action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import { allColors } from '../../../assets/styles/mainColors';
import { FONT_FAMILY } from '../../../constants/constants';
import { screenWidth } from '../../../utility/Scale';

//DummyData
import filterHighlight from '../../../DummyData/FilterHighlightDummyData';
import typeOfFood from '../../../DummyData/FoodTypeDummyData';
import sortByTitle from '../../../DummyData/SortByTitleDummyData';

const FilterScreen = props => {

  const dispatch = useDispatch();

  //set filter highlight list
  const storeFilterHighLightData = useCallback(() => dispatch(Action.storeFilterHighLightsList(filterHighlight.data)), [dispatch])
  const filterHighLightList = useSelector(state => state.filterHighLightsList, [])

  //set types of food list
  const storeTypesOfFoodData = useCallback(() => dispatch(Action.storeTypeOfFoodList(typeOfFood.data)), [dispatch])
  const typeOfFoodList = useSelector(state => state.typeOfFoodList, [])

  //set sort by title list
  const storeSortByTitleData = useCallback(() => dispatch(Action.storeSortByTitleList(sortByTitle.data)), [dispatch])
  const sortByTitleList = useSelector(state => state.sortByTitleList, [])

  //render updates
  useEffect(() => {
    storeFilterHighLightData()
  }, [])

  //render updates
  useEffect(() => {
    storeTypesOfFoodData()
  }, [])

  //render updates
  useEffect(() => {
    storeSortByTitleData()
  }, [])


  //on press of highlight item
  const setHighlightItem = (item) => {
    dispatch(Action.toggleFilterHighLightsItem(item))
  }

  //on press of types of food item
  const setTypesOfFoodItem = (item) => {
    dispatch(Action.toggleTypeOfFoodItem(item))
  }

  //on press of sort by title item
  const setSortByTitleItem = (item) => {
    dispatch(Action.toggleSortByTitleItem(item))
  }

  return (
      <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>

        {/*------- Header Start -----*/}
        <Header title={'Filters'}
                rightIcon={<CloseIcon />}
                onLeftIconPress={() => props.navigation.pop()}
                onRightIconPress={() => props.navigation.pop()} />
        {/*------- Header End -----*/}

        <ScrollView style={globalStyles.flex} showsVerticalScrollIndicator={false} contentContainerStyle={globalStyles.commonScrollViewPadding} >
          <View style={[globalStyles.horizontalGeneralPadding, globalStyles.flex]} >
            {/*------- Highlight Section Start -----*/}
            <View style={styles.highLightsView} >
              <Text style={styles.sectionTitle} >{'Highlights'}</Text>
              <View style={styles.flexRowView} >
                {
                  filterHighLightList.length > 0 &&
                  filterHighLightList.map((item, index) => (
                      <View key={'filter_highlight_item_' + index}  >
                        <BorderCategory
                            itemData={item}
                            onPress={(itemData) => setHighlightItem(itemData)}
                            title={item.title}
                            activeImageComponent={item.icon}
                            informationAlignment={'centered'}
                            titleFontSize={15}
                            titleFontFamily={FONT_FAMILY.RobotoCondensedLight}
                            titleFontWeight={'300'}
                            titlePaddingTop={2}
                            componentPaddingTop={15}
                            componentPaddingBottom={10}
                            isActive={item.isActive}
                            componentMarginTop={12}
                            componentBorderRadius={15}
                            componentWidth={screenWidth * 0.245}
                            containerBackgroundColor={item.isActive ? allColors.lightYellow : allColors.transparent}
                            containerBorderColor={item.isActive ? allColors.darkYellow : allColors.black}
                            type={'ITEM'}
                        />
                      </View>
                  ))
                }
              </View>
            </View>
            {/*------- Highlight Section End -----*/}

            {/*------ Divider Start -----------*/}
            <BorderDivider activeAreaAlignment={'left'} containerTopMargin={20} containerBottomMargin={15} activeAreaWidth={79} isActiveOnly={false} activeAreaHeight={1} />
            {/*------ Divider End -----------*/}

            {/*------- Types of Food Section Start -----*/}
            <View>
              <Text style={styles.sectionTitle} >{'Types of Food'}</Text>
              <View style={styles.flexRowView} >
                {
                  typeOfFoodList.length > 0 &&
                  typeOfFoodList.map((item, index) => (
                      <View key={'type_of_food_item_' + index}  >
                        <BorderCategory
                            itemData={item}
                            onPress={(itemData) => setTypesOfFoodItem(itemData)}
                            title={item.title}
                            activeImageComponent={item.icon}
                            informationAlignment={'centered'}
                            titleFontSize={15}
                            titleFontFamily={FONT_FAMILY.RobotoCondensedLight}
                            titleFontWeight={'300'}
                            titlePaddingTop={2}
                            componentPaddingTop={15}
                            componentPaddingBottom={10}
                            isActive={item.isActive}
                            componentMarginTop={12}
                            componentBorderRadius={15}
                            componentWidth={screenWidth * 0.245}
                            containerBackgroundColor={item.isActive ? allColors.lightYellow : allColors.transparent}
                            containerBorderColor={item.isActive ? allColors.darkYellow : allColors.black}
                            type={'ITEM'}
                            borderWidth={item.isActive ? 0.3 : 0}
                        />
                      </View>
                  ))
                }
              </View>
            </View>
            {/*------- Types of Food Section End -----*/}

            {/*------ Divider Start -----------*/}
            <BorderDivider activeAreaAlignment={'right'} containerTopMargin={20} containerBottomMargin={15} activeAreaWidth={79} isActiveOnly={false} activeAreaHeight={1} />
            {/*------ Divider End -----------*/}

            {/*------- Sort By Title Start -----*/}
            <View>
              <Text style={styles.sectionTitle} >{'Sort By Title'}</Text>
              <View style={styles.flexRowView} >
                {
                  sortByTitleList.length > 0 &&
                  sortByTitleList.map((item, index) => (
                      <View key={'sort_by_title_item_' + index}  >
                        <BorderCategory
                            itemData={item}
                            onPress={(itemData) => setSortByTitleItem(itemData)}
                            title={item.title}
                            activeImageComponent={item.icon}
                            informationAlignment={'centered'}
                            titleFontSize={15}
                            titleFontFamily={FONT_FAMILY.RobotoCondensedLight}
                            titleFontWeight={'300'}
                            titlePaddingTop={2}
                            componentPaddingTop={20}
                            componentPaddingBottom={10}
                            isActive={item.isActive}
                            componentMarginTop={12}
                            componentBorderRadius={15}
                            componentWidth={screenWidth * 0.245}
                            containerBackgroundColor={item.isActive ? allColors.lightYellow : allColors.transparent}
                            containerBorderColor={item.isActive ? allColors.darkYellow : allColors.black}
                            type={'ITEM'}
                        />
                      </View>
                  ))
                }
              </View>
            </View>
            {/*------- Sort By Title End -----*/}
          </View>
        </ScrollView>
      </SafeAreaView>
  )
}

export default FilterScreen;
