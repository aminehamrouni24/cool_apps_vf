import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {horizontalScale, verticalScale} from '../../../utility/Scale';

const styles = StyleSheet.create({
  companyInfoLogo: {
    borderRadius: 100,
    borderWidth: 0.4,
    borderColor: allColors.grey,
    padding: 13,
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
});

export default styles;
