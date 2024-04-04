import React from 'react';
import { Image, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles, TAB_BAR_HEIGHT } from '../styles/bottomTabStyles';
import { BarButton } from './tabBarButton';
import images from '../../../../constants/images';
import colors from '../../../../constants/colors';

export const defaultSpringConfig = {
  damping: 30,
  mass: 0.7,
  stiffness: 250,
};

export const FabTabBar = ({
  state,
  descriptors,
  navigation,
  bottomBarContainerStyle,
  focusedButtonStyle,
  isRtl = false,
}) => {
  const currentDescriptor = descriptors[state.routes[state.index].key];

  const { bottom } = useSafeAreaInsets();

  return (
    <>
      <View
        style={[
          styles.container,
          {
            marginBottom: bottom,
            height: TAB_BAR_HEIGHT,
            flexDirection: isRtl ? 'row-reverse' : 'row',
          },
          bottomBarContainerStyle,
          currentDescriptor.options.tabBarStyle,
        ]}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            navigation.navigate(route.name);
          };

          return (
            <BarButton
              focusedButtonStyle={focusedButtonStyle}
              key={route.key}
              options={options}
              onPress={onPress}
              index={index}
              isFocused={isFocused}
              activeTintColor={options.tabBarActiveTintColor}
              inactiveTintColor={options.tabBarInactiveTintColor}
            />
          );
        })}
      </View>
      <Image source={images.bottom} style={{ width: '100%', height: 63,backgroundColor:'#f0f0f5', zIndex: -1,tintColor:colors.white }} />
    </>
  );
};

export default FabTabBar;
