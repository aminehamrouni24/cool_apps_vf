/* eslint-disable */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
    Image
} from 'react-native';

//Components
import Header from '../../../components/Header/Header';
import ReviewDisplay from '../../../components/ReviewDisplay/ReviewDisplay';
import UnderlineTextIcon from '../../../components/UnderlineTextIcon/UnderlineTextIcon';
import LongButton from '../../../components/LongButton/LongButton';
import CachableImage from '../../../components/CachableImage/CachableImage';
import Counter from '../../../components/Counter/Counter';
import ImagePopUp from '../../../components/ImagePopUp/ImagePopUp';

//Publicly Available Icons that Can be Used for Commercial Purposes
import ChevronRightIcon from '../../../components/icons/ChevronRightIcon/ChevronRightIcon';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import Routes from '../../../navigation/Routes';
import styles from './style';
import {allColors} from '../../../assets/styles/mainColors';
import {BUTTON_TYPE, FONT_FAMILY} from '../../../constants/constants';
import {horizontalScale, verticalScale} from '../../../utility/Scale';
import {navigate} from '../../../utility/NavigationService';



const AddToCartScreen = ({navigation, route}) => {
  const [isImagePopUpShow, setImagePopUpShow] = useState(false);
  const [counterValue, setCounterValue] = useState(1);
  const [totalValue, setTotalValue] = useState(0);
  const baseValue = 65.0;

  //update according to counter value
  useEffect(() => {
    setTotalValue((baseValue * counterValue).toFixed(2));
  }, [counterValue]);

  //checkout screen with title
  const navigateToScreen = () => {
    if (route.params) {
      navigate(Routes.CheckOutScreen, {title: route.params.title});
    } else {
      navigate(Routes.CheckOutScreen);
    }
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
        style={globalStyles.flex}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={globalStyles.commonScrollViewPadding}>
        <View
          style={[globalStyles.horizontalGeneralPadding, globalStyles.flex]}>
          {/*-Item Image Start--*/}
          <TouchableOpacity
            onPress={() => setImagePopUpShow(true)}
            style={styles.imageView}>
            <CachableImage
              style={globalStyles.flex}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
              }}
            />
          </TouchableOpacity>
          {/*-Item Image End--*/}

          <View style={styles.titleView}>
            {/*-Title Start--*/}
            <Text style={styles.titleText}>{'Mac Free'}</Text>
            {/*-Title End--*/}

            {/*-Description Start--*/}
            <Text style={styles.titleDesc}>
              {'White & Red Rouses bouquet in boxe. Lorem'}
            </Text>
            {/*-Description End--*/}
            <View style={styles.reviewView}>

              {/*-Review Start--*/}
              <ReviewDisplay
                rating={3}
                ratingNum={4}
                isDescriptionShown={true}
              />
              {/*-Review End--*/}

              {/*-Read Review Container Start--*/}
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
            {/*-Read Review Container End--*/}
          </View>

          {/*------ Counter Start --------*/}
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.justifySpaceBetween,
              globalStyles.marginTop13,
            ]}>
            <Text style={styles.priceText}>{'$65.00'}</Text>
            <Counter
              minValue={1}
              isLarge={true}
              initialValue={counterValue}
              onChange={value => setCounterValue(value)}
            />
          </View>
          {/*------ Counter End --------*/}

          {/*------ Food Item Description Start -------*/}
          <View style={styles.descView}>
            <Text style={styles.descriptionTitle}>{'What is?'}</Text>
            <Text style={styles.descriptionText}>
              {
                'Curabitur sit amet massa nunc. Lusce iresticia magna. Fusce eget dapibus dui. Lorem ipsum curabitur sit amet massa nunc. Fusce at tristique magna. Fusce eget dapibus dui.'
              }
            </Text>
          </View>
          {/*------ Food Item Description End -------*/}

          {/*------ Add to Cart Button Start -------*/}
          <View style={styles.buttonView}>
            <LongButton
              title={'Add to Cart ' + totalValue}
              titleFontColor={allColors.black}
              titleFontFamily={FONT_FAMILY.RobotoCondensedLight}
              titleFontSize={18}
              type={BUTTON_TYPE.PRIMARY}
              titleFontWeight={'300'}
              hasCircularIcon={true}
              onPress={() => navigateToScreen()}
              circularIconComponent={
                <Image
                  source={require('../../../assets/placeholders/20x20.png')}
                  style={{
                    height: verticalScale(20),
                    width: horizontalScale(20),
                    borderRadius: 3,
                  }}
                />
              }
            />
          </View>
          {/*------ Add to Cart Button End -------*/}
        </View>
      </ScrollView>

      {/*------ Image Popup Start -------*/}
      <ImagePopUp
        closeModal={() => setImagePopUpShow(false)}
        showImage={isImagePopUpShow}
        imagePath={
          'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        }
      />
      {/*------ Image Popup Start -------*/}
    </SafeAreaView>
  );
};

export default AddToCartScreen;
