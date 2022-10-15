import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Scale from '../constants/Scale';
import HomeScreen from '../screen/HomeScreen/HomeScreen';
import SplashScreen from '../screen/SlashScreen/SplashScreen';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './DashboardStyles';



const { width, height } = Dimensions.get("window")




const { Navigator, Screen } = createBottomTabNavigator()

const Dashboard = () => {
  return (

    <Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: 'rgba(168, 168, 168, 1)',
        tabBarLabelStyle: {
          marginBottom: -2,
          fontSize: Scale(12),
        },

        tabBarStyle: {
          backgroundColor: "white",
          height: Scale(40),
          position: 'absolute',
          //  paddingTop:10
        },
        headerShown: false,

      }}
    >
      <Screen
        options={{
          // tabBarLabel: 'Profile',

          //tabBarBadge: 3,
        }}
        component={HomeScreen} name='Home' />
      <Screen
        options={{
          // tabBarLabel: 'Profile',

          //tabBarBadge: 3,
        }}
        component={SplashScreen} name='Search' />


    </Navigator>
  )
}



function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
          >
            {
              route.name === 'se' && (
                <>
                  {
                    isFocused ?
                      <MaterialIcons name="home-filled" size={Scale(30)} color="black" />
                      :
                      <Text>Hello</Text>
                  }
                </>

              )
            }
            {
              route.name === 'Home' && (
                <>
                  {
                    isFocused ?
                      <MaterialIcons name="home-filled" size={Scale(30)} color="black" />
                      :
                      <Text>Hello</Text>
                  }
                </>

              )
            }

          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default Dashboard