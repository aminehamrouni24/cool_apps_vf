import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utility/Scale';

const styles = StyleSheet.create({
  descriptionText: {
    fontFamily: FONT_FAMILY.RobotoLight,
    fontWeight: '100',
    marginTop: 2,
    fontSize: scaleFontSize(12),
    color: allColors.grey,
  },
  moneyGainedView: {
    marginRight: horizontalScale(17),
  },
  mainContainer: {
    paddingVertical: verticalScale(16),
  },
  moneyGainedText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(15),
    color: allColors.strongBlue,
  },
  nameText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(14),
    color: allColors.black,
  },
  nameView: {
    marginLeft: horizontalScale(11),
    flex: 1,
    marginRight: horizontalScale(5),
  },
  profileView: {
    marginLeft: horizontalScale(18),
  },
});
export default styles;
