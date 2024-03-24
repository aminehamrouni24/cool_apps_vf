import {StyleSheet} from 'react-native';
import {verticalScale} from '../../../utility/Scale';
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
  uploadContainer: {
    backgroundColor: 'rgba(27, 113, 185, 0.011)',
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
