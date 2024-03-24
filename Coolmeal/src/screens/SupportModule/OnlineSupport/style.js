import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../utility/Scale';
import {FONT_FAMILY} from '../../../constants/constants';
import {allColors} from '../../../assets/styles/mainColors';

const styles = StyleSheet.create({
  commentText: {
    fontFamily: FONT_FAMILY.RobotoLight,
    fontWeight: '300',
    fontSize: scaleFontSize(12),
    color: allColors.black,
  },
  dotView: {
    color: allColors.yellow,
    marginRight: horizontalScale(3),
  },
  textInputView: {
    marginTop: verticalScale(8),
    marginBottom: verticalScale(20),
  },
});

export default styles;
