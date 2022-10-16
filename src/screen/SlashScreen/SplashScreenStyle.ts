import { StyleSheet, Dimensions } from 'react-native'
import Scale, { verticalScale } from '../../constants/Scale'


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize:Scale(25),
        marginBottom:Scale(10),
        fontFamily:''
    }
})