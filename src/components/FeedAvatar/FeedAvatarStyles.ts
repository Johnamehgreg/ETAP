import { StyleSheet, } from 'react-native'
import Scale,{verticalScale} from '../../constants/Scale'


export const styles = StyleSheet.create({
    avatarContainer:{
        height: Scale(40),
        width: Scale(40),
        borderRadius: Scale(50),
        alignItems:'center',
        justifyContent: 'center',
    },

    innerAvatar:{
        height: Scale(37),
        width: Scale(37),
        borderRadius: Scale(50),
        backgroundColor:'white',
        borderColor:'white',
        borderWidth:Scale(2)
    },

    avatarImage:{
        width:"100%",
        height:"100%",
        borderRadius: Scale(50),
    }
   
})