import React from 'react';
import {View, Text} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utils
import styles from './style';
import {scaleFontSize} from '../../utility/Scale';

const TitleText = props => {
  //title styles
  const titleCommonStyle = {
    fontSize: scaleFontSize(props.titleFontSize),
    fontWeight: props.titleFontWeight,
    width: '100%',
  };

  //container styles
  const containerStyle = {
    marginTop: props.containerTopPadding,
    marginBottom: props.containerBottomPadding,
  };
  if (props.alignCenter) {
    containerStyle.display = 'flex';
    containerStyle.flexDirection = 'row';
    containerStyle.alignItems = 'center';
    titleCommonStyle.textAlign = 'center';
  }

  return (
    <View style={containerStyle}>
      {/*--Title Start--*/}
      {props.title && (
        <Text style={[styles.titleStyle, titleCommonStyle]}>{props.title}</Text>
      )}
      {/*--Title End--*/}

      {/*--Description Start--*/}
      {props.description && (
        <Text style={[styles.descriptionStyle]}>{props.description}</Text>
      )}
      {/*--Description End--*/}
    </View>
  );
};

/*---- Default Props Start -------*/
TitleText.defaultProps = {
  alignCenter: false,
  containerBottomPadding: 0,
  containerTopPadding: 0,
  description: null,
  title: null,
  titleFontSize: 25,
  titleFontWeight: '300',
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
TitleText.propTypes = {
  alignCenter: PropTypes.bool,
  containerBottomPadding: PropTypes.number,
  containerTopPadding: PropTypes.number,
  description: PropTypes.string,
  title: PropTypes.string,
  titleFontSize: PropTypes.number,
  titleFontWeight: PropTypes.string,
};
/*---- Prop Type Expectations End -------*/
export default TitleText;
