import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';
import { isIPhoneSE } from '../../../../constants/helper';

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    zIndex: 1,
    elevation: 12,
  },
  squareFocusedButton: {
    borderRadius: 16,
  },
  tabBarLabelWrapper: {
    zIndex: 12,
    alignItems: 'center',
  },
  focusedButton: {
    height: 50,
    width: 50,
    zIndex: -1,
    borderRadius: 32,
    elevation: 0,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 25,
    backgroundColor: colors.white,
    // backgroundColor: 'red',
    // marginLeft: 13,
  },
  unfocusedButton: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: isIPhoneSE() ? 30 : 0,
    flex: 1,
    width: '100%',
    elevation: 12,
    zIndex: 12,
  },
});
