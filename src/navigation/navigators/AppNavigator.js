import * as React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import screens from '../../constants/screens';
import NavigationTabs from '../navigationTabs';
import HomeScreen from '../../screens/Home';
import FavoriteScreen from '../../screens/Favourite';

const Stack = createStackNavigator();

export const navigationRef = React.createRef();
export const navigate = (name, params) => {
  navigationRef?.current?.navigate(name, params);
};
export const navigationReset = (name, params) => {
  navigationRef?.current?.reset({
    index: 0,
    routes: [
      {
        name: name,
        params,
      },
    ],
  });
};
export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={screens.Splash}
      headerMode='screen'
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name={screens.NavigationRoot} component={NavigationTabs} />
      <Stack.Screen name={screens.HomeRoot} component={HomeScreen} />
      <Stack.Screen name={screens.FavoriteRoot} component={FavoriteScreen} />
    </Stack.Navigator>
  );
}
