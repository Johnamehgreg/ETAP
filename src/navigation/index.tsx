import { View, Text, Easing } from 'react-native'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import Dashboard from './Dashboard'


const closeConfig = {
  animation: 'timing',
  config: {
    // duration:300,
    easing: Easing.linear,
    overshootClamping: true
  }

}


const { Navigator, Screen } = createStackNavigator()



const RouteNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="dashbord"
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
        <Screen name='dashbord' component={Dashboard} />
      </Navigator>
    </NavigationContainer>
  )
}

export default RouteNavigation