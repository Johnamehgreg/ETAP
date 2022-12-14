import { StyleSheet, Dimensions } from 'react-native'
import Scale,{verticalScale} from '../../constants/Scale'


export const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    imageWrapper: {
        marginTop: Scale(2),
        width:'100%',
        height: Dimensions.get('window').height - 300,
    },
    feedImage:{
       flex: 1,
       resizeMode:'contain'
       
    },

    likeIcon:{
        position:'absolute',
        zIndex: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        height:'100%'
    }

   
})