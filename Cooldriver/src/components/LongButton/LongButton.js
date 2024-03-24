import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utils
import styles from './style';
import {BUTTON_TYPE, FONT_FAMILY} from '../../constants/constants';
import {allColors} from '../../assets/styles/mainColors';
import {scaleFontSize} from '../../utility/Scale';

const LongButton = props => {
  //What should be the background color of the button
  const returnBgColor = type => {
    switch (type) {
      case BUTTON_TYPE.PRIMARY:
        return allColors.blue;
      case BUTTON_TYPE.SECONDARY:
        return allColors.secondaryBlack;
      case BUTTON_TYPE.PRIMARYLIGHT:
        return allColors.yellow;
      case BUTTON_TYPE.LIGHT:
        return allColors.white;
      case BUTTON_TYPE.DISABLED:
        return allColors.grey;
      case BUTTON_TYPE.TRANSPARENT:
        return allColors.transparent;
      default:
        return allColors.white;
    }
  };

  const isSquare = {
    borderRadius: 10,
  };

  //determines the border color of the button
  const determineBorderColor = () => {
    if (props.type === BUTTON_TYPE.LIGHT) {
      return allColors.grey;
    } else if (props.type === BUTTON_TYPE.TRANSPARENT) {
      return allColors.white;
    } else {
      return allColors.transparent;
    }
  };

  //determines what should be the border width
  const determineBorderWidth = () => {
    if (
      props.type === BUTTON_TYPE.LIGHT ||
      props.type === BUTTON_TYPE.TRANSPARENT
    ) {
      return 1;
    } else {
      return 0;
    }
  };

  //common style setup
  const containerCommonStyle = {
    backgroundColor: returnBgColor(props.type),
    borderColor: determineBorderColor(),
    borderWidth: determineBorderWidth(),
    ...props.styles,
  };

  //button text style setup
  const textCommonStyle = {
    fontSize: scaleFontSize(props.titleFontSize),
    color: props.titleFontColor,
    fontWeight: props.titleFontWeight,
    fontFamily: props.titleFontFamily,
  };

  //circular container style setup
  const circularViewCommonStyle = {
    backgroundColor: props.circularIconBackgroundColor,
    borderColor: returnBgColor(props.type),
  };

  //tailing icon style setup
  const tailingIconCommonStyle = {
    marginLeft: props.tailingIconPaddingLeft,
    marginTop:
      props.tailingIconPaddingTop === 0 ? 5 : props.tailingIconPaddingTop,
  };

  //is it disabled?
  const checkDisable = props.type === BUTTON_TYPE.DISABLED;
  const tailingIconComponent =
    props.tailingIconComponent && props.tailingIconComponent;

  const circularIconComponent =
    props.circularIconComponent && props.circularIconComponent;

  //button shadow style setup
  const buttonShadow = props.buttonShadow ? styles.shadowButton : null;

  //button shadow opacity setup
  const buttonShadowOpacity = props.buttonShadow
    ? {shadowOpacity: props.buttonShadowOpacity}
    : null;

  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      disabled={checkDisable}
      style={[
        styles.buttonStyles,
        containerCommonStyle,
        buttonShadowOpacity,
        buttonShadow,
        props.isSquare && isSquare,
      ]}>
      {/*--Title Start--*/}
      {typeof props.title === 'string' ? (
        <Text style={[styles.buttonTextStyle, textCommonStyle]}>
          {props.title}
        </Text>
      ) : (
        props.title
      )}
      {/*--Title End--*/}

      {/*--Tailing Icon Start--*/}
      {props.hasTailingIcon && (
        <View style={tailingIconCommonStyle}>{tailingIconComponent}</View>
      )}
      {/*--Tailing Icon End--*/}

      {/*--Circular Icon Start--*/}
      {props.hasCircularIcon && (
        <View style={[styles.circularViewStyle, circularViewCommonStyle]}>
          {circularIconComponent}
        </View>
      )}
      {/*--Circular Icon End--*/}
    </TouchableOpacity>
  );
};

/*---- Default Props Start -------*/
LongButton.defaultProps = {
  buttonShadow: false,
  buttonShadowOpacity: 0.5,
  circularIconBackgroundColor: allColors.white,
  circularIconBorderColor: allColors.white,
  circularIconComponent: null,
  hasCircularIcon: false,
  hasTailingIcon: false,
  isSquare: false,
  tailingIconComponent: null,
  tailingIconPaddingLeft: 0,
  tailingIconPaddingTop: 0,
  title: null,
  titleFontColor: allColors.black,
  titleFontFamily: FONT_FAMILY.RobotoCondensedRegular,
  titleFontSize: 18,
  titleFontWeight: 'normal',
  type: BUTTON_TYPE.PRIMARY,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
LongButton.propTypes = {
  buttonShadow: PropTypes.bool,
  buttonShadowOpacity: PropTypes.number,
  circularIconBackgroundColor: PropTypes.string,
  circularIconBorderColor: PropTypes.string,
  circularIconComponent: PropTypes.object,
  hasCircularIcon: PropTypes.bool,
  hasTailingIcon: PropTypes.bool,
  isSquare: PropTypes.bool,
  onPress: PropTypes.func,
  tailingIconComponent: PropTypes.object,
  tailingIconPaddingLeft: PropTypes.number,
  tailingIconPaddingTop: PropTypes.number,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  titleFontColor: PropTypes.string,
  titleFontFamily: PropTypes.string,
  titleFontSize: PropTypes.number,
  titleFontWeight: PropTypes.string,
  type: PropTypes.number,
};
/*---- Prop Type Expectations End -------*/
export default LongButton;
