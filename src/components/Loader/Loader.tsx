import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import Scale, { verticalScale } from '../../constants/Scale'
import { styles } from './LoaderStyle'


const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={Scale(45)} color='#000' />
    </View>
  )
}

export default Loader