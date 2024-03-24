import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {scaleFontSize} from '../../utility/Scale';
import {FONT_FAMILY} from '../../constants/constants';

const styles = StyleSheet.create({
  alreadyHaveAnAccountButton: {marginTop: -2, marginLeft: 7},
  alreadyHaveAccountText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontSize: scaleFontSize(14),
    color: allColors.ternaryBlack,
    fontWeight: '100',
    marginTop: 2,
  },
  underlineBase: {
    width: 10,
    height: 15,
    borderWidth: 0,
    borderBottomWidth: 0.5,
    borderColor: allColors.black,
    color: allColors.black,
  },
  underlineHighlighted: {
    borderColor: allColors.black,
  },
});

export default styles;
