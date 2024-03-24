import {StyleSheet} from 'react-native';
import {FONT_FAMILY} from '../../constants/constants';
import {scaleFontSize, verticalScale} from '../../utility/Scale';

const styles = StyleSheet.create({
  text: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontSize: scaleFontSize(13),
    fontWeight: '100',
    marginBottom: 4,
    height: verticalScale(16),
  },
});

export default styles;
