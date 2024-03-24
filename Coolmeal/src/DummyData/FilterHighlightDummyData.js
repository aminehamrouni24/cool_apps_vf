import React from 'react';
import {Image} from 'react-native';
import {screenHeight, screenWidth} from '../utility/Scale';
/*-------------------------------------- Filter Highlight Dummy Data used for FilterScreen Start --------------------------------------*/
module.exports = {
  data: [
    {
      id: 0,
      title: 'New',
      icon: (
        <Image
          source={require('../assets/placeholders/43x43.png')}
          style={{
            height: screenHeight * 0.05,
            width: screenWidth * 0.127,
            borderRadius: 3,
          }}
        />
      ),
      isActive: false,
    },
    {
      id: 1,
      title: 'Deals',
      icon: (
        <Image
          source={require('../assets/placeholders/43x43.png')}
          style={{
            height: screenHeight * 0.053,
            width: screenWidth * 0.137,
            borderRadius: 3,
          }}
        />
      ),
      isActive: true,
    },
    {
      id: 2,
      title: 'Featured',
      icon: (
        <Image
          source={require('../assets/placeholders/43x43.png')}
          style={{
            height: screenHeight * 0.05,
            width: screenWidth * 0.127,
            borderRadius: 3,
          }}
        />
      ),
      isActive: true,
    },
  ],
};
/*-------------------------------------- Filter Highlight Dummy Data used for FilterScreen End --------------------------------------*/
