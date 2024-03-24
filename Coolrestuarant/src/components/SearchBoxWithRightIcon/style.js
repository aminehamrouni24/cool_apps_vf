import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {
  horizontalScale,
  isSmallDevice,
  scaleFontSize,
} from '../../utility/Scale';

const textFieldHeight = isSmallDevice ? 50 : 60;

const styles = StyleSheet.create({
  iconContainer: {
    borderLeftWidth: 1,
    paddingLeft: horizontalScale(8),
    borderColor: allColors.borderBlack,
  },
  mainContainer: {
    alignItems: 'center',
    height: textFieldHeight,
    flexDirection: 'row',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: allColors.white,
    height: '100%',
    flex: 1,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: allColors.borderBlack,
    paddingRight: horizontalScale(13),
  },
  textInput: {
    flex: 1,
    padding: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    paddingLeft: horizontalScale(26),
    fontSize: scaleFontSize(14),
    fontFamily: FONT_FAMILY.RobotoThin,
    fontWeight: '100',
    height: '100%',
  },
});
export default styles;
