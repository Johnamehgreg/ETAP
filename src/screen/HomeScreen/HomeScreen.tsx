import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Header from "../../components/Header/Header"
import InstaStoryList from "../../components/InstaStoryList/InstaStoryList"
import FeedList from "../../components/FeedList/FeedList"
import { styles } from './HomeStyles'
import { GetProductQuery } from '../../queryFunctionHook/main/productQuery'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storeProduct } from '../../ReduxStore'




const HomeScreen = () => {

  const [isloading, setisloading] = useState(false)

  const { productData, isFetched, isSuccess } = GetProductQuery()

  const productList = useSelector((state: any) => state.productList.data)

  const dispatch = useDispatch()


  const checkDataFetched = () => {
    if (isFetched && isSuccess) {
      dispatch(storeProduct(productData))

    }
  }

  useEffect(() => {
    checkDataFetched()
  }, [productData])

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        bounces={false}
        ListHeaderComponent={() => <InstaStoryList />}
        data={productList}
        renderItem={({ item }) => <FeedList item={item} />}
      />
    </View>
  )
}

export default HomeScreen
