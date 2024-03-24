import React from 'react';
import {Image} from 'react-native';
import HomeLocation from '../assets/icons/generalIcons/locationIcons/green_houseSVG.svg';
import RestaurantLocation from '../assets/icons/generalIcons/locationIcons/green_locationSVG.svg';
/*------------------------------ Delivery Data used for Invoice Screen Start --------------------------------*/
module.exports = {
  data: {
    pickupInformation: {
      name: 'Nina Backer',
      deliveryMethod: 'Bike',
      address: '175 Cambridge Street, Boston, MA',
      markerBackgroundColor: 'white',
      latitude: 42.36157392117464,
      longitude: -71.0654149580024,
      profilePicturePath:
        'https://images.unsplash.com/photo-1615751596346-9df8006e5381?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      showRatingView: false,
      rating: 4,
      ratingNum: 4,
      homeIcon: (
        <Image
          source={require('../assets/icons/generalIcons/locationIcons/driver_location.png')}
          style={{height: 80, width: 80}}
        />
      ),
    },
    restaurantInformation: {
      name: "Monica's Trattorria",
      address: '67 Prince St #1827, Boston, MA',
      profilePicturePath:
        'https://images.unsplash.com/photo-1567613814045-a5263064bef7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      latitude: 42.36535560364991,
      longitude: -71.0547744751942,
      showRatingView: true,
      rating: 4,
      ratingNum: 4,
      homeIcon: <RestaurantLocation height={80} width={80} />,
    },
    deliveryInformation: {
      name: 'Sabrina Lorenshtein',
      address: '65 Summer Street, Boston, MA',
      profilePicturePath:
        'https://images.unsplash.com/photo-1591838518165-a7026f15f055?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      latitude: 42.35433012130913,
      longitude: -71.05910008814041,
      homeIcon: <HomeLocation height={80} width={80} />,
    },
  },
};
/*------------------------------ Delivery Data used for Invoice Screen End --------------------------------*/
