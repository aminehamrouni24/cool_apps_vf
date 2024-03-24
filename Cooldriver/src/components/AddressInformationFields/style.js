import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utility/Scale';
import {FONT_FAMILY} from '../../constants/constants';

const styles = StyleSheet.create({
  addressInfoContainer: {
    marginTop: verticalScale(7),
    marginLeft: verticalScale(-8),
  },
  descriptionText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '100',
    fontSize: scaleFontSize(15),
    color: allColors.black,
    paddingVertical: 5,
  },
  nameView: {
    marginLeft: horizontalScale(5),
    marginRight: horizontalScale(10),
    marginTop: verticalScale(10),
    paddingRight: horizontalScale(15),
    flexDirection: 'row',
  },
});
export default styles;
