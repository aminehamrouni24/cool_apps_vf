import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Swiper from 'react-native-swiper';

//Components
import ArrowRightIcon from '../../components/icons/ArrowRightIcon/ArrowRightIcon';
import ChooseYourLocationIcon from '../../components/icons/ChooseYourLocationIcon/ChooseYourLocationIcon';
import GetSupportIcon from '../../components/icons/GetSupportIcon/GetSupportIcon';
import LongButton from '../../components/LongButton/LongButton';
import ReceiveOrderOnlineIcon from '../../components/icons/ReceiveOrderOnlineIcon/ReceiveOrderOnlineIcon';
import WithdrawMoneySecurelyIcon from '../../components/icons/WithdrawMoneySecurelyIcon/WithdrawMoneySecurelyIcon';

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
      name: 'Choose Your Location',
      text: [
        'Praesent luctus accumsan malesuada. spendisse rutrum pretium consequat. ',
        'Pellentesque accumsan euismod tortor aliquam facilisis. In facilisis lacus leo, sit amet laoreet lectus facilisis quis.',
        'Sed tristique dictum mi, sit amet dignissim erat malesuada et.',
        'Pellentesque accumsan euismod tortor aliquam lectus facilisis quis.',
      ],
      image: <ChooseYourLocationIcon />,
      alignment: 'bottom',
    },
    {
      id: '2',
      name: 'Receive Order Online',
      text: [
        'Praesent luctus accumsan malesuada. spendisse rutrum pretium consequat. ',
        'Pellentesque accumsan euismod tortor aliquam facilisis. In facilisis lacus leo, sit amet laoreet lectus facilisis quis.',
        'Sed tristique dictum mi, sit amet dignissim erat malesuada et.',
        'Pellentesque accumsan euismod tortor aliquam lectus facilisis quis.',
      ],
      image: <ReceiveOrderOnlineIcon />,
      alignment: 'top',
    },
    {
      id: '3',
      name: 'Withdraw Money Securely',
      text: [
        'Praesent luctus accumsan malesuada. spendisse rutrum pretium consequat. ',
        'Pellentesque accumsan euismod tortor aliquam facilisis. In facilisis lacus leo, sit amet laoreet lectus facilisis quis.',
        'Sed tristique dictum mi, sit amet dignissim erat malesuada et.',
        'Pellentesque accumsan euismod tortor aliquam lectus facilisis quis.',
      ],
      image: <WithdrawMoneySecurelyIcon />,
      alignment: 'bottom',
    },
    {
      id: '4',
      name: 'Get 24/7 Support',
      text: [
        'Praesent luctus accumsan malesuada. spendisse rutrum pretium consequat. ',
        'Pellentesque accumsan euismod tortor aliquam facilisis. In facilisis lacus leo, sit amet laoreet lectus facilisis quis.',
        'Sed tristique dictum mi, sit amet dignissim erat malesuada et.',
        'Pellentesque accumsan euismod tortor aliquam lectus facilisis quis.',
      ],
      image: <GetSupportIcon />,
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
          activeDotColor={allColors.black}
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
