import React, {useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';

//Components
import Header from '../../../components/Header/Header';
import LongButton from '../../../components/LongButton/LongButton';
import MultiLineTextInput from '../../../components/MultiLineTextInput/MultiLineTextInput';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';

//Publicly Available Icons that Can be Used for Commercial Purposes
import SendIcon from '../../../assets/icons/generalIcons/sendIconSVG.svg';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import Routes from '../../../navigation/Routes';
import {
  horizontalScale,
  screenHeight,
  verticalScale,
} from '../../../utility/Scale';
import {allColors} from '../../../assets/styles/mainColors';
import {BUTTON_TYPE, FONT_FAMILY} from '../../../constants/constants';

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
                <Image
                  source={require('../../../assets/placeholders/105x104.png')}
                  style={{
                    height: horizontalScale(104),
                    width: verticalScale(105),
                    borderRadius: 3,
                  }}
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
