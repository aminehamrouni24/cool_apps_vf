import React from 'react';
import {Text, View} from 'react-native';

//Third Party
import DropDownPicker from 'react-native-dropdown-picker';
import PropTypes from 'prop-types';

//Utils
import styles from './style';
import {FONT_FAMILY} from '../../constants/constants';
import {allColors} from '../../assets/styles/mainColors';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utility/Scale';

const Dropdown = props => {
  return (
    <View style={{zIndex: props.zIndex}}>
      {props.label.length > 0 && (
        <Text style={styles.titleText}>{props.label}</Text>
      )}
      <DropDownPicker
        open={props.open}
        value={props.value}
        items={props.items}
        setOpen={props.setOpen}
        setValue={props.setValue}
        placeholder={props.placeholder}
        setItems={props.setItems}
        style={{...styles.dropdownStyle, ...props.style}}
        labelStyle={{borderRadius: 200}}
        placeholderStyle={{
          marginLeft: horizontalScale(props.textMarginLeft),
          color: allColors.grey,
        }}
        customItemContainerStyle={{
          borderColor: allColors.lightGreyText,
        }}
        dropDownContainerStyle={{
          borderColor: allColors.lightGreyText,
        }}
        textStyle={{
          fontSize: scaleFontSize(15),
          fontFamily: FONT_FAMILY.RobotoRegular,
          fontWeight: '300',
          marginLeft: horizontalScale(props.textMarginLeft),
        }}
        listItemContainerStyle={{
          height: verticalScale(50),
        }}
        selectedItemContainerStyle={{
          backgroundColor: allColors.lightGreyBorder,
        }}
        arrowIconStyle={{
          marginRight: horizontalScale(10),
        }}
        tickIconStyle={{
          marginRight: horizontalScale(10),
        }}
        disabledStyle={{
          opacity: 0.5,
        }}
      />
    </View>
  );
};
/*---- Default Props Start -------*/
Dropdown.defaultProps = {
  items: [],
  label: '',
  open: false,
  placeholder: 'Select',
  setItems: () => {},
  setOpen: () => {},
  setValue: () => {},
  style: {},
  textMarginLeft: 10,
  value: '',
  zIndex: 1,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
Dropdown.propTypes = {
  items: PropTypes.array,
  label: PropTypes.string,
  open: PropTypes.bool,
  placeholder: PropTypes.string,
  setItems: PropTypes.func,
  setOpen: PropTypes.func,
  setValue: PropTypes.func,
  style: PropTypes.object,
  textMarginLeft: PropTypes.number,
  value: PropTypes.string,
  zIndex: PropTypes.number,
};
/*---- Prop Type Expectations End -------*/
export default Dropdown;
