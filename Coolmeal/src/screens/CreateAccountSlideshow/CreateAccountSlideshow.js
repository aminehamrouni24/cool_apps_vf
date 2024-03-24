import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';

//Third Party
import Swiper from 'react-native-swiper';

//Components
import LongButton from '../../components/LongButton/LongButton';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import Routes from '../../navigation/Routes';
import {allColors} from '../../assets/styles/mainColors';
import {BUTTON_TYPE, FONT_FAMILY} from '../../constants/constants';

//Publicly Available Icons that Can be Used for Commercial Purposes
import ArrowRightIcon from '../../components/icons/ArrowRightIcon/ArrowRightIcon';

const CreateAccountSlideshow = ({navigation}) => {
  //slider data definition
  const sliderData = [
    {
      id: '1',
      name: 'Select a Restaurant',
      text: [
        'Praesent luctus accumsan malesuada. spendisse rutrum pretium consequat. ',
        'Pellentesque accumsan euismod tortor aliquam facilisis. In facilisis lacus leo, sit amet laoreet lectus facilisis quis.',
        'Sed tristique dictum mi, sit amet dignissim erat malesuada et.',
      ],
      image: (
        <Image
          style={styles.placeholder}
          source={require('../../assets/placeholders/301x252.png')}
        />
      ),
    },
    {
      id: '2',
      name: 'Choose Favorite Food',
      text: [
        'Praesent luctus accumsan malesuada. spendisse rutrum pretium consequat. ',
        'Pellentesque accumsan euismod tortor aliquam facilisis. In facilisis lacus leo, sit amet laoreet lectus facilisis quis.',
        'Sed tristique dictum mi, sit amet dignissim erat malesuada et.',
      ],
      image: (
        <Image
          style={styles.placeholder}
          source={require('../../assets/placeholders/301x252.png')}
        />
      ),
    },
    {
      id: '3',
      name: 'Secure Payment',
      text: [
        'Praesent luctus accumsan malesuada. spendisse rutrum pretium consequat. ',
        'Pellentesque accumsan euismod tortor aliquam facilisis. In facilisis lacus leo, sit amet laoreet lectus facilisis quis.',
        'Sed tristique dictum mi, sit amet dignissim erat malesuada et.',
      ],
      image: (
        <Image
          style={styles.placeholder}
          source={require('../../assets/placeholders/301x252.png')}
        />
      ),
    },
    {
      id: '4',
      name: 'Deliver To Door',
      text: [
        'Praesent luctus accumsan malesuada. spendisse rutrum pretium consequat. ',
        'Pellentesque accumsan euismod tortor aliquam facilisis. In facilisis lacus leo, sit amet laoreet lectus facilisis quis.',
        'Sed tristique dictum mi, sit amet dignissim erat malesuada et.',
      ],
      image: (
        <Image
          style={styles.placeholder}
          source={require('../../assets/placeholders/301x252.png')}
        />
      ),
    },
    {
      id: '5',
      name: 'Get 24/7 SupportIcon',
      text: [
        'Praesent luctus accumsan malesuada. spendisse rutrum pretium consequat. ',
        'Pellentesque accumsan euismod tortor aliquam facilisis. In facilisis lacus leo, sit amet laoreet lectus facilisis quis.',
        'Sed tristique dictum mi, sit amet dignissim erat malesuada et.',
      ],
      image: (
        <Image
          style={styles.placeholder}
          source={require('../../assets/placeholders/301x252.png')}
        />
      ),
    },
  ];

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      <View
        style={[
          globalStyles.horizontalGeneralPadding,
          styles.swiperViewContainer,
        ]}>
        <Swiper
          removeClippedSubviews={false}
          showsPagination
          activeDotColor={allColors.purple}
          dotColor={'transparent'}
          dotStyle={styles.dotStyle}>
          {sliderData.map((value, index) => {
            //create paragraphs for the texts by generating different Text components
            let renderDescriptionText = value.text.map((str, i) => {
              let style = i !== 0 ? globalStyles.marginTop20 : '';
              return (
                <Text
                  key={'create_account_slide_text' + index + '_' + i}
                  style={[style, globalStyles.fontBodyTextStyle2]}>
                  {str}
                </Text>
              );
            });
            return (
              <View key={'create_account_slide' + index}>
                {/*--Slider Image Start--*/}
                <View>{value.image}</View>
                {/*--Slider Image End--*/}

                {/*--Slider Name Start--*/}
                <Text
                  style={[
                    globalStyles.titleSize27,
                    globalStyles.marginTop10,
                    globalStyles.marginBottom20,
                  ]}>
                  {value.name}
                </Text>
                {/*--Slider Name End--*/}

                {/*--Slider Description Text Paragraphs Start--*/}
                {renderDescriptionText}
                {/*--Slider Description Text Paragraphs End--*/}
              </View>
            );
          })}
        </Swiper>
      </View>
      {/*---- Create Account Button Start ----*/}
      <View
        style={[
          globalStyles.horizontalGeneralPadding,
          globalStyles.marginBottom20,
        ]}>
        <LongButton
          title={'CREATE ACCOUNT'}
          titleFontColor={allColors.white}
          titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
          titleFontWeight={'400'}
          titleFontSize={16}
          type={BUTTON_TYPE.SECONDARY}
          hasCircularIcon={true}
          onPress={() => navigation.navigate(Routes.Registration)}
          circularIconComponent={<ArrowRightIcon />}
        />
      </View>
      {/*---- Create Account Button End ----*/}
    </SafeAreaView>
  );
};

export default CreateAccountSlideshow;
