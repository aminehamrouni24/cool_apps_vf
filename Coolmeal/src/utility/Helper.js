import {Alert, Platform} from 'react-native';
import RNPermissions, {request} from 'react-native-permissions';
import moment from 'moment';
import OpenAppSettings from 'react-native-app-settings';
import {
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
const {PERMISSIONS, RESULTS} = RNPermissions;

const checkCameraPermission = callBack => {
  if (Platform.OS === 'ios') {
    request(PERMISSIONS.IOS.CAMERA)
      .then(result => {
        callBack(result === RESULTS.GRANTED);
      })
      .catch(error => {
        callBack(false);
      });
  } else {
    request(PERMISSIONS.ANDROID.CAMERA)
      .then(result => {
        callBack(result === RESULTS.GRANTED);
      })
      .catch(error => {
        callBack(false);
      });
  }
};

const checkPhotoLibraryPermission = callBack => {
  if (Platform.OS === 'ios') {
    request(PERMISSIONS.IOS.PHOTO_LIBRARY)
      .then(result => {
        callBack(result === RESULTS.GRANTED);
      })
      .catch(error => {
        callBack(false);
      });
  } else {
    request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
      .then(result => {
        callBack(result === RESULTS.GRANTED);
      })
      .catch(error => {
        callBack(false);
      });
  }
};

const showPermissionAlert = (title, message) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'Open Setting',
        onPress: () => {
          OpenAppSettings.open();
        },
      },
    ],
    {
      cancelable: false,
    },
  );
};

const loadPagination = (array, page_size, page_number) => {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
};

const AnimatedHeader = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({current, next, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            rotate: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.9],
                })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};

const cc_format = value => {
  let v = value
    .toString()
    .replace(/\s+/g, '')
    .replace(/[^0-9]/gi, '');
  let matches = v.match(/\d{4,16}/g);
  let match = (matches && matches[0]) || '';
  let parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(' ');
  } else {
    return value;
  }
};

const returnYears = () => {
  const years = [];
  const dateStart = moment();
  const dateEnd = moment().add(50, 'y');
  while (dateEnd.diff(dateStart, 'years') >= 0) {
    years.push(dateStart.format('YYYY'));
    dateStart.add(1, 'year');
  }
  return years;
};

const returnDeliveryDate = timeStamp => {
  let compareDate = moment.unix(timeStamp).format('DD/MM/YYYY');
  let todaysDate = moment().format('DD/MM/YYYY');
  if (compareDate === todaysDate) {
    return 'Today';
  } else {
    return compareDate;
  }
};

const returnDeliveryTime = timeStamp => {
  return moment.unix(timeStamp).format('hh:mm') + ' Min';
};

export {
  checkCameraPermission,
  checkPhotoLibraryPermission,
  showPermissionAlert,
  loadPagination,
  AnimatedHeader,
  cc_format,
  returnYears,
  returnDeliveryDate,
  returnDeliveryTime,
};
