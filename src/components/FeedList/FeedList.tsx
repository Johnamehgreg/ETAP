import { View, Image, FlatList, Text } from 'react-native'
import React,{useState} from 'react'
import { styles } from './FeedListStyle'
import { Entypo } from '@expo/vector-icons';
import Scale, { verticalScale } from '../../constants/Scale'
import FeedHeader from '../FeedHeader/FeedHeader';
import FeedBottomTab from '../FeedBottomTab/FeedBottomTab';
import DoubleClick from '../../libs/doubleTab'



interface Props {
    item: any,
}

const FeedList: React.FC<Props> = ({ item,  }) => {

    const [isLOading, setisLOading] = useState(false)
    return (
        <View>
            <FeedHeader
            item={item}
                onMenuPress={() => alert('alert')}
            />
            <DoubleClick
                singleTap={() => {
                    console.log("single tap");
                }}
                doubleTap={() => {
                    alert('like')
                }}
                delay={200}
            >
                <View
                    style={styles.imageWrapper}
                >
                    <Image
                        onLoad={() => {
                            
                        }}
                        style={styles.feedImage}
                        resizeMode='cover'
                        source={{ uri: item?.image}}
                    />
                </View>

            </DoubleClick>
            <FeedBottomTab item={item} />

        </View>
    )
}

export default FeedList


