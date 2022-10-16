import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Scale,{verticalScale} from '../../constants/Scale'
import { styles } from './BackButtonStyles';


interface Props {
    navigation:any
}

const BackButton:React.FC<Props> = ({navigation}) => {
  return (
    <TouchableOpacity
        style={styles.backBottom}
        onPress={() => navigation.goBack()}
      >
        <AntDesign
          name="left"
          size={Scale(25)}
          color="#fff" />
      </TouchableOpacity>
  )
}

export default BackButton