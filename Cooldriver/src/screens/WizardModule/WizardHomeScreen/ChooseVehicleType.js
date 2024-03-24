import React from 'react';
import {View} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Components
import ArrowRightLongIcon from '../../../components/icons/ArrowRightLongIcon/ArrowRightLongIcon';
import SquareListIcon from '../../../components/SquareListIcon/SquareListIcon';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import {FONT_FAMILY} from '../../../constants/constants';
import {verticalScale} from '../../../utility/Scale';

import VehicleRegistrationIcon from '../../../assets/images/placeholders/300x201.svg';

const ChooseVehicleType = props => {
  return (
    <View
      style={[
        globalStyles.horizontalGeneralPadding,
        {marginTop: verticalScale(-30)},
        globalStyles.marginBottom20,
      ]}>
      {/*-----Page Title Start----*/}
      <View>
        <TitlePicture
          componentTopPadding={44}
          imageComponent={<VehicleRegistrationIcon />}
          titleTopPadding={20}
          title={'Vehicle Registration'}
          titleFontSize={20}
          titleFontFamily={FONT_FAMILY.RobotoCondensedLight}
          description={
            'Write some description here about uploading your vehicle image.'
          }
          descriptionTopPadding={8}
          touchAllowed={true}
          componentBottomPadding={22}
        />
      </View>
      {/*-----Page Title End----*/}

      <View>
        {/*---- Bike Registration Button Start ---- */}
        <SquareListIcon
          showBorder={true}
          onPress={() => props.onBikePress()}
          title={'Bike'}
          leftIconRightPadding={0}
          leftIconLeftPadding={26}
          rightIconComponent={<ArrowRightLongIcon />}
        />
        {/*---- Bike Registration Button End ---- */}

        {/*---- Car Registration Button Start ---- */}
        <SquareListIcon
          containerTopPadding={10}
          showBorder={true}
          onPress={() => props.onCarPress()}
          title={'Car'}
          leftIconRightPadding={0}
          leftIconLeftPadding={26}
          rightIconComponent={<ArrowRightLongIcon />}
        />
        {/*---- Car Registration Button End ---- */}
      </View>
    </View>
  );
};

/*---- Default Props Start -------*/
ChooseVehicleType.defaultProps = {
  onBikePress: () => {},
  onCarPress: () => {},
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
ChooseVehicleType.propTypes = {
  onBikePress: PropTypes.func,
  onCarPress: PropTypes.func,
};
/*---- Prop Type Expectations End -------*/
export default ChooseVehicleType;
