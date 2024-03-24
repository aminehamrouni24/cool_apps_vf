import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {scaleFontSize} from '../../utility/Scale';

const styles = StyleSheet.create({
  alreadyHaveAccountText: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontSize: scaleFontSize(14),
    color: allColors.black,
    opacity: 0.8,
    fontWeight: '100',
    marginTop: 2,
  },
  forgotPasswordText: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontSize: scaleFontSize(15),
    color: allColors.secondaryButtonBlack,
    opacity: 0.8,
  },
});

export default styles;
