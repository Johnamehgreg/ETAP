import { View, Text } from 'react-native'
import React from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';


const FeedSkeleton = () => {
    return (
        <View
        style={{height:300, width:300}}
        >
            <SkeletonPlaceholder borderRadius={4}>

                <Text>John</Text>
                <Text>John</Text>
                <Text>John</Text>

                <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">

                </SkeletonPlaceholder.Item>

            </SkeletonPlaceholder>
        </View>
    )
}

export default FeedSkeleton