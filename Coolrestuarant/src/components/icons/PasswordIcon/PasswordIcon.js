import React from 'react';

import PASSWORD from '../../../assets/icons/generalIcons/lockSVG.svg';
import {
  horizontalPercentageScale,
  verticalPercentageScale,
} from '../../../utility/Scale';

const PasswordIcon = () => {
  return (
    <PASSWORD
      width={horizontalPercentageScale(4)}
      height={verticalPercentageScale(4)}
    />
  );
};
export default PasswordIcon;
