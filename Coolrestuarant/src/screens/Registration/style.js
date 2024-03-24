import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {scaleFontSize} from '../../utility/Scale';

const styles = StyleSheet.create({
  alreadyHaveAccountText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontSize: scaleFontSize(14),
    color: allColors.ternaryBlack,
    fontWeight: '100',
    marginTop: 2,
  },
  forgotPasswordText: {
    fontFamily: FONT_FAMILY.RobotoLight,
    fontSize: scaleFontSize(14),
    color: allColors.ternaryBlack,
  },
});

export default styles;
