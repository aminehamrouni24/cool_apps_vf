import React from 'react';
import RECEIVEORDERONLINEICON from '../../../assets/images/placeholders/slideshow.svg';
import {screenHeight, screenWidth} from '../../../utility/Scale';

const ReceiveOrderOnlineIcon = () => {
  return (
    <RECEIVEORDERONLINEICON
      width={screenWidth * 0.8}
      height={screenHeight * 0.38}
    />
  );
};
export default ReceiveOrderOnlineIcon;
