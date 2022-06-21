import { StyleSheet } from 'react-native'
import { colors } from '../../colors'


export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 0.5,
        borderColor: colors.lightGray,
        backgroundColor: colors.white
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 15
    },
    nameContainer: {
        flexDirection: "column",
        paddingHorizontal: 2
    },
    name: {
        color: colors.black,
        fontSize: 18,
        fontWeight: "bold",
    },
    favoriteContainer: {
        flexDirection: "row",
    },
    iconContainer: {
        width: 16,
    }
})