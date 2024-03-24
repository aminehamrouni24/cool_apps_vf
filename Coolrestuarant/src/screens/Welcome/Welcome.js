import React, {Component} from 'react';
import {View, Text} from 'react-native';

//Components
import LogoIcon from '../../components/icons/LogoIcon/LogoIcon';
import LongButton from '../../components/LongButton/LongButton';

//Utils
import Routes from '../../navigation/Routes';
import globalStyles from '../../assets/styles/globalStyles';
import {BUTTON_TYPE, FONT_FAMILY} from '../../constants/constants';
import {allColors} from '../../assets/styles/mainColors';
import {verticalScale} from '../../utility/Scale';

class Welcome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={[
          globalStyles.flex,
          globalStyles.justifyCenter,
          globalStyles.bgWhite,
          globalStyles.alignItemsCenter,
          globalStyles.horizontalGeneralPadding,
          {marginTop: verticalScale(-200)},
        ]}>
        <LogoIcon colored />
        <Text
          style={[
            globalStyles.logoFontDobule,
            globalStyles.marginBottom10,
            globalStyles.marginTop10,
          ]}>
         Cool Restaurant
        </Text>
        {/*---- Welcome Button Start ------*/}
        <LongButton
          styles={{width: 210, maxWidth: '100%'}}
          title={'Welcome'}
          titleFontColor={allColors.black}
          titleFontFamily={FONT_FAMILY.RobotoCondensedLight}
          titleFontSize={18}
          type={BUTTON_TYPE.LIGHT}
          titleFontWeight={'300'}
          onPress={() => this.props.navigation.navigate(Routes.ChooseLanguage)}
          width={210}
        />
        {/*---- Welcome Button End ------*/}
      </View>
    );
  }
}
export default Welcome;
