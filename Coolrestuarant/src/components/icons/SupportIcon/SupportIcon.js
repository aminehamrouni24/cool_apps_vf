import React from 'react';
import SUPPORTICON from '../../../assets/images/welcome/supportSVG.svg';
import {screenHeight, screenWidth} from '../../../utility/Scale';

const SupportIcon = () => {
  return (
    <SUPPORTICON
      width={screenWidth * 0.8}
      height={screenHeight * 0.38}
    />
  );
};
export default SupportIcon;
