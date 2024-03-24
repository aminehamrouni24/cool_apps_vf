import React from 'react';
import {Image} from 'react-native';

import USAFLAG from '../../../assets/images/flags/usa-flag.png';
import GEORGIAFLAG from '../../../assets/images/flags/georgia-flag.png';
import RUSSIAFLAG from '../../../assets/images/flags/russia-flag.png';
import TURKEYFLAG from '../../../assets/icons/flagIcons/turkeySVG.svg';
import {
  ENGLISH_LANGUAGE,
  GEORGIAN_LANGUAGE,
  RUSSIAN_LANGUAGE,
  TURKISH_LANGUAGE,
} from '../../../constants/constants';
const FlagIcons = props => {
  let icon;
  switch (props.chosenLanguage) {
    case ENGLISH_LANGUAGE:
      icon = <Image source={USAFLAG} width={47} height={34} />;
      break;
    case RUSSIAN_LANGUAGE:
      icon = <Image source={RUSSIAFLAG} width={47} height={34} />;
      break;
    case GEORGIAN_LANGUAGE:
      icon = <Image source={GEORGIAFLAG} width={47} height={34} />;
      break;
    case TURKISH_LANGUAGE:
      icon = <TURKEYFLAG width={33} height={34} style={{marginLeft: 0}} />;
      break;
    default:
      icon = <Image source={USAFLAG} width={47} height={34} />;
  }
  return icon;
};
export default FlagIcons;
