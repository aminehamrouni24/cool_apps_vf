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
import globalStyles from '../../assets/styles/globalStyles';

const MultiDropdown = props => {
  return (
    <View style={{zIndex: props.zIndex}}>
      {props.label.length > 0 && (
        <Text style={styles.titleText}>{props.label}</Text>
      )}
      <DropDownPicker
        multiple={true}
        open={props.open}
        value={props.value}
        items={props.items}
        setOpen={props.setOpen}
        setValue={props.setValue}
        placeholder={props.placeholder}
        setItems={props.setItems}
        style={{...styles.dropdownStyle, ...props.style}}
        labelStyle={{borderRadius: 200}}
        onOpen={props.onOpen}
        placeholderStyle={{
          ...styles.placeholderStyle,
          ...{marginLeft: horizontalScale(props.textMarginLeft)},
        }}
        customItemContainerStyle={styles.borderLightGreyText}
        dropDownContainerStyle={styles.borderLightGreyText}
        textStyle={[
          styles.textStyle,
          {marginLeft: horizontalScale(props.textMarginLeft)},
        ]}
        listItemContainerStyle={styles.listItemContainerStyle}
        selectedItemContainerStyle={styles.selectedItemContainerStyle}
        arrowIconStyle={globalStyles.marginRight10}
        tickIconStyle={globalStyles.marginRight10}
        // mode="BADGE"
        showBadgeDot={false}
        // badgeTextStyle={{
        //   fontFamily: FONT_FAMILY.RobotoThin,
        // }}
        disabledStyle={{
          opacity: 0.5,
        }}
      />
    </View>
  );
};
/*---- Default Props Start -------*/
MultiDropdown.defaultProps = {
  items: [],
  label: '',
  onOpen: () => {},
  open: false,
  placeholder: 'Select Products',
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
MultiDropdown.propTypes = {
  items: PropTypes.array,
  label: PropTypes.string,
  onOpen: PropTypes.func,
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
export default MultiDropdown;
