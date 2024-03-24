import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Components
import ProfileWithBorder from '../ProfileWithBorder/ProfileWithBorder';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import {allColors} from '../../assets/styles/mainColors';
import {screenWidth} from '../../utility/Scale';

const EarningItem = props => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={[
        globalStyles.flexDirectionRow,
        styles.mainContainer,
        globalStyles.alignItemsCenter,
      ]}>
      {/* --- Profile Picture Start --*/}
      <View style={styles.profileView}>
        <ProfileWithBorder
          imagePath={props.imagePath}
          borderRadius={3}
          imageComponent={props.imageComponent}
          imageHeight={screenWidth * 0.1}
          imageWidth={screenWidth * 0.1}
          borderColor={allColors.borderBlack}
        />
      </View>
      {/* --- Profile Picture End --*/}
      <View style={styles.nameView}>
        {/*-Name Start--*/}
        <Text style={styles.nameText}>{props.name}</Text>
        {/*-Name End--*/}

        {/*-Invoice Information Start--*/}
        {props.invoiceNumber && (
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.alignItemsCenter,
            ]}>
            <Text style={styles.inviteCodeTitle}>{'Invoice: '}</Text>

            <Text style={styles.inviteCodeText}>{props.invoiceNumber}</Text>
          </View>
        )}
        {/*-Invoice Information End--*/}
      </View>
      <View style={styles.dateView}>
        {/* --- Money Gained Start --*/}
        <Text style={styles.moneyGainedText}>
          {'$ ' + props.amountPaid.toFixed(2)}
        </Text>
        {/* --- Name End --*/}

        {/* --- Date Start --*/}
        {props.date.length > 0 && (
          <Text style={styles.dateText}>{props.date}</Text>
        )}
        {/* --- Date End --*/}
      </View>
    </TouchableOpacity>
  );
};

/*---- Default Props Start -------*/
EarningItem.defaultProps = {
  amountPaid: 0,
  date: '',
  description: '',
  imageComponent: null,
  imagePath: '',
  invoiceNumber: '',
  isCompleted: false,
  name: '',
  onPress: () => {},
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
EarningItem.propTypes = {
  amountPaid: PropTypes.number,
  date: PropTypes.string,
  description: PropTypes.string,
  imageComponent: PropTypes.object,
  imagePath: PropTypes.string,
  invoiceNumber: PropTypes.string,
  isCompleted: PropTypes.bool,
  name: PropTypes.string,
  onPress: PropTypes.func,
};
/*---- Prop Type Expectations End -------*/
export default EarningItem;
