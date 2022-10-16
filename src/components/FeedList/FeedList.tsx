import { View, Image, FlatList, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from './FeedListStyle'
import { Entypo } from '@expo/vector-icons';
import Scale, { verticalScale } from '../../constants/Scale'
import FeedHeader from '../FeedHeader/FeedHeader';
import FeedBottomTab from '../FeedBottomTab/FeedBottomTab';
import DoubleClick from '../../libs/doubleTab'
import { onLike } from '../../services/appServices'
import { SharedElement } from 'react-navigation-shared-element';






interface Props {
    item: any,
    navigation: any,
}

const FeedList: React.FC<Props> = ({ item, navigation }) => {

    const [isLOading, setisLOading] = useState(false)
    return (
        <View>
            <FeedHeader
                item={item}
                onMenuPress={() => alert('alert')}
            />
            <DoubleClick
                singleTap={() => {
                    navigation.navigate('detail_screen', { item })
                }}
                doubleTap={() => onLike(item.id)}
                delay={50}
            >
                 <SharedElement style={styles.imageWrapper} id={item.id}>
                
                   
                        <Image
                            onLoad={() => {

                            }}
                            style={styles.feedImage}
                            resizeMode='cover'
                            source={{ uri: item?.image }}
                        />


                </SharedElement>


            </DoubleClick>
            <FeedBottomTab item={item} />

        </View>
    )
}

export default FeedList


