import {StyleSheet} from 'react-native';
import {verticalScale} from '../../../utility/Scale';
const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingBottom: verticalScale(10),
  },
});

export default styles;
