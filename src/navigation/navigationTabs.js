import React, {useEffect, useMemo} from 'react';
import {Platform, StyleSheet, View, Image, StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import screens from '../constants/screens';
import FavoriteScreen from '../screens/Favourite';
import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search';
import RequestsScreen from '../screens/Request';
import MoreScreen from '../screens/More';
import images from '../constants/images';
import { IS_IPHONE_X, STATUS_BAR_HEIGHT } from '../constants/constant';
import { lessIndent } from '../constants/dimensions';
import colors from '../constants/colors';
import FabTabBar from '../components/BottomTabBar/src/components/bottomTab';
import AppStyles from '../constants/AppStyles';

const Tab = createBottomTabNavigator();

export default function NavigationTabs() {

  return (
    <>
      <StatusBar
        backgroundColor={colors.transparent}
        barStyle={'dark-content'}
        translucent={true}
      />
      <View style={AppStyles.root}>
        <Tab.Navigator
          initialRouteName={screens.DashboardRoot}
          shifting={false}
          keyboardHidesNavigationBar={Platform.OS !== 'ios'}
          screenOptions={({route}) => ({
            tabBarActiveTintColor: colors.accent,
            tabBarActiveBackgroundColor: colors.accent,
            headerShown: false ,
            tabBarIcon: ({focused}) => {
              let iconName;
              if (route.name === screens.HomeRoot) {
                iconName = images.homeIcon;
              } else if (route.name === screens.FavoriteRoot) {
                iconName = images.favoriteIcon;
              } else if (route.name === screens.SearchRoot) {
                iconName = images.searchIcon;
              } else if (route.name === screens.RequestsRoot) {
                iconName = images.requestsIcon;
              } else if (route.name === screens.MoreRoot) {
                iconName = images.moreIcon;
              } 
              return (
                <Image
                  source={iconName}
                  style={{
                    width: 23,
                    height:  23,
                    tintColor: focused ? colors.black : colors.graylight,
                  }}
                />
              );
            },
          })}
          tabBar={props => (
            <FabTabBar
              isRtl={false}
              bottomBarContainerStyle={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
              }}
              {...props}
            />
          )}>
          <Tab.Screen
            name={screens.HomeRoot}
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarLabelStyle: {
                fontSize: 11,
              },
            }}
          />
          <Tab.Screen
            name={screens.FavoriteRoot}
            component={FavoriteScreen}
            options={{
              tabBarLabel: 'Favorite',
              tabBarLabelStyle: {
                fontSize: 11,
              },
            }}
          />
          <Tab.Screen
            name={screens.SearchRoot}
            component={SearchScreen}
          />
          <Tab.Screen
            name={screens.RequestsRoot}
            component={RequestsScreen}
            options={{
              tabBarLabel: 'Requests',
              tabBarLabelStyle: {
                fontSize: 11,
              },
            }}
          />
          <Tab.Screen
            name={screens.MoreRoot}
            component={MoreScreen}
            options={{
              tabBarLabel: 'More',
              tabBarLabelStyle: {
                fontSize: 11,
              },
            }}
          />
        </Tab.Navigator>
      </View>
      <View style={s.customizeSafeAreaView} />
    </>
  );
}

const s = StyleSheet.create({
  customizeSafeAreaView: {
    flex: 0,
    backgroundColor: colors.accent,
    paddingBottom: IS_IPHONE_X ? STATUS_BAR_HEIGHT - lessIndent : 0,
  },
});


// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../screens/Home';
// import SearchScreen from '../screens/Search';

// const Tab = createBottomTabNavigator();

// export default function NavigationTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SearchScreen} />
//     </Tab.Navigator>
//   );
// }