import {StyleSheet} from 'react-native';
import {scaleFontSize, verticalScale} from '../../../utility/Scale';
import {FONT_FAMILY} from '../../../constants/constants';
import {allColors} from '../../../assets/styles/mainColors';

const styles = StyleSheet.create({
  cameraContainer: {
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 0.3,
    borderColor: allColors.lightGreyText,
    backgroundColor: 'rgb(252, 252, 252)',
    width: 63,
    height: 63,
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontSize: scaleFontSize(13),
    fontWeight: '100',
    marginBottom: 4,
    height: verticalScale(16),
  },
  uploadContainer: {
    marginTop: verticalScale(5),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
    borderRadius: 3,
    borderColor: allColors.lightGreyText,
    borderWidth: 0.3,
  },
});
export default styles;
