import React from 'react';
import {View, TextInput} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utils
import styles from './style';
import {allColors} from '../../assets/styles/mainColors';
import {horizontalScale} from '../../utility/Scale';

const SquareGenericInputField = props => {
  let {backgroundColor, ...textFieldProp} = props;

  //image container style
  const rightImageContainerCommonStyle = {
    paddingLeft: horizontalScale(props.rightIconPaddingLeft),
    paddingRight: horizontalScale(props.rightIconPaddingRight),
  };

  const leftImageContainerCommonStyle = {
    marginLeft: horizontalScale(props.leftIconPaddingLeft),
    marginRight: horizontalScale(props.leftIconPaddingRight),
  };

  //container style
  const containerStyle = {
    width: props.width,
  };

  return (
    <View style={[containerStyle]}>
      <View style={[styles.sectionStyle, {backgroundColor: backgroundColor}]}>
        {/*--Right Icon Start--*/}
        {props.leftIconComponent && (
          <View
            style={[
              leftImageContainerCommonStyle,
              {backgroundColor: backgroundColor},
            ]}>
            {props.leftIconComponent}
          </View>
        )}
        {/*--Right Icon End--*/}

        {/*--Square Text Input Start--*/}
        <TextInput
          style={[
            styles.textInput,
            {
              marginLeft: horizontalScale(15),
            },
          ]}
          editable={!props.isDisabled}
          underlineColorAndroid="transparent"
          onChangeText={text => props.onChange(text)}
          selectionColor={allColors.black}
          keyboardType={props.keyboardType}
          {...textFieldProp}
          placeholderTextColor={allColors.placeholderColor}
        />
        {/*--Square Text Input End--*/}

        {/*--Right Icon Start--*/}
        {props.rightIconComponent && (
          <View
            style={[
              rightImageContainerCommonStyle,
              {backgroundColor: backgroundColor},
            ]}>
            {props.rightIconComponent}
          </View>
        )}
        {/*--Right Icon End--*/}
      </View>
    </View>
  );
};

/*---- Default Props Start -------*/
SquareGenericInputField.defaultProps = {
  backgroundColor: allColors.white,
  cardValidation: false,
  isDisabled: false,
  keyboardType: 'default',
  largeTextBox: true,
  rightIconComponent: null,
  rightIconPaddingLeft: horizontalScale(10),
  rightIconPaddingRight: horizontalScale(10),
  leftIconComponent: null,
  leftIconPaddingLeft: horizontalScale(10),
  leftIconPaddingRight: horizontalScale(10),
  selectedValue: '',
  width: '100%',
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
SquareGenericInputField.propTypes = {
  backgroundColor: PropTypes.string,
  cardValidation: PropTypes.bool,
  keyboardType: PropTypes.string,
  isDisabled: PropTypes.bool,
  largeTextBox: PropTypes.bool,
  leftIconComponent: PropTypes.object,
  leftIconPaddingLeft: PropTypes.number,
  leftIconPaddingRight: PropTypes.number,
  onChange: PropTypes.func,
  rightIconComponent: PropTypes.object,
  rightIconPaddingLeft: PropTypes.number,
  rightIconPaddingRight: PropTypes.number,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
/*---- Prop Type Expectations End -------*/

export default SquareGenericInputField;
