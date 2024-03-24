import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utils
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utility/Scale';
import {FONT_FAMILY} from '../../constants/constants';
import {allColors} from '../../assets/styles/mainColors';

const TabMenuItem = props => {
  const containerCommonStyle = {
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(14),
    marginBottom: verticalScale(props.componentMarginBottom),
    marginTop: verticalScale(props.componentMarginTop),
    marginLeft: horizontalScale(props.componentMarginLeft),
    marginRight: horizontalScale(props.componentMarginRight),
    backgroundColor: props.isActive ? allColors.red : allColors.white,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 4,
    borderWidth: props.isActive ? 0 : 0.5,
  };

  const activeTitleStyle = {
    fontFamily: props.isActive
      ? FONT_FAMILY.RobotoRegular
      : FONT_FAMILY.RobotoLight,
    fontSize: scaleFontSize(12),
    fontWeight: props.isActive ? 'normal' : '300',
    color: props.isActive ? allColors.white : allColors.black,
  };

  return (
    <TouchableOpacity
      style={containerCommonStyle}
      onPress={() => props.onPress(props.itemData)}
      activeOpacity={0.7}>
      {/*--Title Start--*/}
      <Text style={activeTitleStyle}>{props.title}</Text>
      {/*--Title End--*/}
    </TouchableOpacity>
  );
};

/*---- Default Props Start -------*/
TabMenuItem.defaultProps = {
  componentMarginBottom: 0,
  componentMarginLeft: 0,
  componentMarginRight: 0,
  componentMarginTop: 0,
  isActive: false,
  title: '',
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
TabMenuItem.propTypes = {
  componentMarginBottom: PropTypes.number,
  componentMarginLeft: PropTypes.number,
  componentMarginRight: PropTypes.number,
  componentMarginTop: PropTypes.number,
  isActive: PropTypes.bool,
  onPress: PropTypes.func,
  title: PropTypes.string,
};
/*---- Prop Type Expectations End -------*/
export default TabMenuItem;
