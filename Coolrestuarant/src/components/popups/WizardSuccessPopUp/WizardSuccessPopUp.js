import React from 'react';
import {View, Text} from 'react-native';

//Third Party
import Modal from 'react-native-modal';

import SuccessIcon from '../../../assets/icons/contactIcons/successSVG.svg';

//Components
import LongButton from '../../LongButton/LongButton';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import {BUTTON_TYPE, FONT_FAMILY} from '../../../constants/constants';

const WizardSuccessPopUp = props => {
  return (
    <Modal
      animationOutTiming={300}
      backdropOpacity={0.6}
      isVisible={props.showPopUp}>
      <View style={styles.viewContainer}>
        <SuccessIcon />
        <Text style={styles.orderSuccessText}>{'CONGRATULATIONS'}</Text>
        <View style={styles.paddingView}>
          <Text
            style={[styles.orderSuccessMessageText, globalStyles.marginTop10]}>
            {
              'Registration has been successful ! Request has been sent to review team.'
            }
          </Text>
          <Text style={styles.orderSuccessMessageText}>
            {
              'You will have access to full features once the review team approves your account. '
            }
          </Text>
          {/*---- Button Start ------*/}
          <View style={[globalStyles.marginTop20]}>
            <LongButton
              fontFamily={FONT_FAMILY.RobotoCondensedRegular}
              fontWeight={'400'}
              fontSize={20}
              onPress={() => props.closePopUp()}
              title="Get Started"
              type={BUTTON_TYPE.LIGHT}
            />
          </View>
          {/*---- Button End ------*/}
        </View>
      </View>
    </Modal>
  );
};

export default WizardSuccessPopUp;
