import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native'
import Avatar from "../../assets/avatar.png"
import { styles } from './detailsAvatar.style';

export default function DetailsAvatarComponent({ image, name }) {
    const [imageSource, setImageSource] = useState()

    const imageError = () => {
        setImageSource(Avatar)
    }

    useEffect(() => {
        image ?
            setImageSource({ uri: image }) :
            setImageSource(Avatar)
    }, [])
    
    return (
        <View style={styles.container}>

            <Image defaultSource={Avatar} onError={imageError} source={imageSource} style={styles.avatar} />

            <Text style={styles.name}>{name}</Text>
        </View>
    )
}