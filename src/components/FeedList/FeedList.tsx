import { View, Image, FlatList, Text, Animated } from 'react-native'
import React, { useState, useRef } from 'react'
import { styles } from './FeedListStyle'
import { Entypo } from '@expo/vector-icons';
import Scale, { verticalScale } from '../../constants/Scale'
import FeedHeader from '../FeedHeader/FeedHeader';
import FeedBottomTab from '../FeedBottomTab/FeedBottomTab';
import DoubleClick from '../../libs/doubleTab'
import { onLike } from '../../services/appServices'
import { SharedElement } from 'react-navigation-shared-element';
import { AntDesign } from '@expo/vector-icons';





interface Props {
    item: any,
    navigation: any,
}

const FeedList: React.FC<Props> = ({ item, navigation }) => {
    const opacity = useRef(new Animated.Value(0)).current

    const [isLOading, setisLOading] = useState(false)

    const onLikeAnimated =( ) => {
        Animated.timing(opacity, {
            toValue:1,
            duration:250,
            useNativeDriver: true,
            delay:1000,
        }).start()

        setTimeout(() => {
            Animated.timing(opacity, {
                toValue:0,
                duration:250,
                useNativeDriver: true,
                delay:1000,
            }).start()
        }, 4000)
    }
    return (
        <View key={item.id}>
            <FeedHeader
                item={item}
                onMenuPress={() => alert('alert')}
            />
            <DoubleClick
                singleTap={() => {
                    navigation.navigate('detail_screen', { item })
                }}
                doubleTap={() => {
                    onLike(item.id)
                    if(!item.is_Like){
                        onLikeAnimated()
                    }
                }}
                delay={50}
            >
                <Animated.View
                style={[styles.likeIcon, {opacity}  ]}
                >
                <AntDesign
                    name='heart'
                    size={Scale(200)}
                    color='white'
                />
                </Animated.View>
              
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


