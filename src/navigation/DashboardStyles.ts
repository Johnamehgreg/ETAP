import { StyleSheet, Dimensions } from 'react-native'
import Scale from '../constants/Scale'




export const styles = StyleSheet.create({
   container:{
    height:Scale(50),
    width:'100%',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-around'
   }
})