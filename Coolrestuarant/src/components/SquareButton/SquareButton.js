import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import {FONT_FAMILY} from '../../constants/constants';
import {allColors} from '../../assets/styles/mainColors';
import {horizontalScale, scaleFontSize} from '../../utility/Scale';

const SquareButton = props => {
  //button container style to set background color
  const containerCommonStyle = {
    backgroundColor: props.backgroundColor,
    borderRadius: horizontalScale(props.borderRadius ? props.borderRadius : 5),
  };

  //button title style
  const textCommonStyle = {
    fontSize: scaleFontSize(props.titleFontSize),
    color: props.titleFontColor,
    fontWeight: props.titleFontWeight,
    fontFamily: props.titleFontFamily,
  };

  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      disabled={props.isDisabled}
      style={[
        styles.buttonStyles,
        containerCommonStyle,
        props.isDisabled && globalStyles.opacity50,
      ]}>
      {/*--Square Button Title Start--*/}
      <Text style={[styles.buttonTextStyle, textCommonStyle]}>
        {props.title}
      </Text>
      {/*--Square Button Title End--*/}
    </TouchableOpacity>
  );
};

/*---- Default Props Start -------*/
SquareButton.defaultProps = {
  backgroundColor: allColors.black,
  isDisabled: false,
  title: null,
  titleFontColor: allColors.white,
  titleFontFamily: FONT_FAMILY.RobotoCondensedRegular,
  titleFontSize: 18,
  titleFontWeight: 'normal',
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
SquareButton.propTypes = {
  backgroundColor: PropTypes.string,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
  title: PropTypes.string,
  titleFontColor: PropTypes.string,
  titleFontFamily: PropTypes.string,
  titleFontSize: PropTypes.number,
  titleFontWeight: PropTypes.string,
};
/*---- Prop Type Expectations End -------*/
export default SquareButton;
