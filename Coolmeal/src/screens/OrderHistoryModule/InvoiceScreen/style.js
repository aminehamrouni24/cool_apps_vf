import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../../constants/constants';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../utility/Scale';

const styles = StyleSheet.create({
  deliverAddressText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(14),
    color: allColors.black,
    lineHeight: 19,
  },
  deliveredLogo: {
    alignSelf: 'flex-end',
    marginTop: verticalScale(15),
    position: 'absolute',
  },
  deliveryManName: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(20),
    color: allColors.black,
    lineHeight: 20,
    marginTop: verticalScale(5),
  },
  deliverTitle: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(14),
    color: allColors.black,
  },
  descriptionText: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontWeight: '100',
    fontSize: scaleFontSize(13),
    color: allColors.black,
  },
  gapView: {
    marginVertical: horizontalScale(10),
  },
  grandText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(16),
    color: allColors.black,
  },
  grandPriceText: {
    fontFamily: FONT_FAMILY.RobotoCondensedBold,
    fontWeight: '700',
    fontSize: scaleFontSize(16),
    color: allColors.red,
  },
  invoiceTitle: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(20),
    color: allColors.black,
  },
  invoiceText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(20),
    color: allColors.black,
  },
  pdfImage: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  priceText: {
    fontFamily: FONT_FAMILY.RobotoCondensedBold,
    fontWeight: '700',
    fontSize: scaleFontSize(15),
    color: allColors.red,
  },
  shipperText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(13),
    color: allColors.black,
    lineHeight: 13,
  },
  shipperView: {
    marginTop: verticalScale(8),
    alignItems: 'center',
  },
  smallInvoiceTitle: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(13),
    color: allColors.black,
  },
  smallInvoiceText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(13),
    color: allColors.black,
  },
  surrenderText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(14),
    color: allColors.black,
    marginRight: 2,
  },
  reviewText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(11),
    color: allColors.black,
    textDecorationLine: 'underline',
  },
  taxText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(15),
    color: allColors.black,
  },
  titleView: {
    marginTop: verticalScale(12),
  },
  trackingHistoryText: {
    fontFamily: FONT_FAMILY.RobotoLight,
    fontWeight: '300',
    fontSize: scaleFontSize(16),
    color: allColors.black,
    marginLeft: horizontalScale(5),
  },
});

export default styles;
