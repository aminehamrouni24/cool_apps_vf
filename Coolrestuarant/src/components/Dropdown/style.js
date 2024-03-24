import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {isSmallDevice, scaleFontSize, verticalScale} from '../../utility/Scale';
import {FONT_FAMILY} from '../../constants/constants';

const textFieldHeight = isSmallDevice
  ? 60
  : verticalScale(73) > 60
  ? 69
  : verticalScale(73) < 65
  ? 74
  : verticalScale(73);

const styles = StyleSheet.create({
  dropdownStyle: {
    borderColor: allColors.lightGreyText,
    height: textFieldHeight,
    marginBottom: verticalScale(20),
  },
  titleText: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontSize: scaleFontSize(13),
    fontWeight: '100',
    marginBottom: 4,
    minHeight: verticalScale(16),
  },
});
export default styles;
