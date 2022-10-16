import { StyleSheet, } from 'react-native'
import Scale,{verticalScale} from '../../constants/Scale'


export const styles = StyleSheet.create({
    backBottom:{
        width:Scale(40),
        height:Scale(40),
        backgroundColor:'#000',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Scale(10),
        marginLeft: Scale(10),
    }
})