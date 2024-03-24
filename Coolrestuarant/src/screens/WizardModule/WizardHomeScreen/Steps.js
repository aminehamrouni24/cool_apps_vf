import React from 'react';
import {View} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Components
import Step from '../../../components/Step/Step';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';

import BlackChevronNext from '../../../assets/icons/generalIcons/chevronRightBlackSVG.svg';
import RedChevronNext from '../../../assets/icons/generalIcons/redChevronNextSVG.svg';

const Steps = props => {
  return (
    <View>
      <View
        style={[
          globalStyles.horizontalGeneralPadding,
          globalStyles.flexDirectionRow,
          globalStyles.justifySpaceBetween,
          globalStyles.marginTop15,
        ]}>
        {/* --- Setup Maximum Steps display in one row Start --- */}
        {props.maxStep.map(value => {
          return [
            <View key={'step' + value}>
              <Step
                isActive={value === props.step}
                isPassed={value < props.step}
                stepNumber={value}
                onStepPress={() => props.onStepPress(value)}
              />
            </View>,
            value === props.step && value !== props.maxStep.length ? (
              <View key={'red' + value} style={[globalStyles.justifyCenter]}>
                <RedChevronNext width={7} height={7} />
              </View>
            ) : null,
            value < props.step && value !== props.maxStep.length ? (
              <View key={'black' + value} style={[globalStyles.justifyCenter]}>
                <BlackChevronNext width={7} height={7} />
              </View>
            ) : null,
          ];
        })}
        {/* --- Setup Maximum Steps display in one row End --- */}
      </View>
    </View>
  );
};

/*---- Default Props Start -------*/
Steps.defaultProps = {
  maxStep: [],
  step: 1,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
Steps.propTypes = {
  back: PropTypes.func,
  next: PropTypes.func,
};
/*---- Prop Type Expectations End -------*/
export default Steps;
