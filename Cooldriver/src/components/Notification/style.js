import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {horizontalScale, verticalScale} from '../../utility/Scale';

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    padding: horizontalScale(3),
    right: horizontalScale(10),
    top: verticalScale(10),
    zIndex: 20,
  },
  container: {
    position: 'absolute',
    top: verticalScale(50),
    left: horizontalScale(25),
    right: horizontalScale(25),
    backgroundColor: allColors.white,
    paddingHorizontal: horizontalScale(15),
    borderRadius: 4,
    borderLeftWidth: 4,
    borderLeftColor: allColors.red,
    paddingVertical: verticalScale(10),
    zIndex: 30,
  },
});
export default styles;
