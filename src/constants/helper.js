/**
 * Helper
 */
import { Dimensions, Platform, StatusBar, Linking } from 'react-native';
const { height: D_HEIGHT, width: D_WIDTH } = (() => {
  const { width, height } = Dimensions.get('window');
  if (width === 0 && height === 0) {
    return Dimensions.get('screen');
  }
  return { width, height };
})();
/**
 * isIOS
 */
const isIOS = () => {
  return Platform.OS === 'ios';
};

/**
 * isAndroid
 */
const isAndroid = () => {
  return Platform.OS === 'android';
};
/**
 * isIphoneX
 */
const isIphoneX = () => {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (D_HEIGHT === 780 ||
      D_WIDTH === 780 ||
      D_HEIGHT === 812 ||
      D_WIDTH === 812 ||
      D_HEIGHT === 844 ||
      D_WIDTH === 844 ||
      D_HEIGHT === 896 ||
      D_WIDTH === 896 ||
      D_HEIGHT === 926 ||
      D_WIDTH === 926)
  );
};

const isIphoneXDown = () => {
  return Platform.isIPhoneX && (D_HEIGHT === 812 || D_WIDTH === 812);
};
/**
 * iPhoneXAdditional
 */
const iPhoneXAdditional = (value) => {
  return isIphoneX() ? value : 0;
};
/**
 * return device width
 * @returns
 */
const getDeviceWidth = () => {
  return Dimensions.get('window').width;
};

/**
 * return device height
 * @returns
 */
const getDeviceHeight = () => {
  return Dimensions.get('window').height;
};
const isIpad = () => {
  const ratio = getDeviceHeight() / getDeviceWidth();
  if (ratio < 1.6) {
    {
      return true;
    }
  } else {
    return false;
  }
};
const isIpadPro = () => {
  const ratio = getDeviceHeight() / getDeviceWidth();
  if (ratio < 0.75) {
    {
      return true;
    }
  } else {
    return false;
  }
};

/**
 * isIPhoneSE
 */
const isIPhoneSE = () => {
  return Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && (D_HEIGHT === 667 || D_WIDTH === 568);
};

/**
 * Export
 */
export {
  isIOS,
  isIpad,
  isAndroid,
  isIphoneX,
  iPhoneXAdditional,
  getDeviceWidth,
  getDeviceHeight,
  isIpadPro,
  isIphoneXDown,
  isIPhoneSE,
};
