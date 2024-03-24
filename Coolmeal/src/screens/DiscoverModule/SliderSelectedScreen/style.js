import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../../constants/constants';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../utility/Scale';

const styles = StyleSheet.create({
  horizontalStyle: {
    marginLeft: horizontalScale(1),
    alignSelf: 'center',
  },
  titleText: {
    color: allColors.black,
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontSize: scaleFontSize(14),
    fontWeight: '300',
    marginRight: horizontalScale(5),
  },
  verticalStyle: {
    marginTop: verticalScale(5),
    marginLeft: horizontalScale(5),
    alignSelf: 'center',
  },
});

export default styles;
