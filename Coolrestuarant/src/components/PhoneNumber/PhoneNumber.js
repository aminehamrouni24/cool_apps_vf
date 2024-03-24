import React, {useRef, useImperativeHandle} from 'react';
import {View} from 'react-native';

//Third Party
import PhoneInput from 'react-native-phone-number-input';
import PropTypes from 'prop-types';

import ArrowDownIcon from '../icons/ArrowDownIcon/ArrowDownIcon';

//Utils
import styles from './style';
import {allColors} from '../../assets/styles/mainColors';

const PhoneNumber = React.forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getCountryCode() {
      return phoneInput.current.getCountryCode();
    },
  }));
  const phoneInput = useRef(null);
  return (
    <View style={styles.mainContainerStyle}>
      <PhoneInput
        placeholder={props.placeHolder}
        renderDropdownImage={<ArrowDownIcon />}
        ref={phoneInput}
        defaultValue={props.value}
        defaultCode={props.defaultCode}
        onChangeText={text => {
          props.onChangeText(text);
        }}
        onChangeFormattedText={text => {
          props.onChangeFormattedText(text);
        }}
        textInputStyle={styles.textInputStyle}
        containerStyle={styles.containerStyle}
        textContainerStyle={styles.textContainerStyle}
        codeTextStyle={styles.codeTextStyle}
        textInputProps={{
          placeholderTextColor: allColors.placeholderColor,
        }}
      />
    </View>
  );
});

/*---- Default Props Start -------*/
PhoneNumber.defaultProps = {
  defaultCode: 'US',
  value: '',
  placeHolder: 'Phone Number',
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
PhoneNumber.propTypes = {
  defaultCode: PropTypes.string,
  value: PropTypes.string,
  placeHolder: PropTypes.string,
  onChangeFormattedText: PropTypes.func,
  onChangeText: PropTypes.func,
};
/*---- Prop Type Expectations End -------*/

export default PhoneNumber;
