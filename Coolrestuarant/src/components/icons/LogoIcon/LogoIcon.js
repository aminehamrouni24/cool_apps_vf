import React from 'react';
import PropTypes from 'prop-types';

import LOGOBW from '../../../assets/images/logos/logo_bwSVG.svg';
import LOGOCOLORED from '../../../assets/images/logos/1.png';

import {screenHeight, screenWidth} from '../../../utility/Scale';

const LogoIcon = (props) => {
  let logo = <LOGOBW width={84} height={45} />;
  if (props.colored) {
    logo = (
      <LOGOCOLORED width={screenWidth * 0.181} height={screenHeight * 0.078} />
    );
  }
  return <React.Fragment>{logo}</React.Fragment>;
};
/*---- Default Props Start -------*/
LogoIcon.defaultProps = {
  blackOutline: false,
  colored: false,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
LogoIcon.propTypes = {
  blackOutline: PropTypes.bool,
  colored: PropTypes.bool,
};
/*---- Prop Type Expectations End -------*/
export default LogoIcon;
