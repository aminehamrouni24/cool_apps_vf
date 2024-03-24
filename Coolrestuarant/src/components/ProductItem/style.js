import {StyleSheet} from 'react-native';
import {FONT_FAMILY} from '../../constants/constants';
import {
  scaleFontSize,
  horizontalScale,
  verticalScale,
} from '../../utility/Scale';
import {allColors} from '../../assets/styles/mainColors';
const styles = StyleSheet.create({
  descriptionText: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontWeight: '100',
    fontSize: scaleFontSize(11),
    color: allColors.black,
  },
  editButton: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    marginTop: verticalScale(-1),
    marginLeft: horizontalScale(5),
  },
  iconImage: {
    borderRadius: 15,
  },
  imageContainer: {width: '25%', alignItems: 'flex-start'},
  imageView: {
    height: verticalScale(48),
    width: '100%',
  },
  itemNumText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(14),
    color: allColors.black,
  },
  itemPrice: {
    fontFamily: FONT_FAMILY.RobotoCondensedBold,
    fontSize: scaleFontSize(13),
    color: allColors.red,
  },
  isNotActive: {opacity: 0.2},
  mainView: {
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(15),
    borderWidth: 0.3,
    borderColor: allColors.borderBlack,
    borderRadius: 5,
    marginBottom: verticalScale(15),
  },
  moreDescriptionText: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontWeight: '100',
    fontSize: scaleFontSize(11),
    color: allColors.black,
  },
  outOfStockContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  outOfStockText: {
    fontFamily: FONT_FAMILY.RobotoLight,
    fontSize: scaleFontSize(25),
    color: allColors.red,
  },
  smallerSwitch: {
    right: horizontalScale(-5),
    transform: [{scaleX: 0.8}, {scaleY: 0.8}],
  },
  starIcon: {
    height: verticalScale(8),
    width: horizontalScale(8),
    alignSelf: 'flex-end',
    bottom: 2,
  },
  titleStyle: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(14),
    color: allColors.black,
    marginRight: horizontalScale(5),
  },
});

export default styles;
