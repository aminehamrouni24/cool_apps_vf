import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

//Components
import Header from '../../../components/Header/Header';
import LongButton from '../../../components/LongButton/LongButton';
import MultiLineTextInput from '../../../components/MultiLineTextInput/MultiLineTextInput';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';

import OnlineSupportImage from '../../../assets/icons/supportIcons/onlineSupportSVG.svg';
import SendIcon from '../../../assets/icons/generalIcons/sendIconSVG.svg';

//Utils
import Routes from '../../../navigation/Routes';
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import {BUTTON_TYPE, FONT_FAMILY} from '../../../constants/constants';
import {allColors} from '../../../assets/styles/mainColors';
import {screenHeight, screenWidth} from '../../../utility/Scale';

const OnlineSupport = ({navigation}) => {
  const [supportText, setSupportText] = useState('');

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
                <OnlineSupportImage
                  width={screenWidth * 0.334}
                  height={screenHeight * 0.13}
                />
              }
              titleTopPadding={23}
              titleFontWeight={'400'}
              titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
              title={'Support 24/7'}
              description={
                'Lorem ipsum dolor sit amet, consectetur non adipiscing elit. Eitam ac tempor leo.'
              }
              descriptionTopPadding={10}
              componentBottomPadding={23}
            />
          </View>
          {/*---- Page Title and Picture Container End ------*/}
          {/*---- Comment Input Start ------*/}
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.alignItemsCenter,
            ]}>
            <Text style={styles.dotView}>*</Text>
            <Text style={styles.commentText}>{'Comments'}</Text>
          </View>

          <View style={styles.textInputView}>
            <MultiLineTextInput
              height={screenHeight * 0.207}
              value={supportText}
              onChange={text => setSupportText(text)}
            />
          </View>
          {/*---- Comment Input End ------*/}
          {/*---- Button Start ------*/}
          <View>
            <LongButton
              title={'SEND MESSAGE'}
              titleFontColor={allColors.white}
              titleFontFamily={FONT_FAMILY.RobotoLight}
              titleFontSize={18}
              titleFontWeight={'300'}
              hasTailingIcon={true}
              tailingIconPaddingLeft={10}
              tailingIconPaddingTop={-10}
              tailingIconComponent={<SendIcon />}
              type={BUTTON_TYPE.SECONDARY}
              onPress={() => navigation.navigate(Routes.SupportHomeScreen)}
            />
          </View>
          {/*---- Button End ------*/}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnlineSupport;
