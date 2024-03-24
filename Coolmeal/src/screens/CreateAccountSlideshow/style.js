import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {horizontalScale, verticalScale} from '../../utility/Scale';
const styles = StyleSheet.create({
  dotStyle: {
    borderWidth: 0.5,
    borderColor: allColors.grey,
  },
  swiperViewContainer: {
    flex: 1,
    zIndex: 3,
  },
  placeholder: {
    height: horizontalScale(252),
    width: '100%',
    marginTop: verticalScale(35),
    borderRadius: 3,
  },
});

export default styles;
