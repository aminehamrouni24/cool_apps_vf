import React from 'react';
import {horizontalScale, verticalScale} from '../utility/Scale';
import {Image} from 'react-native';
/*------------------------------------ Sort By Title Data for Filter Screen Start --------------------------------*/
module.exports = {
  data: [
    {
      id: 0,
      title: 'Near Me',
      icon: (
        <Image
          source={require('../assets/placeholders/43x43.png')}
          style={{
            height: verticalScale(43),
            width: horizontalScale(43),
            borderRadius: 3,
          }}
        />
      ),
      isActive: false,
    },
    {
      id: 1,
      title: 'Ratings',
      icon: (
        <Image
          source={require('../assets/placeholders/43x43.png')}
          style={{
            height: verticalScale(43),
            width: horizontalScale(43),
            borderRadius: 3,
          }}
        />
      ),
      isActive: false,
    },
    {
      id: 2,
      title: 'Delivery Free',
      icon: (
        <Image
          source={require('../assets/placeholders/43x43.png')}
          style={{
            height: verticalScale(43),
            width: horizontalScale(43),
            borderRadius: 3,
          }}
        />
      ),
      isActive: false,
    },
  ],
};
/*------------------------------------ Sort By Title Data for Filter Screen End --------------------------------*/
