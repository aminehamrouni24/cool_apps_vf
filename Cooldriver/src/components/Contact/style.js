import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {verticalScale} from '../../utility/Scale';

const style = StyleSheet.create({
  messageIcon: {
    width: '48%',
    borderColor: allColors.blue,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: allColors.white,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: verticalScale(55),
  },
  callIcon: {
    borderRadius: 100,
    width: '48%',
    backgroundColor: allColors.green,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: verticalScale(55),
  },
});
export default style;
