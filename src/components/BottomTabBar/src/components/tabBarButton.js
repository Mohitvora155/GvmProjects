import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from '../styles/tabBarButtonStyles';
import colors from '../../../../constants/colors';

export const defaultSpringConfig = {
  damping: 30,
  mass: 0.7,
  stiffness: 250,
};

export const BarButton = memo(({ isFocused, options, onPress, inactiveTintColor }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        accessibilityRole='button'
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        style={[styles.unfocusedButton]}>
        <View style={[styles.tabBarLabelWrapper, !options.tabBarLabel && styles.focusedButton]}>
          {options.tabBarIcon &&
            options.tabBarIcon({
              focused: isFocused,
              color: inactiveTintColor || 'white',
              size: 28,
            })}
          {options.tabBarLabel && (
            <Text
              style={[
                {
                  marginTop: 2,
                  color: isFocused ? colors.black : colors.graylight,
                },
                options.tabBarLabelStyle,
              ]}>
              {options.tabBarLabel}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
});
