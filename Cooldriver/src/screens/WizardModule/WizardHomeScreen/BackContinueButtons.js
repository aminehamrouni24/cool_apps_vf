import React from 'react';
import {View} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Components
import SquareButton from '../../../components/SquareButton/SquareButton';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import {FONT_FAMILY} from '../../../constants/constants';
import {allColors} from '../../../assets/styles/mainColors';
import {verticalScale} from '../../../utility/Scale';

const BackContinueButtons = props => {
  return (
    <View
      style={[
        globalStyles.flex,
        {marginTop: verticalScale(-30)},
        globalStyles.marginBottom30,
      ]}>
      <View style={globalStyles.horizontalGeneralPadding}>
        <View
          style={[
            globalStyles.flex,
            globalStyles.justifySpaceBetween,
            globalStyles.flexDirectionRow,
          ]}>
          <View style={[globalStyles.flex, globalStyles.marginRight5]}>
            <SquareButton
              title={'BACK'}
              fontFamily={FONT_FAMILY.RobotoMedium}
              fontSize={16}
              fontWeight={'400'}
              onPress={() => props.back()}
            />
          </View>
          <View style={[globalStyles.flex, globalStyles.marginLeft5]}>
            <SquareButton
              title={props.title}
              fontFamily={FONT_FAMILY.RobotoMedium}
              backgroundColor={allColors.red}
              fontSize={16}
              fontWeight={'400'}
              onPress={() => props.next()}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

/*---- Default Props Start -------*/
BackContinueButtons.defaultProps = {
  back: () => {},
  next: () => {},
  title: 'CONTINUE',
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
BackContinueButtons.propTypes = {
  back: PropTypes.func,
  next: PropTypes.func,
  title: PropTypes.string,
};
/*---- Prop Type Expectations End -------*/
export default BackContinueButtons;
