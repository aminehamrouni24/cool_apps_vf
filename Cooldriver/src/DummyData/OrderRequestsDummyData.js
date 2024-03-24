import React from 'react';
import {ORDER_STATUS} from '../constants/constants';
/*------------- Table Data used on Coupon Screen Start --------------------*/
module.exports = {
  data: [
    {
      id: 0,
      deliverBy: '3:24 PM',
      restaurant: "Monica's Trattoria",
      distanceToRestaurant: '0.74 km',
      totalDistance: '5.3 km',
      numOfItems: 1,
      earning: 3.95,
      restaurantImage:
        'https://images.unsplash.com/photo-1464306076886-da185f6a9d05?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      restaurantAddress: '32 Trattoria Street',
      deliveryAddress: '81 Home Street',
      notes:
        'Nulla eu orci rutrum, finibus lectus at, dapibus purus. Ut accumsan, massa nec pellentesque fringilla, ' +
        'justo enim feugiat odio, ut convallis augue ante vel nulla. Quisque ut diam sollicitudin, consectetur nisl ut, lacinia libero.',
      orderedItems: [
        {
          id: 0,
          title: 'Brownies',
          rating: 4.5,
          deliveryTime: '31min',
          description: 'Chocolate Brownies',
          deliveryFee: 3.45,
          review: 145,
          imageIconPath:
            'https://images.unsplash.com/photo-1589218436045-ee320057f443?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          isActive: false,
          itemPurchased: 1,
        },
      ],
      status: ORDER_STATUS.PENDING,
      requestSentDate: Date.now(),
    },
    {
      id: 1,
      deliverBy: '3:27 PM',
      restaurant: 'Franchie Wine Bistro',
      restaurantImage:
        'https://images.unsplash.com/photo-1440492248262-6895f9da82fc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
      distanceToRestaurant: '1.03 km',
      totalDistance: '7.3 km',
      numOfItems: 2,
      earning: 3.95,
      restaurantAddress: '83 Frenchie Street',
      deliveryAddress: '91 Home Street',
      notes:
        'Nulla eu orci rutrum, finibus lectus at, dapibus purus. Ut accumsan, massa nec pellentesque fringilla, ' +
        'justo enim feugiat odio, ut convallis augue ante vel nulla. Quisque ut diam sollicitudin, consectetur nisl ut, lacinia libero.',
      orderedItems: [
        {
          id: 2,
          title: 'Berry Cake',
          rating: 2,
          deliveryTime: '31min',
          description: 'Lilian, Rouses, Bouquets.',
          deliveryFee: 5,
          review: 145,
          imageIconPath:
            'https://images.unsplash.com/photo-1591638246754-77e0571e6d24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          isActive: false,
          itemPurchased: 2,
        },
        {
          id: 3,
          title: 'Brownies',
          rating: 4.5,
          deliveryTime: '31min',
          description: 'Chocolate Brownies',
          deliveryFee: 3.45,
          review: 145,
          imageIconPath:
            'https://images.unsplash.com/photo-1589218436045-ee320057f443?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          isActive: false,
          itemPurchased: 1,
        },
      ],
      status: ORDER_STATUS.PENDING,
      requestSentDate: Date.now(),
    },
  ],
};
/*------------- Table Data used on Coupon Screen End --------------------*/
