import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../../constants/constants';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../utility/Scale';

const styles = StyleSheet.create({
  actionSheetOptionText: {
    fontFamily: FONT_FAMILY.RobotoLight,
    fontWeight: '300',
    fontSize: scaleFontSize(18),
    color: allColors.black,
  },
  actionSheetTitleText: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontWeight: '100',
    fontSize: scaleFontSize(10),
    color: allColors.black,
  },
  arrowLeft: {
    marginLeft: horizontalScale(-10),
    marginTop: 5,
  },
  arrowRight: {
    marginRight: horizontalScale(-10),
    marginTop: 5,
  },
  courierText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(13),
    color: allColors.black,
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
  descText: {
    fontFamily: FONT_FAMILY.RobotoLight,
    fontWeight: '300',
    fontSize: scaleFontSize(13),
    color: allColors.black,
    textAlign: 'center',
  },
  gapView: {
    marginVertical: horizontalScale(7.5),
  },
  nameText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(20),
    color: allColors.black,
  },
  priceText: {
    fontFamily: FONT_FAMILY.RobotoCondensedBold,
    fontWeight: '700',
    fontSize: scaleFontSize(15),
    color: allColors.red,
  },
  processText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(12),
    color: allColors.black,
    marginTop: verticalScale(3),
    marginBottom: verticalScale(2),
    textAlign: 'center',
  },
  restaurantText: {
    fontFamily: FONT_FAMILY.RobotoLight,
    fontWeight: '300',
    fontSize: scaleFontSize(15),
    color: allColors.black,
    textAlign: 'center',
  },
  taxText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(15),
    color: allColors.black,
  },
  titleText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(20),
    color: allColors.black,
    textAlign: 'center',
    marginBottom: verticalScale(7),
  },
  timelineView: {
    marginTop: verticalScale(27),
  },
  timeText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(12),
    color: allColors.black,
    marginLeft: 2,
  },
  totalText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(18),
    color: allColors.black,
  },
  totalPriceText: {
    fontFamily: FONT_FAMILY.RobotoCondensedBold,
    fontWeight: '700',
    fontSize: scaleFontSize(18),
    color: allColors.red,
  },
});

export default styles;
