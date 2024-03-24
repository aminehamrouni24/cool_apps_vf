import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

//Third Party
import Modal from 'react-native-modal';

import DeliveryIcon from '../../../assets/icons/contactIcons/deliverySVG.svg';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import {horizontalScale, verticalScale} from '../../../utility/Scale';

const DeliveryConfirmationPopUp = props => {
  return (
    <Modal
      animationOutTiming={300}
      backdropOpacity={0.6}
      isVisible={props.showPopUp}>
      <View style={styles.viewContainer}>
        <DeliveryIcon width={verticalScale(67)} height={horizontalScale(67)} />
        <Text style={styles.titleText}>{'Delivery Confirmation'}</Text>
        <View style={styles.paddingView}>
          <Text style={[styles.descText, globalStyles.marginTop10]}>
            {'Driver asks to confirm your order delivery!'}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => props.closePopUp()}
            style={styles.goTouchView}>
            <Text style={styles.goText}>{'Confirm'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DeliveryConfirmationPopUp;
