import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

//Third Party
import Modal from 'react-native-modal';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';

const QuickRegistrationStepsPopUp = props => {
  return (
    <Modal
      animationOutTiming={300}
      backdropOpacity={0.6}
      isVisible={props.showPopUp}>
      <View style={styles.viewContainer}>
        <View style={styles.paddingView}>
          <Text style={[styles.orderSuccessText, globalStyles.marginBottom11]}>
            {'Quick Registration Steps!'}
          </Text>
          <Text style={styles.orderSuccessMessageText}>
            {'To register please follow all of the following steps.\n\n' +
              ' You can stop registration process at any time and continue it later.' +
              ' All information will be saved.\n\n' +
              'Are you sure you are ready to start this process? It will only take several minutes.'}
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
            style={[styles.touchButtons, styles.cancelButton]}>
            <Text style={[styles.touchText, globalStyles.colorWhite]}>
              {'CANCEL'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.getStarted()}
            style={[styles.touchButtons, globalStyles.bgRed]}>
            <Text style={[styles.touchText, globalStyles.colorWhite]}>
              {'START'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default QuickRegistrationStepsPopUp;
