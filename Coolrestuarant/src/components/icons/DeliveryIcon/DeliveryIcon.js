import React from 'react';
import DELIVERYICON from '../../../assets/images/welcome/deliverySVG.svg';
import {screenHeight, screenWidth} from '../../../utility/Scale';

const DeliveryIcon = () => {
  return (
    <DELIVERYICON
      width={screenWidth * 0.8}
      height={screenHeight * 0.38}
    />
  );
};
export default DeliveryIcon;
