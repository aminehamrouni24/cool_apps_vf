import React from 'react';

import Sabrina from '../assets/images/profile/sabrinaProfileSVG.svg';
import Laura from '../assets/images/profile/lauraSVG.svg';
import Roberto from '../assets/images/profile/robertoSVG.svg';
import David from '../assets/images/profile/davidSVG.svg';
/*------------------------------------ Order History Data used on Order History Data Screen Start ------------------------------------------*/
module.exports = {
  data: [
    {
      id: 0,
      amountPaid: 240.0,
      name: 'Sabrina Lorenstein',
      invoiceNumber: '30WT43GD51',
      description: 'Duis in mollis de megado',
      isCompleted: true,
      restaurantIconComponent: <Sabrina width={33} height={33} />,
      date: '01/20/2020',
    },
    {
      id: 1,
      name: 'Laura Cliford',
      invoiceNumber: '30WT43GD52',
      description: 'Duis in mollis de megado',
      isCompleted: true,
      amountPaid: 240.0,
      restaurantIconComponent: <Laura width={33} height={33} />,
      date: '01/20/2020',
    },
    {
      id: 2,
      name: 'Roberto Gandolini',
      invoiceNumber: '30WT43GD53',
      description: 'Duis in mollis de megado',
      isCompleted: true,
      amountPaid: 240.0,
      restaurantIconComponent: <Roberto width={33} height={33} />,
      date: '01/20/2020',
    },
    {
      id: 3,
      name: 'David Brown',
      invoiceNumber: '30WT43GD54',
      description: 'Duis in mollis de megado',
      isCompleted: true,
      amountPaid: 240.0,
      restaurantIconComponent: <David width={33} height={33} />,
      date: '01/20/2020',
    },
  ],
};
/*------------------------------------ Order History Data used on Order History Data Screen End ------------------------------------------*/
