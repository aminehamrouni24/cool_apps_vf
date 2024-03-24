import {StyleSheet} from 'react-native';
import {FONT_FAMILY} from '../../../constants/constants';
import {scaleFontSize} from '../../../utility/Scale';

const styles = StyleSheet.create({
  titleText: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontSize: scaleFontSize(12),
    fontWeight: '100',
    marginBottom: 4,
  },
});

export default styles;
