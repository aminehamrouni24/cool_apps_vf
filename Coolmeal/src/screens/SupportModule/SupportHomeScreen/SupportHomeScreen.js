/* eslint-disable */
import React, {useEffect, useCallback} from 'react';
import {SafeAreaView, View, Image} from 'react-native';

//Third Party
import {useDispatch} from 'react-redux';

//Components
import Header from '../../../components/Header/Header';
import SquareListIcon from '../../../components/SquareListIcon/SquareListIcon';

//Publicly Available Icons that Can be Used for Commercial Purposes
import ArrowRightLongIcon from '../../../components/icons/ArrowRightLongIcon/ArrowRightLongIcon';
import FaqIcon from '../../../assets/icons/supportIcons/faqSVG.svg';
import OnlineSupportIcon from '../../../assets/icons/supportIcons/headphonesSVG.svg';



//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';
import {navigate} from '../../../utility/NavigationService';
import Routes from '../../../navigation/Routes';
import {horizontalScale, verticalScale} from '../../../utility/Scale';
import Action from '../../../redux/action';
import FAQData from '../../../DummyData/FAQDummyData';

const SupportHomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  //store faq information
  const storeFAQs = useCallback(
    () => dispatch(Action.storeFAQs(FAQData.data)),
    [dispatch],
  );

  //get faqs and update
  useEffect(() => {
    storeFAQs();
  }, []);

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        title={'Support'}
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}
      <View style={globalStyles.flex}>
        <View style={globalStyles.horizontalGeneralPadding}>
          {/*---- Page Title and Picture Container Start ------*/}
          <View>
            <TitlePicture
              componentTopPadding={40}
              imageComponent={
                  <Image
                  source={require('../../../assets/placeholders/105x104.png')}
                  style={{height: horizontalScale(104), width: verticalScale(105), borderRadius: 3}}
                  />
              }
              titleTopPadding={23}
              title={'Support 24/7'}
              description={
                'Lorem ipsum dolor sit amet, consectetur non adipiscing elit. Eitam ac tempor leo.'
              }
              descriptionTopPadding={10}
              componentBottomPadding={23}
            />
          </View>
          {/*---- Page Title and Picture Container End ------*/}
          <View>
            {/*---- Online Support Page Start ------*/}
            <SquareListIcon
              showBorder={true}
              onPress={() => navigate(Routes.OnlineSupport)}
              leftIconComponent={<OnlineSupportIcon />}
              title={'Online Support'}
              leftIconRightPadding={19}
              leftIconLeftPadding={21}
              rightIconComponent={<ArrowRightLongIcon />}
            />
            {/*---- Online Support Page End------*/}

            {/*---- FAQ Screen Button Start -----*/}
            <SquareListIcon
              containerTopPadding={10}
              showBorder={true}
              onPress={() => navigate(Routes.FAQScreen)}
              leftIconComponent={<FaqIcon />}
              title={'FAQ'}
              leftIconRightPadding={19}
              leftIconLeftPadding={21}
              rightIconComponent={<ArrowRightLongIcon />}
            />
            {/*---- FAQ Screen Button End -----*/}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SupportHomeScreen;
