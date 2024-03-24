import React from 'react';
import ADDPRODUCTICON from '../../../assets/images/welcome/add_productSVG.svg';
import {screenHeight, screenWidth} from '../../../utility/Scale';

const AddProductIcon = () => {
  return (
    <ADDPRODUCTICON
      width={screenWidth * 0.8}
      height={screenHeight * 0.38}
    />
  );
};
export default AddProductIcon;
