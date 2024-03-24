import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {horizontalScale, verticalScale} from '../../../utility/Scale';
import {FONT_FAMILY} from '../../../constants/constants';

const styles = StyleSheet.create({
  additionalInformationLabel: {
    fontFamily: FONT_FAMILY.RobotoThin,
    color: allColors.secondaryBlack,
    marginBottom: verticalScale(5),
  },
  cameraContainer: {
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 0.3,
    borderColor: allColors.lightGreyText,
    backgroundColor: 'rgb(252, 252, 252)',
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  companyInfoLogo: {
    borderRadius: 100,
    borderWidth: 0.4,
    borderColor: allColors.grey,
  },
  companyInfoLogoPlaceholder: {
    padding: 4,
  },
  companyInfoPlaceholder: {
    margin: 1,
    borderRadius: 50,
    height: verticalScale(68),
    width: horizontalScale(74),
    backgroundColor: allColors.lightGreyText,
  },
  logoStyles: {
    marginLeft: horizontalScale(7),
    marginRight: horizontalScale(4),
  },
  textInputView: {
    marginTop: verticalScale(10),
  },
  uploadContainer: {
    marginTop: verticalScale(5),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: verticalScale(80),
  },
  uploadContainerRestaurantImage: {
    height: verticalScale(150),
  },
});

export default styles;
