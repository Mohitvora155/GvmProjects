import { StyleSheet } from 'react-native';
import { isIOS } from '../../../../constants/constant';

export const TAB_BAR_HEIGHT = isIOS ? 8 : 64;

export const styles = StyleSheet.create({
  barShapeWrapper: { elevation: 11, zIndex: 0, backgroundColor: 'transparent' },
  container: {
    flexDirection: 'row',
    height: TAB_BAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  bottomFill: {
    width: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
  },
  fabButtonsContainer: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    zIndex: -1,
    height: TAB_BAR_HEIGHT,
  },
});
