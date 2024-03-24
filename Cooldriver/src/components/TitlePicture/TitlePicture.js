import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Components
import CachableImage from '../CachableImage/CachableImage';

//Utils
import styles from './style';
import {FONT_FAMILY} from '../../constants/constants';
import {
  horizontalScale,
  verticalScale,
  scaleFontSize,
} from '../../utility/Scale';

const TitlePicture = props => {
  //container styles
  const containerCommonStyle = {
    marginTop: verticalScale(props.componentTopPadding),
    marginBottom: verticalScale(props.componentBottomPadding),
  };

  //image styles
  const imageContainerCommonStyle = {
    marginTop: verticalScale(props.imageTopPadding),
    marginBottom: verticalScale(props.imageBottomPadding),
  };

  //title styles
  let titleCommonStyle = {
    marginTop: verticalScale(props.titleTopPadding),
    marginBottom: verticalScale(props.titleBottomPadding),
    textAlign: props.titleTextAlign,
  };

  if (props.color != null) {
    titleCommonStyle.color = props.titleFontColor;
  }

  if (props.fontWeight != null) {
    titleCommonStyle.fontWeight = props.titleFontWeight;
  }

  if (props.titleFontFamily != null) {
    titleCommonStyle.fontFamily = props.titleFontFamily;
  }

  if (props.titleFontSize != null) {
    titleCommonStyle.fontSize = scaleFontSize(props.titleFontSize);
  }

  //description styles
  const descriptionCommonStyle = {
    marginTop: verticalScale(props.descriptionTopPadding),
    marginBottom: verticalScale(props.descriptionBottomPadding),
    marginLeft: horizontalScale(props.descriptionLeftPadding),
    marginRight: horizontalScale(props.descriptionRightPadding),
  };
  if (props.descriptionColor != null) {
    descriptionCommonStyle.opacity = 1;
  }
  if (props.descriptionColor != null) {
    descriptionCommonStyle.color = props.descriptionColor;
  }
  if (props.descriptionTextAlign != null) {
    descriptionCommonStyle.textAlign = props.descriptionTextAlign;
  }

  const imageComponent = props.imageComponent && props.imageComponent;

  return (
    <View style={[containerCommonStyle, styles.containerStyle]}>
      {/*-Image Start--*/}
      {props.imageComponent && (
        <TouchableOpacity
          onPress={() => props.onTouch && props.onTouch()}
          disabled={!props.touchAllowed}
          style={[imageContainerCommonStyle]}>
          {imageComponent}
        </TouchableOpacity>
      )}
      {/*-Image End--*/}

      {/*-Image Start--*/}
      {props.imagePath.length > 0 && (
        <TouchableOpacity
          onPress={() => props.onTouch && props.onTouch()}
          disabled={!props.touchAllowed}
          style={[imageContainerCommonStyle]}>
          <CachableImage
            style={props.imageStyle}
            source={{uri: props.imagePath}}
          />
        </TouchableOpacity>
      )}
      {/*-Image End--*/}

      {/*-Image Start--*/}
      {props.imageLocal > 0 && (
        <TouchableOpacity
          onPress={() => props.onTouch && props.onTouch()}
          disabled={!props.touchAllowed}
          style={[imageContainerCommonStyle]}>
          <Image style={props.imageStyle} source={props.imageLocal} />
        </TouchableOpacity>
      )}
      {/*-Image End--*/}

      {/*--Title Start--*/}
      {props.title && (
        <Text style={[styles.titleStyle, titleCommonStyle]}>{props.title}</Text>
      )}
      {/*--Title End--*/}

      {/*--Description Start--*/}
      {props.description && (
        <Text style={[styles.descriptionStyle, descriptionCommonStyle]}>
          {props.description}
        </Text>
      )}
      {/*--Description End--*/}
    </View>
  );
};

/*---- Default Props Start -------*/
TitlePicture.defaultProps = {
  componentBottomPadding: 0,
  componentTopPadding: 0,
  description: null,
  descriptionBottomPadding: 0,
  descriptionColor: null,
  descriptionLeftPadding: 0,
  descriptionRightPadding: 0,
  descriptionTextAlign: 'center',
  descriptionTopPadding: 0,
  imageBottomPadding: 0,
  imageComponent: null,
  imageLocal: 0,
  imageStyle: {},
  imageTopPadding: 0,
  imagePath: '',
  title: null,
  titleBottomPadding: 0,
  titleFontColor: null,
  titleFontWeight: '300',
  titleFontFamily: FONT_FAMILY.RobotoCondensedLight,
  titleFontSize: null,
  titleTextAlign: 'center',
  titleTopPadding: 0,
  touchAllowed: false,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
TitlePicture.propTypes = {
  componentBottomPadding: PropTypes.number,
  componentTopPadding: PropTypes.number,
  description: PropTypes.string,
  descriptionColor: PropTypes.string,
  descriptionBottomPadding: PropTypes.number,
  descriptionLeftPadding: PropTypes.number,
  descriptionRightPadding: PropTypes.number,
  descriptionTextAlign: PropTypes.string,
  descriptionTopPadding: PropTypes.number,
  imageBottomPadding: PropTypes.number,
  imageComponent: PropTypes.object,
  imageStyle: PropTypes.object,
  imageTopPadding: PropTypes.number,
  imagePath: PropTypes.string,
  imageLocal: PropTypes.number,
  onTouch: PropTypes.func,
  title: PropTypes.string,
  titleBottomPadding: PropTypes.number,
  titleFontColor: PropTypes.string,
  titleFontFamily: PropTypes.string,
  titleFontSize: PropTypes.number,
  titleFontWeight: PropTypes.string,
  titleTextAlign: PropTypes.string,
  titleTopPadding: PropTypes.number,
  touchAllowed: PropTypes.bool,
};
/*---- Prop Type Expectations End -------*/
export default TitlePicture;
