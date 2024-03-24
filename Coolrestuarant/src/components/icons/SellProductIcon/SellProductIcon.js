import React from 'react';
import SELLPRODUCTICON from '../../../assets/images/welcome/sell_productSVG.svg';
import {screenHeight, screenWidth} from '../../../utility/Scale';
const SellProductIcon = () => {
  return (
    <SELLPRODUCTICON width={screenWidth * 0.8} height={screenHeight * 0.38} />
  );
};
export default SellProductIcon;
