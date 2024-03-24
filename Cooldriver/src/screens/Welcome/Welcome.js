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
          globalStyles.alignItemsCenter,
          globalStyles.bgBlack,
          globalStyles.horizontalGeneralPadding,
        ]}>
        <LogoIcon />
        <Text
          style={[
            globalStyles.logoFontDobule,
            globalStyles.colorWhite,
            globalStyles.marginBottom15,
            globalStyles.marginTop5,
          ]}>
          Cool Driver
        </Text>
        <LongButton
          styles={{width: 210, maxWidth: '100%'}}
          title={'Welcome'}
          titleFontColor={allColors.white}
          titleFontFamily={FONT_FAMILY.RobotoCondensedLight}
          titleFontSize={18}
          type={BUTTON_TYPE.TRANSPARENT}
          titleFontWeight={'300'}
          onPress={() => this.props.navigation.navigate(Routes.ChooseLanguage)}
          width={210}
        />
      </View>
    );
  }
}
export default Welcome;
