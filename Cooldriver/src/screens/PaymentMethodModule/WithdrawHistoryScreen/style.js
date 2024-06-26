import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../../constants/constants';
import {
  horizontalScale,
  isSmallDevice,
  scaleFontSize,
  verticalScale,
} from '../../../utility/Scale';

const viewHeight = isSmallDevice
  ? 44
  : verticalScale(46) > 51
  ? 51
  : verticalScale(46) < 46
  ? 46
  : verticalScale(46);

const styles = StyleSheet.create({
  balanceTitleText: {
    fontFamily: FONT_FAMILY.RobotoLight,
    fontWeight: '300',
    fontSize: scaleFontSize(12),
    color: allColors.black,
  },
  balanceText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(25),
    color: allColors.black,
    textAlign: 'left',
  },
  fieldName: {
    fontWeight: '100',
    color: allColors.black,
    marginBottom: 4,
    fontSize: scaleFontSize(12),
  },
  flatListBorderView: {
    borderWidth: 0.3,
    borderColor: allColors.borderBlack,
    borderRadius: 5,
  },
  flatListView: {
    paddingTop: verticalScale(8),
  },
  withdrawHistoryText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(16),
    color: allColors.black,
    textAlign: 'left',
  },
  totalEarnedText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(25),
    color: allColors.black,
    textAlign: 'right',
  },
});

export default styles;
