import { StyleSheet, } from 'react-native'
import Scale from '../../constants/Scale'


export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },

    header:{
        width:'100%',
        height:Scale(50),
        backgroundColor:'#fff',
        paddingHorizontal:Scale(10),
    },

    headertext:{
        color:'#000',
        fontSize:Scale(25),
        fontWeight:'600'
    },

    emptyText:{
        fontSize:Scale(13),
    }
})