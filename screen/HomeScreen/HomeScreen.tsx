import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Header from '../../src/components/Header/Header'
import { styles } from './HomeStyles'
import FeedList from '../../src/components/FeedList/FeedList'
import InstaStoryList from '../../src/components/InstaStoryList/InstaStoryList'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
      bounces={false}
        ListHeaderComponent={() => <InstaStoryList />}
        data={list}
        renderItem={(item) => <FeedList />}
      />
    </View>
  )
}

export default HomeScreen

const list = [
  { name: 'john' },
  { name: 'john' },
  { name: 'john' },
  { name: 'john' },
  { name: 'john' },
  { name: 'john' },
  { name: 'john' },
  { name: 'john' }
]