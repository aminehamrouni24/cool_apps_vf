import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

//Components
import Header from '../../../components/Header/Header';
import InteractiveStar from '../../../components/InteractiveStar/InteractiveStar';
import LongButton from '../../../components/LongButton/LongButton';
import MultiLineTextInput from '../../../components/MultiLineTextInput/MultiLineTextInput';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import {BUTTON_TYPE, FONT_FAMILY} from '../../../constants/constants';
import {allColors} from '../../../assets/styles/mainColors';
import {screenHeight, screenWidth} from '../../../utility/Scale';

const ProductReviewScreen = ({navigation, route}) => {
  const [ratingCount, setRatingCount] = useState(0);
  const [reviewText, setReviewText] = useState('');

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        title={route.params.headerTitle}
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}

      <View style={globalStyles.horizontalGeneralPadding}>
        {/*---- Page Title and Picture Container Start ------*/}
        <TitlePicture
          componentTopPadding={10}
          imagePath={
            'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
          }
          titleTopPadding={8}
          title={'“PotaMota” Potatoes Free'}
          description={
            'Please rate, your feedback will help improve product experience'
          }
          descriptionTopPadding={2}
          componentBottomPadding={10}
          imageStyle={{
            width: screenWidth * 0.238,
            height: screenHeight * 0.092,
          }}
        />
        {/*---- Page Title and Picture Container End ------*/}

        {/*---- Rate With Start Container Start ------*/}
        <View style={globalStyles.alignSelf}>
          <InteractiveStar
            value={ratingCount}
            onStarPress={rating => setRatingCount(rating)}
          />
        </View>
        {/*---- Rate With Start Container End ------*/}

        <View style={globalStyles.marginTop10}>
          {/*---- Comment Input Start ------*/}
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.alignItemsCenter,
            ]}>
            <View style={styles.dotView} />
            <Text style={styles.commentText}>{'Comment'}</Text>
          </View>
          <View style={styles.textInputView}>
            <MultiLineTextInput
              height={screenHeight * 0.207}
              value={reviewText}
              onChange={text => setReviewText(text)}
            />
          </View>
          {/*---- Comment Input End ------*/}

          {/*---- Add Review Button Start ------*/}
          <View>
            <LongButton
              title={'ADD REVIEW'}
              titleFontColor={allColors.white}
              titleFontFamily={FONT_FAMILY.RobotoRegular}
              titleFontWeight={'400'}
              titleFontSize={18}
              type={BUTTON_TYPE.SECONDARY}
              onPress={() => navigation.goBack()}
            />
          </View>
          {/*---- Add Review Button End ------*/}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductReviewScreen;
