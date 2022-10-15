import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './FeedBottomTabStyles'
import Img from '../../assets/assets'
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Scale from '../../constants/Scale';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


interface Props {
    item: any
}


const FeedBottomTab:React.FC<Props> = ({item}) => {
    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.iconRow}
            >
                <View
                    style={styles.row}>
                    <TouchableOpacity
                        style={[styles.icons]}
                    >
                        {/* <FontAwesome name="heart" size={24} color="black" /> */}
                        {/* <FontAwesome
                            name="heart-o"
                            size={Scale(24)}
                            color="black" /> */}

                        <AntDesign
                            name="hearto"
                            size={Scale(24)}
                            color="black" />
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={[styles.icons, styles.messageIcon]}
                    >

                        <Feather
                            name="message-circle"
                            size={Scale(24)}
                            color="black" />
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={[styles.sendIcon, styles.icons]} >
                        <Feather

                            name="send"
                            size={Scale(24)}
                            color="black" />
                    </TouchableOpacity>

                </View>

                <TouchableOpacity>
                    <Octicons
                        name="bookmark"
                        size={Scale(24)}
                        color="black" />
                </TouchableOpacity>

            </View>

            <Text
            style={styles.viewText}
            >
                ${item.price}
            </Text>
        </View>
    )
}

export default FeedBottomTab