
import { Dimensions, Platform, StatusBar } from 'react-native';

export const DateFormat = 'YYYY-MM-DD';

export const WIN_WIDTH = Dimensions.get('window').width,
  WIN_HEIGHT = Dimensions.get('window').height;

export const isIOS = Platform.OS === 'ios' ? true : false;
export const isAndroid = Platform.OS === 'android' ? true : false;
export const isSmallDevice = WIN_HEIGHT <= 568 ? true : false;

export const IS_IPHONE_X = WIN_HEIGHT >= 812;
export const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : StatusBar.currentHeight;

export const GCM_SENDER_ID = '1066777085698';
export const appName = Platform.OS === 'android' ? 'AndroidApp' : 'iOSApp';
