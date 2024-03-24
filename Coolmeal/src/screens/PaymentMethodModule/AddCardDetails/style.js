import {StyleSheet} from 'react-native';
import {FONT_FAMILY} from '../../../constants/constants';
import {scaleFontSize} from '../../../utility/Scale';

const styles = StyleSheet.create({
  cvvText: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontSize: scaleFontSize(12),
    fontWeight: '100',
  },
  cvvView: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  expirationField: {
    width: 70,
  },
  titleText: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontSize: scaleFontSize(12),
    fontWeight: '100',
    marginBottom: 4,
  },
});

export default styles;
