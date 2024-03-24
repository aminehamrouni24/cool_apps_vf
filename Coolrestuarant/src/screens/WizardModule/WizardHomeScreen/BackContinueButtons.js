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
          {/*------- Back Button Setup Start -----*/}
          <View style={[globalStyles.flex, globalStyles.marginRight5]}>
            <SquareButton
              title={props.backTitle}
              fontFamily={FONT_FAMILY.RobotoMedium}
              fontSize={16}
              fontWeight={'400'}
              onPress={() => props.back()}
            />
          </View>
          {/*------- Back Button Setup End -----*/}

          {/*------- Continue/Save Button Setup Start -----*/}
          <View style={[globalStyles.flex, globalStyles.marginLeft5]}>
            <SquareButton
              title={props.nextTitle}
              fontFamily={FONT_FAMILY.RobotoMedium}
              backgroundColor={allColors.red}
              fontSize={16}
              fontWeight={'400'}
              isDisabled={props.isDisabled}
              onPress={() => props.next()}
            />
          </View>
          {/*------- Continue/Save Button Setup End -----*/}
        </View>
      </View>
    </View>
  );
};

/*---- Default Props Start -------*/
BackContinueButtons.defaultProps = {
  back: () => {},
  next: () => {},
  backTitle: 'BACK',
  isDisabled: false,
  nextTitle: 'CONTINUE',
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
BackContinueButtons.propTypes = {
  back: PropTypes.func,
  next: PropTypes.func,
  backTitle: PropTypes.string,
  isDisabled: PropTypes.bool,
  nextTitle: PropTypes.string,
};
/*---- Prop Type Expectations End -------*/
export default BackContinueButtons;
