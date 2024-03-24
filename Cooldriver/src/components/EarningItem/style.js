import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utility/Scale';

const styles = StyleSheet.create({
  dateText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(12),
    color: allColors.black,
  },
  dateView: {
    marginRight: horizontalScale(12),
  },
  descriptionText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    marginTop: verticalScale(5),
    fontSize: scaleFontSize(12),
    color: allColors.black,
  },
  mainContainer: {
    paddingVertical: verticalScale(16),
  },
  moneyGainedText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(15),
    marginBottom: verticalScale(3),
  },
  nameText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(14),
    color: allColors.black,
  },
  nameView: {
    marginLeft: horizontalScale(5),
    flex: 1,
    marginRight: horizontalScale(5),
    marginTop: verticalScale(-5),
    flexDirection: 'row',
  },
  profileView: {
    marginLeft: horizontalScale(8),
  },
});
export default styles;
