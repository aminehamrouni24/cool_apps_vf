import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {scaleFontSize} from '../../utility/Scale';
const styles = StyleSheet.create({
  buttonTitle: {
    fontFamily: FONT_FAMILY.Rajdhani,
    fontSize: scaleFontSize(16),
  },
  buttonTitleContainer: {
    borderWidth: 0.74,
    borderColor: allColors.black,
    paddingVertical: 15,
    borderRadius: 30,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  detailWidth: {
    width: 261,
  },
});

export default styles;
