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
    backgroundColor: allColors.white,
    marginRight: horizontalScale(10),
    borderWidth: 1,
    borderColor: allColors.blue,
  },
  cancelButtonText: {
    color: allColors.blue,
  },
  checkbox: {transform: [{scaleX: 0.8}, {scaleY: 0.8}]},
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkboxTitle: {fontFamily: FONT_FAMILY.RobotoCondensedLight},
  declineButton: {
    backgroundColor: allColors.red,
    marginRight: horizontalScale(10),
  },
  declineButtonText: {
    color: allColors.white,
  },
  disabledDeclineButton: {
    backgroundColor: allColors.grey,
  },
  orderSuccessText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(20),
    color: allColors.black,
  },
  orderSuccessMessageText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '300',
    fontSize: scaleFontSize(15),
    color: allColors.black,
    textAlign: 'center',
  },
  viewContainer: {
    backgroundColor: allColors.white,
    borderRadius: 10,
    paddingVertical: verticalScale(40),
    width: screenWidth - horizontalScale(74),
    alignSelf: 'center',
    paddingHorizontal: horizontalScale(20),
    justifyContent: 'center',
  },
  touchButtons: {
    borderRadius: 8,
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
});

export default styles;
