import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './InstaStoryStyles'
import { LinearGradient } from 'expo-linear-gradient';
import Scale from '../../constants/Scale';
import { Feather } from '@expo/vector-icons';





const InstaStoryList: React.FC = () => {
    return (
        <>
            <FlatList
                data={list}
                contentContainerStyle={styles.flatListContainer}
                ListHeaderComponent={() =>
                    <InstaStoryHeader
                        imageUrl='https://i.pinimg.com/564x/49/23/44/492344e1883f0b4b5ba44b6a45ee69b9.jpg' />}
                showsHorizontalScrollIndicator={false}
                renderItem={() => <InstaStoryListRender name='Rejoice' imageUrl='https://i.pinimg.com/564x/49/23/44/492344e1883f0b4b5ba44b6a45ee69b9.jpg' />}
                horizontal
            />

            <View style={styles.divider} />
        </>

    )
}

export default InstaStoryList



const InstaStoryListRender = (props: { imageUrl: string, name: string }) => {
    console.log(props)
    return (
        <TouchableOpacity
            style={styles.container}
        >
            <LinearGradient
                colors={['#8A3BEE', '#F200B7', '#FE9402']}
                style={styles.renderContainerAvatar}
            >
                <View style={styles.innerAvatar}>
                    <Image source={{ uri: props.imageUrl }}
                        style={styles.avatarImage}
                        resizeMode='cover'
                    />
                </View>
            </LinearGradient>

            <Text
                style={styles.nameText}
            >
                {props.name}
            </Text>
        </TouchableOpacity>
    )
}


const InstaStoryHeader = (props: { imageUrl: string }) => {
    return (
        <TouchableOpacity
            style={styles.container}
        >
            <View
                style={styles.renderAvatarHeader}
            >
                <View style={styles.innerAvatar}>

                    <Image source={{ uri: props.imageUrl }}
                        style={styles.avatarImage}
                        resizeMode='cover'
                    />

                </View>
                <View
                    style={styles.plusIcon}
                >
                    <Feather
                        name="plus"
                        size={Scale(13)}
                        color="white" />
                </View>

            </View>
            <Text
                style={styles.nameText}
            >
                Your Story
            </Text>
        </TouchableOpacity>

    )
}

const list = [
    { name: 'john' },
    { name: 'john' },
    { name: 'john' },
    { name: 'john' },
    { name: 'john' },
    { name: 'john' },
    { name: 'john' },
    { name: 'john' }
]