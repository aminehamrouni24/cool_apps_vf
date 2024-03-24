import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../../constants/constants';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../utility/Scale';

const styles = StyleSheet.create({
  addressInformationContainer: {marginVertical: verticalScale(-7)},
  confirmationText: {
    color: allColors.red,
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontSize: scaleFontSize(12),
    textAlign: 'center',
    marginTop: verticalScale(10),
  },
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
  helpButtonContainer: {
    position: 'absolute',
    right: verticalScale(-10),
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  helpButton: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(3),
    backgroundColor: allColors.red,
    borderRadius: 20,
  },
  helpButtonTitle: {
    color: allColors.white,
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
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
    fontFamily: FONT_FAMILY.RobotoLight,
    fontWeight: '700',
    fontSize: verticalScale(12),
    marginTop: verticalScale(5),
    color: allColors.blue,
  },
  pickupByText: {color: allColors.black, fontWeight: '300'},
  ratedText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontSize: scaleFontSize(13),
    marginRight: horizontalScale(10),
    marginLeft: horizontalScale(2),
    marginTop: verticalScale(3),
  },
  titleView: {
    marginTop: verticalScale(12),
  },
});

export default styles;
