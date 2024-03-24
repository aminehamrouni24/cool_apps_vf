import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../../constants/constants';
import {
  horizontalScale,
  isSmallDevice,
  scaleFontSize,
  screenHeight,
  screenWidth,
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
  inviteFriendText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(16),
    color: allColors.black,
    textAlign: 'left',
  },
  shareCodeIcon: {
    height: screenHeight * 0.022,
    width: screenWidth * 0.05,
    resizeMode: 'contain',
  },
  shareCodeText: {
    fontFamily: FONT_FAMILY.RobotoRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(15),
    color: allColors.black,
    textAlign: 'center',
  },
  sectionStyle: {
    paddingLeft: horizontalScale(28),
    paddingRight: horizontalScale(34),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: allColors.white,
    height: viewHeight,
    width: '100%',
    borderRadius: viewHeight / 2,
    borderWidth: 0.3,
    borderColor: allColors.borderBlack,
    flexDirection: 'row',
    marginTop: verticalScale(8),
  },
  titleText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(15),
    color: allColors.black,
    textAlign: 'center',
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
