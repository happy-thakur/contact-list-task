import React, { useEffect, useState } from 'react';
import { View, FlatList,Text, ActivityIndicator } from 'react-native'
import { getContactsList } from '../../api';
import { colors } from '../../colors';
import ContactCardComponent from '../../components/contact/contactCard';
import { FavoriteContactHeader, OthersContactHeader } from './contact.helper';
import styles from './contacts.style';


export default function ContactsScreen({ navigation }) {
    const [contacts, setContacts] = useState([])
    const [showLoader, setShowLoader] = useState(true)

    const getContacts = async () => {
        setContacts(await getContactsList())
        setShowLoader(false)
        navigation.setOptions({
            headerShown:true
        })
    }

    useEffect(() => {
        // Called api to get contacts
        getContacts()
    }, [])

    if (contacts && contacts.length) {
        return (
            <>
                <View style={styles.view}>
                    <FlatList style={styles.favoriteContainer}
                        data={contacts}
                        ListHeaderComponent={FavoriteContactHeader}
                        stickyHeaderIndices={[0]}
                        renderItem={({ item, index }) => (
                            item.isFavorite &&
                            <ContactCardComponent
                                contact={item}
                                key={index}
                                navigation={navigation}
                            />
                        )}

                    />
                    <FlatList style={styles.othersContainer}
                        data={contacts}
                        ListHeaderComponent={OthersContactHeader}
                        stickyHeaderIndices={[0]}
                        renderItem={({ item, index }) => (
                            !item.isFavorite &&
                            <ContactCardComponent
                                contact={item}
                                key={index}
                                navigation={navigation}
                            />
                        )}
                    />
                </View>
            </>
        )
    } else if(showLoader) {
        return (
            <View style={styles.activityIndicatorContainer}>
                <ActivityIndicator size={"large"} color={colors.black}/>
            </View>
        )
    } else {
        return (
            <View style={styles.activityIndicatorContainer}>
                <Text style={styles.noContactFound}>No Contacts Found</Text>
            </View>
        )
    }
}
