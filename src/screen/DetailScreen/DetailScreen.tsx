import {
  View,
  Text,
  Image,
  Animated,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import React,{useRef, useEffect} from 'react'
import { styles } from './DetailScreenStyles'
import { AntDesign } from '@expo/vector-icons';
import Scale from '../../constants/Scale';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import { SharedElement } from 'react-navigation-shared-element';





interface Props {
  navigation: any,
  route: any,
}

const DetailScreen = ({ navigation, route }) => {
  const opacity = useRef(new Animated.Value(0)).current


  useEffect(() => {
   Animated.timing(opacity, {
    toValue:1,
    duration:250,
    delay:500,
    useNativeDriver:true,
   }).start()

   return () => {
    Animated.timing(opacity, {
      toValue:0,
      duration:250,
      delay:500,
      useNativeDriver:true,
     }).start()
   }


  }, [])
  
  const item = route.params.item
  return (
    <ScrollView
      style={styles.container}
    >


     <Animated.View
     style={{opacity}}
     >
     <BackButton navigation={navigation} />
     </Animated.View>
      <SharedElement style={styles.itemImageWrapper} id={item.id}>
        <Image
          style={styles.itemImage}
          source={{ uri: item.image }} />
      </SharedElement>



      <View style={styles.diver} />


      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>


        <Animated.Text style={[styles.description, {opacity}]}>{item.description}</Animated.Text>




        <View style={styles.rowSpace}>
          <View style={styles.ItemColorWrapper}>
            <TouchableOpacity
              style={[styles.ItemColor, { backgroundColor: 'black' }]}
              onPress={() => console.log('selected')}
            />
            <TouchableOpacity
              style={[styles.ItemColor, { backgroundColor: 'red' }]}
              onPress={() => console.log('selected')}
            />
            <TouchableOpacity
              style={[styles.ItemColor, { backgroundColor: 'gold' }]}
              onPress={() => console.log('selected')}
            />
            <TouchableOpacity
              style={[styles.ItemColor, { backgroundColor: 'gray' }]}
              onPress={() => console.log('selected')}
            />
          </View>


          <TouchableOpacity
            style={styles.selectSizeBtn}
          >
            <Text>Choose size</Text>
          </TouchableOpacity>
        </View>



        <Button label='Add to Cart' onPress={() => console.log('add cart')} />
      </View>









    </ScrollView>
  )
}

export default DetailScreen