import { StyleSheet, Dimensions } from 'react-native'
import Scale,{verticalScale} from '../../constants/Scale'


export const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        width:'100%',
        minHeight:Scale(50),
        paddingHorizontal: Scale(10),
    },

    iconRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
       
    },

    row:{
        alignItems:'center',
        flexDirection:'row'
    },

    sendIcon:{
        transform:[
            {rotate:'20deg'}
        ]
    },
    messageIcon:{
        transform:[
            {rotate:'270deg'}
        ]
    },

    icons:{
        marginRight:Scale(10),
        height:Scale(30),
        width:Scale(30),
        alignItems:'center',
        justifyContent:'center',
    },

    viewText:{
        fontSize:Scale(10),
        fontWeight:'700'
    },

    likeIcon:{
        
    }

   

   
})