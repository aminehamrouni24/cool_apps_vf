import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../utility/Scale';

const styles = StyleSheet.create({
  countdown: {
    position: 'absolute',
    top: horizontalScale(-43),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    left: 0,
    right: 0,
  },
  countdownIconContainer: {
    borderWidth: 0.5,
    borderColor: allColors.lightGreyText,
    backgroundColor: allColors.white,
    paddingHorizontal: horizontalScale(18),
    paddingVertical: verticalScale(15),
    borderRadius: 60,
  },
  countdownText: {
    position: 'absolute',
    left: horizontalScale(-4),
    right: 0,
    textAlign: 'center',
    fontSize: scaleFontSize(15),
    top: verticalScale(32),
  },
  deliveryInstruction: {
    borderLeftWidth: 3,
    borderColor: allColors.red,
    borderRadius: 4,
    marginVertical: horizontalScale(10),
  },
  gapView: {
    marginVertical: horizontalScale(5),
  },
  orderContainer: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    paddingHorizontal: horizontalScale(22),
    paddingVertical: verticalScale(22),
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    backgroundColor: allColors.white,
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowColor: 'rgba(0,0,0,0.1)',
  },
});

export default styles;
