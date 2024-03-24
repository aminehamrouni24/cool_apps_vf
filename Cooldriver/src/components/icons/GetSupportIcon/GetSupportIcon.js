import React from 'react';
import GETSUPPORTICON from '../../../assets/images/placeholders/slideshow.svg';
import {screenHeight, screenWidth} from '../../../utility/Scale';
const GetSupportIcon = () => {
  return (
    <GETSUPPORTICON width={screenWidth * 0.8} height={screenHeight * 0.38} />
  );
};
export default GetSupportIcon;
