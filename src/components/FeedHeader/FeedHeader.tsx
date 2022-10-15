import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FeedAvatar from '../FeedAvatar/FeedAvatar'
import { styles } from './FeedHeaderStyles'
import { Entypo } from '@expo/vector-icons';
import Scale,{verticalScale} from '../../constants/Scale'


interface Props {
    onMenuPress: () => void;
    item:any
}

const FeedHeader:React.FC<Props> = ({onMenuPress, item}) => {

    return (
        <View
            style={styles.feedHeader}
        >
            <View
                style={styles.row}
            >
                <FeedAvatar imageUrl={item?.image} />

                <View
                    style={styles.feednameWrapper}
                >
                    <Text>{item?.title}</Text>
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