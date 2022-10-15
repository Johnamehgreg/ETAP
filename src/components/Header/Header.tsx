import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './HeaderStyles'
import Img from '../../assets/assets'

const Header = () => {
    return (
        <View style={styles.container}>
            <Img.SvgComponent />

            <View style={styles.row}>
                <TouchableOpacity
                    style={[styles.iconImageWrapper, styles.icon]}
                >
                    <Img.PlusIcon />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.iconImageWrapper}
                >
                    <Img.Messenger />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

