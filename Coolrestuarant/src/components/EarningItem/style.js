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
  inviteCodeText: {
    fontFamily: FONT_FAMILY.RobotoRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(12),
    color: allColors.black,
    flex: 1,
    textDecorationLine: 'underline',
  },
  inviteCodeTitle: {
    fontFamily: FONT_FAMILY.RobotoLight,
    fontWeight: '300',
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
    marginLeft: horizontalScale(8),
  },
});
export default styles;
