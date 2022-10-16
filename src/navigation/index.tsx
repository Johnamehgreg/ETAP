import { View, StatusBar, Text, Easing } from 'react-native'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import Dashboard from './BottomTab'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import DetailScreen from '../screen/DetailScreen/DetailScreen'
import HomeScreen from '../screen/HomeScreen/HomeScreen'
import FavouriteScreen from '../screen/FavouriteScreen/FavouriteScreen'
import SplashScreen from '../screen/SlashScreen/SplashScreen'


const closeConfig = {
  animation: 'timing',
  config: {
    // duration:300,
    easing: Easing.linear,
    overshootClamping: true
  }

}


const { Navigator, Screen } = createSharedElementStackNavigator()



const RouteNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      <Navigator
        initialRouteName="splash_screen"
        screenOptions={{
          cardStyle: { backgroundColor: 'white' },

          gestureEnabled: false,

          ...TransitionPresets.SlideFromRightIOS,
          // transitionSpec: {
          //   open: closeConfig,
          //   close: closeConfig

          // },
          // cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOSss 

          headerShown: false
        }}
      >
        <Screen name='botttomTab' component={Dashboard} />
        <Screen
        sharedElements={(route, otherRoute, showing) => {
          return [
            {
              id: route.params.item.id,
              animation: 'fade',
            }
          ]
        }}
        name='detail_screen' 
        component={DetailScreen} />
        <Screen name='home_screen' component={HomeScreen} />
        <Screen name='splash_screen' component={SplashScreen} />
        <Screen name='favourite_screen' component={FavouriteScreen} />
      </Navigator>
    </NavigationContainer>
  )
}

export default RouteNavigation