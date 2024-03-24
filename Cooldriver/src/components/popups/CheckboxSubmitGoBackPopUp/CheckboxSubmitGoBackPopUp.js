import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

//Third Party
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import CheckBox from '@react-native-community/checkbox';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import {allColors} from '../../../assets/styles/mainColors';

const CheckboxSubmitGoBackPopUp = props => {
  //reasons array
  const [reasonsArr, setReasonsArr] = useState(
    props.checkboxLabelArr.map(val => {
      return {title: val, isActive: false};
    }),
  );
  //is submission button enabled?
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  //toggle checkbox on click
  function toggleCheckbox(val, index) {
    let reasonArr = reasonsArr;
    reasonArr[index].isActive = !val.isActive;
    setReasonsArr(reasonArr);
    setIsSubmitDisabled(
      reasonArr.filter(val => val.isActive === true).length === 0,
    );
  }
  return (
    <Modal
      animationOutTiming={300}
      backdropOpacity={0.6}
      isVisible={props.showPopUp}>
      <View style={styles.viewContainer}>
        {/*-- Popup Title Start --*/}
        <View>
          <Text style={[styles.orderSuccessText, globalStyles.marginBottom11]}>
            {props.title}
          </Text>
        </View>
        {/*-- Popup Title End --*/}

        {/*-- Checkboxes Start --*/}
        <View>
          {reasonsArr.map((val, index) => (
            <View key={'checkbox_' + index} style={styles.checkboxContainer}>
              <Text style={styles.checkboxTitle}>{val.title}</Text>
              <CheckBox
                style={styles.checkbox}
                boxType="square"
                lineWidth={1}
                onFillColor={allColors.white}
                tintColor={allColors.blue}
                onCheckColor={allColors.blue}
                value={val.isActive}
                onValueChange={() => toggleCheckbox(val, index)}
              />
            </View>
          ))}
        </View>
        {/*-- Checkboxes End --*/}

        {/*-- Go Back & Submit Buttons Start --*/}
        <View
          style={[
            globalStyles.flexDirectionRow,
            globalStyles.marginTop15,
            globalStyles.justifySpaceBetween,
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
            disabled={isSubmitDisabled}
            style={[
              styles.touchButtons,
              styles.declineButton,
              isSubmitDisabled && styles.disabledDeclineButton,
            ]}>
            <Text style={[styles.touchText, styles.declineButtonText]}>
              {'Submit'}
            </Text>
          </TouchableOpacity>
        </View>
        {/*-- Go Back & Submit Buttons End --*/}
      </View>
    </Modal>
  );
};
/*---- Default Props Start -------*/
CheckboxSubmitGoBackPopUp.defaultProps = {
  checkboxLabelArr: [],
  closePopup: () => {},
  getStarted: () => {},
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
CheckboxSubmitGoBackPopUp.propTypes = {
  checkboxLabelArr: PropTypes.array,
  closePopup: PropTypes.func,
  getStarted: PropTypes.func,
};
/*---- Prop Type Expectations End -------*/
export default CheckboxSubmitGoBackPopUp;
