import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../../constants/constants';
import {scaleFontSize, verticalScale} from '../../../utility/Scale';

const styles = StyleSheet.create({
  flatListBorderView: {
    borderWidth: 0.3,
    borderColor: allColors.borderBlack,
    borderRadius: 5,
  },
  flatListView: {
    paddingTop: verticalScale(8),
  },
  sectionText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(16),
    color: allColors.black,
    textAlign: 'left',
  },
});

export default styles;
