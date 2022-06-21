import React from 'react';
import { View, Text } from 'react-native'
import { styles } from './detailsCard.style';


export default function DetailsCard({ label, value, extra }) {

    if (value && value !== "") {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>{label}:</Text>
                <View style={styles.valueContainer}>
                    <Text style={styles.value}>{value}</Text>
                    <Text style={styles.extra}>{extra}</Text>
                </View>
            </View>
        )
    } else {
        return null
    }

}