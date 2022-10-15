import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FeedAvatar from '../FeedAvatar/FeedAvatar'
import { styles } from './FeedHeaderStyles'
import { Entypo } from '@expo/vector-icons';
import Scale,{verticalScale} from '../../constants/Scale'


interface Props {
    onMenuPress: () => void;
}

const FeedHeader:React.FC<Props> = ({onMenuPress}) => {

    return (
        <View
            style={styles.feedHeader}
        >
            <View
                style={styles.row}
            >
                <FeedAvatar imageUrl='https://i.pinimg.com/474x/cf/bd/c7/cfbdc7d6cde8156979c351f6dea36be0.jpg' />

                <View
                    style={styles.feednameWrapper}
                >
                    <Text>bbhausa</Text>
                </View>
            </View>


            <TouchableOpacity
            onPress={onMenuPress}
            >
                <Entypo
                    name="dots-three-vertical"
                    size={Scale(15)}
                    color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default FeedHeader