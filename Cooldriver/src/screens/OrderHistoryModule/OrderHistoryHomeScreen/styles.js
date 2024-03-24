import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../../constants/constants';
import {scaleFontSize, verticalScale} from '../../../utility/Scale';

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
    color: allColors.strongBlue,
    textAlign: 'left',
  },
  flatListBorderView: {
    borderWidth: 0.3,
    borderColor: allColors.borderBlack,
    borderRadius: 5,
  },
  flatListView: {
    paddingTop: verticalScale(8),
  },
  totalEarnedText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(25),
    color: allColors.black,
    textAlign: 'right',
  },
  withdrawHistoryText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(16),
    color: allColors.black,
    textAlign: 'left',
  },
});

export default styles;
