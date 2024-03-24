import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Swiper from 'react-native-swiper';

//Components
import AddProductIcon from '../../components/icons/AddProductIcon/AddProductIcon';
import ArrowRightIcon from '../../components/icons/ArrowRightIcon/ArrowRightIcon';
import DeliveryIcon from '../../components/icons/DeliveryIcon/DeliveryIcon';
import LongButton from '../../components/LongButton/LongButton';
import SellProductIcon from '../../components/icons/SellProductIcon/SellProductIcon';
import SupportIcon from '../../components/icons/SupportIcon/SupportIcon';

//Utils
import Routes from '../../navigation/Routes';
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import {BUTTON_TYPE, FONT_FAMILY} from '../../constants/constants';
import {allColors} from '../../assets/styles/mainColors';

const CreateAccountSlideshow = ({navigation}) => {
  //slider data definition
  const sliderData = [
    {
      id: '1',
      name: 'Add Products',
      text: [
        'Praesent luctus accumsan malesuada. spendisse rutrum pretium consequat. ',
        'Pellentesque accumsan euismod tortor aliquam facilisis. In facilisis lacus leo, sit amet laoreet lectus facilisis quis.',
        'Sed tristique dictum mi, sit amet dignissim erat malesuada et.',
        'Pellentesque accumsan euismod tortor aliquam lectus facilisis quis.',
      ],
      image: <AddProductIcon />,
      alignment: 'top',
    },
    {
      id: '2',
      name: 'Sell in Your Area',
      text: [
        'Praesent luctus accumsan malesuada. spendisse rutrum pretium consequat. ',
        'Pellentesque accumsan euismod tortor aliquam facilisis. In facilisis lacus leo, sit amet laoreet lectus facilisis quis.',
        'Sed tristique dictum mi, sit amet dignissim erat malesuada et.',
        'Pellentesque accumsan euismod tortor aliquam lectus facilisis quis.',
      ],
      image: <SellProductIcon />,
      alignment: 'top',
    },
    {
      id: '3',
      name: 'Enjoy Delivery Service',
      text: [
        'Praesent luctus accumsan malesuada. spendisse rutrum pretium consequat. ',
        'Pellentesque accumsan euismod tortor aliquam facilisis. In facilisis lacus leo, sit amet laoreet lectus facilisis quis.',
        'Sed tristique dictum mi, sit amet dignissim erat malesuada et.',
        'Pellentesque accumsan euismod tortor aliquam lectus facilisis quis.',
      ],
      image: <DeliveryIcon />,
      alignment: 'top',
    },
    {
      id: '4',
      name: 'Get Support 24/7',
      text: [
        'Praesent luctus accumsan malesuada. spendisse rutrum pretium consequat. ',
        'Pellentesque accumsan euismod tortor aliquam facilisis. In facilisis lacus leo, sit amet laoreet lectus facilisis quis.',
        'Sed tristique dictum mi, sit amet dignissim erat malesuada et.',
        'Pellentesque accumsan euismod tortor aliquam lectus facilisis quis.',
      ],
      image: <SupportIcon />,
      alignment: 'top',
    },
  ];

  return (
    <SafeAreaView style={[styles.swiperViewContainer]}>
      <View
        style={[
          globalStyles.horizontalGeneralPadding,
          styles.swiperViewContainer,
        ]}>
        <Swiper
          removeClippedSubviews={false}
          showsPagination
          activeDotColor={allColors.yellow}
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
                {value.alignment === 'top' && <View>{value.image}</View>}
                {/*--Slider Image End--*/}

                <Text
                  style={[
                    globalStyles.titleSize27,
                    value.alignment === 'top'
                      ? globalStyles.marginTop10
                      : globalStyles.marginTop40,
                    globalStyles.marginBottom20,
                  ]}>
                  {value.name}
                </Text>
                {/*--Slider Name End--*/}

                {/*--Slider Description Text Paragraphs Start--*/}
                {renderDescriptionText}
                {/*--Slider Description Text Paragraphs End--*/}

                {/*--Slider Image Start--*/}
                {value.alignment === 'bottom' && <View>{value.image}</View>}
                {/*--Slider Image End--*/}
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
          titleFontColor={allColors.black}
          titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
          titleFontWeight={'400'}
          titleFontSize={16}
          type={BUTTON_TYPE.PRIMARYLIGHT}
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
