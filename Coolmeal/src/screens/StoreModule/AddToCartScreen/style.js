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
  buttonView: {
    marginTop: verticalScale(19),
  },
  descriptionText: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontWeight: '100',
    fontSize: scaleFontSize(13),
    color: allColors.black,
    textAlign: 'left',
    marginTop: verticalScale(6),
  },
  descriptionTitle: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(20),
    color: allColors.black,
    textAlign: 'left',
  },
  descView: {
    width: '100%',
    borderWidth: 0.3,
    borderRadius: 10,
    borderColor: allColors.borderBlack,
    marginTop: verticalScale(13),
    paddingTop: verticalScale(13),
    paddingBottom: verticalScale(17),
    paddingHorizontal: horizontalScale(19),
  },
  gapView: {
    marginVertical: horizontalScale(10),
  },
  imageView: {
    height: screenHeight * 0.21,
    width: screenWidth * 0.5,
    alignSelf: 'center',
    marginBottom: verticalScale(20),
    marginTop: verticalScale(20),
  },
  priceText: {
    fontFamily: FONT_FAMILY.RobotoCondensedBold,
    fontWeight: '700',
    fontSize: scaleFontSize(25),
    color: allColors.red,
  },
  reviewView: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(20),
    justifyContent: 'space-between',
    marginTop: verticalScale(5),
    marginBottom: verticalScale(15),
  },
  titleDesc: {
    fontFamily: FONT_FAMILY.RobotoLight,
    fontWeight: '300',
    fontSize: scaleFontSize(13),
    color: allColors.black,
    textAlign: 'center',
    paddingHorizontal: horizontalScale(20),
  },
  titleText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(25),
    color: allColors.black,
    marginTop: verticalScale(13),
    textAlign: 'center',
  },
  titleView: {
    width: '100%',
    borderWidth: 0.3,
    borderRadius: 10,
    borderColor: allColors.borderBlack,
    marginTop: verticalScale(25),
  },
});

export default styles;
