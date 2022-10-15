import { StyleSheet, Dimensions } from 'react-native'
import Scale, { verticalScale } from '../../constants/Scale'


export const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: Scale(10),

    },
    container: {
        marginRight: Scale(6),
        alignItems: 'center',
        justifyContent: 'center'
    },

    renderContainerAvatar: {
        width: Scale(60),
        height: Scale(60),
        borderRadius: Scale(50),
        alignItems: 'center',
        justifyContent: 'center',


    },

    innerAvatar: {
        width: Scale(55),
        height: Scale(55),
        backgroundColor: 'white',
        borderRadius: Scale(50),
        borderColor: 'white',
        borderWidth: Scale(2)
    },

    avatarImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: Scale(50),
    },


    renderAvatarHeader: {
        width: Scale(60),
        height: Scale(60),
        borderRadius: Scale(50),
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Scale(3),
        borderColor: 'blue',
        borderWidth: Scale(2),

    },

    plusIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: Scale(15),
        width: Scale(15),
        backgroundColor: '#0095F6',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Scale(50),
    },

    nameText: {
        fontSize: Scale(10),
    },

    divider:{
        width:'100%',
        height:Scale(1),
        marginVertical: Scale(10),
        opacity:0.2,
        backgroundColor:'gray'
    }





})