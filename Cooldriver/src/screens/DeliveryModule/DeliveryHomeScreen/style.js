import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {horizontalScale, verticalScale} from '../../../utility/Scale';
import {FONT_FAMILY} from '../../../constants/constants';

const styles = StyleSheet.create({
  backButtonContainer: {
    position: 'absolute',
    bottom: 20,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  backButtonWidth: {
    paddingHorizontal: verticalScale(60),
    width: '100%',
  },
  notificationToggleContainer: {
    position: 'absolute',
    zIndex: 10,
    top: verticalScale(55),
    left: horizontalScale(25),
  },
  orderDetailButtonContainer: {
    position: 'absolute',
    top: verticalScale(54),
    right: horizontalScale(25),
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  orderDetailButton: {
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(6),
    backgroundColor: allColors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: allColors.red,
  },
  orderDetailButtonTitle: {
    color: allColors.red,
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
  },
  routeButtonWidth: {
    paddingHorizontal: verticalScale(20),
    width: '100%',
  },
});

export default styles;
