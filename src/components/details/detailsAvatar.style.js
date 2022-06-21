import { StyleSheet } from 'react-native'
import { colors } from '../../colors'

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
        backgroundColor:colors.white
    },
    avatar: {
        width: 170,
        height: 170,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.gray
    },
    name: {
        fontSize: 28,
        fontWeight: "bold",
        color: colors.black,
        padding: 5,
        width: "100%",
        textAlign: "center"
    }
})