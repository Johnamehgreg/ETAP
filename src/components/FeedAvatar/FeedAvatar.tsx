import { View, Text, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './FeedAvatarStyles';



 interface Props {
  imageUrl: string
}


const FeedAvatar: React.FC<Props> = ({ imageUrl }) => {
  return (
    <LinearGradient
      colors={['#8A3BEE', '#F200B7', '#FE9402']}
      style={styles.avatarContainer}
    >
      <View style={styles.innerAvatar}>
        <Image source={{ uri: imageUrl }}
          style={styles.avatarImage}
          resizeMode='cover'
        />
      </View>
    </LinearGradient>
  )
}

export default FeedAvatar