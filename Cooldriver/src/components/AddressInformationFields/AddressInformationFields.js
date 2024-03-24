import React from 'react';
import {View, Text} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Components
import BorderDivider from '../BorderDivider/BorderDivider';

import AddressDirections from '../../assets/icons/addressDirectionIcons/addressDirectionsSVG2.svg';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';

const AddressInformationFields = props => {
  return (
    <View style={styles.nameView}>
      <View style={styles.addressInfoContainer}>
        <AddressDirections />
      </View>
      <View
        style={[
          globalStyles.marginLeft9,
          globalStyles.marginTop5,
          globalStyles.width100,
        ]}>
        {/* --- Address 1 Start --*/}
        <Text style={styles.descriptionText}>{props.fromAddress}</Text>
        {/* --- Address 1 End --*/}

        {/*------ Border Divider Start ------------*/}
        <BorderDivider
          activeAreaWidth={0}
          containerBottomMargin={0}
          containerTopMargin={5}
        />
        {/*------ Border Divider End ------------*/}

        {/* --- Address 2 Start --*/}
        <View style={[globalStyles.flexDirectionRow, globalStyles.marginTop5]}>
          <Text style={styles.descriptionText}>{props.toAddress}</Text>
        </View>
        {/* --- Address 2 End --*/}
      </View>
    </View>
  );
};

/*---- Default Props Start -------*/
AddressInformationFields.defaultProps = {
  fromAddress: '',
  toAddress: '',
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
AddressInformationFields.propTypes = {
  fromAddress: PropTypes.string,
  toAddress: PropTypes.string,
};
/*---- Prop Type Expectations End -------*/

export default AddressInformationFields;
