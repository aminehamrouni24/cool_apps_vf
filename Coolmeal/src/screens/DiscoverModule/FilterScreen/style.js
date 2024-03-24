import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../../constants/constants';
import {scaleFontSize, verticalScale} from '../../../utility/Scale';

const styles = StyleSheet.create({
  flexRowView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  highLightsView: {
    marginTop: verticalScale(8),
  },
  sectionTitle: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontSize: scaleFontSize(20),
    fontWeight: '300',
    fontStyle: 'normal',
    color: allColors.black,
  },
});

export default styles;
