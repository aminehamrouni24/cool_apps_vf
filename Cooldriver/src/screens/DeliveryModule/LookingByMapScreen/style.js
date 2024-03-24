import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {screenHeight} from '../../../utility/Scale';

const styles = StyleSheet.create({
  markerImage: {
    height: screenHeight * 0.02,
    width: screenHeight * 0.02,
    resizeMode: 'contain',
  },
  markerView: {
    height: screenHeight * 0.045,
    width: screenHeight * 0.045,
    borderRadius: (screenHeight * 0.045) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: allColors.white,
  },
});

export default styles;
