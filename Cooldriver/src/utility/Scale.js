import {PixelRatio, Platform, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const realWidth = height > width ? width : height;

import DeviceInfo from 'react-native-device-info';

const isTablet = () => {
  let pixelDensity = PixelRatio.get();
  let adjustedWidth = width * pixelDensity;
  let adjustedHeight = height * pixelDensity;
  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true;
  } else {
    return (
      pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)
    );
  }
};

const isSmallDevice = width <= 375 && !DeviceInfo.hasNotch();

/* Method for Scale the space based on screen size */
//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const verticalPercentageScale = percentage => (percentage / 100) * height;
const horizontalPercentageScale = percentage => (percentage / 100) * width;

const horizontalScale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;

const scaleFontSize = size => {
  let divider = isTablet() ? 600 : 375;
  return Math.round((size * realWidth) / divider);
};

const screenWidth = width;
const screenHeight = height;

/**
 * Converts provided width percentage to independent pixel (dp).
 * @param  {string} widthPercent The percentage of screen's width that UI element should cover
 *                               along with the percentage symbol (%).
 * @return {number}              The calculated dp depending on current device's screen width.
 */
const widthPercentageToDP = widthPercent => {
  // Parse string percentage input and convert it to number.
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

/**
 * Converts provided height percentage to independent pixel (dp).
 * @param  {string} heightPercent The percentage of screen's height that UI element should cover
 *                                along with the percentage symbol (%).
 * @return {number}               The calculated dp depending on current device's screen height.
 */
const heightPercentageToDP = heightPercent => {
  // Parse string percentage input and convert it to number.
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

/* End */

export {
  horizontalScale,
  verticalScale,
  scaleFontSize,
  screenWidth,
  screenHeight,
  verticalPercentageScale,
  horizontalPercentageScale,
  isSmallDevice,
  widthPercentageToDP,
  heightPercentageToDP,
};
