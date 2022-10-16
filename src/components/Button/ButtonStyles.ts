import { StyleSheet, } from 'react-native'
import Scale from '../../constants/Scale'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    button: {
        width: '100%',
        height: Scale(50),
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Scale(10),
        shadowColor: 'red',
        shadowOffset: {width: 5, height: 10},
        shadowOpacity: 1,
        elevation: 10,
    },


    text: {
        color: '#fff',
        fontSize: Scale(20),
        fontWeight: '800',
    }


})