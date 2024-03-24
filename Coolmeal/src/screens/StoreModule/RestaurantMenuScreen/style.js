import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../../constants/constants';
import {horizontalScale, scaleFontSize} from '../../../utility/Scale';

const styles = StyleSheet.create({
  actionSheetOptionText: {
    fontFamily: FONT_FAMILY.RobotoLight,
    fontWeight: '300',
    fontSize: scaleFontSize(18),
    color: allColors.black,
  },
  actionSheetTitleText: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontWeight: '100',
    fontSize: scaleFontSize(10),
    color: allColors.black,
  },
  gapView: {
    marginVertical: horizontalScale(10),
  },
  titleDesc: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontWeight: '100',
    fontSize: scaleFontSize(12),
    color: allColors.black,
  },
  titleText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(11),
    color: allColors.black,
  },
});

export default styles;
