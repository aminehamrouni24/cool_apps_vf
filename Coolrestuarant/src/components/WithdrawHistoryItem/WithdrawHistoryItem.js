import React from 'react';
import {Text, View} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Component
import ProfileWithBorder from '../ProfileWithBorder/ProfileWithBorder';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import {allColors} from '../../assets/styles/mainColors';
import {screenWidth} from '../../utility/Scale';

const WithdrawHistoryItem = props => {
  return (
    <View
      style={[
        globalStyles.flexDirectionRow,
        styles.mainContainer,
        globalStyles.alignItemsCenter,
      ]}>
      {/* --- Profile Picture Start --*/}
      <View style={styles.profileView}>
        <ProfileWithBorder
          imagePath={props.profilePicture}
          imageComponent={props.profilePictureComponent}
          imageHeight={screenWidth * 0.1}
          imageWidth={screenWidth * 0.1}
          borderColor={allColors.borderBlack}
        />
      </View>
      {/* --- Profile Picture End --*/}
      <View style={styles.nameView}>
        {/* --- Name Start --*/}
        <Text style={styles.nameText}>{props.name}</Text>
        {/* --- Name End --*/}

        {/* --- Description Start --*/}
        {props.description.length > 0 && (
          <View style={globalStyles.flexDirectionRow}>
            <Text style={styles.descriptionText}>{props.description}</Text>
          </View>
        )}
        {/* --- Description End --*/}
      </View>
      <View style={styles.moneyGainedView}>
        {/* --- Money Gained Start --*/}
        <Text style={styles.moneyGainedText}>
          {'$' + props.moneyGained.toFixed(2)}
        </Text>
        {/* --- Name End --*/}
      </View>
    </View>
  );
};

/*---- Default Props Start -------*/
WithdrawHistoryItem.defaultProps = {
  description: '',
  moneyGained: 0,
  name: '',
  profilePicture: '',
  profilePictureComponent: null,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
WithdrawHistoryItem.propTypes = {
  description: PropTypes.string,
  moneyGained: PropTypes.number,
  name: PropTypes.string,
  profilePicture: PropTypes.string,
  profilePictureComponent: PropTypes.object,
};
/*---- Prop Type Expectations End -------*/
export default WithdrawHistoryItem;
