import {StyleSheet} from 'react-native';
import {FONT_FAMILY} from '../../../constants/constants';
import {scaleFontSize, verticalScale} from '../../../utility/Scale';
import {allColors} from '../../../assets/styles/mainColors';

const styles = StyleSheet.create({
  cameraContainer: {
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 0.3,
    borderColor: allColors.lightGreyText,
    width: 63,
    height: 63,
    justifyContent: 'center',
  },
  fieldName: {
    fontWeight: '100',
    color: allColors.black,
    marginBottom: 4,
    fontSize: scaleFontSize(12),
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
