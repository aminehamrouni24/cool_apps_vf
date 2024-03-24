import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Components
import ProfileWithBorder from '../ProfileWithBorder/ProfileWithBorder';

import AddressDirections from '../../assets/icons/addressDirectionIcons/addressDirectionsSVG.svg';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import {allColors} from '../../assets/styles/mainColors';
import {screenWidth, verticalScale} from '../../utility/Scale';

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
          imageComponent={props.imageComponent}
          imageHeight={screenWidth * 0.1}
          imageWidth={screenWidth * 0.1}
          borderColor={allColors.borderBlack}
        />
      </View>
      {/* --- Profile Picture End --*/}
      <View style={styles.nameView}>
        <View style={{marginTop: verticalScale(2)}}>
          <AddressDirections />
        </View>

        <View style={globalStyles.marginLeft5}>
          {/* --- Address 1 Start --*/}
          <Text style={styles.descriptionText}>{props.address1}</Text>
          {/* --- Address 1 End --*/}

          {/* --- Address 2 Start --*/}
          {props.address2.length > 0 && (
            <View style={globalStyles.flexDirectionRow}>
              <Text style={styles.descriptionText}>{props.address2}</Text>
            </View>
          )}
          {/* --- Address 2 End --*/}
        </View>
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
  address1: '',
  address2: '',
  date: '',
  imageComponent: null,
  imagePath: '',
  onPress: () => {},
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
EarningItem.propTypes = {
  amountPaid: PropTypes.number,
  address1: PropTypes.string,
  address2: PropTypes.string,
  date: PropTypes.string,
  imageComponent: PropTypes.object,
  imagePath: PropTypes.string,
  onPress: PropTypes.func,
};
/*---- Prop Type Expectations End -------*/
export default EarningItem;
