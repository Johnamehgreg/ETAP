import { StyleSheet, } from 'react-native'
import Scale,{verticalScale} from '../../constants/Scale'



export const styles = StyleSheet.create({
    feedHeader:{
        width:'100%',
        height:Scale(60),
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal:Scale(10),
        justifyContent:'space-between',
    },
    feednameWrapper:{
        marginLeft:Scale(5)
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
    }
})