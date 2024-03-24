import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {
  horizontalScale,
  isSmallDevice,
  scaleFontSize,
  verticalScale,
} from '../../utility/Scale';
import {FONT_FAMILY} from '../../constants/constants';

const textFieldHeight = isSmallDevice
  ? 60
  : verticalScale(73) > 60
  ? 69
  : verticalScale(73) < 65
  ? 74
  : verticalScale(73);

const styles = StyleSheet.create({
  borderLightGreyText: {
    borderColor: allColors.lightGreyText,
  },
  dropdownStyle: {
    borderColor: allColors.lightGreyText,
    height: textFieldHeight,
    marginBottom: verticalScale(20),
  },
  listItemContainerStyle: {
    height: verticalScale(50),
  },
  placeholderStyle: {
    color: allColors.grey,
  },
  selectedItemContainerStyle: {
    backgroundColor: allColors.lightGreyBorder,
  },
  titleText: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontSize: scaleFontSize(13),
    fontWeight: '100',
    marginBottom: 4,
    minHeight: verticalScale(16),
  },
  textStyle: {
    fontSize: scaleFontSize(15),
    fontFamily: FONT_FAMILY.RobotoRegular,
    fontWeight: '300',
  },
});
export default styles;
