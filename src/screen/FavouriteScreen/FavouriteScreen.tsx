import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import FeedList from "../../components/FeedList/FeedList"
import { styles } from './FavourScreenStyle'
import { FlatList } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
const { height, width } = Dimensions.get('window');


interface Props {  
    navigation:any
 }

const FavouriteScreen = ({navigation}) => {
    const productList = useSelector((state: any) => state.productList.data)
    const favorites = productList.filter((item:any) => item.is_Like === true)

  return (
    <View
    style={styles.container}
    >
        <FavouriteHeader />
      <FlatList
        bounces={false}
        ListEmptyComponent={() => <EmptyList />}
        keyExtractor={(item: any) => item.key}
        data={favorites}
        renderItem={({ item }) => <FeedList navigation={navigation} item={item} />}
      />
    </View>
  )
}

const FavouriteHeader = () => {
    return (
        <View style={styles.header}> 
            <Text
            style={styles.headertext}
            >
                Favourite
            </Text>
        </View>
    )
}
const EmptyList = () => {
    return (
        <View style={{
          height: height /1.5,
          alignItems: 'center',
          justifyContent: 'center',
        }}> 
            <Text
            style={styles.emptyText}
            >
                No Favourite 
            </Text>
        </View>
    )
}
 
export default FavouriteScreen