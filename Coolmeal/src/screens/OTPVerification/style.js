import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {isSmallDevice, verticalScale} from '../../utility/Scale';

const textFieldHeight = isSmallDevice
  ? 52
  : verticalScale(57) > 56
  ? 63
  : verticalScale(57) < 50
  ? 57
  : verticalScale(57);

const styles = StyleSheet.create({
  borderView: {
    height: textFieldHeight,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: textFieldHeight / 2,
    borderWidth: 0.3,
    borderColor: allColors.borderBlack,
  },
  otpViewStyle: {
    width: '50%',
  },
  underlineStyleBase: {
    width: 10,
    height: 15,
    borderWidth: 0,
    borderBottomWidth: 0.5,
    borderColor: allColors.black,
    color: allColors.black,
    padding: 0,
  },
  underlineStyleHighLighted: {
    borderColor: allColors.black,
    padding: 0,
  },
});

export default styles;
