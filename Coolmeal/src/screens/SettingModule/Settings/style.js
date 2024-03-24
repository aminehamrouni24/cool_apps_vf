import {StyleSheet} from 'react-native';
import {FONT_FAMILY} from '../../../constants/constants';
import {scaleFontSize} from '../../../utility/Scale';

const styles = StyleSheet.create({
  tagText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontSize: scaleFontSize(18),
  },
  toggleStyle: {
    justifyContent: 'space-between',
  },
});

export default styles;
