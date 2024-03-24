import React from 'react';
import {Image} from 'react-native';
import {horizontalScale, verticalScale} from '../utility/Scale';

module.exports = {
  data: [
    {
      id: 1,
      title: 'Home Chef',
      description: 'Family Cooking',
      activeImageComponent: (
        <Image
          source={require('../assets/placeholders/active49x49.png')}
          style={{
            height: verticalScale(49),
            width: horizontalScale(59),
            borderRadius: 3,
          }}
        />
      ),
      inactiveImageComponent: (
        <Image
          source={require('../assets/placeholders/inactive49x49.png')}
          style={{
            height: verticalScale(49),
            width: horizontalScale(59),
            borderRadius: 3,
          }}
        />
      ),
      isActive: false,
    },
    {
      id: 2,
      title: 'Restaurants',
      description: '135 Places',
      activeImageComponent: (
        <Image
          source={require('../assets/placeholders/active49x49.png')}
          style={{
            height: verticalScale(49),
            width: horizontalScale(59),
            borderRadius: 3,
          }}
        />
      ),
      inactiveImageComponent: (
        <Image
          source={require('../assets/placeholders/inactive49x49.png')}
          style={{
            height: verticalScale(49),
            width: horizontalScale(59),
            borderRadius: 3,
          }}
        />
      ),
      isActive: false,
    },
    {
      id: 3,
      title: 'Fast Food',
      description: '48 Places',
      activeImageComponent: (
        <Image
          source={require('../assets/placeholders/active49x49.png')}
          style={{
            height: verticalScale(49),
            width: horizontalScale(59),
            borderRadius: 3,
          }}
        />
      ),
      inactiveImageComponent: (
        <Image
          source={require('../assets/placeholders/inactive49x49.png')}
          style={{
            height: verticalScale(49),
            width: horizontalScale(59),
            borderRadius: 3,
          }}
        />
      ),
      isActive: false,
    },
    {
      id: 4,
      title: 'Bakery',
      description: '153 Places',
      activeImageComponent: (
        <Image
          source={require('../assets/placeholders/active49x49.png')}
          style={{
            height: verticalScale(49),
            width: horizontalScale(59),
            borderRadius: 3,
          }}
        />
      ),
      inactiveImageComponent: (
        <Image
          source={require('../assets/placeholders/inactive49x49.png')}
          style={{
            height: verticalScale(49),
            width: horizontalScale(59),
            borderRadius: 3,
          }}
        />
      ),
      isActive: false,
    },
    {
      id: 5,
      title: 'Seafood',
      description: '39 Places',
      activeImageComponent: (
        <Image
          source={require('../assets/placeholders/active49x49.png')}
          style={{
            height: verticalScale(49),
            width: horizontalScale(59),
            borderRadius: 3,
          }}
        />
      ),
      inactiveImageComponent: (
        <Image
          source={require('../assets/placeholders/inactive49x49.png')}
          style={{
            height: verticalScale(49),
            width: horizontalScale(59),
            borderRadius: 3,
          }}
        />
      ),
      isActive: false,
    },
    {
      id: 6,
      title: 'Drinks',
      description: '135 Places',
      activeImageComponent: (
        <Image
          source={require('../assets/placeholders/active49x49.png')}
          style={{
            height: verticalScale(49),
            width: horizontalScale(59),
            borderRadius: 3,
          }}
        />
      ),
      inactiveImageComponent: (
        <Image
          source={require('../assets/placeholders/inactive49x49.png')}
          style={{
            height: verticalScale(49),
            width: horizontalScale(59),
            borderRadius: 3,
          }}
        />
      ),
      isActive: false,
    },
    {
      id: 7,
      title: 'Anything',
      description: '369 Places',
      activeImageComponent: (
        <Image
          source={require('../assets/placeholders/active49x49.png')}
          style={{
            height: verticalScale(49),
            width: horizontalScale(59),
            borderRadius: 3,
          }}
        />
      ),
      inactiveImageComponent: (
        <Image
          source={require('../assets/placeholders/inactive49x49.png')}
          style={{
            height: verticalScale(49),
            width: horizontalScale(59),
            borderRadius: 3,
          }}
        />
      ),
      isActive: false,
    },
  ],
};
