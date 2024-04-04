import { StyleSheet } from 'react-native';
import colors from './colors';

const AppStyles = StyleSheet.create({
  blockStyle: {
    backgroundColor: colors.backgroundColor,
  },
  rootStyle: {
    flex: 1,
    backgroundColor: colors.statusbar,
  },
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default AppStyles;
