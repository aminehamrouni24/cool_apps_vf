import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../../constants/constants';
import {
  horizontalScale,
  scaleFontSize,
  screenWidth,
  verticalScale,
} from '../../../utility/Scale';

const styles = StyleSheet.create({
  cancelButton: {
    backgroundColor: allColors.black,
    marginRight: horizontalScale(10),
  },
  orderSuccessText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(20),
    color: allColors.black,
    textAlign: 'center',
  },
  orderSuccessMessageText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '300',
    fontSize: scaleFontSize(15),
    color: allColors.black,
    textAlign: 'center',
    lineHeight: 25,
  },
  viewContainer: {
    backgroundColor: allColors.white,
    borderRadius: 10,
    paddingVertical: verticalScale(40),
    width: screenWidth - horizontalScale(74),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchButtons: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingVertical: verticalScale(14),
    marginTop: verticalScale(10),
  },
  touchText: {
    fontFamily: FONT_FAMILY.RobotoRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(18),
    textAlign: 'center',
  },
  paddingView: {
    paddingHorizontal: horizontalScale(20),
  },
});

export default styles;
