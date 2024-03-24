import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../../constants/constants';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../utility/Scale';

const styles = StyleSheet.create({
  commentText: {
    fontFamily: FONT_FAMILY.RobotoLight,
    fontWeight: '300',
    fontSize: scaleFontSize(12),
    color: allColors.black,
  },
  dotView: {
    height: 5,
    width: 5,
    borderRadius: 2.5,
    backgroundColor: allColors.yellow,
    marginRight: horizontalScale(3),
  },
  textInputView: {
    marginTop: verticalScale(8),
    marginBottom: verticalScale(27),
  },
});

export default styles;
