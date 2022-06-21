import React from 'react';
import { View, Text } from 'react-native'
import styles from "./contacts.style"

export const FavoriteContactHeader = () => {
    return (
        <View style={styles.labelContainer}>
            <Text style={styles.label}>FAVORITE CONTACTS</Text>
        </View>
    )
}

export const OthersContactHeader = () => {
    return (
        <View style={styles.labelContainer}>
            <Text style={styles.label}>OTHER CONTACTS</Text>
        </View>
    )
}

export const ItemSeparatorComponent = () => {
    return (
        <View style={styles.separator}></View>
    )
}