import { View, StatusBar, Text, FlatList } from 'react-native'
import React from 'react'
import Header from "../../components/Header/Header"
import InstaStoryList from "../../components/InstaStoryList/InstaStoryList"
import FeedList from "../../components/FeedList/FeedList"
import FeedSkeleton from "../../components/FeedSkeleton/FeedSkeleton"
import { styles } from './HomeStyles'
import { GetProductQuery } from '../../queryFunctionHook/main/productQuery'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storeProduct } from '../../ReduxStore'


interface Props {
  navigation: any
}

const HomeScreen:React.FC<Props> = ({navigation}) => {

  const [isloading, setisloading] = useState(false)

  const { productData, isFetched, isSuccess } = GetProductQuery()

  const productList = useSelector((state: any) => state.productList.data)

  const dispatch = useDispatch()


  const checkDataFetched = () => {
    if (isFetched && isSuccess) {
      let newList = productData.map((item:any)=> {
        return {...item, is_Like: false}
    })
      dispatch(storeProduct(newList))

    }
  }

  useEffect(() => {
    checkDataFetched()
  }, [productData])

  return (
    <View style={styles.container}>
      
      <Header />

      {/* <FeedSkeleton /> */}
      
      <FlatList
        bounces={false}
        ListHeaderComponent={() => <InstaStoryList />}
        data={productList}
        renderItem={({ item }) => <FeedList navigation={navigation} item={item} />}
      />
    </View>
  )
}

export default HomeScreen
