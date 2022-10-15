import { View, Image, FlatList, Text } from 'react-native'
import React from 'react'
import { styles } from './FeedListStyle'
import { Entypo } from '@expo/vector-icons';
import Scale, { verticalScale } from '../../constants/Scale'
import FeedHeader from '../FeedHeader/FeedHeader';
import FeedBottomTab from '../FeedBottomTab/FeedBottomTab';
import DoubleClick from '../../libs/doubleTab'

const FeedList = () => {
    return (
        <View>
            <FeedHeader
                onMenuPress={() => alert('alert')}
            />
            <DoubleClick
                singleTap={() => {
                    console.log("single tap");
                }}
                doubleTap={() => {
                    console.log("double tap");
                }}
                delay={200}
            >
                <View
                    style={styles.imageWrapper}
                >




                    <Image
                        style={styles.feedImage}
                        resizeMode='cover'
                        source={{ uri: 'https://i.pinimg.com/564x/49/23/44/492344e1883f0b4b5ba44b6a45ee69b9.jpg' }}
                    />


                </View>

            </DoubleClick>


            <FeedBottomTab />

        </View>
    )
}

export default FeedList


