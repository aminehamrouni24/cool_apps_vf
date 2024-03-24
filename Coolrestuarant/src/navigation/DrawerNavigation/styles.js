import {StyleSheet, Platform} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {
  horizontalScale,
  isSmallDevice,
  scaleFontSize,
  screenHeight,
  screenWidth,
  verticalPercentageScale,
  verticalScale,
} from '../../utility/Scale';

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    marginTop: Platform.OS == 'android' ? 24 : isSmallDevice ? 30 : 55,
    flexDirection: 'row',
    left: horizontalScale(40),
    alignItems: 'flex-end',
  },
  closeText: {
    marginLeft: horizontalScale(9),
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(16),
    color: allColors.black,
  },
  drawerItem: {alignItems: 'flex-start', marginVertical: 0, height: 50},
  drawerLabel: {
    color: allColors.black,
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(16),
    marginLeft: horizontalScale(12),
  },
  drawerStyles: {flex: 1, width: '60%', backgroundColor: allColors.transparent},
  drawerView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalPercentageScale(5.89),
  },
  iconStyle: {
    resizeMode: 'contain',
    width: screenWidth * 0.05,
    height: screenWidth * 0.05,
  },
  logoutIconStyle: {
    resizeMode: 'contain',
    width: screenWidth * 0.06,
    height: screenWidth * 0.06,
  },
  logoutView: {
    marginBottom: verticalScale(15),
    flexDirection: 'row',
  },
  profileView: {
    marginTop: verticalScale(10),
    alignItems: 'flex-start',
  },
  safeAreaContex: {
    flex: 1,
  },
  stack: {
    height: screenHeight,
    shadowColor: allColors.black,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    overflow: 'hidden',
  },
  userDetailView: {
    marginTop: verticalScale(12),
  },
  userNameText: {
    color: allColors.black,
    fontSize: scaleFontSize(17),
    fontWeight: 'normal',
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
  },
  userNumberText: {
    marginTop: verticalScale(6),
    color: allColors.black,
    fontSize: scaleFontSize(12),
    fontWeight: '300',
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
  },
  welcomeText: {
    color: allColors.black,
    fontSize: scaleFontSize(12),
    fontWeight: '300',
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
  },
});
export default styles;
