import React, { useEffect, useState } from 'react';
import { View, Image, Pressable, Text } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import Avatar from "../../assets/avatar.png"
import { colors } from '../../colors';
import { styles } from './contactCard.style';

export default function ContactCardComponent({ contact, navigation }) {
    const [imageSource, setImageSource] = useState()

    const itemClicked = () => {
        navigation.navigate("Details", { details: contact })
    }

    const imageError = () => {
        setImageSource(Avatar)
    }

    useEffect(() => {
        contact.smallImageURL ?
            setImageSource({ uri: contact.smallImageURL }) :
            setImageSource(Avatar)
    }, [])
    
    return (
        <>
            <Pressable style={styles.container}
                android_ripple={{ color: colors.lightGray }}
                onPress={itemClicked}
            >
                <Image defaultSource={Avatar} onError={imageError} source={imageSource} style={styles.avatar} />
                <View style={styles.favoriteContainer}>
                    <View style={styles.iconContainer}>
                        {
                            contact.isFavorite &&
                            <Ionicons name='star-sharp' size={15} color={colors.gold} />
                        }
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>{contact.name}</Text>
                        <Text style={styles.companyName}>{contact.companyName}</Text>
                    </View>
                </View>
            </Pressable>
        </>
    )
}