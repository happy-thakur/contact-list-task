import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import { colors } from '../../colors';
import DetailsAvatarComponent from '../../components/details/detailsAvatar';
import DetailsCard from '../../components/details/detailsCard';
import { styles } from './details.style';

export default function DetailsScreen({ navigation, route }) {
    const { details } = route.params

    useEffect(() => {
        details.isFavorite &&
            navigation.setOptions({
                headerRight: () => (
                    <Ionicons name='star' size={20} color={colors.gold} />
                )
            })
    }, [])

    return (
        <View style={styles.container}>
            <View>
                <DetailsAvatarComponent
                    image={details.largeImageURL}
                    name={details.name}
                />
            </View>
            <ScrollView>
                {
                    Object.values(details.phone).map((item, index) => (
                        <DetailsCard
                            key={index}
                            label={"PHONE"}
                            value={item}
                            extra={Object.keys(details.phone)[index].toUpperCase()}
                        />
                    ))
                }
                <DetailsCard
                    label={"ADDRESS"}
                    value={Object.values(details.address).toString()}
                />
                <DetailsCard
                    label={"BIRTHDATE"}
                    value={details.birthdate}
                />
                <DetailsCard
                    label={"EMAIL"}
                    value={details.emailAddress.toLowerCase()}
                />
                <DetailsCard
                    label={"COMPANY NAME"}
                    value={details.companyName}
                />
            </ScrollView>
        </View>
    )
}