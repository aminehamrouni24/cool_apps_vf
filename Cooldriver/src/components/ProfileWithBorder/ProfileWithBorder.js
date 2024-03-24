import React from 'react';
import {View} from 'react-native';

//Third Party
import FastImage from 'react-native-fast-image';
import PropTypes from 'prop-types';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import {allColors} from '../../assets/styles/mainColors';
import {screenWidth} from '../../utility/Scale';

const ProfileWithBorder = props => {
  //common style of the image
  const commonStyle = {
    height: props.imageHeight,
    width: props.imageWidth,
    borderRadius: props.imageWidth / 2,
  };

  //common style of the container
  const commonBorderView = {
    borderWidth: 0.3,
    padding: 5,
    borderRadius: props.imageWidth,
  };
  //profile image with border around it
  return (
    <View style={globalStyles.alignItemsCenter}>
      <View style={[styles.borderView, commonBorderView]}>
        {props.imagePath.length > 0 && (
          <FastImage source={{uri: props.imagePath}} style={commonStyle} />
        )}
        {props.imagePath.length === 0 && props.imageComponent
          ? props.imageComponent
          : null}
      </View>
    </View>
  );
};

/*---- Default Props Start -------*/
ProfileWithBorder.defaultProps = {
  borderColor: allColors.black,
  imageComponent: null,
  imageHeight: screenWidth * 0.194,
  imagePath: null,
  imageWidth: screenWidth * 0.194,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
ProfileWithBorder.propTypes = {
  borderColor: PropTypes.string,
  imageComponent: PropTypes.object,
  imageHeight: PropTypes.number,
  imagePath: PropTypes.string,
  imageWidth: PropTypes.number,
};
/*---- Prop Type Expectations End -------*/

export default ProfileWithBorder;
