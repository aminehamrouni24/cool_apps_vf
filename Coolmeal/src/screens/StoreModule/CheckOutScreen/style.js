import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../../constants/constants';
import {
  horizontalScale,
  isSmallDevice,
  scaleFontSize,
  screenWidth,
  verticalScale,
} from '../../../utility/Scale';

const textFieldHeight = isSmallDevice
  ? 44
  : verticalScale(46) > 51
  ? 51
  : verticalScale(46) < 46
  ? 46
  : verticalScale(46);

const styles = StyleSheet.create({
  applyButton: {
    position: 'absolute',
    right: 0,
    height: '110%',
    backgroundColor: allColors.red,
    borderRadius: textFieldHeight / 2,
    width: screenWidth * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(18),
    color: allColors.white,
  },
  deliverAddressText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(14),
    color: allColors.black,
  },
  deliverPriceText: {
    fontFamily: FONT_FAMILY.RobotoCondensedBold,
    fontWeight: '700',
    fontSize: scaleFontSize(13),
    color: allColors.red,
  },
  deliverTitle: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(14),
    color: allColors.black,
  },
  gapView: {
    marginVertical: horizontalScale(7.5),
  },
  priceText: {
    fontFamily: FONT_FAMILY.RobotoCondensedBold,
    fontWeight: '700',
    fontSize: scaleFontSize(15),
    color: allColors.red,
  },
  sectionStyle: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: allColors.white,
    height: textFieldHeight,
    width: '100%',
    borderRadius: textFieldHeight / 2,
    borderWidth: 0.3,
    borderColor: allColors.borderBlack,
    flexDirection: 'row',
  },

  taxText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(15),
    color: allColors.black,
  },
  textInput: {
    flex: 1,
    padding: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    height: textFieldHeight,
    width: '100%',
    color: allColors.black,
    borderRadius: textFieldHeight / 2,
    paddingLeft: horizontalScale(27),
    fontSize: scaleFontSize(13),
    fontFamily: FONT_FAMILY.RobotoThin,
    fontWeight: '300',
  },
  titleDesc: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontWeight: '100',
    fontSize: scaleFontSize(12),
    color: allColors.black,
  },
  titleText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(11),
    color: allColors.black,
  },
  totalPriceText: {
    fontFamily: FONT_FAMILY.RobotoCondensedBold,
    fontWeight: '700',
    fontSize: scaleFontSize(18),
    color: allColors.red,
  },
  totalText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(18),
    color: allColors.black,
  },
});

export default styles;
