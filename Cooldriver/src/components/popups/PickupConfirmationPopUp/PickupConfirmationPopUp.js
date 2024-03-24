import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

//Third Party
import Modal from 'react-native-modal';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';

const PickupConfirmationPopUp = props => {
  return (
    <Modal
      animationOutTiming={300}
      backdropOpacity={0.6}
      isVisible={props.showPopUp}>
      <View style={styles.viewContainer}>
        <View style={styles.paddingView}>
          <Text style={[styles.orderSuccessText, globalStyles.marginBottom11]}>
            {'Are you sure?'}
          </Text>
          <Text style={styles.orderSuccessMessageText}>
            {
              'Are you sure you picked up everything and have not forgotten anything? \n'
            }
          </Text>
        </View>
        <View
          style={[
            globalStyles.flexDirectionRow,
            globalStyles.marginTop15,
            globalStyles.justifySpaceBetween,
            styles.paddingView,
          ]}>
          <TouchableOpacity
            onPress={() => props.closePopUp(true)}
            style={[styles.touchButtons, styles.declineButton]}>
            <Text style={[styles.touchText, styles.declineButtonText]}>
              {'Go Back'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.getStarted()}
            style={[styles.touchButtons, styles.cancelButton]}>
            <Text style={[styles.touchText, styles.cancelButtonText]}>
              {'Yes'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default PickupConfirmationPopUp;
