import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../../constants/constants';
import {
  horizontalScale,
  scaleFontSize,
  screenHeight,
  screenWidth,
  verticalScale,
} from '../../../utility/Scale';

const styles = StyleSheet.create({
  boldText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(13),
    color: allColors.black,
    lineHeight: 19,
  },
  commonText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(13),
    color: allColors.black,
    lineHeight: 19,
  },
  deliveryCityText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(13),
    color: allColors.black,
    marginRight: horizontalScale(5),
  },
  deliveryDateText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(13),
    color: allColors.black,
    marginLeft: horizontalScale(5),
  },
  descView: {
    marginTop: verticalScale(65),
  },
  detailView: {
    marginTop: verticalScale(20),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  signatureView: {
    height: screenHeight * 0.08,
    width: screenWidth * 0.2,
    resizeMode: 'contain',
  },
  titleText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(21),
    color: allColors.black,
    textAlign: 'left',
    marginTop: verticalScale(15),
  },
});

export default styles;
