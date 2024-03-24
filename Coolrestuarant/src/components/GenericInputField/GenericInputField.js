import React from 'react';
import {View, TextInput} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utils
import styles from './style';
import {TEXTFIELD_TYPE} from '../../constants/constants';
import {allColors} from '../../assets/styles/mainColors';
import {horizontalScale} from '../../utility/Scale';

const GenericInputField = props => {
  let textFieldProp = props;

  //check if the entry is password
  const isSecureEntry = props.type === TEXTFIELD_TYPE.PASSWORD;

  //check if entry is email
  const returnKeyboardType =
    props.type === TEXTFIELD_TYPE.EMAIL ? 'email-address' : 'default';

  //create image container styles
  const imageContainerCommonStyle = {
    paddingLeft: horizontalScale(props.imageLeftPadding),
    paddingRight: horizontalScale(props.imageRightPadding),
  };

  const tailingIconContainerCommonStyle = {
    marginRight: horizontalScale(props.tailingIconPaddingLeft),
  };

  return (
    <View style={styles.section}>
      {/*--Left Icon Start --*/}
      {props.iconComponent && (
        <View style={[imageContainerCommonStyle]}>{props.iconComponent}</View>
      )}
      {/*--Left Icon End --*/}

      {/*--Input Field Start --*/}
      <TextInput
        style={[
          styles.textInput,
          {paddingLeft: props.iconComponent ? 0 : horizontalScale(30)},
        ]}
        underlineColorAndroid="transparent"
        secureTextEntry={isSecureEntry}
        keyboardType={returnKeyboardType}
        onChangeText={text => props.onChange(text)}
        selectionColor={allColors.black}
        {...textFieldProp}
        placeholderTextColor={allColors.placeholderColor}
        autoCorrect={false}
      />
      {/*--Input Field End --*/}

      {/*--Right Icon Start --*/}
      {props.hasTailingIcon && (
        <View style={tailingIconContainerCommonStyle}>
          {props.tailingIconComponent}
        </View>
      )}
      {/*--Right Icon End --*/}
    </View>
  );
};

/*---- Default Props Start -------*/
GenericInputField.defaultProps = {
  hasTailingIcon: false,
  iconComponent: null,
  imageLeftPadding: horizontalScale(10),
  imageRightPadding: horizontalScale(10),
  tailingIconPaddingLeft: 0,
  tailingIconComponent: null,
  type: TEXTFIELD_TYPE.NORMAL,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
GenericInputField.propTypes = {
  hasTailingIcon: PropTypes.bool,
  iconComponent: PropTypes.object,
  imageLeftPadding: PropTypes.number,
  imageRightPadding: PropTypes.number,
  onChange: PropTypes.func,
  tailingIconPaddingLeft: PropTypes.number,
  tailingIconComponent: PropTypes.object,
  type: PropTypes.number,
};
/*---- Prop Type Expectations End -------*/

export default GenericInputField;
