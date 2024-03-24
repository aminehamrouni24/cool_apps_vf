import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

import CloseIcon from '../../assets/icons/discoverMenuIcons/closeIcons/closeBlackSVG.svg';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';

const Notification = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.onPressCloseIcon()}
        style={styles.closeIcon}>
        <CloseIcon />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onPress()}>
        <Text
          style={[
            globalStyles.RobotoCondensedFont400,
            globalStyles.fontSize15,
          ]}>
          {props.title}
        </Text>
        <Text
          style={[
            globalStyles.marginTop5,
            globalStyles.RobotoCondensedFont300,
            globalStyles.fontSize15,
          ]}>
          {props.description}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

/*---- Default Props Start -------*/
Notification.defaultProps = {
  description: '',
  onPressCloseIcon: () => {},
  onPress: () => {},
  title: '',
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
Notification.propTypes = {
  description: PropTypes.string,
  onPressCloseIcon: PropTypes.func,
  onPress: PropTypes.func,
  title: PropTypes.string,
};
/*---- Prop Type Expectations End -------*/

export default Notification;
