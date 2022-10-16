import { StyleSheet, } from 'react-native'
import Scale from '../../constants/Scale'


export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },


    itemImageWrapper :{
        width:'100%',
        height:Scale(300),
        marginBottom:Scale(10)
    },
    itemImage :{
        flex: 1,
        resizeMode:'contain'
    },

    backBottom:{
        width:Scale(30),
        height:Scale(30),
        alignItems: 'center',
        justifyContent: 'center',  
        marginLeft:Scale(10)
    },

    diver:{
        width:'100%',
        height:Scale(1),
        backgroundColor:'grey',
        opacity: 0.4,
    },

    content:{
        paddingHorizontal: Scale(15),
        paddingTop: Scale(10),
    },

    title:{
        fontSize:Scale(18),
        fontWeight:'700',
        marginBottom:Scale(10),
        color:'#000'

    },

   
    price:{
        fontSize:Scale(16),
    },


    description:{
        marginTop:Scale(20),
        fontSize:Scale(12),
        color:'gray',
        marginBottom:Scale(30),
    },

    ItemColorWrapper:{
        alignItems: 'center',
        flexDirection:'row',
        
    },




    ItemColor:{
        width:Scale(20),
        height:Scale(20),
        borderRadius:Scale(50),
        marginRight:Scale(5),
    },


    rowSpace:{
        borderRadius:Scale(50),
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:Scale(50),
    },

    selectSizeBtn:{
        width:Scale(100),
        height:Scale(30),
        backgroundColor:'#EEEEEE',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        borderRadius:Scale(10),
    }


})