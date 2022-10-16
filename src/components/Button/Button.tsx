import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from './ButtonStyles'

interface Props {
    label:string,
    onPress:() => void;
}

const Button:React.FC<Props> = ({label}) => {
  return (
    <TouchableOpacity
    style={styles.button}
    >
      <Text
      style={styles.text}
      >{label}</Text>
    </TouchableOpacity>
  )
}

export default Button