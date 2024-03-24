import React from 'react';
import CHOOSEYOURLOCATIONICON from '../../../assets/images/placeholders/slideshow.svg';
import {screenHeight, screenWidth} from '../../../utility/Scale';

const ChooseYourLocationIcon = () => {
  return (
    <CHOOSEYOURLOCATIONICON
      width={screenWidth * 0.8}
      height={screenHeight * 0.38}
    />
  );
};
export default ChooseYourLocationIcon;
