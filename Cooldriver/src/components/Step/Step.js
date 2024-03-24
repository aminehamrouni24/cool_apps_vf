import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import {FONT_FAMILY} from '../../constants/constants';
import {allColors} from '../../assets/styles/mainColors';
import {scaleFontSize} from '../../utility/Scale';

const Step = props => {
  const style = {
    color: props.isActive
      ? allColors.red
      : props.isPassed
      ? allColors.black
      : allColors.lightGreyText,
    fontWeight: props.isActive ? '400' : '300',
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontSize: scaleFontSize(12),
  };
  return (
    <TouchableOpacity
      style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}
      onPress={() => props.onStepPress()}
      disabled={!props.isPassed}>
      <View>
        <Text style={[style]}>STEP {props.stepNumber}</Text>
      </View>
    </TouchableOpacity>
  );
};

/*---- Default Props Start -------*/
Step.defaultProps = {
  isActive: true,
  isPassed: false,
  onStepPress: () => {},
  stepNumber: 1,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
Step.propTypes = {
  isActive: PropTypes.bool,
  isPassed: PropTypes.bool,
  onStepPress: PropTypes.func,
  stepNumber: PropTypes.number,
};
/*---- Prop Type Expectations End -------*/
export default Step;
