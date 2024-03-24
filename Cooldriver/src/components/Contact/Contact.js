import React from 'react';
import {TouchableOpacity, View} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';

import CallIcon from '../../assets/icons/contactIcons/phone_SVG.svg';
import MessageIcon from '../../assets/icons/contactIcons/message_SVG.svg';

const Contact = props => {
  return (
    <View
      style={[
        globalStyles.flex,
        globalStyles.flexDirectionRow,
        globalStyles.justifySpaceBetween,
      ]}>
      <TouchableOpacity
        onPress={() => props.onMessagePress()}
        style={styles.messageIcon}>
        <MessageIcon />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.onCallPress()}
        style={styles.callIcon}>
        <CallIcon />
      </TouchableOpacity>
    </View>
  );
};
/*---- Default Props Start -------*/
Contact.defaultProps = {
  onCallPress: () => {},
  onMessagePress: () => {},
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
Contact.propTypes = {
  onCallPress: PropTypes.func,
  onMessagePress: PropTypes.func,
};
/*---- Prop Type Expectations End -------*/
export default Contact;
