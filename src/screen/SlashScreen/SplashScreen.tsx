import { View, Text, ActivityIndicator } from 'react-native'
import React,{useEffect} from 'react'
import { styles } from './SplashScreenStyle'
import Scale, { verticalScale } from '../../constants/Scale'
import * as Updates from 'expo-updates';


interface Props {
  navigation:any
}

const SplashScreen:React.FC<Props> = ({navigation}) => {

  const reactToUpdate = async () => {
    Updates.addListener((event) => {
      if(event.type === Updates.UpdateEventType.UPDATE_AVAILABLE){
        alert('An update is available. Restart the app to see it')
      }
    })
  }

  useEffect(() => {
    reactToUpdate()
    setTimeout(() => {
      navigation.navigate('botttomTab')
    }, 3000)
  }, [])
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Etap</Text>
      <ActivityIndicator size={Scale(35)} color="#000" />
    </View>
  )
}

export default SplashScreen