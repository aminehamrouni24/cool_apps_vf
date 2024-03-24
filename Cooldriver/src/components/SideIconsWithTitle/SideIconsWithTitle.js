import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import {FONT_FAMILY} from '../../constants/constants';
import {allColors} from '../../assets/styles/mainColors';
import {scaleFontSize} from '../../utility/Scale';

const SideIconsWithTitle = props => {
  let titleStyle = {
    color: props.titleFontColor,
    fontFamily: props.titleFontFamily,
    fontSize: scaleFontSize(props.titleFontSize),
    fontWeight: props.titleFontWeight,
    textTransform: 'uppercase',
  };
  return (
    <View
      style={[
        globalStyles.flex,
        globalStyles.flexDirectionRow,
        globalStyles.width100,
        globalStyles.justifyCenter,
        globalStyles.alignItemsCenter,
      ]}>
      <TouchableOpacity
        style={globalStyles.flexGrow1}
        onPress={() => props.onLeftIconPress()}>
        {props.leftIconComponent}
      </TouchableOpacity>
      {props.title && <Text style={titleStyle}>{props.title}</Text>}
      <TouchableOpacity
        onPress={() => props.onRightIconPress()}
        style={[globalStyles.alignItemsFlexEnd, globalStyles.flexGrow1]}>
        {props.rightIconComponent}
      </TouchableOpacity>
    </View>
  );
};

/*---- Default Props Start -------*/
SideIconsWithTitle.defaultProps = {
  leftIconComponent: null,
  onLeftIconPress: () => {},
  onRightIconPress: () => {},
  rightIconComponent: null,
  title: null,
  titleFontColor: allColors.black,
  titleFontFamily: FONT_FAMILY.RobotoCondensedLight,
  titleFontSize: scaleFontSize(13),
  titleFontWeight: '300',
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
SideIconsWithTitle.propTypes = {
  leftIconComponent: PropTypes.object,
  onLeftIconPress: PropTypes.func,
  onRightIconPress: PropTypes.func,
  rightIconComponent: PropTypes.object,
  title: PropTypes.string,
  titleFontColor: PropTypes.string,
  titleFontFamily: PropTypes.string,
  titleFontSize: PropTypes.number,
  titleFontWeight: PropTypes.string,
};
/*---- Prop Type Expectations End -------*/
export default SideIconsWithTitle;
