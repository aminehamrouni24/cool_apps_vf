import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

//Third Party
import Modal from 'react-native-modal';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';

const DeclineOrderPopUp = props => {
  return (
    <Modal
      animationOutTiming={300}
      backdropOpacity={0.6}
      isVisible={props.showPopUp}>
      <View style={styles.viewContainer}>
        {/*---- Decline Order Popup Information Text Start ----*/}
        <View style={styles.paddingView}>
          <Text style={[styles.orderSuccessText, globalStyles.marginBottom11]}>
            {'Are you sure?'}
          </Text>
          <Text style={styles.orderSuccessMessageText}>
            {
              'You are the best DobuleShipper for this order! Your Acceptance rate will drop to\n'
            }
          </Text>
          <Text style={styles.acceptanceRate}>48%</Text>
          <Text
            style={[styles.orderSuccessMessageText, globalStyles.marginTop0]}>
            {'\nConsistent acceptance of delivery opportunities will rise ' +
              'your acceptance rate.'}
          </Text>
        </View>
        {/*---- Decline Order Popup Information Text End ----*/}

        {/*---- Decline Order Popup Go Back & Decline Buttons Start ----*/}
        <View
          style={[
            globalStyles.flexDirectionRow,
            globalStyles.marginTop15,
            globalStyles.justifySpaceBetween,
            styles.paddingView,
          ]}>
          <TouchableOpacity
            onPress={() => props.closePopUp(true)}
            style={[styles.touchButtons, styles.cancelButton]}>
            <Text style={[styles.touchText, styles.cancelButtonText]}>
              {'Go Back'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.getStarted()}
            style={[styles.touchButtons, styles.declineButton]}>
            <Text style={[styles.touchText, styles.declineButtonText]}>
              {'Decline'}
            </Text>
          </TouchableOpacity>
        </View>
        {/*---- Decline Order Popup Go Back & Decline Buttons End ----*/}
      </View>
    </Modal>
  );
};

export default DeclineOrderPopUp;
