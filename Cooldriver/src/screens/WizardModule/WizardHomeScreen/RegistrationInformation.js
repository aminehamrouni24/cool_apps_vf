import React from 'react';
import {View} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Components
import ArrowRightLongIcon from '../../../components/icons/ArrowRightLongIcon/ArrowRightLongIcon';
import SquareListIcon from '../../../components/SquareListIcon/SquareListIcon';
import TitleText from '../../../components/TitleText/TitleText';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';

import CompanyInformationIcon from '../../../assets/images/placeholders/21x19.svg';
import PersonalInformationIcon from '../../../assets/images/profile/personalInformationSVG.svg';

const RegistrationInformation = props => {
  return (
    <View style={globalStyles.horizontalGeneralPadding}>
      {/*------- Page Introductory Title Start ------*/}
      <TitleText
        title={'Registration Information'}
        description={
          'Choose which type of account you want to register and start working with us. \n' +
          '\n' +
          'If you are sure you want to register as an individual, please choose “Personal Account”. \n' +
          '\n' +
          'If you want to work along with your company choose “Company Account”'
        }
        titleFontWeight={'300'}
      />
      {/*------- Page Introductory Title End ------*/}

      <View style={[globalStyles.marginTop25, globalStyles.marginBottom10]}>
        {/*---- Company Information Button Start ---- */}
        <SquareListIcon
          showBorder={true}
          onPress={() => props.onCompanyInformationPress()}
          leftIconComponent={<CompanyInformationIcon />}
          title={'Company Account'}
          leftIconRightPadding={19}
          leftIconLeftPadding={21}
          rightIconComponent={<ArrowRightLongIcon />}
        />
        {/*---- Company Information Button End ---- */}

        {/*---- Personal Information Button Start ---- */}
        <SquareListIcon
          containerTopPadding={10}
          showBorder={true}
          onPress={() => props.onPersonalInformationPress()}
          leftIconComponent={<PersonalInformationIcon />}
          title={'Personal Account'}
          leftIconRightPadding={19}
          leftIconLeftPadding={21}
          rightIconComponent={<ArrowRightLongIcon />}
        />
        {/*---- Personal Information Button End ---- */}
      </View>
    </View>
  );
};

/*---- Default Props Start -------*/
RegistrationInformation.defaultProps = {
  onCompanyInformationPress: () => {},
  onPersonalInformationPress: () => {},
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
RegistrationInformation.propTypes = {
  onCompanyInformationPress: PropTypes.func,
  onPersonalInformationPress: PropTypes.func,
};
/*---- Prop Type Expectations End -------*/
export default RegistrationInformation;
