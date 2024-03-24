import {StyleSheet} from 'react-native';
import {FONT_FAMILY} from '../../constants/constants';
import {
  scaleFontSize,
  screenHeight,
  horizontalScale,
  verticalScale,
} from '../../utility/Scale';
import {allColors} from '../../assets/styles/mainColors';

const styles = StyleSheet.create({
  container: {
    height: 85,
    borderWidth: 0.3,
    width: '100%',
    borderColor: allColors.borderBlack,
    borderRadius: 10,
    justifyContent: 'center',
  },
  descriptionText: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontWeight: '100',
    fontSize: scaleFontSize(12),
    color: allColors.black,
    marginTop: verticalScale(3),
    maxWidth: '100%',
  },
  imageContainer: {
    height: 55,
    width: 55,
    marginRight: horizontalScale(16),
  },
  imageIcon: {
    height: '100%',
    width: '100%',
    borderRadius: 100,
  },
  itemPrice: {
    color: allColors.red,
    fontFamily: FONT_FAMILY.RobotoCondensedBold,
  },
  leftProductIcon: {
    position: 'absolute',
    left: 0,
    top: -1,
  },
  productIcon: {
    position: 'absolute',
    right: 0,
    top: -9,
  },
  subContainer: {
    paddingLeft: horizontalScale(16),
    paddingRight: horizontalScale(21),
  },
  title: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: 'normal',
    fontSize: scaleFontSize(13),
    color: allColors.black,
  },
  totalCountView: {
    marginTop: verticalScale(5),
    height: screenHeight * 0.031,
    width: screenHeight * 0.031,
    borderWidth: 0.5,
    borderColor: allColors.borderBlack,
    borderRadius: (screenHeight * 0.031) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalCountText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(12),
    color: allColors.black,
  },
});

export default styles;
