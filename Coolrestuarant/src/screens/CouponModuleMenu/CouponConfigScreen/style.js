import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../../constants/constants';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../utility/Scale';

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
  checkbox: {transform: [{scaleX: 0.9}, {scaleY: 0.9}]},
  checkboxContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingLeft: horizontalScale(20),
  },
  checkboxTitle: {
    fontFamily: FONT_FAMILY.RobotoThin,
    lineHeight: scaleFontSize(13),
    marginLeft: horizontalScale(10),
    fontSize: scaleFontSize(13),
  },
  descriptionStyle: {
    fontFamily: FONT_FAMILY.RobotoThin,
    color: allColors.black,
    lineHeight: 18,
    fontSize: scaleFontSize(13),
    marginTop: verticalScale(6),
  },
  imageIcon: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    opacity: 0.5,
  },
  selectType: {
    paddingTop: verticalScale(15),
    paddingLeft: horizontalScale(10),
  },
  textInputView: {
    marginTop: verticalScale(15),
  },
  titleText: {
    fontFamily: FONT_FAMILY.RobotoLight,
    fontSize: scaleFontSize(13),
    fontWeight: '300',
    marginBottom: verticalScale(5),
  },
  tagSelectionTitleText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontSize: scaleFontSize(15),
    marginBottom: verticalScale(10),
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
