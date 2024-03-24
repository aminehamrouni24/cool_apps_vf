import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../../constants/constants';
import {scaleFontSize} from '../../../utility/Scale';

const styles = StyleSheet.create({
  actionSheetTitleText: {
    fontFamily: FONT_FAMILY.RobotoRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(18),
    color: allColors.black,
  },
  addressText: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontSize: scaleFontSize(13),
    fontWeight: '100',
    color: allColors.black,
    flex: 1,
    marginTop: 2,
  },
  deliveringToText: {
    fontFamily: FONT_FAMILY.RobotoRegular,
    fontSize: scaleFontSize(13),
    fontWeight: '400',
    color: allColors.black,
  },
  locationImageStyle: {
    height: 10,
    width: 10,
  },
});

export default styles;
