import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../../constants/constants';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../utility/Scale';

const styles = StyleSheet.create({
  deliveryInstruction: {
    borderLeftWidth: 3,
    borderColor: allColors.red,
    borderRadius: 4,
    marginVertical: horizontalScale(10),
  },
  deliveryManName: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(20),
    color: allColors.black,
    lineHeight: 20,
    marginTop: verticalScale(5),
  },
  descriptionText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '100',
    fontSize: scaleFontSize(15),
    color: allColors.black,
    paddingVertical: 5,
  },
  pdfImage: {
    height: verticalScale(15),
    width: horizontalScale(15),
    resizeMode: 'contain',
    marginLeft: horizontalScale(11),
    marginTop: verticalScale(2),
  },
  shipperView: {
    marginTop: verticalScale(2),
    alignItems: 'center',
  },
  surrenderText: {
    fontFamily: FONT_FAMILY.RobotoRegular,
    fontWeight: '300',
    fontSize: verticalScale(12),
    marginTop: 3,
  },
  ratedText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontSize: scaleFontSize(12),
    marginRight: horizontalScale(10),
    marginLeft: horizontalScale(2),
    marginTop: verticalScale(3),
  },
  titleView: {
    marginTop: verticalScale(12),
  },
});

export default styles;
