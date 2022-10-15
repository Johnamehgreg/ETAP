import { StyleSheet, } from 'react-native'
import Scale,{verticalScale} from '../../constants/Scale'


export const styles = StyleSheet.create({
    container:{
       width: '100%',
       height:Scale(50),
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       paddingHorizontal: Scale(10),

    },

    row:{
        flexDirection: 'row',
        alignItems: 'center',
    },


    iconImageWrapper:{
        width: Scale(30),
        height: Scale(30),
    },

    icon:{
        marginRight:Scale(10)
    },
    

    iconImage:{
      resizeMode:'cover',
      flex:1,
    }
})