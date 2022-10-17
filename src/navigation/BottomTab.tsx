import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Scale from '../constants/Scale';
import HomeScreen from '../screen/HomeScreen/HomeScreen';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './BottomTabStyles';
import FavouriteScreen from '../screen/FavouriteScreen/FavouriteScreen';



const { width, height } = Dimensions.get("window")




const { Navigator, Screen } = createBottomTabNavigator()

const Dashboard = () => {
  return (

    <Navigator
      tabBar={props => <MyTabBar {...props} />}

      screenOptions={{

        tabBarStyle: {
          backgroundColor: "red",
          height: Scale(60),
          //  paddingTop:10
        },
        headerShown: false,

      }}
    >
      <Screen

        component={HomeScreen} name='Home' />
      <Screen

        component={FavouriteScreen} name='Favourite' />

    </Navigator>
  )
}



function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
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
            key={index.toString()}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {
              label === 'Home' && (
                <>

                  {
                    isFocused ?
                      <MaterialIcons name='home-filled' size={Scale(32)} />
                      :
                      <Octicons name='home' size={Scale(28)} />

                  }

                </>
              )
            }
            {
              label === 'Favourite' && (
                <>
                  {
                    isFocused ?
                      <AntDesign name='heart' size={Scale(30)} />
                      :
                      <AntDesign name='hearto' size={Scale(30)} />

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